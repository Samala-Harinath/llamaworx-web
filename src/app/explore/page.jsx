'use client';
import React from 'react'
import { motion } from 'framer-motion'
import ExploreHeroImage from '../../assets/images/Explore/ExploreHeroImage.png';
import manCallingOnPhone from '../../assets/images/Explore/man-calling-on-phone.png';

import genAiPoweredby from '../../assets/images/salesbuddy/gen-ai-poweredby.png';
import worldArtificialIntelligence from '../../assets/images/salesbuddy/world-artificial-intelligence.png';

import icon from '../../assets/images/Explore/icon.png';
import icon2 from '../../assets/images/Explore/icon2.png';
import icon3 from '../../assets/images/Explore/icon3.png';
import icon4 from '../../assets/images/Explore/icon4.png';
import icon5 from '../../assets/images/Explore/icon5.png';
import icon6 from '../../assets/images/Explore/icon6.png';
import icon7 from '../../assets/images/Explore/icon7.png';
import icon8 from '../../assets/images/Explore/icon8.png';
import icon9 from '../../assets/images/Explore/icon9.png';
import icon10 from '../../assets/images/Explore/icon10.png';
import icon11 from '../../assets/images/Explore/icon11.png';
import icon12 from '../../assets/images/Explore/icon12.png';
import icon13 from '../../assets/images/Explore/icon13.png';
import icon14 from '../../assets/images/Explore/icon14.png';
import icon15 from '../../assets/images/Explore/icon15.png';
import Button from '../../utils/Button';
import IsInView from '../../utils/IsInView';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import { useRouter } from 'next/navigation';
import Container from '../../components/Container/Container'
import OurProducts from '../../pages/Home/OurProducts';
import Image from 'next/image';
const page = () => {
  const { trackEvent } = useMatomo();
  const router = useRouter();
  const slideVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const handleSalesBuddy = (val) => {
    if (val === 1) {
      const url = window.location.origin + '/contact-us';
      trackEvent({ category: 'Explore-Screen', action: 'click-event', name: 'GetInTouch-Button', href: url });
      router.push('/contact-us')
    } else if (val === 2) {
      const url = 'https://salesbuddy.llamaworx.com/';
      trackEvent({ category: 'Explore-Screen', action: 'click-event', name: 'TryDemo-Button', href: url });
      window.open(url, '_blank');
    }
  };
  return (
    <div className='flex justify-center items-center flex-col font-inter mt-24'>
      <Container>
        <div className='flex flex-col justify-center items-center w-full pt-6 md:pt-9 gap-12 md:gap-28'>
          <div className="max-w-4xl w-full text-white text-center flex flex-col justify-center items-center gap-8 ">
            <motion.h1
              className="text-4xl md:text-6xl font-semibold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Explore: AI-Powered Insurance Sales & Comparison Platform
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl max-w-2xl text-center mb-8 text-[#94969C]"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Built on the Documentia framework, Explore enables insurers to compare competitor policies, suggest better coverage, and provide real-time premium estimates—all within 5 seconds
            </motion.p>

            <motion.div
              className="rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Image src={ExploreHeroImage}
                alt="Exlore AI illustration"
                className=" object-cover " />
            </motion.div>
          </div>
          <IsInView>
            {(isInView) => (
              <motion.div
                className=" w-full py-5 md:px-10 px-5 bg-bg-secondary rounded-3xl"
                initial={{ opacity: 0, y: 80 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 80 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-5xl font-semibold mb-5 bg-gradient-to-b from-[#E0C3FC] to-[#8EC5FC] bg-clip-text text-transparent">
                  What is Explore for General Insurance?
                </h2>
                <p className="text-tertiary text-xl">
                  Explore is a Gen AI-powered insurance sales and comparison platform, designed for general insurance providers, agents, and customers to make informed decisions with instant policy comparisons, premium calculations, and AI-driven sales assistance.
                </p>
                <p className="text-tertiary text-xl mt-5">
                  With multilingual conversational AI, advanced data extraction, and intelligent sales pitching, Explore transforms the insurance buying and switching process. Guardrails, real-time streaming, and relevancy scoring ensure that responses are accurate, compliant, and always in context.
                </p>
              </motion.div>
            )}
          </IsInView>

          <IsInView className={"w-full"}>
            {(isInView) => (
              <div className='flex flex-col gap-6 md:gap-9 w-full px-4' >
                <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-6 lg:gap-20 w-full'>
                  <motion.div
                    className='flex flex-col gap-6 md:gap-8 lg:gap-14 w-full lg:w-1/2 '
                    variants={slideVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ duration: 0.8 }}
                    viewport={{ amount: 0.3 }}
                  >
                    <div className='text-tertiary font-normal text-base md:text-lg '>
                      <h2 className='text-[#F5F5F6] font-semibold text-4xl'>What is Explore for General Insurance?</h2>
                      {[
                        "Explore is a Gen AI-powered insurance sales and comparison platform, designed for general insurance providers, agents, and customers to make informed decisions with instant policy comparisons, premium calculations, and AI-driven sales assistance.",
                        "With multilingual conversational AI, advanced data extraction, and intelligent sales pitching, Explore transforms the insurance buying and switching process. Guardrails, real-time streaming, and relevancy scoring ensure that responses are accurate, compliant, and always in context."
                      ].map((item, index) => (
                        <p key={index} className='my-5'>{item}</p>
                      ))}
                    </div>
                    <div className='flex gap-4 items-center'>
                      <Button name="Get in touch" className="bg-[#191C1C] text-white px-6 py-2 rounded-md" onClick={() => handleSalesBuddy(1)} />
                      <Button name="Try demo" className="bg-[#1B55F5] text-white px-6 py-2 rounded-md" onClick={() => handleSalesBuddy(2)} />
                    </div>

                  </motion.div>
                  <motion.div
                    className='w-full lg:w-1/2 '
                    variants={slideVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    transition={{ duration: 0.8 }}
                  >
                    <Image src={manCallingOnPhone} alt="manCallingOnPhone" className='w-full h-auto object-cover rounded-2xl' />
                  </motion.div>
                </div>
              </div>
            )}
          </IsInView>

          <IsInView>
            {(isInView) => (
              <motion.div
                className='flex flex-col gap-6 md:gap-9 w-full px-4'
                variants={slideVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className='flex flex-col gap-3 w-full'>
                  <span className='text-sm md:text-base font-semibold text-[#CECFD2]'>Features</span>
                  <span className='text-2xl md:text-3xl lg:text-4xl text-primary font-semibold'>
                    Key Business Benefits
                  </span>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 w-full'>
                  {[
                    { icon: icon, title: 'Accelerates Policy Sales & Conversions', text: 'Instantly compares a customer’s existing policy with the company’s offering, driving higher policy shifts.' },
                    { icon: icon2, title: 'Enhances Sales & Agent Efficiency', text: 'AI acts as a virtual sales assistant, pitching better policy options based on uploaded documents.' },
                    { icon: icon3, title: 'Real-Time Policy Comparison', text: 'AI evaluates competitor policies on configurable parameters with streaming-based instant response.' },
                    { icon: icon4, title: 'Instant Premium Calculation', text: 'AI extracts key details from uploaded policies and calculates premiums immediately.' },
                    { icon: icon5, title: 'Smart Relevancy Scoring & Accuracy Controls', text: 'Users see confidence scores for AI responses, with the ability to enhance accuracy up to 99%.' },
                    { icon: icon6, title: 'Multilingual Conversational AI', text: 'Enables seamless interaction in multiple Indian languages, with the ability to switch languages mid-conversation.' },
                    { icon: icon7, title: 'Guardrails for Contextual Responses', text: 'Prevents irrelevant, misleading, or non-compliant answers, ensuring a risk-free user experience.' },
                    { icon: icon8, title: 'LLM Switching for Performance Optimization', text: 'Dynamically selects the best AI model based on query type, optimizing speed and accuracy.' },
                    { icon: icon9, title: 'Regulatory & Performance Insights', text: 'Enables insurers to analyze company financials through annual reports, ensuring compliance and market positioning.' },
                  ].map((item, index) => (
                    <div key={index} className='p-4 bg-[#191C1C] rounded-3xl'>
                      <Image src={item.icon} alt={`icon${index + 1}`} className='w-11 h-11 ' />
                      <div className='flex flex-col gap-2 mt-4 md:mt-5'>
                        <span className='text-primary font-semibold text-base md:text-lg'>{item.title}</span>
                        <p className='text-sm md:text-base font-normal text-tertiary'>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </IsInView>

 
          <IsInView>
            {(isInView) => (
              <motion.div
                className='flex flex-col gap-6 md:gap-9 w-full px-4'
                variants={slideVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 w-full'>
                  <div className=' '>
                    <Image src={icon10} alt={`icon10`} className='w-11 h-11 ' />
                    <div className='flex flex-col gap-2 mt-4 md:mt-5'>
                      <span className='text-primary font-semibold text-base md:text-4xl '>What Makes Explore Unique?</span>
                    </div>
                    <p className='text-[#94969C] mt-5'>a Gen AI-powered insurance sales and comparison platform</p>
                  </div>

                  <div className=' '>
                    <div className='p-5'>
                      <span className='text-primary font-semibold text-base md:text-lg '>AI-Powered Insurance Policy Comparison</span>
                      <p className='text-[#94969C] mt-3'>Instantly analyzes competitor policies and highlights advantages.</p>
                    </div>
                    <div className='p-5'>
                      <span className='text-primary font-semibold text-base md:text-lg '>AI-Driven Sales Assistance</span>
                      <p className='text-[#94969C] mt-3'>Acts as a virtual sales agent, recommending the best-fit policy based on customer needs.</p>
                    </div>
                    <div className='p-5'>
                      <span className='text-primary font-semibold text-base md:text-lg '>Guardrails & Context Awareness</span>
                      <p className='text-[#94969C] mt-3'>Ensures AI stays within insurance-related queries, preventing misleading or irrelevant responses..</p>
                    </div>
                    <div className='p-5'>
                      <span className='text-primary font-semibold text-base md:text-lg '>Relevancy Scoring & Accuracy Controls</span>
                      <p className='text-[#94969C] mt-3'>Users see confidence levels for AI-generated responses, ensuring trustworthy insights.</p>
                    </div>
                  </div>

                  <div className=' '>
                    <div className='p-5'>
                      <span className='text-primary font-semibold text-base md:text-lg '>Premium Calculation in Real-Time</span>
                      <p className='text-[#94969C] mt-3'>Delivers instant, accurate pricing by extracting key policy details.</p>
                    </div>
                    <div className='p-5'>
                      <span className='text-primary font-semibold text-base md:text-lg '>Multilingual Conversational AI</span>
                      <p className='text-[#94969C] mt-3'>Seamlessly switches between Indian languages, making insurance accessible to all.</p>
                    </div>
                    <div className='p-5'>
                      <span className='text-primary font-semibold text-base md:text-lg '>Real-Time Streaming for Faster Answers</span>
                      <p className='text-[#94969C] mt-3'>AI delivers instant, partial responses while processing complex queries, enhancing user experience.</p>
                    </div>
                    <div className='p-5'>
                      <span className='text-primary font-semibold text-base md:text-lg '>Dynamic LLM Switching</span>
                      <p className='text-[#94969C] mt-3'>Adapts to query complexity, optimizing speed, cost, and response precision.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </IsInView>

          <IsInView>
            {(isInView) => (
              <motion.div
                className='flex flex-col gap-6 md:gap-9 w-full px-4'
                variants={slideVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 w-full'>
                  <div className=''>
                    <Image src={icon10} alt={`icon10`} className='w-11 h-11 ' />
                    <div className='flex flex-col gap-2 mt-4 md:mt-5'>
                      <span className='text-primary font-semibold text-base md:text-4xl pr-10'>Technology & Security</span>
                    </div>
                  </div>
                  {[
                    { icon: icon11, title: 'Gen AI & RAG-Based Search', text: 'Powers instant, accurate, and context-aware responses.' },
                    { icon: icon12, title: 'Vector Database', text: 'Enables fast retrieval of policy documents, brochures, and regulatory filings.' },
                    { icon: icon13, title: 'End-to-End Encryption & 2FA', text: 'Ensures enterprise-grade data security and compliance.' },
                    { icon: icon14, title: 'Industry-Aligned Data Protection', text: 'Maintains secure access to confidential insurance documents.' },
                    { icon: icon15, title: 'Adaptive LLM Selection', text: 'Switches between multiple AI models based on query type and cost.' }
                  ].map((item, index) => (
                    <div key={index} className='p-4 bg-[#191C1C] rounded-3xl'>
                      <Image src={item.icon} alt={`icon${index + 1}`} className='w-11 h-11 ' />
                      <div className='flex flex-col gap-2 mt-4 md:mt-5'>
                        <span className='text-primary font-semibold text-base md:text-lg'>{item.title}</span>
                        <p className='text-sm md:text-base font-normal text-tertiary'>{item.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </IsInView>
          <OurProducts />
        </div>
      </Container>
    </div>
  )
}

export default page
