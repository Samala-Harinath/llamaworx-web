import React, { useState } from 'react';
import { FAQs } from './HomeJson';
import { FiMinusCircle, FiPlusCircle } from 'react-icons/fi';
import Button from '../../utils/Button';
import Avatar2 from '../../assets/images/Avatar2.png';
import Avatar from '../../assets/images/Avatar.png';
import Avatar3 from '../../assets/images/Avatar3.png';
import { motion } from 'framer-motion';
import IsInView from '../../utils/IsInView';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Faq = () => {
  const [collapAnsewr, setCollapAnsewr] = useState([]);
  const router = useRouter();
  const { trackEvent } = useMatomo();

  const handleCollapAnsewr = (id) => {
    if (collapAnsewr.includes(id)) {
      return setCollapAnsewr(collapAnsewr.filter((data) => data !== id));
    }
    setCollapAnsewr((prev) => [...prev, id]);
  };

  const handleKnowMore = () => {
    const url = window.location.origin + '/contact-us';
    trackEvent({ category: 'Home-cards-LLM-RAG', action: 'click-event', name: 'knowMore-Button', href: url });
    router.push('/contact-us');
  };

  return (
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
              FAQs
            </h4>
            <h2 className="font-semibold md:text-6xl text-3xl text-primary max-w-[1024px]">Frequently asked questions</h2>
            <p className="text-tertiary md:text-xl text-lg max-w-[768px]">
              Everything you need to know about the product and billing.
            </p>
          </motion.div>

          {FAQs.map((data, index, arr) => (
            <div
              className={`flex gap-10 ${arr.length - 1 !== index && 'border-b'} border-[#1F242F] py-5 max-w-[768px] justify-between items-start w-full`}
              key={index}
            >
              <div className="flex flex-col">
                <h2 className="font-semibold mb-2 text-[18px] text-primary">{data.question}</h2>
                {collapAnsewr.includes(index) && <p className="text-tertiary">{data.answer}</p>}
              </div>
              <div
                onClick={() => handleCollapAnsewr(index)}
                className="cursor-pointer transition duration-100 hover:scale-95"
              >
                {collapAnsewr.includes(index) ? (
                  <FiMinusCircle size={25} color="#85888E" />
                ) : (
                  <FiPlusCircle size={25} color="#85888E" />
                )}
              </div>
            </div>
          ))}

          <motion.div
            className="md:md:py-20 py-5 flex flex-col items-center bg-bg-secondary rounded-3xl w-full"
            initial={{ scale: 0.5, y: 120 }}
            animate={isInView ? { scale: 1, y: 0 } : { opacity: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="flex">
              <Image src={Avatar2} alt="Avatar2" className="-mr-5 mt-2 h-12 w-12" />
              <Image src={Avatar} alt="Avatar" width={56} height={56} className="z-10 mb-1" />
              <Image src={Avatar3} alt="Avatar3" className="-ml-5 mt-2 h-12 w-12" />
            </div>
            <h2 className="text-center text-[20px] my-3 font-semibold text-primary">Still have questions?</h2>
            <p className="text-center text-tertiary">
              Can’t find the answer you’re looking for? Please contact our friendly team.
            </p>
            <Button onClick={handleKnowMore} name="Get in touch" className="bg-[#1B55F5] justify-center text-primary mt-5" />
          </motion.div>
        </motion.div>
      )}
    </IsInView>
  );
};

export default Faq;
