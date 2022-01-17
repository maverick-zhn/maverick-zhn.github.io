import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ResearchStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Papers } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="research">
    <SectionDivider />
    <SectionTitle main>Research</SectionTitle>
    <GridContainer>
      {Papers.map(({ id, title, description, authors, url }) => (
        <BlogCard key={id}>
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
          </TitleContent>
          <CardInfo>{description}</CardInfo>
          <UtilityList>
            <ExternalLinks href={url}>Online Article</ExternalLinks>
          </UtilityList>
        </BlogCard>

      ))}
    </GridContainer>
  </Section>
);

export default Projects;