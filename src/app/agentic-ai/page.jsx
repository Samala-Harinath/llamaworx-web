'use client';
import React from 'react'
import Container from '../../components/Container/Container';
import AgenticAiInfo1 from '../../assets/images/AgenticAiInfo/AgenticAiInfo1.svg';
import AgenticAiInfo2 from '../../assets/images/AgenticAiInfo/AgenticAiInfo2.png';
import AgenticAiInfo3 from '../../assets/images/AgenticAiInfo/AgenticAiInfo3.png';
import AgenticAiInfo4 from '../../assets/images/AgenticAiInfo/AgenticAiInfo4.png';
import AgenticAiInfo5 from '../../assets/images/AgenticAiInfo/AgenticAiInfo5.png';
import AgenticAiInfo6 from '../../assets/images/AgenticAiInfo/AgenticAiInfo6.png';
import icon1 from '../../assets/images/AgenticAiInfo/icon1.png';
import icon2 from '../../assets/images/AgenticAiInfo/icon2.png';
import icon3 from '../../assets/images/AgenticAiInfo/icon3.png';
import icon4 from '../../assets/images/AgenticAiInfo/icon4.png';
import icon5 from '../../assets/images/AgenticAiInfo/icon5.png';
import icon6 from '../../assets/images/AgenticAiInfo/icon6.png';
import icon7 from '../../assets/images/AgenticAiInfo/icon7.png';
import icon8 from '../../assets/images/AgenticAiInfo/icon8.png';
import icon9 from '../../assets/images/AgenticAiInfo/icon9.png';
import icon10 from '../../assets/images/AgenticAiInfo/icon10.png';
import icon11 from '../../assets/images/AgenticAiInfo/icon11.png';
import icon12 from '../../assets/images/AgenticAiInfo/icon12.png';
import icon13 from '../../assets/images/AgenticAiInfo/icon13.png';
import { motion } from 'framer-motion';
import IsInView from '../../utils/IsInView';
import Image from 'next/image';
import OurProducts from '../../pages/Home/OurProducts'
const page = () => {
    const slideVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    }
    const desktopSlideVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    }
    return (
        <div className='mt-24'>
            <Container>
                <div className='flex flex-col justify-center items-center w-full pt-6 md:pt-9 gap-12 md:gap-28'>
                    <IsInView>
                        <motion.div
                            className='flex flex-col justify-center items-center gap-3 px-4'
                            variants={slideVariants}
                            initial="hidden"
                            animate="visible"
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <h1 className='text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-primary font-semibold max-w-4xl p-2'>
                                Operationalize, Democratize, and Govern Enterprise AI with AI Control Tower
                            </h1>
                            <p className='text-tertiary text-base md:text-lg font-normal text-center max-w-xl p-2'>
                                AgilePoint enables rapid operational integration and maximizes the strategic advantages of your mergers and acquisitions.
                            </p>
                            <div className='w-full max-w-4xl'>
                                <Image src={AgenticAiInfo1} alt="AgenticAiInfo1" className='w-full h-auto object-cover' />
                            </div>
                        </motion.div>
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
                                    <span className='text-sm md:text-base font-semibold text-[#CECFD2]'>Governance</span>
                                    <span className='text-2xl md:text-3xl lg:text-4xl text-primary font-semibold'>
                                        Universal Governance for AI Agents
                                    </span>
                                    <p className='text-tertiary text-base md:text-lg font-normal max-w-3xl'>
                                        Governance is the backbone of AgilePoint's AI Control Tower, providing centralized oversight for all third-party AI agents and ensuring compliance, security, and accountability.
                                    </p>
                                </div>

                                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 w-full'>
                                    {[
                                        { icon: icon1, title: 'Universal Governance Wrapper', text: 'Apply consistent governance across diverse Al tools and models.' },
                                        { icon: icon2, title: 'Compliance Assurance', text: 'Ensure regulatory and organizational standards are met.' },
                                        { icon: icon3, title: 'Transparency and Control', text: 'Track, audit, and fine-tune Al agents with confidence.' },
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
                            <div className='flex flex-col gap-6 md:gap-9 w-full px-4'>
                                <motion.div
                                    className='flex flex-col gap-3 w-full'
                                    variants={slideVariants}
                                    initial="hidden"
                                    animate={isInView ? "visible" : "hidden"}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                >
                                    <span className='text-sm md:text-base font-semibold text-[#CECFD2]'>Operationalize</span>
                                    <span className='text-2xl md:text-3xl lg:text-4xl text-primary font-semibold'>
                                        Plug-and-Play AI Models Across Processes
                                    </span>
                                    <p className='text-tertiary text-base md:text-lg font-normal max-w-3xl'>
                                        AgilePoint's AI Control Tower removes the inefficiencies of inline AI integrations by orchestrating AI agents at the system level.
                                    </p>
                                </motion.div>

                                <div className='flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0'>
                                    <motion.div
                                        className='flex flex-col gap-6 md:gap-8 lg:gap-28 w-full lg:w-1/2'
                                        variants={desktopSlideVariants}
                                        initial="hidden"
                                        animate={isInView ? "visible" : "hidden"}
                                        transition={{ duration: 0.8 }}
                                        viewport={{ amount: 0.3 }}
                                    >
                                        {[
                                            { icon: icon11, title: 'Cost Efficiency', text: 'AI agents are configured and maintained in a dedicated control tier, reducing complexity and ensuring future-proofing.' },
                                            { icon: icon12, title: 'Ease of Management', text: 'Replace or update AI models effortlessly without disrupting business workflows.' },
                                            { icon: icon13, title: 'Scalable Adaptation', text: 'Avoid rising AI Agent costs and overhead by centralizing AI orchestration.' }
                                        ].map((item, index) => (
                                            <div key={index} className='flex gap-4'>
                                                <Image src={item.icon} alt={`icon${index + 11}`} className='w-6 h-6 md:w-auto md:h-[24px] mt-1' />
                                                <div>
                                                    <span className='font-semibold text-primary text-base md:text-lg'>{item.title}</span>
                                                    <p className='text-tertiary font-normal text-sm md:text-base'>{item.text}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </motion.div>
                                    <motion.div
                                        className='w-full lg:w-1/2'
                                        variants={slideVariants}
                                        initial="hidden"
                                        animate={isInView ? "visible" : "hidden"}
                                        transition={{ duration: 0.8 }}
                                    >
                                        <Image src={AgenticAiInfo2} alt="AgenticAiInfo2" className='w-full h-auto object-cover' />
                                    </motion.div>
                                </div>
                            </div>
                        )}
                    </IsInView>

                    <IsInView>
                        {(isInView) => (
                            <motion.div
                                className='flex flex-col gap-6 md:gap-9 w-full px-4 '
                                variants={slideVariants}
                                initial="hidden"
                                animate={isInView ? "visible" : "hidden"}
                                transition={{ duration: 0.8, ease: "easeOut" }}
                            >
                                <div className='flex flex-col gap-3 w-full'>
                                    <span className='text-sm md:text-base font-semibold text-[#CECFD2]'>Democratize</span>
                                    <span className='text-2xl md:text-3xl lg:text-4xl text-primary font-semibold'>
                                        Implement AI Agents without Process Disruption
                                    </span>
                                    <p className='text-tertiary text-base md:text-lg font-normal max-w-3xl'>
                                        AgilePoint democratizes AI, making it consumable by business experts through configuration-without requiring deep technical knowledge.
                                    </p>
                                </div>

                                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 w-full'>
                                    {[
                                        { icon: icon4, title: 'Separation of Concerns', text: 'AI models are contained within the AI Control Tower, reducing dependencies on individual workflows.' },
                                        { icon: icon5, title: 'User-Friendly Configuration', text: 'AI is delivered in the business context, allowing domain experts to implement it without AI expertise.' },
                                        { icon: icon6, title: 'No Process Disruption', text: 'Business processes remain intact while AI is layered in.' }
                                    ].map((item, index) => (
                                        <div key={index} className='p-4 bg-[#191C1C] rounded-3xl'>
                                            <Image src={item.icon} alt={`icon${index + 4}`} 
                                                className=" object-cover " />
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
                            <div className='flex flex-col gap-12 md:gap-20 px-4'>
                                {[
                                    { icon: icon7, title: 'Continuous Learning', text: 'AgilePoint evolves with your business, enabling predictive improvements that make your operations smarter and more efficient over time.', img: AgenticAiInfo3, reverse: false },
                                    { icon: icon8, title: 'Enterprise Safeguards', text: 'Our platform ensures your AI operations meet the highest security standards, with built-in risk mitigation and compliance monitoring that keeps you ahead of regulatory requirements.', img: AgenticAiInfo4, reverse: true },
                                    { icon: icon9, title: 'Universal Connectivity', text: 'Connect and orchestrate across 110+ systems through our unified data layer. Drive cross-functional processes with real-time analytics, breaking down silos to create seamless operations that adapt to your business needs.', img: AgenticAiInfo5, reverse: false },
                                    { icon: icon10, title: 'Future Ready', text: 'The adaptive architecture ensures your investments today continue delivering value tomorrow, making digital transformation a continuous journey rather than a destination.', img: AgenticAiInfo6, reverse: true }
                                ].map((item, index) => (
                                    <div key={index} className={`flex flex-col ${item.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-6 md:gap-20`}>
                                        <motion.div
                                            className='flex flex-col justify-center gap-3 w-full lg:w-1/2'
                                            variants={slideVariants}
                                            initial="hidden"
                                            animate={isInView ? "visible" : "hidden"}
                                            transition={{ duration: 0.8 }}
                                        >
                                            <div>
                                                <Image src={item.icon} alt={`icon${index + 7}`} 
                                                    className=" object-cover " />
                                            </div>
                                            <span className='font-semibold text-xl md:text-2xl lg:text-3xl text-primary'>{item.title}</span>
                                            <p className='text-base md:text-lg font-normal text-tertiary'>{item.text}</p>
                                        </motion.div>
                                        <motion.div
                                            className='w-full lg:w-1/2'
                                            variants={slideVariants}
                                            initial="hidden"
                                            animate={isInView ? "visible" : "hidden"}
                                            transition={{ duration: 0.8 }}
                                        >
                                            <Image src={item.img} alt={`AgenticAiInfo${index + 3}`} className='w-full h-auto object-cover' />
                                            <img />
                                        </motion.div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </IsInView>

                </div>
                <OurProducts />
            </Container>
        </div>
    )
}

export default page
