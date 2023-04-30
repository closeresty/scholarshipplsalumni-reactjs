import React from 'react'
import { Navbar, HeroTwo, WhoWeAre, WhoWeAreTwo, CardTeam, CardPartners, Footer, BackToTop, Switcher } from '../components';
import { aboutUs, whoWeAre, whoWeAreTwo } from '../constants';
import { team, teamText } from '../data/team';
import { partners, partnersText } from '../data/partners';

const AboutUs = () => {
  const heroTwoData = aboutUs;
  const teamData = team;
  const teamTextData = teamText;
  return (
    <>
    <div>
      <Navbar />
      <HeroTwo heroTwoData={heroTwoData} />
      <WhoWeAre whoWeAre={whoWeAre} />
      <WhoWeAreTwo whoWeAreTwo={whoWeAreTwo} />
      <CardTeam teamData={teamData} teamTextData={teamTextData} />
      <CardPartners partners={partners} partnersText={partnersText}/>
      <Footer />
      <BackToTop />
      <Switcher />
    </div>
    </>
  )
}

export default AboutUs