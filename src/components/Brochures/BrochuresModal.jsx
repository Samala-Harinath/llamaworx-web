'use client';

import React, { useState } from 'react';
import Button from '../../utils/Button';
import BrochureIcon from '../../assets/images/BrochureIcon.png';
import successIcon from '../../assets/images/successIcon.png';
import { MdClose } from 'react-icons/md';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import Image from 'next/image';
const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const BrochuresModal = () => {
  const [brochuresToggle, setBrochuresToggle] = useState(false);
  const [success, setSuccess] = useState(false);
  const [loader, setLoader] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const handleBrochuresToggle = () => {
    setBrochuresToggle(true);
  };

  const onSubmit = async (data) => {
    setLoader(true);
    const { name, email } = data;
    try {
      const response = await axios.post(
        `${baseUrl}sendemailwithbrochure?requestername=${name}&email=${email}&appname=LLAMAWORX`
      );
      if (response.data.success) {
        setSuccess(true);
        setLoader(false);
        reset();
      }
    } catch (error) {
      console.error('Error sending email:', error);
      setLoader(false);
    }
  };

  const handleDismiss = () => {
    setBrochuresToggle(false);
    setSuccess(false);
  };

  return (
    <div>
      <div
        className="z-[100] fixed -right-[65px] max-md:-right-[60px] top-[50%] bg-[#1B55F5] max-md:text-sm text-white py-2 max-md:py-1 px-3 rotate-90 cursor-pointer rounded-b-md"
        onClick={handleBrochuresToggle}
      >
        Download Brochure
      </div>

      {brochuresToggle && (
        <div>
          {success ? (
            <div
              id="default-modal"
              className="overflow-y-auto overflow-x-hidden h-full fixed top-0 right-0 left-0 bottom-0 z-[1000] flex justify-center items-center w-full md:inset-0 max-h-full bg-[rgba(0,0,0,0.8)]"
            >
              <div className="relative w-full max-w-md mx-3 max-h-full">
                <div className="relative bg-[#09090B] rounded-xl shadow p-5">
                  <div className="flex justify-between">
                    <Image src={successIcon} alt="Success Icon" height={40} width={40} />
                    <p className="font-semibold text-white">Download Successful</p>
                    <MdClose
                      size={25}
                      color="#85888E"
                      onClick={handleDismiss}
                      className="cursor-pointer"
                    />
                  </div>
                  <p className="text-center py-5 text-white">
                    The brochure has been successfully sent to your provided email address.
                  </p>
                  <div className="modal-content text-center flex justify-center items-center gap-2 flex-col">
                    <div className="justify-center gap-5 flex w-full">
                      <Button name="Dismiss" className="text-[#599CFF]" onClick={handleDismiss} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div
              id="default-modal"
              className="overflow-y-auto overflow-x-hidden h-full fixed top-0 right-0 left-0 bottom-0 z-[1000] flex justify-center items-center w-full md:inset-0 max-h-full bg-[rgba(0,0,0,0.8)]"
            >
              <div className="relative w-full max-w-md max-h-full">
                <div className="relative bg-[#09090B] rounded-xl shadow p-5">
                  <div className="flex justify-between">
                    <Image src={BrochureIcon} alt="Brochure Icon" height={40} width={40}/>
                    <MdClose
                      size={25}
                      color="#85888E"
                      onClick={() => setBrochuresToggle(false)}
                      className="cursor-pointer"
                    />
                  </div>
                  <p className="font-semibold text-center py-5 text-white">
                    Fill in your details to get immediate access to our product brochure
                  </p>
                  <div className="modal-content text-center flex justify-center items-center gap-2 flex-col">
                    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                      <div className="flex flex-col items-start mb-4 text-[#CECFD2]">
                        <label htmlFor="name" className="font-semibold mb-2">
                          Name*
                        </label>
                        <input
                          type="text"
                          id="name"
                          placeholder="Enter your name"
                          className="text-white outline-none p-2 w-full rounded-lg bg-[#191C1C]"
                          {...register('name', { required: true })}
                        />
                        {errors.name && (
                          <p className="text-red-600 my-2 font-semibold">Name is required.</p>
                        )}
                      </div>
                      <div className="flex flex-col items-start text-[#CECFD2]">
                        <label htmlFor="email" className="font-semibold mb-2">
                          Email*
                        </label>
                        <input
                          type="text"
                          id="email"
                          name="email"
                          placeholder="Enter your email"
                          className="text-white outline-none p-2 w-full rounded-lg bg-[#191C1C]"
                          {...register('email', { required: true })}
                        />
                        {errors.email && (
                          <p className="text-red-600 my-2 font-semibold">Email is required.</p>
                        )}
                      </div>
                      <div className="justify-center gap-5 flex mt-5 w-full">
                        <Button
                          name="Cancel"
                          className="text-[#CECFD2] bg-[#191C1C] flex-1 justify-center"
                          onClick={() => setBrochuresToggle(false)}
                        />
                        <input
                          type="submit"
                          value={loader ? 'Loading...' : 'Download now'}
                          className="flex items-center flex-1 transition duration-100 hover:scale-95 h-10 justify-center font-semibold text-white rounded-md bg-[#1B55F5] cursor-pointer outline-none"
                        />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default BrochuresModal;
