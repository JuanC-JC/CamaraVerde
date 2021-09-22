import React from "react";
import "../styles/global.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ExperienceSection from "../components/Home/ExperienceSection";
import IntroSection from '../components/Home/IntroSection';
import DefinitionSection from "../components/Home/DefinitionSection";
import RegionSection from "../components/Home/RegionSection";
import PartnersSection from "../components/Home/PartnersSection";
import OdsSection from '../components/Home/OdsSection'

const IndexPage = () => {
  return (
    <>
      <Header />
      <IntroSection />
      <DefinitionSection />
      <ExperienceSection />
      <RegionSection />
      <PartnersSection />
      <OdsSection />
      <Footer />
    </>
  );
};

export default IndexPage;

