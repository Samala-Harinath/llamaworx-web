'use client';
import React from 'react'
import Expertise1 from '../../assets/images/Expertise1.png';
import Expertise2 from '../../assets/images/Expertise2.png';
import Expertise3 from '../../assets/images/Expertise3.png';
import Expertise4 from '../../assets/images/Expertise4.png';
import Expertise5 from '../../assets/images/Expertise5.png';
import Expertise6 from '../../assets/images/Expertise6.png';
import Expertise7 from '../../assets/images/Expertise7.png';
import Expertise8 from '../../assets/images/Expertise8.png';
import { motion } from 'framer-motion';
import IsInView from '../../utils/IsInView';
import Image from 'next/image';
const Expertise = () => {
  
  return (
    <IsInView>
      {(isInView)=>(
        <motion.div className='py-5 flex flex-col items-center gap-5 w-full'
    >
      <motion.div className=' text-center flex flex-col items-center gap-5 mb-5 '
        initial={{ scale: 0.5, y: 120 }}
        animate={isInView?{ scale: 1, y: 0 }:{opacity:0}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h4 className='text-secondary font-semibold flex items-center gap-2 border border-[#141414] px-3 rounded-md  '><div className='bg-[#F79009] h-2 w-2 rounded-full' />Expertise</h4>
        <h2 className='font-semibold md:text-6xl text-3xl text-primary max-w-[1024px]'>Leading-edge technical expertise</h2>
        <p className='text-tertiary md:text-xl text-lg max-w-[768px]'>Benefit from our leading-edge technical expertise, driving innovation and delivering advanced solutions that set new standards in the industry.</p>
      </motion.div>

      <div className='w-full'>
        <div className='flex md:flex-row flex-col gap-5'>
          <motion.div className='p-5 md:w-[35%] w-full rounded-3xl bg-bg-quaternary'
            initial={{ scaleY: 0 }}
            animate={isInView ?{ scaleY: 1 }:{opacity:0}}
            transition={{ duration: 0.8 }}
          >
            <h2 className='text-primary text-xl font-semibold'>AI Agents</h2>
            <p className='text-tertiary py-5'>Develop intelligent agents that automate tasks and enhance decision-making by processing both structured and unstructured data.</p>
            <Image  src={Expertise1} alt='Expertise1' className='rounded-xl'  />
          </motion.div>
          <motion.div className='md:w-[65%] w-full flex flex-col gap-5 justify-between'
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ?{ opacity: 1, x: 0 }:{opacity:0}}
            transition={{ duration: 0.8 }}
          >
            <div className='p-5 md:flex-row flex-col gap-5 h-[50%] rounded-3xl bg-bg-quaternary flex'>
              <div className='md:w-[60%] w-full'>
                <h2 className='text-primary text-xl font-semibold'>RPA (Robotic Process Automation)</h2>
                <p className='text-tertiary pt-5 mr-5'>Implement automation solutions to streamline repetitive business processes, reducing manual effort and errors.</p>
              </div>
              <div className='md:w-[40%] w-full '>
                <Image src={Expertise2} alt='Expertise2' className='rounded-xl md:h-full h-auto'/>
              </div>
            </div>
            <div className='p-5 md:flex-row flex-col gap-5 h-[50%] rounded-3xl bg-bg-quaternary flex'>
              <div className='md:w-[60%] w-full'>
                <h2 className='text-primary text-xl font-semibold'>AgentOps Platform</h2>
                <p className='text-tertiary pt-5 mr-5'>Offer a robust platform for managing and deploying large language models, ensuring efficient operation and scalability.</p>
              </div>
              <div className='md:w-[40%] w-full '>
                <Image  src={Expertise3} alt='Expertise3' className='rounded-xl md:h-full h-auto' />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div className='grid md:grid-cols-3 grid-cols-1 gap-5'
        initial={{ scale: 0.5, y: 120 }}
        animate={isInView ?{ scale: 1, y: 0 }:{opacity:0}}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className='p-5  w-full rounded-3xl bg-bg-quaternary'>
          <h2 className='text-primary text-xl font-semibold'>Prompt Engineering</h2>
          <p className='text-tertiary py-5'>Specialize in designing and refining prompts to optimize AI model performance for various applications.</p>
          <Image  src={Expertise4} alt='Expertise4' className='rounded-xl' />
        </div>
        <div className='p-5  w-full rounded-3xl bg-bg-quaternary'>
          <h2 className='text-primary text-xl font-semibold'>OCR & ICR</h2>
          <p className='text-tertiary py-5'>Utilize Optical Character Recognition and Intelligent Character Recognition technologies for accurate data extraction.</p>
          <Image src={Expertise5} alt='Expertise5' className='rounded-xl' />
          
        </div>
        <div className='p-5  w-full rounded-3xl bg-bg-quaternary'>
          <h2 className='text-primary text-xl font-semibold'>Application Development</h2>
          <p className='text-tertiary py-5'>Build custom applications tailored to meet specific business needs, integrating advanced AI capabilities.</p>
          <Image src={Expertise6} alt='Expertise6' className='rounded-xl'/>
          
        </div>
      </motion.div>

      <div className='flex md:flex-row flex-col w-full gap-5'>
        <motion.div className='flex-1 p-5 w-full md:flex-row flex-col gap-5 rounded-3xl bg-bg-quaternary flex'
          initial={{ opacity: 0, x: -80 }}
          animate={isInView ?{ opacity: 1, x: 0 }:{opacity:0}}
          transition={{ duration: 0.8 }}
        >
          <div className='md:w-[60%] w-full'>
            <h2 className='text-primary text-xl font-semibold'>Fine-Tuning Techniques</h2>
            <p className='text-tertiary pt-5  mr-5'>Customize AI models to improve accuracy and relevance for specific tasks and datasets.</p>
          </div>
          <div className='md:w-[40%] w-full '>
            <Image src={Expertise7} alt='Expertise7' className='rounded-xl  md:h-full h-auto'/>
            
          </div>
        </motion.div>
        <motion.div className='flex-1 p-5 w-full md:flex-row flex-col gap-5 rounded-3xl bg-bg-quaternary flex'
          initial={{ opacity: 0, x: 80 }}
          animate={isInView ?{ opacity: 1, x: 0 }:{opacity:0}}
          transition={{ duration: 0.8 }}
        >
          <div className='md:w-[60%] w-full'>
            <h2 className='text-primary text-xl font-semibold'>Building Applied AI Systems at Scale</h2>
            <p className='text-tertiary pt-5  mr-5'>Design and deploy AI systems that handle large-scale data processing and complex analytical tasks.</p>
          </div>
          <div className='md:w-[40%] w-full '>
            <Image src={Expertise8} alt='Expertise8' className='rounded-xl md:h-full h-auto' />
          </div>
        </motion.div>
      </div>
    </motion.div>
      )}

    </IsInView>
    
  )
}

export default Expertise
