import React from 'react';
import Image01 from '../../images/Companies/HelpUs/image_01.png'
import Image02 from '../../images/Companies/HelpUs/image_02.png'
import Image03 from '../../images/Companies/HelpUs/image_03.png'
import '../../styles/components/Companies/HelpUs.scss'

export default function HelpUs() {
  return (
    <section className='helpUs'>
      <h2>Cómo puedo ayudar desde mi empresa?</h2>

      <div className="helpUsCard">
        <div className="helpUsCard__img">
          <img src={Image01} alt="imagen reduce tu huella de carbono" />
        </div>
        <div className="helpUsCard__text">
          <h3>Reduce tu huella de carbono</h3>
          <p>
          La huella de carbono es la herramienta para conocer cuál es nuestro impacto
          medioambiental. Las empresas son agentes sociales imprescindibles para lograr una
          transformación hacia una sociedad baja en carbono y respetuosa con el cambio
          climático.
          ¿Qué hacemos? desde cámara verde de la Amazorinoquia alineamos los objetivos
          estratégicos de tu empresa con los desafíos socio-ambientales globales desde una
          metodología basada en el levantamiento y análisis de la información de tu empresa
          para juntos disminuir la huella de carbono por medio de la reforestación.
          </p>
        </div>
      </div>

      <div className="helpUsCard helpUsCard--right">
        <div className="helpUsCard__img helpUsCard__img--horizontal">
          <img src={Image02} alt="imagen reduce tu huella de carbono" />
        </div>
        <div className="helpUsCard__text">
          <h3>Reduce tu huella de carbono</h3>
          <p>
          A través del programa sembrando futuro que va enfocado en la realización de huertas
          urbanas, se busca abarcar una de las principales problemáticas que han estado presentes a
          nivel mundial y se incrementaron a raíz de la pandemia generada por COVID - 19, que son:
          afectaciones en la salud y bienestar de las comunidades por la poca accesibilidad y alza en la
          canasta básica agravando la crisis de la seguridad alimentaria.

          Con tu ayuda podemos llegar a más territorios implementando el programa sembrando el
          futuro, fortaleciendo la seguridad y soberanía alimentaria y a su vez contribuyendo a la
          mitigación del cambio climático.
          </p>
        </div>
      </div>

      <div className="helpUsCard">
        <div className="helpUsCard__img">
          <img src={Image03} alt="imagen reduce tu huella de carbono" />
        </div>
        <div className="helpUsCard__text">
          <h3>Reduce tu huella de carbono</h3>
          <p>
          Desde el trabajo en las comunidades resaltamos el papel que tienen las mujeres en el
          liderazgo de los procesos que se desarrollan en sus territorios, para mantener una
          participación activa en todos los niveles de adopción de decisiones sobre el medio
          ambiente, la integración de sus preocupaciones y sus perspectivas en políticas es
          fundamental para el desarrollo de un país que busca reducir las brechas existentes en
          temas de género a partir de espacios de participación, formación, visibilizacion y
          construcción colectiva.
          </p>
        </div>
      </div>

    </section>
  );
};
