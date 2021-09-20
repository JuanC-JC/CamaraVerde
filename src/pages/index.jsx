import React from "react";
import "../styles/global.scss";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Experience from "../components/Home/ExperienceSection";
import pajaros from '../images/blackBirds.png';
import "../styles/inicioHome.scss";
import degrade from '../images/degradeHome2.png'

// markup
const IndexPage = () => {
  return (
    <>
      <Header />
      <section className="intro">

        <img className="intro__background" src={degrade} alt="" />

        <div className="intro__text">
          <h1>Cámara verde de la Amazorinoquia</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi bibendum aliquam elit faucibus cursus. Egestas massa magna porttitor eget.</p>
        </div>

        <div className="intro__buttons">
          <button className="button button--orange">Apoyanos</button>
          <button className="button">Alerta verde</button>
          <button className="button button--outline">Contactanos</button>
        </div>
        <img className='intro__ilustration' src={pajaros} alt="" />
      </section>
      <Experience />

      <Footer />
    </>
  );
};

export default IndexPage;
