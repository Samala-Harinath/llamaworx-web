'use client';

import { useRouter } from 'next/navigation';
import { TbArrowDownLeft } from 'react-icons/tb';
import { motion } from 'framer-motion';
import IsInView from '../../utils/IsInView';
import { useMatomo } from '@datapunt/matomo-tracker-react';

const About = () => {
  const router = useRouter();
  const { trackEvent } = useMatomo();

  const handleKnowMore = () => {
    const url = `${window.location.origin}/contact-us`;
    trackEvent({
      category: 'Home-about',
      action: 'click-event', 
      name: 'knowMore-Button',
      href: url, 
    });
    router.push('/contact-us');
  };

  return (
    <IsInView>
      {(isInView) => (
        <div className="py-5 flex flex-col items-center md:gap-10 w-full">
          <div className="gap-5 flex md:flex-row flex-col">
            <motion.div
              className="md:w-[65%] w-full py-5 md:px-10 px-5 bg-bg-secondary rounded-3xl"
              initial={{ opacity: 0, x: -80 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -80 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-semibold mb-5 bg-gradient-to-b from-[#E0C3FC] to-[#8EC5FC] bg-clip-text text-transparent">
                What is Llamaworx?
              </h2>
              <p className="text-tertiary text-xl">
                Llamaworx is a leading AI tech company that specializes in creating advanced AI solutions to enhance business operations. With a focus on leveraging large language models (LLMs) and AI agents, Llamaworx provides innovative tools to automate complex tasks, generate actionable insights, and streamline processes. Our solutions are designed to work seamlessly with both structured and unstructured data, making it easier for businesses to harness the power of AI for improved productivity and efficiency.
              </p>
            </motion.div>

            <motion.div
              className="md:w-[35%] w-full py-5 md:px-10 px-5 bg-bg-quaternary rounded-3xl h-full"
              initial={{ opacity: 0, x: 80 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 80 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-tertiary text-xl">
                Our proprietary AgentOps products,{' '}
                <span className="bg-gradient-to-b from-[#E2B0FF] to-[#9F44D3] bg-clip-text text-transparent font-semibold">
                  Documentia™
                </span>{' '}
                and{' '}
                <span className="bg-gradient-to-b from-[#E2B0FF] to-[#9F44D3] bg-clip-text text-transparent font-semibold">
                  yesQL™
                </span>
                , are meticulously designed to integrate seamlessly with both structured and unstructured data. These innovative tools automate complex tasks using AI agents and Robotic Process Automation (RPA), offering robust and scalable solutions for a wide range of business needs.
              </h2>
              <span
                onClick={handleKnowMore}
                className="flex mt-5 cursor-pointer items-center gap-2 bg-gradient-to-b from-[#89F7FE] to-[#66A6FF] bg-clip-text text-transparent font-semibold"
              >
                Know more <TbArrowDownLeft color="#66A6FF" className="mt-1" />
              </span>
            </motion.div>
          </div>
        </div>
      )}
    </IsInView>
  );
};

export default About;
