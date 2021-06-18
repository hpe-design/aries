import React from 'react';
import { Box } from 'grommet';

export const AppContainer = ({ ...rest }) => (
  // wrapping in this way ensures the page level scroll is always anchored to
  // right edge of browser window
  <Box background="background" overflow="auto" fill>
    <Box width={{ max: 'xxlarge' }} margin="auto" gap="medium" fill {...rest} />
  </Box>
);
