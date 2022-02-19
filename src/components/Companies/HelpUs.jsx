import React from 'react';
import Image01 from '../../images/Companies/HelpUs/image_01.png'
import Image02 from '../../images/Companies/HelpUs/image_02.png'
import Image03 from '../../images/Companies/HelpUs/image_03.png'
import '../../styles/components/Companies/HelpUs.scss'

import {CardHelpUs} from './CardHelpUs'

const list = [
  {
    image: Image01,
    title: 'Reduce tu huella de carbono',
    description: `
            La huella de carbono es una herramienta para conocer ¿cuál es nuestro impacto medioambiental? Las empresas son agentes sociales 
            imprescindibles para lograr una transformación hacia una sociedad baja en carbono y respetuosa con el cambio climático. ¿Qué hacemos? 
            Desde Cámara Verde de la Amazorinoquía alineamos los objetivos estratégicos de tu empresa con los desafíos socio-ambientales globales 
            desde una metodología basada en el levantamiento y análisis de la información de tu empresa para juntos disminuir la huella de carbono 
            por medio de la reforestación.`
  },
  {
    image: Image02,
    title: '',
    description: `
            A través del programa “Sembrando Futuro” que va enfocado en la realización de huertas urbanas, se busca abarcar una de las principales problemáticas 
            que han estado presentes a nivel mundial y se incrementaron a raíz de la pandemia generada por COVID - 19, las cuales son: afectaciones en la salud y 
            bienestar de las comunidades por la poca accesibilidad y alza en la canasta básica, agravando la crisis de la seguridad alimentaria. Con tu ayuda podemos 
            llegar a más territorios implementando el programa “Sembrando Futuro”, fortaleciendo la seguridad y soberanía alimentaria y a su vez contribuyendo a la 
            mitigación del cambio climático.`,
    position: 'right'
  },
  {
    image: Image03,
    title: '',
    description: `
    Desde el trabajo con las comunidades resaltamos el papel que tienen las mujeres en el liderazgo de los procesos que se desarrollan en sus territorios. Por esto, 
    con el objetivo de mantener una participación activa en todos los niveles de adopción de decisiones sobre el medio ambiente, la integración de sus preocupaciones y 
    sus perspectivas en políticas ambientales, es fundamental para el desarrollo de un país que busca reducir las brechas existentes en temas de género, generar espacios 
    de participación, formación, visibilización y construcción colectiva.`
  },
]

export default function HelpUs() {
  return (
    <section className='helpUs'>
      <h2>Cómo puedo ayudar desde mi empresa?</h2>

      {
        list.map(elemento=>(
          <CardHelpUs 
            title={elemento.title} 
            description={elemento.description}
            image={elemento.image} 
            position={elemento.position}
            />
        ))
      }
    </section>
  );
};