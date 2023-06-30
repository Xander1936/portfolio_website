import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi there, i'm Alexandre Massoda. <br />
        Welcome To My Personal Portfolio.
      </SectionTitle>
      <SectionText>
      I'm a software developer, with a particular ability to transform a figma design into a React Application using Hooks, complex gradients, CSS grids, TailwindCSS, NextJS and also ThreeJS.
      </SectionText>
      <Button onClick={() => window.location = ' https://linkedin.com/in/alexandre-massoda'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;

// <></>