import React from 'react';
import PropTypes from 'prop-types';

function Skill(props) {
  return (
    <li>
      <div className='skill-el-container'>
        <div
          className={`skill-el-title-container skill-el-title-container-${props.title}`}
        >
          <h3 className='skill-el-title'>{props.title}</h3>
        </div>
        <div className={`skill-list-container `}>
          <ul className='skill-list-el'>
            {props.skills.map((skill, index) => (
              <li key={index} className='skill-list-li'>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Skill;
