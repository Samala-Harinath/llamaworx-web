"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import axios from "axios";
import dynamic from "next/dynamic";
import Image from "next/image";
import Container from '../../../components/Container/Container'
import {Spinner} from '../../../utils/Spinner'
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const page = () => {
  const [loading, setLoading] = useState(true);
  const [blogContent, setBlogContent] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!id) return;
    const fetchBlog = async () => {
      try {
          const response = await axios.get(`${baseUrl}get_blog_by_id?blog_id=${id}`); 
        // const res = await axios.get(`https://api.llamaworx.com/get_blog_by_id?blog_id=${id}`);
        if (response.status === 200) {
          setBlogContent(response.data);
          setLoading(false);
        } else {
          throw new Error(response.data.message);
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  return (
    <div className="flex justify-center items-center flex-col font-inter text-primary w-full mt-24">
      <Container className="py-10">
        <div className="max-w-5xl mx-auto p-6 bg-bg-quaternary shadow-lg rounded-lg">
          {loading && (
            <div className="flex justify-center items-center gap-3 p-20 text-primary">
              <Spinner />
              <p className="font-semibold text-xl">Loading...</p>
            </div>
          )}

          {!loading && blogContent && (
            <>
              <h1 className="text-3xl font-bold mb-2 text-[#1B55F5]">
                {blogContent?.title}
              </h1>
              {blogContent?.date && (
                <p className="text-secondary">
                  By Krishnakumar Maurya |{" "}
                  {new Date(blogContent?.date).toDateString()}
                </p>
              )}
              <p className="text-tertiary mt-4">{blogContent?.description}</p>

              {blogContent?.image && (
                <Image
                  src={blogContent.image}
                  alt="Blog Image"
                  width={800}
                  height={400}
                  className="w-full rounded-lg mt-4"
                />
              )}

              <div className="mt-6 space-y-4">
                {blogContent?.content?.map((section, index) => {
                  switch (section.type) {
                    case "paragraph":
                      return (
                        <p key={index} className="text-primary">
                          {section.content}
                        </p>
                      );
                    case "bulleted_list_item":
                    case "numbered_list_item":
                      return (
                        <ul key={index} className="list-disc list-inside text-primary">
                          <li>{section.content}</li>
                          {section?.children?.length > 0 && (
                            <ul className="list-disc list-inside ml-4">
                              {section.children.map((child, childIndex) => (
                                <li key={childIndex} className="ml-4">
                                  {child.content}
                                </li>
                              ))}
                            </ul>
                          )}
                        </ul>
                      );
                    case "heading_2":
                      return (
                        <h2 key={index} className="text-2xl font-semibold mt-4">
                          {section.content}
                        </h2>
                      );
                    case "heading_3":
                      return (
                        <h3 key={index} className="text-xl font-semibold mt-3">
                          {section.content}
                        </h3>
                      );
                    case "image":
                      return (
                        <Image
                          key={index}
                          src={section.image_url}
                          alt="Blog Image"
                          width={800}
                          height={400}
                          className="w-full rounded-lg"
                        />
                      );
                    case "video":
                      return (
                        <div
                          key={index}
                          className="w-full flex items-center justify-center rounded-lg"
                        >
                          <ReactPlayer url={section.video_url} controls={true} />
                        </div>
                      );
                    case "table":
                      return (
                        <table key={index} className="w-full border mt-4">
                          <tbody>
                            {section.children.map((row, rowIndex) => (
                              <tr key={rowIndex} className="border-b">
                                {row.children.map((cell, cellIndex) => (
                                  <td key={cellIndex} className="p-2 border-r">
                                    {cell.content}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      );
                    default:
                      return null;
                  }
                })}
              </div>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default page;
