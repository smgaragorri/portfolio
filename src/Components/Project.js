import React from 'react';
import PropTypes from 'prop-types';

function Project(props) {
  const images = require.context('../Resources/projects', true);
  let img = images('./' + props.img);
  return (
    <li>
      <div className='project-container-header'>
        <div>
          <p key className={`project-author-${props.author}`}>
            {props.author}
          </p>
        </div>
        <div className='project-link-container'>
          <div>
            <a
              className='project-link'
              href={props.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              <p className='project-code'>código</p>
              <i className='fas fa-code'></i>
            </a>
          </div>
          <div>
            <a
              className='project-link'
              href={props.website}
              target='_blank'
              rel='noopener noreferrer'
            >
              <p className='project-website'>web</p>
              <i className='far fa-window-maximize'></i>
            </a>
          </div>
        </div>
      </div>
      <p className='project-name'>{props.name}</p>
      <p className='project-date'>
        {props.year}
        <i className='project-date-separate fas fa-minus'></i>
        {props.month}
      </p>
      <a href={props.website} target='_blank' rel='noopener noreferrer'>
        <img className='project-img' src={img} alt={props.name}></img>
      </a>
      <div className='project-tag-container'>
        {props.tags.map((tag, index) => (
          <p key={index} className={`project-tag project-tag-${tag}`}>
            <span>{tag}</span>
          </p>
        ))}
      </div>
    </li>
  );
}

Project.propTypes = {
  name: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string).isRequired,
  url: PropTypes.string.isRequired,
  website: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};

export default Project;
