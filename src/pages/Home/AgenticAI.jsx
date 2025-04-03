'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { GoArrowUpRight } from 'react-icons/go'; 
import { TbArrowDownRight } from 'react-icons/tb';
import Button from '../../utils/Button';
import IsInView from '../../utils/IsInView';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import { useRouter } from 'next/navigation';
import { AgenticAISection } from '../../lib/HomeJson';

const AgenticAI = ({ agenticAiRef }) => {
  const router =useRouter();
  const { trackEvent } = useMatomo();

  const handleNavigation = (destination) => {
    if (destination === 'agentic-ai') {
      router.push('/agentic-ai')
      trackEvent({
        category: 'Home-AgenticAI', action: 'click-event', name: 'KnowMore-Button', href: window.location.origin + '/agentic-ai',
      });
    } else if (destination === 'contact-us') {
      router.push('/contact-us');
      trackEvent({
        category: 'Home-AgenticAI', action: 'click-event', name: 'ContactUs-Button', href: window.location.origin + '/contact-us',
      });
    }
  };

  const handleKnowMore = () => {
    const url = window.location.origin + '/contact-us';
    trackEvent({ category: 'Home-AgenticAI', action: 'click-event', name: 'knowMore-Button', href: url, });
    router.push('/contact-us');
  };


  return (
    <div ref={agenticAiRef}>
      <IsInView>
        {(isInView) => (
          <motion.div className="py-5 flex flex-col items-center gap-10 w-full">
            <motion.div
              className="text-center flex flex-col items-center gap-5"
              initial={{ scale: 0.5, y: 120 }}
              animate={isInView ? { scale: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <h4 className="text-secondary font-semibold flex items-center gap-2 border border-[#141414] px-3 rounded-md">
                <div className="bg-[#F79009] h-2 w-2 rounded-full" />
                Product
              </h4>
              <h2 className="font-semibold md:text-6xl text-3xl text-primary max-w-[1024px]">
                Agentic AI
              </h2>
              <p className="text-tertiary md:text-xl text-lg max-w-[768px]">
                Operationalize, Democratize, and Govern Enterprise AI with AI Control Tower. AgilePoint enables rapid operational integration and maximizes the strategic advantages of your mergers and acquisitions.
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
              {AgenticAISection.map((data, idx) => (
                <motion.div
                  key={idx}
                  className="rounded-3xl bg-bg-quaternary p-5"
                  initial={{ scale: 0.5, y: 120 }}
                  animate={isInView ? { scale: 1, y: 0 } : { opacity: 0 }}
                  transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                  <h2 className="text-primary text-xl font-semibold">{data.title}</h2>
                  <p className="text-tertiary py-5">{data.subTitle}</p>
                  <h4
                    className="flex items-center gap-2 text-[#599CFF] cursor-pointer"
                    onClick={() => handleKnowMore()}
                  >
                    Know more <GoArrowUpRight />
                  </h4>
                </motion.div>
              ))}
            </div>

            <div className="flex gap-2 justify-start md:justify-center flex-wrap md:flex-row flex-col w-full">
              <Button
                name={'Know more'}
                className={'bg-bg-secondary justify-center text-secondary md:w-auto w-full'}
                rightIcon={<TbArrowDownRight />}
                onClick={() => handleNavigation('agentic-ai')}
              />
              <Button
                name={'Contact us'}
                className={'bg-[#1B55F5] justify-center text-white'}
                onClick={() => handleNavigation('contact-us')}
              />
            </div>
          </motion.div>
        )}
      </IsInView>
    </div>
  );
};

export default AgenticAI;