import React from 'react';
import NavigatorScroll from './NavigatorScroll';
import Project from './Project';
import PropTypes from 'prop-types';

function ProjectList(props) {
  const projectsList = props.data.map((project) => (
    <ul key={project.name} className='projects-element'>
      <Project
        name={project.name}
        month={project.month}
        year={parseInt(project.year)}
        img={project.img}
        tags={project.tags}
        url={project.url}
        website={project.website}
        author={project.author}
      />
    </ul>
  ));
  return (
    <div>
      <NavigatorScroll />
      <div className='projects'>
        <div className='projects-polygon-blue-container'>
          <div className='projects-polygon-blue'></div>
        </div>
        <div className='projects-page'>
          <div>
            <h2 className='projects-title'>proyectos</h2>
          </div>
          <div className='projects-container'>{projectsList}</div>
        </div>
      </div>
    </div>
  );
}

ProjectList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ProjectList;
