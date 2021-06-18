import React from 'react';
import { Box, Button } from 'grommet';
import { FormPrevious } from 'grommet-icons';

export const HubButton = () => (
  // negative margin allows icon to align with page content
  <Box pad={{ horizontal: 'medium' }} margin={{ left: '-16px' }} flex={false}>
    <Button alignSelf="start" label="Back to Hub" icon={<FormPrevious />} />
  </Box>
);
