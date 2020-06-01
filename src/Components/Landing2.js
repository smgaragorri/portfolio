import React from 'react';
import Navigator from './Navigator';

function Landing2() {
  return (
    <div>
      <Navigator />
      <div className='landing'>
        <div className='landing-polygon-yellow'></div>
        <div className='landing-polygon-pink'></div>
        <div className='landing-page'>
          <div className='landing-title-container'>
            <h1>
              <p className='landing-title'>sara martín garagorri</p>
            </h1>
            <h2 className='landing-subtitle'>front end developer</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing2;
