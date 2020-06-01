import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import '../Stylesheets/App.scss';
import Landing2 from './Landing2';
import AboutMe from './AboutMe';
import data from '../Services/data.json';
import ProjectsList from './ProjectList';
import skills from '../Services/skills.json';
import Skills from './Skills-2';

function App() {
  const [dataList, setData] = useState([]);
  const [skillList, setSkills] = useState([]);

  useEffect(() => {
    setData(data);
  }, []);

  useEffect(() => {
    setSkills(skills);
  }, []);

  const renderLanding = () => <Landing2 />;
  const renderAboutMe = () => <AboutMe />;
  const renderProjects = () => <ProjectsList data={dataList} />;
  const renderSkills = () => <Skills skills={skillList} />;

  return (
    <div className='App'>
      <Switch>
        <Route path='/about' render={renderAboutMe} />
        <Route path='/projects' render={renderProjects} />
        <Route path='/skills' render={renderSkills} />
        <Route path='/' render={renderLanding} />
      </Switch>
    </div>
  );
}

export default App;
