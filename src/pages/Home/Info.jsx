'use client';
import React from 'react'
import { GoArrowUpRight } from 'react-icons/go';
import { motion } from 'framer-motion';
import IsInView from '../../utils/IsInView';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import { useRouter } from 'next/navigation';
const Info = () => {
  const router =useRouter();
  const { trackEvent } = useMatomo();

  const handleKnowMore = () => {
    const url = window.location.origin + '/contact-us';
    trackEvent({ category: 'Home-cards-LLM-RAG', action: 'click-event', name: 'knowMore-Button', href: url, });
    router.push("/contact-us")
  };
  return (
    <IsInView>
      {(isInView) => (
        <motion.div className=' py-5 flex flex-col items-center gap-10 w-full' >
          <div className='flex md:flex-row flex-col gap-5'>
            <motion.div className='p-5 flex-1 flex flex-col justify-between bg-bg-quaternary rounded-3xl'
              initial={{ scaleX: 0, x: 50 }}
              animate={isInView ? { scaleX: 1, x: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <span className='text-5xl font-bold bg-gradient-to-t from-[#009EFD] to-[#2AF598] bg-clip-text text-transparent'>Advantages of On-Premise Transformer and LLM</span>
                <p className='text-tertiary py-4'>Using on-premise installations of AI models like <span className='text-primary font-bold'>Documentia™</span> and <span className='text-primary font-bold'>yesQL™ </span> ensures:</p>
                <ul className='text-tertiary list-disc list-inside ml-5'>
                  <li><span className='text-primary font-bold'>Data Protection:</span> Prevents data exposure, breaches, and unauthorized access.</li>
                  <li><span className='text-primary font-bold'>Privacy:</span> Keeps data processing within your secure environment.</li>
                  <li><span className='text-primary font-bold'>Cost Efficiency:</span> Reduces reliance on costly cloud services.</li>
                </ul>
              </div>
              <h4 className='flex items-center gap-2 text-[#599CFF] cursor-pointer mt-4 font-semibold' onClick={() => handleKnowMore()}>Know more <GoArrowUpRight /></h4>
            </motion.div>
            <motion.div className='p-5 flex-1 flex flex-col justify-between bg-bg-quaternary rounded-3xl'
              initial={{ scaleX: 0, x: -50 }}
              animate={isInView ? { scaleX: 1, x: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div>
                <span className='text-5xl font-bold bg-gradient-to-t from-[#009EFD] to-[#2AF598] bg-clip-text text-transparent'>Should we employ RAG or proceed with fine-tuning?</span>
                <p className='text-tertiary py-4'><span className='text-primary font-bold'>RAG (Retrieval Augmented Generation):</span>  Ideal for scenarios needing real-time data retrieval from multiple sources.</p>
                <p className='text-tertiary'><span className='text-primary font-bold'>Fine-tuning:</span>  Best for tasks requiring model customization based on specific datasets.</p>
              </div>
              <h4 className='flex items-center gap-2 text-[#599CFF] cursor-pointer mt-4 font-semibold' onClick={() => handleKnowMore()}>Know more <GoArrowUpRight /></h4>
            </motion.div>
          </div>
        </motion.div>
      )}
    </IsInView>


  )
}

export default Info
