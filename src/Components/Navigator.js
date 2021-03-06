import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Resources/S-final-03.png';

function Navigator() {
  return (
    <div className='nav-social-container'>
      <div>
        <nav className='navigator-container'>
          <Link to={`/`}>
            <div className='navigator-section-container'>
              <h3 className='navigator-section'>inicio</h3>
            </div>
          </Link>
          <Link to={`/about`}>
            <div className='navigator-section-container'>
              <h3 className='navigator-section'>
                <i className='fas fa-chevron-left'></i>sobre mí
                <i className='fas fa-chevron-right'></i>
              </h3>
            </div>
          </Link>
          <Link to={`/projects`}>
            <div className='navigator-section-container'>
              <h3 className='navigator-section'>
                <i className='fas fa-chevron-left'></i>proyectos
                <i className='fas fa-chevron-right'></i>
              </h3>
            </div>
          </Link>
          <Link to={`/skills`}>
            <div className='navigator-section-container'>
              <h3 className='navigator-section'>
                <i className='fas fa-chevron-left'></i>habilidades
                <i className='fas fa-chevron-right'></i>
              </h3>
            </div>
          </Link>
        </nav>
      </div>
      <div className='navigator-social-container'>
        <a href='https://github.com/smgaragorri' target='noopener noreferrer'>
          <i className='icons fab fa-github-alt'></i>
        </a>
        <a
          href='https://www.linkedin.com/in/sara-martin-garagorri/'
          target='noopener noreferrer'
        >
          <i className='icons fab fa-linkedin-in'></i>
        </a>
        <a href='mailto:smgaragorri@gmail.com'>
          <i className='icons fas fa-envelope'></i>
        </a>
        <a href='https://twitter.com/smgaragorri' target='noopener noreferrer'>
          <i className='icons fab fa-twitter'></i>
        </a>
      </div>
    </div>
  );
}

export default Navigator;
