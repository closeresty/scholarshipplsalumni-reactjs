import React from 'react';
import { useParams } from 'react-router-dom'
import { Navbar, HeroTwo, DisplayDetailsTwo, Footer, BackToTop, Switcher } from '../components';
import { aboutPLS } from '../constants';
import { blogsText } from '../data/blogs';

const AboutPLS = () => {
  const { id } = useParams();
  const heroTwoData = blogsText;

  return (
    <>
    <div>
      <Navbar />
      <HeroTwo heroTwoData={heroTwoData} />
      <DisplayDetailsTwo id={id} />
      <Footer />
      <BackToTop />
      <Switcher />
    </div>
    </>
  )
}

export default AboutPLS