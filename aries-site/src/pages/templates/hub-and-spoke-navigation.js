import React from 'react';
import Link from 'next/link';
import { Anchor } from 'grommet';

import { BulletedList, CardGrid, Meta, SubsectionText } from '../../components';
import { HubSpokeCardsExample } from '../../examples';
import { ContentSection, Example, Layout, Subsection } from '../../layouts';
import { getPageDetails, getRelatedContent, nameToPath } from '../../utils';

const title = 'Hub and Spoke Navigation';
const topic = 'Templates';
const page = getPageDetails(title);
const relatedContent = getRelatedContent(title);

const HubSpokeNavigation = () => (
  <Layout title={title}>
    <Meta
      title={title}
      description={page.seoDescription}
      canonicalUrl="https://design-system.hpe.design/templates/hub-and-spoke-navigation"
    />
    <ContentSection>
      <Subsection name={title} level={1} topic={topic}>
        <SubsectionText>{page.description}</SubsectionText>
        <Example code="https://raw.githubusercontent.com/hpe-design/design-system/master/aries-site/src/examples/templates/dashboards/DashboardExample.js">
          {}
        </Example>
      </Subsection>
    </ContentSection>
    <ContentSection>
      <Subsection name="Guidance">
        <SubsectionText>
          Hub &amp; Spoke Navigation works well for applications primarily
          concerned with task execution, as opposed to presenting large volumes
          of content.
        </SubsectionText>
        <SubsectionText>
          The "hub" cleanly presents multiple discreet application sections or
          "spokes." Each "spoke" keeps the user focussed on the task at hand and
          used independently from other spokes.
        </SubsectionText>
        <SubsectionText>
          A hub should consist of no more than five to seven spokes &mdash; if
          more paths are needed, subsequent hubs are always an option. Each step
          down provides navigational context back up the information hierarchy.
          Each page has a primary focus with minimal contextual navigation
          chrome.
        </SubsectionText>
      </Subsection>
      <Subsection name="When to Use Hub &amp; Spoke" level={3} gap="small">
        <SubsectionText>Hub &amp; Spoke should be used when:</SubsectionText>
        <BulletedList
          items={[
            'Users desire focus on a single application or task at a time.',
            `Presenting an overview of the applications, tasks, or content 
            available, with the ability to drill in for detail.`,
            "In cases where a user's device is limited in screen real estate.",
          ]}
        />
      </Subsection>
    </ContentSection>
    <ContentSection>
      <Subsection name="Variants">
        <SubsectionText>
          Depending on use-case, the Hub &amp; Spoke pattern can be executed as
          &nbsp;
          <Link href={nameToPath('Cards')} passHref>
            <Anchor label="Cards" />
          </Link>{' '}
          or as a{' '}
          <Link href={nameToPath('Lists')} passHref>
            <Anchor label="List" />
          </Link>
          .
        </SubsectionText>
      </Subsection>
      <Subsection name="Hub &amp; Spoke as Cards" level={3}>
        <SubsectionText>
          Poke etsy venmo exercitation kogi typewriter pitchfork, mixtape vice
          pabst copper mug minim iceland gluten-free DIY.
        </SubsectionText>
        <Example
          code="https://raw.githubusercontent.com/hpe-design/design-system/master/aries-site/src/examples/templates/hub-spoke-navigation/HubSpokeCardsExample.js"
          template
          width="100%"
        >
          <HubSpokeCardsExample />
        </Example>
      </Subsection>
      <Subsection name="Hub &amp; Spoke as List" level={3}>
        <SubsectionText>
          Retro try-hard heirloom locavore unicorn, forage man braid raw denim
          viral letterpress man bun pour-over lumbersexual vaporware.
        </SubsectionText>
        <Example
          code="https://raw.githubusercontent.com/hpe-design/design-system/master/aries-site/src/examples/templates/dashboards/DashboardExample.js"
          height={{ min: 'small' }}
        >
          {}
        </Example>
      </Subsection>
      <Subsection name="Application Focus" level={3}>
        <SubsectionText>
          Dreamcatcher skateboard artisan letterpress chillwave master cleanse.
        </SubsectionText>
        <Example
          code="https://raw.githubusercontent.com/hpe-design/design-system/master/aries-site/src/examples/templates/dashboards/DashboardExample.js"
          height={{ min: 'small' }}
        >
          {}
        </Example>
      </Subsection>
      <Subsection name="Overview of Options" level={3}>
        <SubsectionText>
          Sushi restaurant's menu. Appetizers, Rolls, Sushi &amp; Sashimi,
          Entrees, Drinks.
        </SubsectionText>
        <Example
          code="https://raw.githubusercontent.com/hpe-design/design-system/master/aries-site/src/examples/templates/dashboards/DashboardExample.js"
          height={{ min: 'small' }}
        >
          {}
        </Example>
      </Subsection>
      <Subsection name="Limited Real Estate" level={3}>
        <SubsectionText>
          Meh bicycle rights tousled live-edge polaroid lo-fi bespoke DIY
          literally succulents post-ironic.
        </SubsectionText>
        <Example
          code="https://raw.githubusercontent.com/hpe-design/design-system/master/aries-site/src/examples/templates/dashboards/DashboardExample.js"
          height={{ min: 'small' }}
        >
          {}
        </Example>
      </Subsection>
    </ContentSection>
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

export default HubSpokeNavigation;
