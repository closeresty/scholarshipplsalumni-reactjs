import React, { useEffect } from 'react';
import { aboutPLS } from '../constants';
import AboutSummaryPresentation from './presentational-components/AboutSummaryPresentation';
import tw from 'twin.macro'

const AboutSummarySection = tw.section`
  relative md:py-24 py-16 bg-gray-50
`;

const Grid = tw.div`
  grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px] rounded-lg
`;



const AboutSummary = () => {
  useEffect(() => {
    feather.replace();
  }, []);

  return (
    <AboutSummarySection>
      <div className="container">
        <Grid>
          {aboutPLS.map((as) => (
            <AboutSummaryPresentation key={as.id} as={as} />
          ))}
        </Grid>
      </div>
    </AboutSummarySection>
  );
};

export default AboutSummary;
