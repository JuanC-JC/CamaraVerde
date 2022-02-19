import React from 'react'

export const CardHelpUs = (elemento) => {
  return(
    <div className={`helpUsCard ${elemento.position === 'right' && 'helpUsCard--right' }`}>
      <div className= {`helpUsCard__img ${elemento.position === 'right' && 'helpUsCard__img--horizontal' }`} >
        <img src={elemento.image} alt="imagen reduce tu huella de carbono" />
      </div>
      <div className="helpUsCard__text">
        <h3>{elemento.title}</h3>
        <p>
          {elemento.description}
        </p>
      </div>
    </div>
  )
}