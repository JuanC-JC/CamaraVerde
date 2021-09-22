import React from "react";
import "../styles/global.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import IntroSection from '../components/Home/IntroSection';
import DefinitionSection from "../components/Home/DefinitionSection";
// import ExperienceSection from "../components/Home/ExperienceSection";
import DonateSection from "../components/Home/donateSection";
import NewSection from "../components/Home/NewSection";



// markup
const IndexPage = () => {
  return (
    <>
      <Header />

      <IntroSection />
      <DefinitionSection />
      {/* <ExperienceSection /> */}
      <DonateSection/>
      <NewSection/>

      <Footer />
    </>
  );
};

export default IndexPage;

