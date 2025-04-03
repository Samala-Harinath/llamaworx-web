'use client';
import React from 'react'
import { motion } from 'framer-motion'
import salesbuddyHeroImg from '../../assets/images/salesbuddy/salesbuddy-hero-img.png';
import worldArtificialIntelligence from '../../assets/images/salesbuddy/world-artificial-intelligence.png';
import genAiPoweredby from '../../assets/images/salesbuddy/gen-ai-poweredby.png';
import IsInView from '../../utils/IsInView';
import icon from '../../assets/images/salesbuddy/icon.png';
import icon2 from '../../assets/images/salesbuddy/icon2.png';
import icon3 from '../../assets/images/salesbuddy/icon3.png';
import icon4 from '../../assets/images/salesbuddy/icon4.png';
import icon5 from '../../assets/images/salesbuddy/icon5.png';
import icon6 from '../../assets/images/salesbuddy/icon6.png';
import icon7 from '../../assets/images/salesbuddy/icon7.png';
import icon8 from '../../assets/images/salesbuddy/icon8.png';
import icon9 from '../../assets/images/salesbuddy/icon9.png';
import icon10 from '../../assets/images/salesbuddy/icon10.png';
import icon11 from '../../assets/images/AgenticAiInfo/icon11.png';
import icon12 from '../../assets/images/AgenticAiInfo/icon12.png';
import icon13 from '../../assets/images/AgenticAiInfo/icon13.png';
import Button from '../../utils/Button';
import OurProducts from '../../pages/Home/OurProducts';
import Container from '../../components/Container/Container';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useMatomo } from '@datapunt/matomo-tracker-react';
const page = () => {
    const router = useRouter();
    const { trackEvent } = useMatomo();
    const slideVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    }

    const desktopSlideVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    }
    const handleNavigation = (destination) => {
        if (destination === 'salesbuddy') {
            window.open(`https://salesbuddy.llamaworx.com/`, '_blank');
            trackEvent({ category: 'salesbuddy-Screen', action: 'click-event', href: 'https://salesbuddy.llamaworx.com/', name: 'TryDemo-Button', });
        } else if (destination === 'contact-us') {
            router.push('/contact-us');
            trackEvent({
                category: 'salesbuddy-Screen', action: 'click-event', name: 'GetInTouch-Button', href: window.location.origin + '/contact-us',
            });
        }
    }
    return (
        <div className='flex justify-center items-center flex-col mt-24'>
            <Container>
                <div className='flex flex-col justify-center items-center w-full pt-6 md:pt-9 gap-12 md:gap-28'>
                    <div className="max-w-4xl w-full text-white text-center flex flex-col justify-center items-center gap-8">
                        <motion.h1
                            className="text-4xl md:text-6xl font-semibold mb-4"
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            Salesbuddy: AI-Powered Sales Acceleration for Mutual Funds
                        </motion.h1>

                        <motion.p
                            className="text-lg md:text-xl max-w-2xl text-center mb-8 text-[#94969C]"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                        >
                            Salesbuddy is a Gen-AI powered sales acceleration tool for mutual fund companies. It gives sales teams instant access to fund insights, performance comparisons, and investment analysis.
                        </motion.p>

                        <motion.div
                            className="rounded-2xl overflow-hidden shadow-lg"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                        >
                            <Image src={salesbuddyHeroImg}
                                alt="Salesbuddy AI illustration"
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
                                    What is Salesbuddy for Mutual Fund?
                                </h2>
                                <p className="text-tertiary text-xl">
                                    Salesbuddy is a Gen AI-powered tool which gives sales teams instant access to fund insights, performance comparisons, and investment analysis—helping them engage clients better, reduce sales cycles, and improve conversions. With voice, WhatsApp, and intelligent AI-powered follow-ups, Salesbuddy ensures your team is always equipped with the right answers at the right time.
                                </p>
                            </motion.div>
                        )}
                    </IsInView>

                    <IsInView className={"w-full"}>
                        {(isInView) => (
                            <div className='flex flex-col gap-6 md:gap-9 w-full px-4' >
                                <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-6 lg:gap-0 w-full '>
                                    <motion.div
                                        className='flex flex-col gap-6 md:gap-8 lg:gap-14 w-full lg:w-1/2 '
                                        variants={slideVariants}
                                        initial="hidden"
                                        animate={isInView ? "visible" : "hidden"}
                                        transition={{ duration: 0.8 }}
                                        viewport={{ amount: 0.3 }}
                                    >
                                        <div className='text-tertiary font-normal text-base md:text-lg '>
                                            <h2 className='text-[#F5F5F6] font-semibold text-4xl'>Salesbuddy is a Gen AI-powered sales acceleration tool for mutual fund companies</h2>
                                            {[
                                                "Salesbuddy is an advanced Gen AI-powered sales intelligence platform designed for mutual fund companies, distributors, and relationship managers. It enables sales teams to access, analyze, and present real-time fund data, insights, and comparisons instantly—empowering them to close deals faster, enhance investor engagement, and improve sales productivity.",
                                                "Built on Documentia’s AgentOps framework, Salesbuddy extracts, organizes, and delivers precise information from documents, applications, databases, and the web, ensuring accurate, compliant, and contextual responses in under 2 seconds. With multilingual voice AI, WhatsApp integration, and intelligent follow-ups, Salesbuddy transforms how sales teams interact with data—leading to higher lead conversions, reduced sales cycles, and data-driven decision-making."
                                            ].map((item, index) => (
                                                <p key={index} className='my-5 pr-6'>{item}</p>
                                            ))}
                                        </div>
                                        <div className='flex gap-4 items-center'>
                                            <Button name="Get in touch" className="bg-[#191C1C] text-white px-6 py-2 rounded-md" onClick={() => handleNavigation('contact-us')} />
                                            <Button name="Try demo" className="bg-[#1B55F5] text-white px-6 py-2 rounded-md" onClick={() => handleNavigation('salesbuddy')} />
                                        </div>

                                    </motion.div>
                                    <motion.div
                                        className='w-full lg:w-1/2 '
                                        variants={slideVariants}
                                        initial="hidden"
                                        animate={isInView ? "visible" : "hidden"}
                                        transition={{ duration: 0.8 }}
                                    >
                                        <Image src={genAiPoweredby} alt="worldArtificialIntelligence" className='w-full h-auto object-cover rounded-2xl' />
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
                                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 w-full'>
                                    <div className=''>
                                        <Image src={icon} alt={`icon`} className='w-11 h-11 ' />
                                        <div className='flex flex-col gap-2 mt-4 md:mt-5'>
                                            <span className='text-primary font-semibold text-base md:text-4xl pr-10'>Key Business Benefits</span>
                                        </div>
                                    </div>
                                    {[
                                        { icon: icon2, title: 'Faster Deal Closures', text: 'Instant access to fund performance, comparisons, and market trends for better client conversions.' },
                                        { icon: icon3, title: 'Data-Driven Decision Making', text: 'AI-powered insights ensure accurate, real-time fund analysis, eliminating guesswork.' },
                                        { icon: icon4, title: 'Omnichannel Accessibility', text: 'Available via voice, WhatsApp, and web, ensuring data access anytime, anywhere.' },
                                        { icon: icon5, title: 'Increased Productivity', text: 'Reduces time spent on manual research, enabling teams to focus on client engagement.' },
                                        { icon: icon6, title: 'Scalability & Compliance', text: 'AI ensures contextual, compliant responses, reducing regulatory risks.' }
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
                                <div className='flex flex-col gap-3 w-full'>
                                    <span className='text-sm md:text-base font-semibold text-[#CECFD2]'>Features</span>
                                    <span className='text-2xl md:text-3xl lg:text-4xl text-primary font-semibold'>
                                        What Makes Salesbuddy Unique?
                                    </span>

                                </div>

                                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 w-full'>
                                    {[
                                        { icon: icon7, title: 'First-of-its-Kind AI for Mutual Funds', text: 'A game-changer in data extraction and AI-powered fund analysis.' },
                                        { icon: icon8, title: 'AI-Powered Voice & WhatsApp Integration', text: 'Enables teams to access insights via text, voice, or chat effortlessly.' },
                                        { icon: icon9, title: 'Investor Portfolio & Fund Report Analysis', text: 'Helps teams analyze and explain reports in natural language, like an expert.' },
                                        { icon: icon10, title: 'Smart Follow-Ups & Market Trends', text: 'Guides users toward better questions and deeper insights.' }
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

                    <IsInView className={"w-full"}>
                        {(isInView) => (
                            <div className='flex flex-col gap-6 md:gap-9 w-full px-4' >
                                <motion.div
                                    className='flex flex-col gap-3 w-full'
                                    variants={slideVariants}
                                    initial="hidden"
                                    animate={isInView ? "visible" : "hidden"}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                >
                                    <span className='text-sm md:text-base font-semibold text-[#CECFD2]'>Operationalize</span>
                                    <span className='text-2xl md:text-3xl lg:text-4xl text-primary font-semibold'>
                                        Technology & Security
                                    </span>

                                </motion.div>

                                <div className='flex flex-col lg:flex-row justify-between items-center gap-6 lg:gap-0 w-full'>
                                    <motion.div
                                        className='flex flex-col gap-6 md:gap-8 lg:gap-14 w-full lg:w-1/2 '
                                        variants={slideVariants}
                                        initial="hidden"
                                        animate={isInView ? "visible" : "hidden"}
                                        transition={{ duration: 0.8 }}
                                        viewport={{ amount: 0.3 }}
                                    >
                                        {[
                                            { icon: icon12, title: 'Vector Database', text: 'Powers fast, structured data retrieval.' },
                                            { icon: icon11, title: 'AI & RAG-Based Search', text: 'Ensures instant, high-relevance responses.' },
                                            { icon: icon13, title: 'End-to-End Encryption & 2FA', text: 'Ensures enterprise-grade security.' },
                                            { icon: icon13, title: 'Regulatory Compliance', text: 'Adheres to financial industry security standards.' }
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
                                        className='w-full lg:w-1/2 '
                                        variants={slideVariants}
                                        initial="hidden"
                                        animate={isInView ? "visible" : "hidden"}
                                        transition={{ duration: 0.8 }}
                                    >
                                        <Image src={worldArtificialIntelligence} alt="worldArtificialIntelligence" className='w-full h-auto object-cover rounded-2xl' />
                                    </motion.div>
                                </div>
                            </div>
                        )}
                    </IsInView>
                    <OurProducts />
                </div>
            </Container>

        </div>
    )
}

export default page
