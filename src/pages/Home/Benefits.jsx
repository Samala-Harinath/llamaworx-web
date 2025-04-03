'use client';
import React from 'react'
import { useState } from 'react';
import benifitsImages1 from '../../assets/images/benifitsImages1.png';
import benifitsImages2 from '../../assets/images/benifitsImages2.png';
import benifitsImages3 from '../../assets/images/benifitsImages3.png';
import benifitsImages4 from '../../assets/images/benifitsImages4.png';
import { motion } from 'framer-motion';
import IsInView from '../../utils/IsInView';
import Image from 'next/image';
import { BenefitsSestion } from '../../lib/HomeJson';

const Benefits = () => {
  const [benifitsIdx, setBenifitsIdx] = useState(0)
  const [GraditentBorder, setGraditentBorder] = useState("bg-gradient-to-r pt-1 from-[#4DEF8E] to-[#FFEB3A]")
  const handleBenifits = (idx) => {
    switch (idx) {
      case 0:
        setGraditentBorder("bg-gradient-to-r pt-1 from-[#4DEF8E] to-[#FFEB3A]")
        break;
      case 1:
        setGraditentBorder("bg-gradient-to-r pt-1 from-[#FCCB90] to-[#D57EEB] ")
        break;
      case 2:
        setGraditentBorder("bg-gradient-to-r pt-1 from-[#FF7A00] to-[#FFD439]")
        break;
      case 3:
        setGraditentBorder("bg-gradient-to-r pt-1 from-[#5EFCE8] to-[#736EFE]")
        break;
      default: ""
    }
    setBenifitsIdx(idx);
  };
  return (
    <IsInView>
      {(isInView) => (
        <motion.div className=' py-5 flex flex-col items-center gap-10 w-full'
        >
          <motion.div className=' text-center flex flex-col items-center gap-5  '
            initial={{ scale: 0.5, y: 120 }}
            animate={isInView ? { scale: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h4 className='text-secondary font-semibold flex items-center gap-2 border border-[#141414] px-3 rounded-md  '><div className='bg-[#F79009] h-2 w-2 rounded-full' />Benefits</h4>
            <h2 className='font-semibold md:text-6xl text-3xl text-primary max-w-[1024px]'>Key advantages for you</h2>
            <p className='text-tertiary md:text-xl text-lg max-w-[768px]'>Experience unparalleled convenience and efficiency with our innovative features tailored just for you. Enjoy the benefits of advanced technology that enhances your daily life and provides a futuristic edge.</p>
          </motion.div>
          <motion.div className='max-w-[768px]'
            initial={{ scale: 0.5, y: 120 }}
            animate={isInView ? { scale: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src={
                benifitsIdx === 0 ? benifitsImages1 : benifitsIdx === 1 ? benifitsImages2 : benifitsIdx === 2 ? benifitsImages3 : benifitsIdx === 3 ? benifitsImages4 : benifitsImages1}
              alt="benifitsImages"
            />
          </motion.div>
          <motion.div className='grid md:grid-cols-4 grid-cols-1 w-full gap-5'
            initial={{ scale: 0.5, y: 120 }}
            animate={isInView ? { scale: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {BenefitsSestion.map((data, idx) => (
              <div key={idx} onClick={() => handleBenifits(idx)}
                className={`${benifitsIdx === idx && GraditentBorder} rounded-b-[28px] cursor-pointer`}>
                <div className={`rounded-b-3xl p-5  text-center bg-bg-primary hover:bg-bg-quaternary`}>
                  <h2 className='text-primary text-xl font-semibold'>{data.title}</h2>
                  <p className='text-tertiary'>{data.subTitle}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      )}

    </IsInView>

  )
}

export default Benefits
