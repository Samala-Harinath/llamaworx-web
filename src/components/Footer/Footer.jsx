'use client';
import React from 'react';
import { MdArrowOutward } from 'react-icons/md';
import { BsLinkedin, BsTwitterX } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';
import { useMatomo } from '@datapunt/matomo-tracker-react';
import Container from '../Container/Container';
import LammaworxLOGO from '../../assets/svg/LammaworxLOGO.svg';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Footer = () => {
  const router = useRouter();
  const { trackEvent } = useMatomo();

  const trackAndNavigate = (route, name, state = null) => {
    const url = route.startsWith('http') ? route : window.location.origin + route;
    trackEvent({
      category: 'Footer',
      action: 'click-event',
      name,
      href: url,
    });

    if (route.startsWith('http')) {
      window.open(route, '_blank');
    } else if (state) {
      router.push(`/?section=${state}`);
      setTimeout(() => {
        const currentUrl = new URL(window.location.href);
        currentUrl.searchParams.delete('section');
        window.history.replaceState({}, '', currentUrl.toString());
      }, 2000);
    }else if(route){
      router.push(route)
    }
  };

  const listStyle = 'cursor-pointer transition duration-100 hover:scale-95 py-1 text-nowrap hover:text-[#1B55F5]';
  const siteStyle = 'px-3 py-1 flex items-center gap-2 cursor-pointer transition duration-100 hover:scale-95 text-nowrap';

  const navArray = [
    { navName: 'Home', route: '/', state: null, trackName: 'Home-Link' },
    { navName: 'Features', route: '/', state: 'features', trackName: 'Features-Link' },
    { navName: 'Products', route: '/', state: 'product', trackName: 'Products-Link' },
    { navName: 'Application', route: '/', state: 'salesbuddy', trackName: 'Application-Link' },
    { navName: 'About', route: '/about', state: null, trackName: 'About-Link' },
    { navName: 'Contact Us', route: '/contact-us', state: null, trackName: 'contact-us-Link' },
  ];

  const siteArray = [
    { project: 'Try Documentia™', url: 'https://documentia.ai/', trackName: 'Documentia-Link' },
    { project: 'Try Nexaltors', url: 'https://nexaltors.com/', trackName: 'Nexaltors-Link' },
    { project: 'Try Agentic AI', url: '/agentic-ai', trackName: 'AgenticAI-Link' },
    { project: 'Try Bolka AI™', url: 'https://demo.bolka.ai/', trackName: 'BolkaAI-Link' },
    { project: 'Try Salesbuddy for Mutual Fund', url: 'https://salesbuddy.llamaworx.com/', trackName: 'Salesbuddy-Link' },
    { project: 'Try Explore for Insurance', url: 'https://salesbuddy.llamaworx.com/', trackName: 'ExploreInsurance-Link' },
  ];

  const socialIcons = [
    { Icon: BsTwitterX, url: 'https://x.com/bolkava', trackName: 'Twitter-Icon' },
    { Icon: BsLinkedin, url: 'https://linkedin.com/company/bolkava', trackName: 'LinkedIn-Icon' },
    { Icon: FaFacebook, url: 'https://www.facebook.com/share/155Bg1XU8j/', trackName: 'Facebook-Icon' },
  ];

  return (
    <div className="w-full flex bg-bg-quaternary justify-center items-center py-10">
      <Container>
        <div className="w-full flex flex-col gap-8">
          <div className="flex justify-between md:flex-row flex-col gap-10">
            <div className="w-full">
              <div>
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => trackAndNavigate('/', 'Logo-Link')}
                >
                  <Image src={LammaworxLOGO} alt="LammaworxLOGO" className="max-w-[166px]" />
                </div>
                <p className="text-tertiary my-5">Bringing your data to life with AI</p>
              </div>
              <ul className="flex gap-5 text-tertiary flex-wrap w-full font-semibold">
                {navArray.map((nav) => (
                  <li
                    key={nav.navName}
                    className={listStyle}
                    onClick={() => trackAndNavigate(nav.route, nav.trackName, nav.state)}
                  >
                    {nav.navName}
                  </li>
                ))}
              </ul>
            </div>
            <div className="text-[#599CFF] font-semibold">
              {siteArray.map(({ url, project, trackName,}) => (
                <div
                  key={project}
                  className={siteStyle}
                  onClick={() => trackAndNavigate(url, trackName)}
                >
                  <MdArrowOutward />
                  {project}
                </div>
              ))}
            </div>
          </div>
          <div className="border-b border-[#98A2B3]" />
          <div className="flex justify-between md:flex-row flex-col-reverse gap-3 md:items-left items-center">
            <p className="text-tertiary text-center md:text-left">
              © LLamaworx Software Pvt Ltd 2025. All rights reserved.
            </p>
            <div className="flex gap-5 text-tertiary">
              {socialIcons.map(({ url, Icon, trackName }) => (
                <div key={trackName} className="cursor-pointer" onClick={() => trackAndNavigate(url, trackName)}>
                  <Icon size={25} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
