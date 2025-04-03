'use client';
import Container from '../components/Container/Container'
import { useEffect, useRef } from "react";
import { useSearchParams } from 'next/navigation';
import HeroSection from '../pages/Home/HeroSection'
import About from "../pages/Home/About";
import Features from "../pages/Home/Features";
import Benefits from "../pages/Home/Benefits";
import Expertise from "../pages/Home/Expertise";
import Documentia from "../pages/Home/Documentia";
import YesQL from "../pages/Home/YesQL";
import AgenticAI from "../pages/Home/AgenticAI";
import BolkaInfo from "../pages/Home/BolkaInfo";
import Salesbuddy from "../pages/Home/Salesbuddy";
import Nexaltors from "../pages/Home/Nexaltors";
import Info from "../pages/Home/Info";
import Faq from "../pages/Home/Faq";
import OurProducts from "../pages/Home/OurProducts";
import Insurance from '../pages/Home/Insurance ';

export default function Home() {
  const featureRef = useRef(null);
  const productRef = useRef(null);
  const yesQLRef = useRef(null);
  const applicationRef = useRef(null);
  const agenticAiRef = useRef(null);
  const bolkaRef = useRef(null);
  const salebuddyRef = useRef(null);
  const insuranceRef = useRef(null);

  const searchParams = useSearchParams();
  const state = searchParams?.get('section');


  const handleSalebuddyView = () => {
    salebuddyRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  const handleInsuranceView = () => {
    insuranceRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  const handleAgenticAiView = () => {
    agenticAiRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  const handleBolkaView = () => {
    bolkaRef.current?.scrollIntoView({ behavior: "smooth" });
  }
  const handleFreatureView = () => {
    featureRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleProductView = () => {
    productRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleYesQLView = () => {
    yesQLRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleApplicationView = () => {
    applicationRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  useEffect(() => {
    if (!state) return;

    switch (state) {
      case "features":
        handleFreatureView();
        break;
      case "product":
        handleProductView();
        break;
      case "yesql":
        handleYesQLView();
        break;
      case "application":
        handleApplicationView();
        break;
      case "agenticai":
        handleAgenticAiView();
        break;
      case "bolka":
        handleBolkaView();
        break;
      case "salesbuddy":
        handleSalebuddyView();
        break;
      case "insurance":
        handleInsuranceView();
        break;
    }
  }, [state]);

  return (
    <div className="flex justify-center items-center flex-col font-inter">
      <Container>
        <div className="flex-col flex gap-12 md:gap-28 overflow-x-hidden">
          <HeroSection />
          <About />
          <Features featureRef={featureRef} />
          <Benefits />
          <Expertise />
          <Documentia productRef={productRef} />
          <YesQL yesQLRef={yesQLRef} />
          <AgenticAI agenticAiRef={agenticAiRef} />
          <BolkaInfo bolkaRef={bolkaRef} />
          <Salesbuddy salebuddyRef={salebuddyRef} />

          <Insurance insuranceRef={insuranceRef} />


          <Nexaltors applicationRef={applicationRef} />
          <Info />
          <Faq />
          <OurProducts />
        </div>
      </Container>
    </div>
  );
}
