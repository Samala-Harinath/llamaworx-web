'use client';
import React from 'react'
import { motion } from 'framer-motion'
import { InsuranceSection } from './HomeJson';
import { GoArrowUpRight } from 'react-icons/go';
import { TbArrowDownRight } from 'react-icons/tb';
import Button from '../../utils/Button';
import IsInView from '../../utils/IsInView';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import { useRouter } from 'next/navigation';

const Insurance = ({ insuranceRef }) => {
  const router =useRouter();
    const { trackEvent } = useMatomo();
    const handleExplore = (val) => {
      if (val === 1) {
        router.push("/explore");
        trackEvent({ category: 'Home-Explore', action: 'click-event', name: 'KnowMore-Button', href: window.location.origin + '/explore', })
      } else if (val === 2) {
        window.open(`https://salesbuddy.llamaworx.com/`, '_blank');
        trackEvent({ category: 'Home-Explore', action: 'click-event', href: 'https://salesbuddy.llamaworx.com/', name: 'TryDemo-Button', });
      };
    }

    const handleKnowMore = () => {
      const url = window.location.origin + '/contact-us';
      trackEvent({ category: 'Home-Explore', action: 'click-event', name: 'knowMore-Button', href: url, });
      router.push("/contact-us")
    };
  

  return (
    <div ref={insuranceRef}>
      <IsInView>
        {(isInView) => (
          <motion.div className=' py-5 flex flex-col items-center gap-10 w-full'
          >
            <motion.div className=' text-center flex flex-col items-center gap-5 '
              initial={{ scale: 0.5, y: 120 }}
              animate={isInView ? { scale: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h4 className='text-secondary font-semibold flex items-center gap-2 border border-[#141414] px-3 rounded-md  '><div className='bg-[#7A5AF8] h-2 w-2 rounded-full' />Application</h4>
              <h2 className='font-semibold md:text-6xl text-3xl text-primary max-w-[1024px]'>Explore for General Insurance</h2>
              <p className='text-tertiary md:text-xl text-lg max-w-screen-lg'>It insurers analyze, pitch, and convert leads faster. With instant policy comparisons, real-time premium calculations, and intelligent sales pitching, Explore transforms the way insurance is sold and switched. Guardrails ensure compliance, streaming delivers responses instantly, and dynamic LLM switching optimizes AI performance—making it the most advanced AI-powered insurance assistant.</p>
            </motion.div>
            <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
              {InsuranceSection.map((data, idx) => (
                <motion.div key={idx} className='rounded-3xl bg-bg-quaternary p-5'
                  initial={{ scale: 0.5, y: 120 }}
                  animate={isInView ? { scale: 1, y: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h2 className='text-primary text-xl font-semibold'>{data.title}</h2>
                  <p className='text-tertiary py-5'>{data.subTitle}</p>
                  <h4 className='flex items-center gap-2 text-[#599CFF] cursor-pointer' onClick={() => handleKnowMore()}>Know more <GoArrowUpRight /></h4>
                </motion.div>
              ))}
            </div>

            <div className='flex gap-2 justify-start md:justify-center flex-wrap md:flex-row flex-col w-full '>
              <Button name={"Know more"} className={"bg-bg-secondary justify-center text-secondary md:w-auto w-full"} rightIcon={<TbArrowDownRight />} onClick={() => handleExplore(1)} />
              <Button name={"Try demo"} className={"bg-[#1B55F5] justify-center text-white"} onClick={() => handleExplore(2)} />
            </div>
          </motion.div>
        )}
      </IsInView>
    </div>
  )
}
 
export default Insurance 
