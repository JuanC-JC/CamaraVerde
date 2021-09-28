import React, { useState, useEffect, useCallback } from "react";
import "../styles/global.scss";
import IntroSection from '../components/Home/IntroSection';
import DefinitionSection from "../components/Home/DefinitionSection";
import ExperienceSection from "../components/Home/ExperienceSection";
import DonateSection from "../components/Home/DonateSection";
import NewsSection from "../components/Home/NewSection";
import RegionSection from "../components/Home/RegionSection";
import PartnersSection from "../components/Home/PartnersSection";
import OdsSection from '../components/Home/OdsSection'


const IndexPage = () => {

  return (
    <>
      <IntroSection />
      <DefinitionSection />
      <RegionSection />
      <ExperienceSection />
      <DonateSection />
      <NewsSection />
      <PartnersSection />
      <OdsSection />
    </>
  );
};

export default IndexPage;