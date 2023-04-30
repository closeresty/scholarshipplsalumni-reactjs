import React from 'react';
import { Navbar, HeroTwo, Footer, BackToTop, Switcher } from '../components';
import { projectsText } from '../data/projects';

const Projects = () => {
  const heroTwoData = projectsText;

  return (
    <>
     <div>
      <Navbar />
      <HeroTwo heroTwoData={heroTwoData} />
      <Footer />
      <BackToTop />
      <Switcher />
    </div>
    </>
  )
}

export default Projects