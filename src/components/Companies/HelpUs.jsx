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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu risus, eu malesuada egestas a, ultrices. Mauris ut enim aliquet a nunc dictum aliquet.
            Vel gravida eget consectetur turpis amet feugiat tincidunt consectetur ultrices. Integer at consectetur at aliquam odio maecenas sapien.
            Egestas aliquet habitasse erat scelerisque. Bibendum tempor semper quam viverra porttitor volutpat justo tortor.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu risus, eu malesuada egestas a, ultrices. Mauris ut enim aliquet a nunc dictum aliquet.
            Vel gravida eget consectetur turpis amet feugiat tincidunt consectetur ultrices. Integer at consectetur at aliquam odio maecenas sapien.
            Egestas aliquet habitasse erat scelerisque. Bibendum tempor semper quam viverra porttitor volutpat justo tortor.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu risus, eu malesuada egestas a, ultrices. Mauris ut enim aliquet a nunc dictum aliquet.
            Vel gravida eget consectetur turpis amet feugiat tincidunt consectetur ultrices. Integer at consectetur at aliquam odio maecenas sapien.
            Egestas aliquet habitasse erat scelerisque. Bibendum tempor semper quam viverra porttitor volutpat justo tortor.
          </p>
        </div>
      </div>

    </section>
  );
};
