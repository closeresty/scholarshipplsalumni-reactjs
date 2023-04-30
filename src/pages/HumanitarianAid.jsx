import React from 'react';
import { Navbar, HeroTwo, Footer, BackToTop, Switcher } from '../components';
import { humanitarianAidText } from '../data/humanitarian';

const HumanitarianAid = () => {
  const heroTwoData = humanitarianAidText;

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

export default HumanitarianAid