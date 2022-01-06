import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';

import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from '../../styles/GlobalComponents';
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <br />
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I've worked with a range of technologies in the development world. From
      Back-end to Front-end.
    </SectionText>
    <List>
      <ListItem>
        <DiReact color="aqua" size="3rem" />
        <ListContainer>
          <listTitle>Front-End</listTitle>
          <ListParagraph>
            Experience with <br />
            React.js / Angular / Vue.js
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase color="green" size="3rem" />
        <ListContainer>
          <listTitle>Back-End</listTitle>
          <ListParagraph>
            Experience with <br />
            Node and Databases
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiZend color="coral" size="3rem" />
        <ListContainer>
          <listTitle>UI/UX</listTitle>
          <ListParagraph>
            Experience with <br />
            tools like Figma/Zeplin
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
