import React from 'react';
import { Anchor } from 'grommet';

import { BulletedList, CardGrid, Meta, SubsectionText } from '../../components';
import { ContentSection, Layout, Subsection } from '../../layouts';
import { getPageDetails, getRelatedContent } from '../../utils';

const title = 'Navigation';
const topic = 'Templates';
const page = getPageDetails(title);
const relatedContent = getRelatedContent(title);

const navPatterns = ['Hub and Spoke Navigation', 'Persistent Navigation'];
const navCards = navPatterns.map(pattern => getPageDetails(pattern));
const globalSidebar = getPageDetails('Global Sidebar');
const routerExample = getPageDetails('React Router');

const Navigation = () => (
  <Layout title={title}>
    <Meta
      title={title}
      description={page.seoDescription}
      canonicalUrl="https://design-system.hpe.design/templates/navigation"
    />
    <ContentSection>
      <Subsection name={title} level={1} topic={topic}>
        <SubsectionText>{page.description}</SubsectionText>
        <SubsectionText>
          View navigation patterns and templates for HPE applications, learn how
          to incorporate Global Sidebar into applications living in the HPE
          as-a-service ecosystem, and see how to implement leading React routing
          packages with navigation templates.
        </SubsectionText>
      </Subsection>
    </ContentSection>
    <ContentSection>
      <Subsection name="Patterns">
        <SubsectionText>
          Recommended patterns, templates, and examples for use within the
          context of a single application, website, or subsection within an
          application. Plus, demonstration on how local navigation patterns may
          be combined with the{' '}
          <Anchor href="#hpe-global-navigation">Global Sidebar</Anchor> for easy
          maneuverability across applications within the HPE ecosystem.
        </SubsectionText>
      </Subsection>
      {navCards.length > 0 ? (
        <Subsection name="Navigation Within an Application" level={3}>
          <SubsectionText>
            Flexible in nature, the following patterns can be applied to present
            contextual, supplemental, and hierachical needs within an
            application or subsection of a larger application.
          </SubsectionText>
          <BulletedList
            items={[
              `Hub & Spoke patterns lend themselves well to applications 
              primarily concerned with task execution.`,
              `Reach for Persistent Navigation patterns when a user needs 
              orientation or easy access to appication sections.`,
            ]}
          />
          <CardGrid cards={navCards} />
        </Subsection>
      ) : null}
      {globalSidebar ? (
        <Subsection name="HPE Global Navigation" level={3}>
          <SubsectionText>
            In the context of HPE's expanding as-a-service portfolio, HPE global
            navigation demonstrates how local app navigation patterns may be
            combined with the HPE Global Sidebar.
          </SubsectionText>
          <CardGrid cards={[globalSidebar]} />
        </Subsection>
      ) : null}
    </ContentSection>
    {routerExample ? (
      <Subsection name="Routing">
        <SubsectionText>
          How to use leading React routing packages alongside HPE Carte Design
          System navigation templates.
        </SubsectionText>
        <CardGrid cards={[routerExample]} />
      </Subsection>
    ) : null}
    <ContentSection>
      {relatedContent.length > 0 ? (
        <Subsection name="Related">
          <SubsectionText>
            Related content you may find useful when using {title}.
          </SubsectionText>
          <CardGrid cards={relatedContent} />
        </Subsection>
      ) : null}
    </ContentSection>
  </Layout>
);

export default Navigation;
