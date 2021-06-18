import React from 'react';
import { Box } from 'grommet';

import { AppContainer } from './AppContainer';
import { ListSkeleton } from './skeletons';
import {
  FooterExample,
  HeaderExample,
  HeaderPageExample,
} from '../../components';

export const HubListExample = () => (
  <AppContainer>
    <HeaderExample />
    <HeaderPageExample />
    <Box flex="grow">
      <ListSkeleton pad={{ horizontal: 'medium' }} />
    </Box>
    <FooterExample />
  </AppContainer>
);
