import React from 'react';

import {
  Section,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        Safouene's Portfolio
      </SectionTitle>
      <SectionText>
        "Our greatest weakness lies in giving up. The most certain way to
        succeed is always to try just one more time." —Thomas A. Edison
      </SectionText>
      <Button onClick={() => (window.location = 'https://google.com')}>
        Learn More
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
