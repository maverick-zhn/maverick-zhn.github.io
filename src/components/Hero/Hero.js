import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To <br />
        Dr. Palacios Portfolio
      </SectionTitle>
      <SectionText>
        Dr. Palacios is a Fulbright Alumn with the Department of Computer Science at Purdue University. Dr. Palacios' research interests include graph theory, graph databases, distributed computing, edge computing, applied cryptography, systems, computer networks, blockchain, graph data science, and cyber security.
      </SectionText>
      <Button onClick={() => window.location = 'https://scholar.google.com/citations?user=2_dYV3IAAAAJ&hl=en'}>
        Learn More
      </Button>
    </LeftSection>
  </Section>

);

export default Hero;