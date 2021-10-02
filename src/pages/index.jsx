import React from "react";
import IntroSection from '../components/Home/IntroSection';
import DefinitionSection from "../components/Home/DefinitionSection";
import ExperienceSection from "../components/Home/ExperienceSection";
import DonateSection from "../components/Home/DonateSection";
import NewsSection from "../components/Home/NewSection";
import RegionSection from "../components/Home/RegionSection";
import PartnersSection from "../components/Home/PartnersSection";
import OdsSection from '../components/Home/OdsSection'
import Seo from '../components/Seo'

// import image from '../images/DonateBackground.png'
import "../styles/global.scss";

const IndexPage = () => {

  return (
    <>
      <Seo />
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