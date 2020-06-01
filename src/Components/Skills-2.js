import React from 'react';
import Skill from './Skill-2';
import Navigator from './Navigator';
import PropTypes from 'prop-types';

function Skills(props) {
  const skillsList = props.skills.map((skill, index) => (
    <ul key={index} className='skills-element'>
      <Skill title={skill.title} skills={skill.skills} />
    </ul>
  ));
  return (
    <div>
      <Navigator />
      <div className='skills'>
        <div className='skills-polygon-yellow-container'>
          <div className='skills-polygon-yellow'></div>
        </div>
        <div className='skills-polygon-pink'></div>
        <div className='skills-page'>
          <div>
            <h2 className='skills-title'>habilidades</h2>
          </div>
          <div className='skill-ul'>{skillsList}</div>
        </div>
      </div>
    </div>
  );
}

Skills.propTypes = {
  skills: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Skills;
