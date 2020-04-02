import React from 'react';
import {
  Anchor,
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  Header,
  Heading,
  MaskedInput,
  Grommet,
  Text,
  TextInput,
} from 'grommet';

import { FormContainer } from '.';
import { emailMask, emailValidation, passwordRulesStrong } from './formHelpers';

export const SignUpExample = () => {
  const [formValues, setFormValues] = React.useState({
    email: 'jane.smith@hpe.com',
  });

  // eslint-disable-next-line no-unused-vars
  const onSubmit = ({ value, touched }) => {
    // Your submission logic here
  };

  return (
    <FormContainer width="medium">
      <Box gap="medium">
        <Header
          direction="column"
          align="start"
          gap="xxsmall"
          pad={{ horizontal: 'xxsmall' }}
        >
          <Heading level={3} margin="none">
            Sign Up
          </Heading>
          <Text>for a Hewlett Packard Enterprise account</Text>
        </Header>
        <Box
          // Padding used to prevent focus from being cutoff
          pad={{ horizontal: 'xxsmall' }}
        >
          <Form
            validate="blur"
            value={formValues}
            onChange={setFormValues}
            onSubmit={({ value, touched }) => onSubmit({ value, touched })}
          >
            <FormField
              label="Email"
              htmlFor="email-sign-up"
              name="email"
              validate={emailValidation}
            >
              <MaskedInput
                id="email-sign-up"
                name="email"
                mask={emailMask}
                type="email"
              />
            </FormField>
            <FormField
              label="Full Name"
              htmlFor="fullName-sign-up"
              name="fullName"
              required
            >
              <TextInput
                id="fullName-sign-up"
                name="fullName"
                placeholder="Jane Smith"
              />
            </FormField>
            <FormField
              label="Password"
              htmlFor="password-sign-up"
              name="password"
              help="Include at least 8 characters, a lowercase letter, an
              uppercase letter, a number, and a special character"
              validate={passwordRulesStrong}
            >
              <TextInput
                id="password-sign-up"
                name="password"
                placeholder="•••••••••••••••"
                type="password"
              />
            </FormField>
            <CheckBox
              name="termsAndPrivacy"
              label={
                <Text>
                  I accept the HPE{' '}
                  <Anchor
                    label="Terms of Use"
                    href="#"
                    target="_blank"
                    rel="noreferrer noopener"
                    color="blue!"
                  />{' '}
                  and{' '}
                  <Anchor
                    label="Privacy Policy"
                    href="#"
                    target="_blank"
                    rel="noreferrer noopener"
                    color="blue!"
                  />
                </Text>
              }
            />
            <Box align="start" margin={{ top: 'medium', bottom: 'small' }}>
              <Button label="Sign up" primary type="submit" />
            </Box>
          </Form>
        </Box>
      </Box>
    </FormContainer>
  );
};
