'use client';
import { TbArrowDownRight } from 'react-icons/tb';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import { motion } from 'framer-motion';
import IsInView from '../../utils/IsInView';
import one from '../../assets/images/featuresSectionOne.png';
import Two from '../../assets/images/featuresSectionTwo.png';
import Three from '../../assets/images/featuresSectionThree.png';
import Four from '../../assets/images/featuresSectionFour.png';
import Button from '../../utils/Button';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Features = ({ featureRef }) => {
  const router = useRouter();
  const { trackEvent } = useMatomo();


  const FeatureTag = ({ text, color }) => (
    <div
      className='flex gap-2 items-center border px-3 py-1 text-xs rounded-full'
      style={{ borderColor: color, color: color }}
    >
      <div className="h-2 w-2 rounded-full" style={{ backgroundColor: color }} />
      {text}
    </div>
  );

  const FeatureSection = ({ title, description }) => (
    <div>
      <h2 className="text-primary text-xl font-semibold">{title}</h2>
      <p className="text-tertiary my-5">{description}</p>
    </div>
  );

  const handleKnowMoreClick = () => {
    const url = window.location.origin + '/contact-us';
    trackEvent({ category: 'Home-Features', action: 'click-event', name: 'KnowMore-Button', href: url });
    router.push('/contact-us');
  };

  const handleContactClick = () => {
    const url = window.location.origin + '/contact-us';
    trackEvent({ category: 'Home-Features', action: 'click-event', name: 'ContactUs-Button', href: url });
    router.push('/contact-us');
  };
  return (
    <IsInView>
      {(isInView) => (
        <motion.div className=' py-5 flex flex-col items-center gap-5 w-full border-t border-[#141414]' ref={featureRef}
        >
          <motion.div className=' text-center flex flex-col items-center gap-5 mb-5 '
            initial={{ scale: 0.5, y: 120 }}
            animate={isInView ? { scale: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h4 className='text-secondary font-semibold flex items-center gap-2 border border-[#141414] px-3 rounded-md  '><div className='bg-[#F79009] h-2 w-2 rounded-full' />Features</h4>
            <h2 className='font-semibold md:text-6xl text-3xl text-primary max-w-[1024px]'>Features, feels like it’s from future</h2>
            <p className='text-tertiary md:text-xl text-lg max-w-[768px]'>The features are cutting-edge and seamlessly integrated, making it feel like it's from the future. With advanced technology and intuitive design, it offers a glimpse into tomorrow's innovations today.</p>
          </motion.div>

          <div className='flex md:flex-row flex-col gap-5 w-full'>
            <motion.div className='md:w-[65%] w-full md:flex-row flex-col flex rounded-3xl bg-bg-quaternary overflow-hidden'
              initial={{ opacity: 0, x: -80 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className='md:w-[65%] w-full p-5' >
                <FeatureSection
                  title="AI-Powered Insights"
                  description="Llamaworx leverages advanced machine learning and data analytics to provide deep insights into business operations. By analyzing large volumes of data, it helps businesses make informed decisions, identify trends, and uncover hidden patterns."
                />
                <div className='inline-block'>
                  <FeatureTag text="Documentia" color="#7CD4FD" />
                </div>
              </div>
              <div className='md:w-[35%] w-full md:block hidden'>
                <Image src={one} alt={"one"} className='h-full' />
              </div>
            </motion.div>
            <motion.div className='md:w-[35%] w-full p-5 rounded-3xl bg-bg-quaternary'
              initial={{ opacity: 0, x: 80 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <FeatureSection
                title="Scalability"
                description="Designed to grow with your business, Llamaworx solutions are highly scalable. Whether you're a small startup or a large enterprise, our technologies adapt to your needs, ensuring consistent performance as your data and user base expand."
              />
              <div className='flex gap-2'>
                <FeatureTag text="Documentia" color="#7CD4FD" />
                <FeatureTag text="yesQL" color="#FEC84B" />
              </div>
            </motion.div>
          </div>

          <div className='flex gap-5 md:flex-row-reverse flex-col w-full'>
            <motion.div className='md:w-[65%] w-full  flex rounded-3xl bg-bg-quaternary overflow-hidden'
              initial={{ opacity: 0, x: 80 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className='md:w-[65%] w-full p-5'>
                <FeatureSection
                  title="Automation"
                  description="Our solutions automate repetitive tasks and complex processes, reducing manual intervention and increasing efficiency. This includes everything from data entry to customer support, freeing up your team to focus on strategic activities."
                />
                <div className='flex gap-2'>
                  <FeatureTag text="yesQL" color="#FEC84B" />
                </div>
              </div>
              <div className='md:w-[35%] w-full md:block hidden'>
                <Image src={Two} alt={"Two"} className='h-full' />
              </div>
            </motion.div>
            <motion.div className='md:w-[35%] w-full p-5 rounded-3xl bg-bg-quaternary'
              initial={{ opacity: 0, x: -80 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <FeatureSection
                title="User-Friendly Interfaces"
                description="Our solutions feature intuitive interfaces that simplify interaction and maximize efficiency. Designed with the user in mind, these interfaces ensure that even non-technical staff can easily navigate and utilize our tools."
              />
              <div className='inline-block'>
                <FeatureTag text="Nexaltors" color="#BDB4FE" />
              </div>
            </motion.div>
          </div>

          <div className='flex gap-5 md:flex-row flex-col w-full'>
            <motion.div className='md:w-[65%] w-full  flex rounded-3xl bg-bg-quaternary overflow-hidden'
              initial={{ opacity: 0, x: -80 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className='md:w-[65%] w-full p-5'>
                <FeatureSection
                  title="Security"
                  description="We prioritize the security of your data with robust encryption and compliance with industry standards. Our on-premise solutions minimize risks associated with data breaches and unauthorized access, ensuring your information remains safe."
                />
                <div className='flex gap-2'>
                  <FeatureTag text="Documentia" color="#7CD4FD" />
                  <FeatureTag text="yesQL" color="#FEC84B" />
                </div>
              </div>
              <div className='md:w-[35%] w-full md:block hidden'>
                <Image src={Three} alt={"Three"} className='h-full' />
              </div>
            </motion.div>
            <motion.div className='md:w-[35%] w-full p-5 rounded-3xl bg-bg-quaternary'
              initial={{ opacity: 0, x: 80 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <FeatureSection
                title="Real-Time Data Processing"
                description="Llamaworx processes data in real-time, enabling businesses to respond promptly to changes and make timely decisions. This feature is crucial for applications requiring immediate insights and actions, such as market analysis and customer support."
              />
              <div className='flex gap-2'>
                <FeatureTag text="Documentia" color="#7CD4FD" />
                <FeatureTag text="yesQL" color="#FEC84B" />
                <FeatureTag text="Nexaltors" color="#BDB4FE" />
              </div>
            </motion.div>
          </div>

          <div className='flex gap-5 flex-col md:flex-row-reverse w-full'>
            <motion.div className='md:w-[65%] w-full  flex rounded-3xl bg-bg-quaternary overflow-hidden'
              initial={{ opacity: 0, x: 80 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className='md:w-[65%] w-full p-5'>
                <FeatureSection
                  title="Advanced Analytics"
                  description="Our advanced analytics capabilities go beyond basic reporting. They provide predictive insights, anomaly detection, and trend analysis, helping businesses stay ahead of the competition and anticipate future challenges."
                />
                <div className=' flex gap-2'>
                  <FeatureTag text="Documentia" color="#7CD4FD" />
                  <FeatureTag text="Nexaltors" color="#BDB4FE" />
                </div>
              </div>
              <div className='md:w-[35%] w-full md:block hidden '>
                <Image src={Four} alt={"four"} className='h-full' />
              </div>
            </motion.div>
            <motion.div className='md:w-[35%] w-full p-5 rounded-3xl bg-bg-quaternary'
              initial={{ opacity: 0, x: -80 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <FeatureSection
                title="Integration"
                description="Llamaworx products seamlessly integrate with existing systems and databases. This compatibility ensures a smooth transition and enhances the functionality of your current IT infrastructure without disrupting operations."
              />
              <div className='inline-block'>
                <FeatureTag text="Documentia" color="#7CD4FD" />
              </div>
            </motion.div>
          </div>

          <div className='flex gap-2 justify-start md:justify-center flex-wrap md:flex-row flex-col w-full '>
            <Button
              name={"Know more"}
              className={"bg-bg-secondary justify-center text-secondary md:w-auto w-full"}
              rightIcon={<TbArrowDownRight />}
              onClick={handleKnowMoreClick}
            />
            <Button
              name={"Contact us"}
              className={"bg-[#1B55F5] justify-center text-white"}
              onClick={handleContactClick}
            />
          </div>

        </motion.div>
      )}

    </IsInView>

  )
}

export default Features
