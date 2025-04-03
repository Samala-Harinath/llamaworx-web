'use client';
import React from 'react'
import { motion } from 'framer-motion';
import IsInView from '../../utils/IsInView';
import Container from '../../components/Container/Container'
import Faq from '../../pages/Home/Faq'
import OurProducts from '../../pages/Home/OurProducts'
import { BsLinkedin } from 'react-icons/bs';
import KKphoto from '../../assets/svg/KKphoto.svg';
import GMphoto from '../../assets/svg/GMphoto.svg';
import Image from 'next/image';


const page = () => {
  const handleFounder = () => {
    const url = 'https://www.linkedin.com/in/kmaurya/'
    window.open(url, '_blank');
  };
  const handleCoFounder = () => {
    const url = 'https://www.linkedin.com/in/gmaurya/'
    window.open(url, '_blank');
  };
  const yellowGradient = `bg-gradient-to-b from-[#FFCF71] to-[#2376DD] bg-clip-text text-transparent font-semibold`;
  const blueGradientTitle = "bg-gradient-to-b  from-[#1440E1] to-[#43CBFF] bg-clip-text text-transparent font-bold"
  const blueGradientSubTitle = "bg-gradient-to-t  from-[#1440E1] to-[#43CBFF] bg-clip-text text-transparent font-bold"
  return (
    <div>
              
               <div className='overflow-x-hidden mt-24'>
                   <Container>
   
                       <div className='flex flex-col items-center md:gap-20 gap-10 w-full md:pb-20 pt-9'>
                           <motion.div className=' text-center flex flex-col items-center gap-5  '
                               initial={{ scale: 0.5, y: 120 }}
                               animate={{ scale: 1, y: 0 }}
                               transition={{ duration: 0.8, ease: "easeOut" }}
                           >
                               <h4 className='text-secondary font-semibold flex items-center gap-2 border border-[#141414] px-3 rounded-md  '><div className='bg-[#0BA5EC] h-2 w-2 rounded-full' />About us</h4>
                               <h1 className='font-semibold md:text-6xl text-3xl text-primary max-w-[1024px]'>About the company</h1>
                               <p className='text-tertiary md:text-xl text-lg max-w-[768px]'>Llamaworx Software Pvt Ltd, based in Mumbai, India, specializes in developing innovative LLMOps frameworks, Documentia and yesQL, for enterprises to harness Gen AI across diverse data systems. Founded by Krishnakumar Maurya and Geeta Maurya, our expertise spans RAG, CRAG, vector databases, prompt engineering, and more. With over 25 years in the software industry, our mission is to build businesses in AI, enhancing productivity and scalability for organizations worldwide.</p>
                           </motion.div>
   
                           <div className='border-b w-full border-[#141414] ' />
                           <IsInView>
                               {(isInView) => (
                                   <div className='flex flex-col gap-10'>
                                       <motion.div className=' text-center flex flex-col items-center gap-5'
                                           initial={{ scale: 0.5, y: 120 }}
                                           animate={isInView ? { scale: 1, y: 0 } : { opacity: 0 }}
                                           transition={{ duration: 0.8, ease: "easeOut" }}
                                       >
                                           <h4 className='text-secondary font-semibold flex items-center gap-2 border border-[#141414] px-3 rounded-md  '><div className='bg-[#0BA5EC] h-2 w-2 rounded-full' />Team</h4>
                                           <h1 className='font-semibold md:text-6xl text-3xl text-primary max-w-[1024px]'>Meet our team</h1>
                                           <p className='text-tertiary md:text-xl text-lg max-w-[768px]'>Our philosophy is simple — hire a team of diverse, passionate people and foster a culture that empowers you to do your best work.</p>
                                       </motion.div>
                                       <div className='w-full flex gap-5 md:flex-row flex-col'
                                       >
                                           <motion.div className='bg-bg-quaternary p-5 flex-1 rounded-2xl flex flex-col gap-1 items-center'
                                               initial={{ opacity: 0, x: -80 }}
                                               animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
                                               transition={{ duration: 0.8 }}
                                           >
                                            <Image src={KKphoto} alt="KKphoto" className="rounded-full" />
                                               <h1 className='text-[18px] font-semibold text-primary'>Krishnakumar Maurya</h1>
                                               <h4 className='text-secondary'>Founder & CEO</h4>
                                               <p className='text-tertiary text-center'>Krishnakumar boasts over 25 years of experience in the software industry. He excels in technology, product development, and business development, having managed multi-location and multi-million-dollar projects. His visionary leadership drives the company's innovative AI solutions.</p>
                                               <div className='text-tertiary mt-3 cursor-pointer'><BsLinkedin size={30} onClick={() => handleFounder()} /></div>
                                           </motion.div>
                                           <motion.div className='bg-bg-quaternary p-5 flex-1 rounded-2xl flex flex-col gap-1 items-center'
                                               initial={{ opacity: 0, x: 80 }}
                                               animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
                                               transition={{ duration: 0.8 }}
                                           >
                                              <Image src={GMphoto} alt="GMphoto" className="rounded-full" />
                                               <h1 className='text-[18px] font-semibold text-primary'>Geeta Maurya</h1>
                                               <h4 className='text-secondary'>Co-Founder & COO</h4>
                                               <p className='text-tertiary text-center'>Geeta is an educationist and entrepreneur with 20 years of vast experience, including 10 years in software. She oversees business operations and leads the PropTech portal Nexaltors.com, combining her advanced expertise in education and technology to propel the company forward.</p>
                                               <div className='text-tertiary mt-3 cursor-pointer' ><BsLinkedin size={30} onClick={() => handleCoFounder()} /></div>
                                           </motion.div>
                                       </div>
                                   </div>
                               )}
                           </IsInView>
                       </div>
   
   
                       {/* ----------------------------Faq's Section ---------------------------- */}
                      {/* <div className='md:py-20 py-5 flex flex-col items-center md:gap-10 w-full'>
                           
                           <div className=' text-center flex flex-col items-center gap-5  '>
                               <h4 data-aos="zoom-in-up" className='text-secondary font-semibold flex items-center gap-2 border border-[#141414] px-3 rounded-md  '><div className='bg-[#F79009] h-2 w-2 rounded-full' />FAQs</h4>
                               <h1 data-aos="zoom-in-up" className='font-semibold md:text-6xl text-3xl text-primary max-w-[1024px]'>Frequently asked questions</h1>
                               <p data-aos="zoom-in-up" className='text-tertiary md:text-xl text-lg max-w-[768px]'>Everything you need to know about the product and billing.</p>
                           </div>
   
                           {FAQs.map((data, index, arr) => (
                               <div className={`flex gap-10 ${arr.length - 1 !== index && "border-b"}  border-[#1F242F] py-5 max-w-[768px] justify-between items-start w-full`} key={index}>
                                   <div className='flex flex-col'>
                                       <h1 className='font-semibold mb-2 text-[18px] text-primary'>{data.question}</h1>
                                       {collapAnsewr.includes(index) && <p className='text-tertiary'>{data.answer}</p>}
                                   </div>
                                   <div onClick={() => handleCollapAnsewr(index)} className='cursor-pointer transition duration-100 hover:scale-95 '>
                                       {collapAnsewr.includes(index) ? <FiMinusCircle size={25} color='#85888E' /> : <FiPlusCircle size={25} color='#85888E' />}
                                   </div>
                               </div>
                           ))}
   
                           <div data-aos="zoom-in-up" className='md:md:py-20 py-5  flex flex-col items-center bg-secondary rounded-3xl w-full'>
                               <div className='flex'>
                                   <img src={Avatar2} alt="Avatar2" className='-mr-5 mt-2 h-12 w-12' />
                                   <img src={Avatar} alt="Avatar" width={56} height={56} className='z-10 mb-1' />
                                   <img src={Avatar3} alt="Avatar3" className='-ml-5 mt-2 h-12 w-12' />
                               </div>
                               <h1 className='text-center text-[20px] my-3 font-semibold text-primary'>Still have questions?</h1>
                               <p className='text-center text-tertiary'>Can’t find the answer you’re looking for? Please contact our friendly team.</p>
                               <Button onClick={() => navigate("/contactus")} name={"Get in touch"} className={"bg-[#1B55F5] justify-center text-primary mt-5"} />
                           </div>
                       </div> */}
                       <Faq/>
                       <OurProducts />
                        {/*
                          */}
                   </Container>
                   {/*  */}
                  
               </div>
           </div>
  )
}

export default page
