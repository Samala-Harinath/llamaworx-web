'use client';
import React from 'react';
import AInHumanHandShake from '../../assets/images/contactUs/AInHumanHandShake.png';
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
import { motion } from 'framer-motion';
import Container from '../../components/Container/Container';
import OurProducts from '../../pages/Home/OurProducts'
import Image from 'next/image';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    
  } = useForm();


  const onSubmit = async (data) => {
    const { firstname, lastname, email, phoneno, message } = data;
    const url = `${baseUrl}sendemail?firstname=${firstname}&lastname=${lastname}&email=${email}&phoneno=${phoneno}&message=${message}&appname=LLAMAWORX`
    console.log("url", url);
    await axios.post(url).then((res) => {
      console.log("res", res);
      if (res.data.success) {
        toast.success('Mail sent Successfully!');
      }
    })
  }


  const inputStyle = `border w-full py-[10px] px-[14px] rounded-xl mb-7 outline-none mt-1 bg-[#0C111D] border-[#333741]
  text-[#f5f5f6]
  placeholder:text-[#8B8E94]
  autofill:bg-[#0C111D]
  autofill:shadow-[inset_0_0_0px_1000px_#0C111D]
  [-webkit-text-fill-color:#f5f5f6]
  [&:-webkit-autofill]:[-webkit-text-fill-color:#f5f5f6]
  [&::placeholder]:[-webkit-text-fill-color:#8B8E94]
  transition-[background-color,color] duration-[100000s] ease-[ease]`;

  const labelStyle = `text-[14px] font-semibold text-secondary`;
  return (
    <div className='flex justify-center items-center flex-col font-inter mt-24'>
      <Container>
        <div className='flex md:gap-10 md:pb-20 pt-9'>
          <motion.div className='md:w-1/2 w-full md:p-10'
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className='md:text-4xl text-[30px] font-semibold mb-2 text-primary'>Get in touch</h1>
            <p className='text-tertiary md:text-xl text-lg'>reach us on <span className='text-[#2970FF] md:text-xl text-lg'>contact@llamaworx.com</span> </p>
            <form className='w-full mt-10' onSubmit={handleSubmit(onSubmit)}>
              <div className='flex justify-between md:gap-5 md:flex-row flex-col '>
                <div className='flex-1'>
                  <label htmlFor="firstname" className={labelStyle}>First name*</label>
                  <input type="text"  id="firstname" placeholder='First name'
                    className={inputStyle} {...register('firstname', { required: true })}
                  />
                </div>
                <div className='flex-1'>
                  <label htmlFor="lastname" className={labelStyle}>Last name*</label>
                  <input type="text"  id="lastname" placeholder='Last name'
                    className={inputStyle} {...register('lastname', { required: true })} />
                </div>
              </div>
              {(errors.firstname || errors.lastname) && <p className='text-red-600 mb-4'>Firstname & Lastname field is require.</p>}
              <div className='flex flex-col' >
                <label htmlFor="email" className={labelStyle} >Email*</label>
                <input type="email"  id="email" className={inputStyle}
                  placeholder='you@company.com' {...register('email', { required: true })} />
              </div>
              {errors.email && <p className='text-red-600 mb-4'>Email field is require.</p>}
              <div className='flex flex-col' >
                <label htmlFor="phoneno" className={labelStyle}>Phone Number*</label>
                <input type="number"  id="phoneno" placeholder='+91 124567890'
                  className={inputStyle} {...register('phoneno', { required: true })} />
              </div>
              {errors.phoneno && <p className='text-red-600 mb-4'>Please enter your Phone No.</p>}
              <div className='flex flex-col' >
                <label htmlFor="message" className={labelStyle}>Message</label>
                <textarea   id="message" rows={4}
                  placeholder="Leave us a message..." className={inputStyle}
                   {...register('message', { required: true })} />
              </div>
              {errors.message && <p className='text-red-600 mb-4'>Message field is require.</p>}
              <input type="submit" value={"Send message"} className='flex items-center w-full transition duration-100 hover:scale-95
                h-10 justify-center font-semibold text-white rounded-md bg-[#1B55F5] cursor-pointer'/>
            </form>
          </motion.div>
          <motion.div className='w-1/2 md:block hidden'
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className='rounded-[2rem] overflow-hidden'>
              <Image src={AInHumanHandShake} alt="AInHumanHandShake" className='w-full'/>
              </div>
          </motion.div>
        </div>
        <OurProducts />
      </Container>
    </div>
  )
}

export default ContactUs