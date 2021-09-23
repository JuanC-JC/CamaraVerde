import React, { useState, useEffect, useCallback } from "react";
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
      <Test />
      <Footer />
    </>
  );
};

export default IndexPage;

const Test = () => {

  const [value, setValue] = useState(0)

  const handleChange = useCallback(() => {
    console.log(value);
    setValue(value + 1)
  }, [value])


  useEffect(() => {

    document.querySelector('#botonTest').addEventListener('click', handleChange)

    // window.addEventListener('resize', handleResize)

    // return (() => window.removeEventListener('resize', handleResize))
  }, [])


  return (
    <div>
      <h2>{value}</h2>
      <button id='botonTest' className="button">test</button>
    </div>
  )
}