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
import SEO from '../components/Seo'

import image from '../images/DonateBackground.png'


const IndexPage = () => {

  return (
    <>
      <SEO title={'Camara verde Amazorinoquía'} meta={{ 'og:image': image }} />
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