'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Mousewheel, Autoplay } from 'swiper/modules';
import 'swiper/css';
import { GoArrowRight, GoChevronDown, GoChevronUp } from 'react-icons/go';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import Image from 'next/image';
import Link from 'next/link';
import documentia from '../../assets/images/documentia.png'
import yesql from '../../assets/images/yesql.png';
import LammaworxLOGO from '../../assets/svg/LammaworxLOGO.svg';
import nexaltors from '../../assets/images/nexaltors.png';
import hamurgerMenu from '../../assets/svg/hamurger-menu.svg';
import nvidiaLogo from '../../assets/images/nvidiaLogo.png';
import Googlecloudforstartup from '../../assets/images/Googlecloudforstartup.png';
import elevenlabsLogo from '../../assets/images/elevenlabs-logo.png';
import Razorpay from '../../assets/images/Razorpay.png';
import AWS_Startups from '../../assets/images/AWS_Startups.svg';
import Insurance from '../../assets/images/Insurance.png';
import Bolka from '../../assets/images/Bolka.png';
import user from '../../assets/images/user.png';
import Salesbuddy from '../../assets/images/Salesbuddy.png';
import Button from '../../utils/Button'
import SideMenuBar from './SideMenuBar';

const logos = [
    { src: nvidiaLogo, alt: 'NvidiaLogo' },
    { src: Googlecloudforstartup, alt: 'Googlecloudforstartup' },
    { src: Razorpay, alt: 'Razorpay' },
    { src: AWS_Startups, alt: 'AWS_Startups' },
];

const menuItems = {
    products: [
        { img: documentia, title: 'Documentia™ AI', desc: 'Swiftly converts private, unstructured data into actionable insights.', handler: 'handleProduct' },
        { img: Bolka, title: 'Bolka™', desc: 'Your virtual call centre that never sleeps, and scales infinitely!', handler: 'handleBolka' },
        { img: user, title: 'Agentic AI', desc: 'Enables rapid operational integration and maximizes the strategic advantage', handler: 'handleAgenticAi' },
        { img: yesql, title: 'yesQL™ AI', desc: 'AI-powered text-to-SQL for seamless querying across any database', handler: 'handleYesQL' },
    ],
    applications: [
        { img: nexaltors, title: 'Nexaltors', desc: 'Search, Compare, Verify and Buy the under-construction properties in India', handler: 'handleApplication' },
        { img: Salesbuddy, title: 'Salesbuddy for Mutual Fund', desc: 'Instant access to fund insights, performance comparisons', handler: 'handleSalebuddy' },
        { img: Insurance, title: 'Explore for General Insurance', desc: 'Insurance comparison, smart suggestions, premium calculation', handler: 'handleInsurance' },
    ]
};

const Navbar = () => {
    const router = useRouter();
    const [sideMenu, setSideMenu] = useState(false);
    const { trackEvent } = useMatomo();

    const navigateOrHandle = (state) => {
        router.push(`/?section=${state}`);
        setTimeout(() => {
            const currentUrl = new URL(window.location.href);
            currentUrl.searchParams.delete('section');
            window.history.replaceState({}, '', currentUrl.toString());
        }, 2000);
    };

    const navActions = {
        handleFeatures: () => {
            navigateOrHandle('features');
            trackEvent({ category: 'Navbar', action: 'click-event', name: 'Features-Nav', href: window.location.origin + '/' });
        },
        handleProduct: () => {
            navigateOrHandle('product');
            trackEvent({ category: 'Navbar', action: 'click-event', name: 'Documentia-Product', href: window.location.origin + '/' });
        },
        handleYesQL: () => {
            navigateOrHandle('yesql');
            trackEvent({ category: 'Navbar', action: 'click-event', name: 'yesQL-Product', href: window.location.origin + '/' });
        },
        handleApplication: () => {
            navigateOrHandle('application');
            trackEvent({ category: 'Navbar', action: 'click-event', name: 'Nexaltors-Application', href: window.location.origin + '/' });
        },
        handleAgenticAi: () => {
            navigateOrHandle('agenticai');
            trackEvent({ category: 'Navbar', action: 'click-event', name: 'AgenticAI-Product', href: window.location.origin + '/' });
        },
        handleBolka: () => {
            navigateOrHandle('bolka');
            trackEvent({ category: 'Navbar', action: 'click-event', name: 'Bolka-Product', href: window.location.origin + '/' });
        },
        handleSalebuddy: () => {
            navigateOrHandle('salesbuddy');
            trackEvent({ category: 'Navbar', action: 'click-event', name: 'Salesbuddy-Application', href: window.location.origin + '/' });
        },
        handleInsurance: () => {
            navigateOrHandle('insurance');
            trackEvent({ category: 'Navbar', action: 'click-event', name: 'Insurance-Application', href: window.location.origin + '/' });
        },
    };

    const handleHomeClick = () => {
        router.push('/');
        trackEvent({ category: 'Navbar', action: 'click-event', name: 'Home-Nav', href: window.location.origin + '/' });
    };

    const handleAboutClick = () => {
        router.push('/about');
        trackEvent({ category: 'Navbar', action: 'click-event', name: 'About-Nav', href: window.location.origin + '/about' });
    };

    const handleContactClick = () => {
        router.push('/contact-us');
        trackEvent({ category: 'Navbar', action: 'click-event', name: 'Contact-Nav', href: window.location.origin + '/contact-us' });
    };
    const handleblogsClick = () => {
        router.push('/blogs');
        trackEvent({ category: 'Navbar', action: 'click-event', name: 'Blogs-Nav', href: window.location.origin + '/blogs' });
    };
    const handleSideMenuClick = () => {
        setSideMenu(true);
        trackEvent({ category: 'Navbar', action: 'click-event', name: 'Mobile-Menu', href: window.location.origin });
    };

    const renderMenuDropdown = (title, items) => (
        <li className="cursor-pointer relative flex items-center group h-[50px] transition-all duration-200">
            <h2 className="flex items-center gap-2 hover:text-[#1B55F5] text-tertiary">
                {title}
                <GoChevronUp className="group-hover:hidden block" />
                <GoChevronDown className="group-hover:block hidden" />
            </h2>
            <div className="absolute bg-[#0C111D] border border-[#1F242F] hidden group-hover:block p-5 rounded-lg top-[45px] w-[340px] shadow-md z-10">
                {items.map((item, index) => (
                    <div key={index} className={`flex gap-4 ${index > 0 ? 'mt-5' : ''}`}>
                        <Image src={item.img} alt={item.title} className="w-7 h-7 mt-2 object-contain" width={28} height={28} />
                        <div>
                            <h2 className="font-semibold">{item.title}</h2>
                            <p className="text-tertiary text-sm">{item.desc}</p>
                            <div
                                className="flex items-center gap-2 text-secondary cursor-pointer font-semibold transition duration-200 hover:scale-95"
                                onClick={() => navActions[item.handler]()}
                            >
                                Learn more <GoArrowRight />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </li>
    );

    return (
        <div className="fixed top-0  z-50 max-w-[1440px] flex justify-center w-full bg-[#09090B] ">
             <SideMenuBar sideMenu={sideMenu} setSideMenu={setSideMenu}/>
             <div className="max-w-[75rem] w-full md:mx-5 mx-3 z-10  ">
                <div className="py-2 flex md:justify-end justify-between gap-5 items-center">
                    <div className="w-[150px] overflow-hidden">
                        <Swiper modules={[Mousewheel, Autoplay]} slidesPerView={1} autoplay={{ delay: 2500, disableOnInteraction: false }} mousewheel loop >
                            {logos.map((logo, index) => (
                                <SwiperSlide key={index} className="flex justify-center items-center">
                                    <Image src={logo.src} alt={logo.alt} className="h-[35px] object-contain" width={150} height={35} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                    <Link href="https://elevenlabs.io/text-to-speech" target="_blank" rel="noopener noreferrer">
                        <Image src={elevenlabsLogo} className="md:w-[150px] h-[35px]" alt="ElevenLabs" width={150} height={35} />
                    </Link>
                </div>

                <div className="sticky top-0 ">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center gap-8 h-full">
                            <Image
                                src={LammaworxLOGO}
                                alt="LammaworxLOGO"
                                className="object-contain cursor-pointer"
                                onClick={handleHomeClick}
                                width={150}
                                height={150}
                            />
                            <nav className="md:block hidden h-full select-none">
                                <ul className="gap-8 font-semibold flex h-full flex-wrap">
                                    <li className="cursor-pointer flex items-center hover:text-[#1B55F5] h-[50px] text-tertiary" onClick={handleHomeClick} >
                                        Home
                                    </li>
                                    <li className="cursor-pointer flex items-center hover:text-[#1B55F5] h-[50px] text-tertiary"
                                        onClick={navActions.handleFeatures}
                                    >
                                        Features
                                    </li>
                                    {renderMenuDropdown("Products", menuItems.products)}
                                    {renderMenuDropdown("Application", menuItems.applications)}
                                    <li
                                        className="cursor-pointer flex items-center hover:text-[#1B55F5] h-[50px] text-tertiary"
                                        onClick={handleAboutClick}
                                    >
                                        About
                                    </li>
                                    <li
                                        className="cursor-pointer flex items-center hover:text-[#1B55F5] h-[50px] text-tertiary"
                                        onClick={handleContactClick}
                                    >
                                        Contact us
                                    </li>
                                    <li
                                        className="cursor-pointer flex items-center hover:text-[#1B55F5] h-[50px] text-tertiary"
                                        onClick={handleblogsClick}
                                    >
                                        Blogs
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="flex gap-4 items-center">
                            <Button
                                name="Get in touch"
                                className="text-[#CECFD2] whitespace-nowrap hidden md:block w-[150px] bg-[#191C1C]"
                                onClick={handleContactClick}
                            />
                            <Image
                                src={hamurgerMenu}
                                alt="Menu"
                                className="w-5 h-5 md:hidden cursor-pointer"
                                onClick={handleSideMenuClick}
                                width={20}
                                height={20}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
