"use client";

import { Suspense, useEffect, useRef } from "react";
import { useSearchParams } from "next/navigation";
import Container from "../components/Container/Container";
import HeroSection from "../pages/Home/HeroSection";
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
import Insurance from "../pages/Home/Insurance";

export default function Home() {
  const featureRef = useRef(null);
  const productRef = useRef(null);
  const yesQLRef = useRef(null);
  const applicationRef = useRef(null);
  const agenticAiRef = useRef(null);
  const bolkaRef = useRef(null);
  const salebuddyRef = useRef(null);
  const insuranceRef = useRef(null);

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
          {/* Suspense Wrapper */}
          <Suspense fallback={<div>Loading...</div>}>
            <ScrollHandler
              featureRef={featureRef}
              productRef={productRef}
              yesQLRef={yesQLRef}
              applicationRef={applicationRef}
              agenticAiRef={agenticAiRef}
              bolkaRef={bolkaRef}
              salebuddyRef={salebuddyRef}
              insuranceRef={insuranceRef}
            />
          </Suspense>
        </div>
      </Container>
    </div>
  );
}

function ScrollHandler({
  featureRef,
  productRef,
  yesQLRef,
  applicationRef,
  agenticAiRef,
  bolkaRef,
  salebuddyRef,
  insuranceRef,
}) {
  const searchParams = useSearchParams();
  const state = searchParams?.get("section");

  useEffect(() => {
    if (!state) return;

    const scrollToSection = {
      features: featureRef,
      product: productRef,
      yesql: yesQLRef,
      application: applicationRef,
      agenticai: agenticAiRef,
      bolka: bolkaRef,
      salesbuddy: salebuddyRef,
      insurance: insuranceRef,
    }[state];

    scrollToSection?.current?.scrollIntoView({ behavior: "smooth" });
  }, [state, featureRef, productRef, yesQLRef, applicationRef, agenticAiRef, bolkaRef, salebuddyRef, insuranceRef]);

  return null;
}
