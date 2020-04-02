import React from 'react';

import { Meta, SubsectionText } from '../../components';
import {
  ChangePasswordExample,
  CustomizeExample,
  FilterExample,
  PayExample,
  SettingsExample,
  ShippingExample,
  SignInExample,
  SignUpExample,
  SortExample,
} from '../../examples';
import { ContentSection, Example, Layout, Subsection } from '../../layouts';
import { getPageDetails } from '../../utils';

const title = 'Forms';
const topic = 'Templates';
const page = getPageDetails(title);

const Forms = () => {
  return (
    <Layout title={title}>
      <Meta
        title={title}
        description={page.seoDescription}
        canonicalUrl="https://design-system.hpe.design/templates/forms"
      />
      <ContentSection>
        <Subsection name={title} level={1} topic={topic}>
          <SubsectionText>
            Template patterns for common form use cases, from application
            configurations to payment acceptance for the latest as-a-service
            product offerings.
          </SubsectionText>
        </Subsection>
      </ContentSection>
      <ContentSection>
      <Subsection name="Sign Up">
            <SignUpExample />
        </Subsection>
        <Subsection name="Sign Up">
          <Example
            code="https://raw.githubusercontent.com/hpe-design/design-system/master/aries-site/src/examples/templates/forms/SignUpExample.js"
            figma="https://www.figma.com/file/K0PppsSh6aQSszqlwKAekg/hpe-design-system-stickers?node-id=259%3A86"
          >
            <SignUpExample />
          </Example>
        </Subsection>
      </ContentSection>
      <ContentSection>
        <Subsection name="Sign In">
          <Example
            code="https://raw.githubusercontent.com/hpe-design/design-system/master/aries-site/src/examples/templates/forms/SignInExample.js"
            figma="https://www.figma.com/file/K0PppsSh6aQSszqlwKAekg/hpe-design-system-stickers?node-id=242%3A28"
          >
            <SignInExample />
          </Example>
        </Subsection>
      </ContentSection>
      <ContentSection>
        <Subsection name="Filter">
          <Example
            code="https://raw.githubusercontent.com/hpe-design/design-system/master/aries-site/src/examples/templates/forms/FilterExample.js"
            figma="https://www.figma.com/file/K0PppsSh6aQSszqlwKAekg/hpe-design-system-stickers?node-id=251%3A437"
          >
            <FilterExample />
          </Example>
        </Subsection>
      </ContentSection>
      <ContentSection>
        <Subsection name="Sort">
          <Example code="https://raw.githubusercontent.com/hpe-design/design-system/master/aries-site/src/examples/templates/forms/SortExample.js">
            <SortExample />
          </Example>
        </Subsection>
      </ContentSection>
      <ContentSection>
        <Subsection name="Change Password">
          <Example
            code="https://raw.githubusercontent.com/hpe-design/design-system/master/aries-site/src/examples/templates/forms/ChangePasswordExample.js"
            figma="https://www.figma.com/file/K0PppsSh6aQSszqlwKAekg/hpe-design-system-stickers?node-id=259%3A85"
          >
            <ChangePasswordExample />
          </Example>
        </Subsection>
      </ContentSection>
      <ContentSection>
        <Subsection name="Settings">
          <Example
            code="https://raw.githubusercontent.com/hpe-design/design-system/master/aries-site/src/examples/templates/forms/SettingsExample.js"
            figma="https://www.figma.com/file/K0PppsSh6aQSszqlwKAekg/hpe-design-system-stickers?node-id=267%3A77"
          >
            <SettingsExample />
          </Example>
        </Subsection>
      </ContentSection>
      <ContentSection>
        <Subsection name="Pay">
          <Example
            code="https://raw.githubusercontent.com/hpe-design/design-system/master/aries-site/src/examples/templates/forms/PayExample.js"
            figma="https://www.figma.com/file/K0PppsSh6aQSszqlwKAekg/hpe-design-system-stickers?node-id=0%3A1"
          >
            <PayExample />
          </Example>
        </Subsection>
      </ContentSection>
      <ContentSection>
        <Subsection name="Shipping">
          <Example
            code="https://raw.githubusercontent.com/hpe-design/design-system/master/aries-site/src/examples/templates/forms/ShippingExample.js"
            figma="https://www.figma.com/file/K0PppsSh6aQSszqlwKAekg/hpe-design-system-stickers?node-id=251%3A189"
          >
            <ShippingExample />
          </Example>
        </Subsection>
      </ContentSection>
      <ContentSection>
        <Subsection name="Customize">
          <Example
            code="https://raw.githubusercontent.com/hpe-design/design-system/master/aries-site/src/examples/templates/forms/CustomizeExample.js"
            figma="https://www.figma.com/file/K0PppsSh6aQSszqlwKAekg/hpe-design-system-stickers?node-id=259%3A87"
          >
            <CustomizeExample />
          </Example>
        </Subsection>
      </ContentSection>
    </Layout>
  );
};
export default Forms;
