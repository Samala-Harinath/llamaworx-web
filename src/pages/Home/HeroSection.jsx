'use client';

import React, { useRef, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Mousewheel, Navigation } from 'swiper/modules';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import dot from '../../assets/images/_Dot.png';
import Button from '../../utils/Button';
import { GoArrowRight } from 'react-icons/go';
import { TbArrowDownRight } from 'react-icons/tb';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { slides } from '../../lib/HomeJson';

const HeroSection = () => {
  const swiperRefLocal = useRef(null);
  const router = useRouter();
  const { trackEvent } = useMatomo();

  const handleMouseEnter = () => {
    swiperRefLocal.current?.swiper?.autoplay?.stop();
  };

  const handleMouseLeave = () => {
    swiperRefLocal.current?.swiper?.autoplay?.start();
  };

  const navigateOrHandle = (state) => {
    const url = window.location.origin + '/';
    trackEvent({ category: 'Home-HeroSection', action: 'click-event', name: 'KnowMore-Button', href: url });
    router.push(`/?section=${state}`);
    setTimeout(() => {
      const currentUrl = new URL(window.location.href);
      currentUrl.searchParams.delete('section');
      window.history.replaceState({}, '', currentUrl.toString());
    }, 2000);
  };

  const handleContactClick = () => {
    const url = window.location.origin + '/contact-us';
    trackEvent({ category: 'Home-HeroSection', action: 'click-event', name: 'ContactUs-Button', href: url });
    router.push('/contact-us');
  };

  const handleNexaltorsClick = () => {
    const url = 'https://nexaltors.com/';
    trackEvent({ category: 'Home-HeroSection', action: 'click-event', name: 'Nexaltors-Link', href: url });
    window.open(url, '_blank');
  };

  return (

    <div className="flex flex-col items-center md:gap-10 mt-24 w-full" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} >
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        className="mySwiper w-full sm:max-w-full h-[500px]"
      >
        {slides.map(({ gradient, title, description, id, image }, index) => (
          <SwiperSlide key={index}>
            <div className='pb-10'>
              <div className='flex lg:flex-row flex-col-reverse rounded-3xl overflow-hidden'>
                <div className='lg:w-[55%] w-full bg-bg-quaternary flex-col gap-4 flex items-start justify-center lg:p-10 p-5 py-5'>
                  <div
                    className='text-sm flex lg:flex-row flex-col lg:items-center items-start gap-2 text-secondary bg-bg-primary  rounded-md px-2 py-1 cursor-pointer'
                    onClick={handleNexaltorsClick}
                  >
                    <span className='flex items-center gap-1 border rounded-md px-2 border-[#404040]'>
                      <Image src={dot} alt='dot' className='h-3 w-3' />
                      New Application!
                    </span>
                    <h4 className='flex items-center gap-2'>
                      Nexaltors - Gen AI based PropTech <GoArrowRight />
                    </h4>
                  </div>
                  <div className={gradient}>
                    <h1 className='sm:text-6xl text-[30px] font-inter mb-3 pr-5 '>
                      {title}
                    </h1>
                  </div>
                  {description && (
                    <p className='text-primary text-xl mb-7'>{description}</p>
                  )}
                  <div className='flex gap-2 ld:justify-start flex-wrap ld:flex-row flex-col w-full'>
                    <Button
                      name={'Know more'}
                      className={'bg-bg-secondary justify-center text-secondary ld:w-auto w-full cursor-pointer'}
                      rightIcon={<TbArrowDownRight />}
                      onClick={() => navigateOrHandle("features")}
                    />
                    <Button
                      name={'Contact us'}
                      className={'bg-[#1B55F5] justify-center text-white cursor-pointer'}
                      onClick={handleContactClick}
                    />
                  </div>
                </div>
                <div className='w-full lg:w-[45%]'>
                  <Image
                    src={image}
                    alt={`headerImg${id}`}
                    className="w-full h-full object-contain"
                    width={500}
                    height={500}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSection;