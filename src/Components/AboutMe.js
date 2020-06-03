import React from 'react';
import NavigatorScroll from './NavigatorScroll';
// import ProfilePhoto from '../Resources/profile-color.jpg';
import ProfilePhoto from '../Resources/profile.jpeg';
import CV from '../Resources/CV-Sara-Martin-Garagorri.pdf';

function AboutMe() {
  return (
    <div>
      <NavigatorScroll />
      <div className='about-me'>
        <div className='about-me-page'>
          <div>
            <h2 className='about-me-title'>sobre mí</h2>
          </div>
          <div className='about-me-container'>
            <div>
              <img
                className='about-me-img'
                src={ProfilePhoto}
                alt='Sara Martín'
              ></img>
            </div>
            <div className='about-me-description-container'>
              <p className='about-me-description'>
                <strong className='about-me-description-strong'>
                  Desarrolladora front-end
                </strong>{' '}
                junior que decidió reinventarse y apostar por el crecimiento
                personal y por explotar sus capacidades.
              </p>
              <p className='about-me-description'>
                Gracias a mi experiencia previa de{' '}
                <strong className='about-me-description-strong'>
                  4 años como analista de datos
                </strong>{' '}
                he aprendido a trabajar en equipo, a trabajar en remoto y he
                tenido oportunidad de ser formadora de otros compañeros.
              </p>
              <p className='about-me-description'>
                Además, soy una persona{' '}
                <strong className='about-me-description-strong'>
                  organizada y con iniciativa
                </strong>
                , por lo que siempre estoy dispuesta a proponer nuevas ideas.
              </p>
              <button className='about-me-link'>
                <a
                  href={CV}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='about-me-link-a'
                >
                  Ver CV
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
