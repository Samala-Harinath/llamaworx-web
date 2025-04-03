'use client';
import React from 'react'
import { GoArrowUpRight } from 'react-icons/go';
import { TbArrowDownRight } from 'react-icons/tb';
import Button from '../../utils/Button';
import { motion } from 'framer-motion';
import IsInView from '../../utils/IsInView';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import { useRouter } from 'next/navigation';
import { nexaltorsSection } from '../../lib/HomeJson';

const Nexaltors =({ applicationRef })=> {
  const router =useRouter();
  const { trackEvent } = useMatomo();
  const blueGradientTitle = "bg-gradient-to-b  from-[#B39FFF] hover:from-[#FFF500] to-[#6A1ED2] hover:to-[#FFB800] bg-clip-text text-transparent font-bold"


  const handleNexaltors = (val) => { 
    if (val === 1) {
      window.open(`https://nexaltors.com/`, '_blank');
      trackEvent({ category: 'Home-Nexaltors', action: 'click-event', href: 'https://nexaltors.com/', name: 'KnowMore-Button', });

    } else if (val === 2) {
      window.open(`https://nexaltors.com/signup`, '_blank');
      trackEvent({ category: 'Home-Nexaltors', action: 'click-event', href: 'https://nexaltors.com/signup', name: 'TryNow-Button', });
    }
  };

  const handleKnowMore = () => {
    const url = window.location.origin + '/contact-us';
    trackEvent({ category: 'Home-Nexaltors', action: 'click-event', name: 'knowMore-Button', href: url, });
    router.push('/contact-us')
  };

  return (
    <div ref={applicationRef}>
      <IsInView>
        {(isInView) => (
          <motion.div className=' py-5 flex flex-col items-center gap-10 w-full'>
            <motion.div className=' text-center flex flex-col items-center gap-5 '
              initial={{ scale: 0.5, y: 120 }}
              animate={isInView ? { scale: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h4 className='text-secondary font-semibold flex items-center gap-2 border border-[#141414] px-3 rounded-md  '><div className='bg-[#7A5AF8] h-2 w-2 rounded-full' />Application</h4>
              <h2 className='font-semibold md:text-6xl text-3xl text-primary max-w-[1024px]'>Nexaltors™</h2>
              <p className='text-tertiary md:text-xl text-lg max-w-[768px]'>Only Gen AI-powered PropTech solution for Search, Compare, verify and buy the under-construction properties in India</p>
            </motion.div>

            <motion.div className='grid md:grid-cols-3 grid-cols-1 gap-5 w-full'
              initial={{ scale: 0.5, y: 120 }}
              animate={isInView ? { scale: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className='p-5 rounded-3xl bg-bg-quaternary cursor-pointer'>
                <h2 className={`${blueGradientTitle} md:text-[65px] leading-none text-4xl`}>43730+</h2>
                <p className='text-tertiary font-semibold mt-5'>Unique Projects</p>
              </div>
              <div className='p-5 rounded-3xl bg-bg-quaternary cursor-pointer'>
                <h2 className={`${blueGradientTitle} md:text-[65px] leading-none text-4xl`}>3969528+</h2>
                <p className='text-tertiary font-semibold mt-5'>Total Units</p>
              </div>
              <div className='p-5 rounded-3xl bg-bg-quaternary cursor-pointer'>
                <h2 className={`${blueGradientTitle} md:text-[65px] leading-none text-4xl`}>27796+</h2>
                <p className='text-tertiary font-semibold mt-5'>Unique Developers</p>
              </div>
            </motion.div>

            <div className='grid md:grid-cols-4  grid-cols-1 gap-5'>
              {nexaltorsSection.map((data, idx) => (
                <motion.div key={idx} className='rounded-3xl bg-bg-quaternary p-5'
                  initial={{ scale: 0.5, y: 120 }}
                  animate={isInView ? { scale: 1, y: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h2 className='text-primary text-xl font-semibold'>{data.title}</h2>
                  <p className='text-tertiary py-5 '>{data.subTitle}</p>
                  <h4 className='flex items-center gap-2 text-[#599CFF] cursor-pointer' onClick={() => handleKnowMore()}>Know more <GoArrowUpRight /></h4>
                </motion.div>
              ))}
            </div>
            <div className='flex gap-2 justify-start md:justify-center flex-wrap md:flex-row flex-col w-full '>
              <Button name={"Know more"} className={"bg-bg-secondary justify-center text-secondary md:w-auto w-full"} rightIcon={<TbArrowDownRight />} onClick={() => handleNexaltors(1)} />
              <Button name={"Try now"} className={"bg-[#1B55F5] justify-center text-white"} onClick={() => handleNexaltors(2)} />
            </div>
          </motion.div>
        )}
      </IsInView>
    </div>

  )
}

export default Nexaltors
