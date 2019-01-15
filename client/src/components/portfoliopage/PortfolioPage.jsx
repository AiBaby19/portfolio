import React from 'react';
import ProjectList from './ProjectsList';
import './portfolioPage.css';

const PortfolioPage = () => {
  return (
    <div>
      <h1 className="project-headline">Recent Work</h1>
      <ProjectList />
    </div>
  );
}

export default PortfolioPage;
