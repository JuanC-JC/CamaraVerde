import React from "react";
import "../styles/global.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ExperienceSection from "../components/Home/ExperienceSection";
import IntroSection from '../components/Home/IntroSection';
import DefinitionSection from "../components/Home/DefinitionSection";

// markup
const IndexPage = () => {
  return (
    <>
      <Header />

      <IntroSection />
      <DefinitionSection />
      <ExperienceSection />

      <Footer />
    </>
  );
};

export default IndexPage;

