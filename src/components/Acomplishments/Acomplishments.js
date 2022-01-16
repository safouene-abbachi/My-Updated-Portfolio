import React from 'react';
import CountUp from 'react-countup';

import { Section, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 46, text: 'Open Source Projects' },
  { number: 10, text: 'Certificates' },
  { number: 1, text: 'Github commit per day' },
  { number: 100, text: 'Live session workshop' },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>
            <CountUp start={0} end={card.number} duration={2.75} />+
          </BoxNum>

          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
