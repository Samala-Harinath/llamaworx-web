'use client';
import React from 'react';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import { motion } from 'framer-motion';
import AlImageHands from '../../assets/images/AlImageHands.jpg';
import Button from '../../utils/Button';
import IsInView from '../../utils/IsInView';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
const OurProducts = () => {
    const router =useRouter();
    const { trackEvent } = useMatomo();

    const handleRedirect = (url, buttonName) => {
        trackEvent({ 
            category: 'Our-Products-Applications', 
            action: 'click-event', 
            name: `${buttonName}-Button`, 
            href: url 
        });
        window.open(url, '_blank');
    };
 
    const handleLearnMoreClick = () => {
        const url = window.location.origin + '/contact-us';
        trackEvent({ 
            category: 'Our-Products-Applications', 
            action: 'click-event', 
            name: 'LearnMore-Button', 
            href: url 
        });
        router.push("/contact-us")
    };

    const handleAgenticAIClick = () => {
        const url = window.location.origin + '/agentic-ai';
        trackEvent({ 
            category: 'Our-Products-Applications', 
            action: 'click-event', 
            name: 'AgenticAI-Button', 
            href: url 
        });
        router.push("agentic-ai");
    };

    return (
        <IsInView>
            {(isInView) => (
                <div>
                    <motion.div 
                        className='py-5 flex flex-col items-center mb-10 w-full'
                        initial={{ scale: 0.5, y: 100 }}
                        animate={isInView ? { scale: 1, y: 0 } : { opacity: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className='flex md:flex-row flex-col-reverse rounded-3xl overflow-hidden'>
                            <div className='md:w-3/5 w-full bg-bg-quaternary flex-col flex items-start justify-center md:p-10 p-5 py-5'>
                                <h1 className='text-primary sm:text-4xl text-[30px] mb-3 font-semibold'>
                                    Give us a shot
                                </h1>
                                <p className='text-tertiary text-[20px] mb-7'>
                                    Discover the future of innovation with our advanced products and application
                                </p>
                                <div className='flex gap-2 md:justify-start justify-center flex-wrap md:flex-row flex-col w-full'>
                                    <Button 
                                        name={"Learn more"} 
                                        className={"bg-bg-secondary justify-center text-primary md:w-auto w-full"} 
                                        onClick={handleLearnMoreClick}
                                    />
                                    <Button 
                                        name={"Try Documentia™"} 
                                        className={"bg-[#1B55F5] justify-center text-primary"} 
                                        onClick={() => handleRedirect('https://documentia.ai/', 'Documentia')}
                                    />
                                    <Button 
                                        name={"Try Nexaltors™"} 
                                        className={"bg-[#1B55F5] justify-center text-primary"} 
                                        onClick={() => handleRedirect('https://nexaltors.com/', 'Nexaltors')}
                                    />
                                    <Button 
                                        name={"Try Agentic AI"} 
                                        className={"bg-[#1B55F5] justify-center text-primary"} 
                                        onClick={handleAgenticAIClick}
                                    />
                                    <Button 
                                        name={"Try Bolka AI™"} 
                                        className={"bg-[#1B55F5] justify-center text-primary"} 
                                        onClick={() => handleRedirect('https://demo.bolka.ai/', 'BolkaAI')}
                                    />
                                    <Button 
                                        name={"Try Salesbuddy for Mutual Fund"} 
                                        className={"bg-[#1B55F5] justify-center text-primary"} 
                                        onClick={() => handleRedirect('https://salesbuddy.llamaworx.com/', 'Salesbuddy')}
                                    />
                                    <Button 
                                        name={"Try Explore for Insurance"} 
                                        className={"bg-[#1B55F5] justify-center text-primary"} 
                                        onClick={() => handleRedirect('https://salesbuddy.llamaworx.com/', 'ExploreInsurance')}
                                    />
                                </div>
                            </div>
                            <div className='w-full md:w-2/5'>
                            <Image  src={AlImageHands} 
                                    alt="AlImageHands" 
                                    className='object-cover w-full h-full'  />
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </IsInView>
    );
};

export default OurProducts;