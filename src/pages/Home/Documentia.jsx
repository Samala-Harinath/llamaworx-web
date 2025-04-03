'use client';
import React from 'react'
import { GoArrowUpRight } from 'react-icons/go';
import { TbArrowDownRight } from 'react-icons/tb';
import Button from '../../utils/Button';
import { useState } from 'react';
import { motion } from 'framer-motion';
import IsInView from '../../utils/IsInView';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import { useRouter } from 'next/navigation';
import { documentiaSection } from '../../lib/HomeJson';

const Documentia = ({ productRef }) => {
  const { trackEvent } = useMatomo();
  const router = useRouter();
  const [documentiaIdx, setDocumentiaIdx] = useState(0);
  const [GraditentText, setGraditentText] = useState("bg-gradient-to-r from-[#FFF6B7] to-[#FB758A] bg-clip-text text-transparent")
  const changeTextColor = (idx) => {
    setDocumentiaIdx(idx)
    switch (idx) {
      case 0:
        setGraditentText("group-hover:from-[#FFF6B7] group-hover:to-[#FB758A]")
        break;
      case 1:
        setGraditentText("group-hover:from-[#FECFEF] group-hover:to-[#FF989C]")
        break;
      case 2:
        setGraditentText("group-hover:from-[#F6CEEC] group-hover:to-[#D939CD]")
        break;
      case 3:
        setGraditentText("group-hover:from-[#84FAB0] group-hover:to-[#ACCBEE]")
        break;
      case 4:
        setGraditentText("group-hover:from-[#96FBC4] group-hover:to-[#F9F586]")
        break;
      case 5:
        setGraditentText("group-hover:from-[#FFB800] group-hover:to-[#FFF500]")
        break;
      case 6:
        setGraditentText("")
        break;
    }
  };


  const handleKnowMore = () => {
    const url = window.location.origin + '/contact-us';
    trackEvent({ category: 'Home-Documentia', action: 'click-event', name: 'knowMore-Button', href: url, });
    router.push('/contact-us');
  };


  const handleDocumentia = (val) => {
    if (val === 1) {
      window.open(`https://documentia.ai/`, '_blank');
      trackEvent({ category: 'Home-Documentia', action: 'click-event', href: 'https://documentia.ai/', name: 'KnowMore-Button', });

    } else if (val === 2) {
      window.open(`https://app.documentia.ai/home/signin`, '_blank');
      trackEvent({ category: 'Home-Documentia', action: 'click-event', href: 'https://app.documentia.ai/home/signin', name: 'TryNow-Button', });
    }
  };
  return (
    <IsInView>
      {(isInView) => (
        <motion.div className=' py-5 flex flex-col items-center gap-10 w-full' ref={productRef}
        >
          <motion.div className=' text-center flex flex-col items-center gap-5 '
            initial={{ scale: 0.5, y: 120 }}
            animate={isInView ? { scale: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h4 className='text-secondary font-semibold flex items-center gap-2 border border-[#141414] px-3 rounded-md  '><div className='bg-[#F79009] h-2 w-2 rounded-full' />Product</h4>
            <h2 className='font-semibold md:text-6xl text-3xl text-primary max-w-[1024px]'>Documentia™</h2>
            <p className='text-tertiary md:text-xl text-lg max-w-[768px]'>Documentia™ is an enterprise knowledge agent that quickly turns raw and unstructured data into actionable information. Key features include</p>
          </motion.div>

          <div className='grid md:grid-cols-3 grid-cols-1 gap-5'>
            {documentiaSection.map((data, idx) => (
              <motion.div key={idx} className={`rounded-3xl bg-bg-quaternary p-5 group`} onMouseEnter={() => changeTextColor(idx)} onMouseLeave={() => changeTextColor(6)}
                initial={{ scale: 0.5, y: 120 }}
                animate={isInView ? { scale: 1, y: 0 } : { opacity: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}>
                <h2 className={`text-primary text-xl font-semibold  bg-gradient-to-r ${documentiaIdx === idx && GraditentText} bg-clip-text group-hover:text-transparent`}>{data.title}</h2>
                <p className='text-tertiary py-5'>{data.subTitle}</p>
                <h4 className='flex items-center gap-2 text-[#599CFF] group-hover:text-primary cursor-pointer' onClick={() => handleKnowMore()}>Know more <GoArrowUpRight /></h4>
              </motion.div>
            ))}
          </div>

          <div className='flex gap-2 justify-start md:justify-center flex-wrap md:flex-row flex-col w-full '>
            <Button name={"Know more"} className={"bg-bg-secondary justify-center text-secondary md:w-auto w-full"} rightIcon={<TbArrowDownRight />} onClick={() => handleDocumentia(1)} />
            <Button name={"Try now"} className={"bg-[#1B55F5] justify-center text-white"} onClick={() => handleDocumentia(2)} />
          </div>
        </motion.div>
      )}

    </IsInView>

  )
}

export default Documentia
