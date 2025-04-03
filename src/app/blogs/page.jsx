"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { BiSearch } from "react-icons/bi";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Navbar from '../../components/Navbar/Navbar';
import Container from '../../components/Container/Container';
import Button from '../../utils/Button';
import Footer from '../../components/Footer/Footer'
import { Spinner } from "../../utils/Spinner";
import AgenticAiInfo6 from '../../assets/images/AgenticAiInfo/AgenticAiInfo6.png'

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const page = () => {
  const [blogs, setBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios(`${baseUrl}blogs`);
        setBlogs(response?.data?.data);
        setFilteredBlogs(response?.data?.data);
        setLoading(false);
      } catch (err) {
        console.error(err.message);
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  useEffect(() => {
    const filtered = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBlogs(filtered);
  }, [searchTerm, blogs]);

  const inputStyle = `w-full py-[10px] px-[14px] rounded-xl outline-none bg-[#0C111D] text-[#f5f5f6] 
    placeholder:text-[#8B8E94] autofill:bg-[#0C111D] autofill:shadow-[inset_0_0_0px_1000px_#0C111D] 
    [-webkit-text-fill-color:#f5f5f6] [&:-webkit-autofill]:[-webkit-text-fill-color:#f5f5f6] 
    [&::placeholder]:[-webkit-text-fill-color:#8B8E94] transition-[background-color,color] duration-[100000s] ease-[ease]`;

  return (
    <div className="flex justify-center items-center flex-col font-inter text-primary w-full mt-24">
      <Container className="py-10">
        <div className="bg-bg-quaternary mb-5 rounded-3xl p-5 flex items-center justify-center ">
          <div className="flex items-center justify-center flex-col w-full">
            <div className="border w-full bg-[#0C111D] border-[#333741] flex items-center px-2 rounded-lg">
              <BiSearch size={20} className="text-[#f5f5f6]" />
              <input
                type="search"
                name="search"
                id="search"
                placeholder="Search Blogs"
                className={inputStyle}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {loading && (
          <div className="flex justify-center items-center gap-3 p-20 text-primary">
            <Spinner />
            <p className="font-semibold text-xl">Loading...</p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 w-full">
          {!loading && filteredBlogs.length > 0 ? (
            filteredBlogs?.map((data) => (
              <div
                key={data.id}
                className="rounded-lg flex flex-col justify-between gap-3 bg-bg-quaternary overflow-hidden"
              >
                <div
                  className="cursor-pointer"
                  onClick={() => router.push(`/blogs/${data.id}`)}
                >
                    
                     <Image
                    src={data?.image}
                    alt="Blog"
                    width={400}
                    height={250}
                    className="w-full h-[250px] object-cover"
                  />
                
                 
                  <div className="p-4">
                    <h2 className="text-[20px] font-semibold">{data.title}</h2>
                    <p className="text-tertiary text-sm py-4">{data.description}</p>
                    <div className="text-xs text-tertiary text-left">
                      {moment(data.date).format("MMM Do YYYY - hh:mm A")}
                    </div>
                  </div>
                </div>
                <Button
                  name={"Read More"}
                  className={"bg-[#1B55F5] justify-center text-white mx-4 mb-4"}
                  onClick={() => router.push(`/blogs/${data.id}`)}
                />
              </div>
            ))
          ) : (
            !loading && <p className="text-center text-tertiary w-full">No blogs found</p>
          )}
        </div>
      </Container>

    </div>
  );
};

export default page;
