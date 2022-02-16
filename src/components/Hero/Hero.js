import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = props => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main left>
        Wecome to <br />
        My personal portfolio
      </SectionTitle>
      <SectionText>
        I'm a Front-End Developer for ChowNow in Los Angeles, CA. I have serious passion for UI
        effects, animations and creating intuitive, dynamic user experiences. Let's make something
        special.
      </SectionText>
      <Button>Contact</Button>
    </LeftSection>
  </Section>
);

export default Hero;
