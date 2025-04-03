import { CgClose } from 'react-icons/cg';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { useMatomo } from '@datapunt/matomo-tracker-react';
import documentia from '../../assets/images/documentia.png'
import yesql from '../../assets/images/yesql.png';
import nexaltors from '../../assets/images/nexaltors.png';
import Bolka from '../../assets/images/Bolka.png';
import Agentic from '../../assets/images/Agentic.png';
import Salesbuddy from '../../assets/images/Salesbuddy.png';
import Insurance from '../../assets/images/Insurance.png';
import LammaworxLOGO from '../../assets/svg/LammaworxLOGO.svg';

const menuItems = {
    products: [
        { img: documentia, title: 'Documentia™ AI', desc: 'Swiftly converts private, unstructured data into actionable insights.', handler: 'handleProduct' },
        { img: Bolka, title: 'Bolka™', desc: 'Your virtual call centre that never sleeps, and scales infinitely!', handler: 'handleBolka' },
        { img: Agentic, title: 'Agentic AI', desc: 'Enables rapid operational integration and maximizes the strategic advantage', handler: 'handleAgenticAi' },
        { img: yesql, title: 'yesQL™ AI', desc: 'Get up and running on new features and techniques.', handler: 'handleYesQL' },
    ],
    applications: [
        { img: nexaltors, title: 'Nexaltors', desc: 'Search, Compare, Verify and Buy the under-construction properties in India', handler: 'handleApplication' },
        { img: Salesbuddy, title: 'Salesbuddy for Mutual Fund', desc: 'Instant access to fund insights, performance comparisons', handler: 'handleSalebuddy' },
        { img: Insurance, title: 'Explore for General Insurance', desc: 'Insurance comparison, smart suggestions, premium calculation', handler: 'handleInsurance' },
    ]
};

const SideMenuBar = ({ sideMenu, setSideMenu }) => {
    const [productToggle, setProductToggle] = useState(false);
    const [applicationToggle, setApplicationToggle] = useState(false);
    const { trackEvent } = useMatomo();
    const router = useRouter();

    // const navigateOrHandle = (path) => {
    //     setSideMenu(false);
    //     router.push(path);
    // };


    const navigateOrHandle = (state) => {
        setSideMenu(false);
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
            trackEvent({ category: 'sidebar', action: 'click-event', name: 'Features-sidebar', href: window.location.origin + '/' });
        },
        handleProduct: () => {
            navigateOrHandle('product');
            trackEvent({ category: 'sidebar', action: 'click-event', name: 'Documentia-Product', href: window.location.origin + '/' });
        },
        handleYesQL: () => {
            navigateOrHandle('yesql');
            trackEvent({ category: 'sidebar', action: 'click-event', name: 'yesQL-Product', href: window.location.origin + '/' });
        },
        handleApplication: () => {
            navigateOrHandle('application');
            trackEvent({ category: 'sidebar', action: 'click-event', name: 'Nexaltors-Application', href: window.location.origin + '/' });
        },
        handleAgenticAi: () => {
            navigateOrHandle('agenticai');
            trackEvent({ category: 'sidebar', action: 'click-event', name: 'AgenticAI-Product', href: window.location.origin + '/' });
        },
        handleBolka: () => {
            navigateOrHandle('bolka');
            trackEvent({ category: 'sidebar', action: 'click-event', name: 'Bolka-Product', href: window.location.origin + '/' });
        },
        handleSalebuddy: () => {
            navigateOrHandle('salesbuddy');
            trackEvent({ category: 'sidebar', action: 'click-event', name: 'Salesbuddy-Application', href: window.location.origin + '/' });
        },
        handleInsurance: () => {
            navigateOrHandle('insurance');
            trackEvent({ category: 'sidebar', action: 'click-event', name: 'Insurance-Application', href: window.location.origin + '/' });
        },
    };

  const handleHomeClick = () => {
    setSideMenu(false);
        router.push('/');
        trackEvent({ category: 'sidebar', action: 'click-event', name: 'Home-sidebar', href: window.location.origin + '/' });
    };

    const handleAboutClick = () => {
        setSideMenu(false);
        router.push('/about');
        trackEvent({ category: 'sidebar', action: 'click-event', name: 'About-sidebar', href: window.location.origin + '/about' });
    };

    const handleContactClick = () => {
        setSideMenu(false);
        router.push('/contact-us');
        trackEvent({ category: 'sidebar', action: 'click-event', name: 'Contact-sidebar', href: window.location.origin + '/contact-us' });
    };
    const handleblogsClick = () => {
        setSideMenu(false);
        router.push('/blogs');
        trackEvent({ category: 'sidebar', action: 'click-event', name: 'Blogs-sidebar', href: window.location.origin + '/blogs' });
    };
    const renderDropdownItems = (items) => (
        <div className="pl-5 flex flex-col gap-3">
            {items.map((item, index) => (
                <div key={index} className="flex gap-3  hover:bg-[#1F242F] rounded-md p-2 cursor-pointer" onClick={() => navActions[item.handler]()}>
                    <div className='w-12 h-12' >
                    <Image src={item.img} alt={item.title}  className="object-contain h-auto w-full mt-1" />
                    </div>
                    <div> 
                        <h3 className="text-white font-semibold">{item.title}</h3>
                        <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                </div>
            ))}
        </div>
    );

    return (
        <div className={`overflow-auto md:hidden block transition-all duration-300 bg-[rgba(197,197,197,0.8)] 
            ${sideMenu ? "z-50 h-screen fixed right-0 top-0 left-0 bottom-0" : ""}`}>

            {sideMenu && (
                <div className="text-white flex justify-center cursor-pointer items-center float-right w-10 h-10" onClick={() => setSideMenu(false)}>
                    <CgClose size={25} />
                </div>
            )}

            <div className={`z-20 fixed top-0 h-screen w-72 bg-[#09090B] flex flex-col p-5 no-scrollbar
                scrollbar-thin scroll-smooth overflow-auto animate-in slide-in-from-left ease-in duration-300
                ${sideMenu ? "left-0" : "-left-72"}`}>

                <div className="flex flex-col h-full">
                    <div onClick={() => navigateOrHandle("/")} className="cursor-pointer mb-6">
                        <Image src={LammaworxLOGO} alt="LammaworxLOGO" width={128} height={32} className="object-contain" />
                    </div>

                    <ul className="flex flex-col gap-2">
                        <li className="hover:bg-[#1F242F] text-white rounded-md p-2 font-semibold cursor-pointer" onClick={handleHomeClick}>
                            Home
                        </li>
                        <li className="hover:bg-[#1F242F] text-white rounded-md p-2 font-semibold cursor-pointer" onClick={navActions.handleFeatures}>
                            Features
                        </li>
                        <li className="hover:bg-[#1F242F] text-white flex justify-between items-center rounded-md p-2 font-semibold cursor-pointer" onClick={() => setProductToggle(!productToggle)}>
                            Products
                            {productToggle ? <FiChevronDown size={20} /> : <FiChevronUp size={20} />}
                        </li>
                        {productToggle && renderDropdownItems(menuItems.products)}

                        <li className="hover:bg-[#1F242F] text-white flex justify-between items-center rounded-md p-2 font-semibold cursor-pointer" onClick={() => setApplicationToggle(!applicationToggle)}>
                            Applications
                            {applicationToggle ? <FiChevronDown size={20} /> : <FiChevronUp size={20} />}
                        </li>
                        {applicationToggle && renderDropdownItems(menuItems.applications)}

                        <li className="hover:bg-[#1F242F] text-white rounded-md p-2 font-semibold cursor-pointer" onClick={handleAboutClick}>
                            About
                        </li>
                        <li className="hover:bg-[#1F242F] text-white rounded-md p-2 font-semibold cursor-pointer" onClick={handleContactClick}>
                            Contact us
                        </li>
                        <li className="hover:bg-[#1F242F] text-white rounded-md p-2 font-semibold cursor-pointer" onClick={handleblogsClick}>
                            Blogs
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SideMenuBar;
