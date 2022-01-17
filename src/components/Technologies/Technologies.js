import React from 'react';
import { DiFirebase, DiReact, DiRust, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I work with state-of-the-art technologies in various areas such as distributed computing, applied cryptography, databases, graph databases, cloud computing, big data, and many more.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem" />
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js, Javascript, and TypeScript
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem" />
        <ListContainer>
          <ListTitle>Backend-End</ListTitle>
          <ListParagraph>
            Experience with  <br />
            Oracle, Postgresql, ArangoDB,  Neo4j, TruenoDB
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiRust size="3rem" />
        <ListContainer>
          <ListTitle>Cyber Security</ListTitle>
          <ListParagraph>
            Experience with <br />
            Applied Cryptography, Confidential Computing, OpenEnclave, Intel SGX SDK, Rust, and C
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>

  </Section>
);

export default Technologies;
