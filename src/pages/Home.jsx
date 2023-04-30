import React from 'react';
import { Navbar, Hero, AboutSummary, AdmissionAds, NewsSummary, Affiliations, Footer, BackToTop, Switcher } from '../components';


const Home = () => {
  return (
    <>
    <div>
      <Navbar />
      <Hero />
      <AboutSummary />
      <AdmissionAds />
      {/* <NewsSummary /> */}
      <Affiliations />
      <Footer />
      <BackToTop />
      <Switcher />
    </div>
    </>
  )
}

export default Home;
