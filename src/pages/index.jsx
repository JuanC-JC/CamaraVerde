import React from "react";
import "../styles/global.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ExperienceSection from "../components/Home/ExperienceSection";
import IntroSection from '../components/Home/IntroSection';

// markup
const IndexPage = () => {
  return (
    <>
      <Header />

      <IntroSection />
      <ExperienceSection />

      <Footer />
    </>
  );
};

export default IndexPage;

