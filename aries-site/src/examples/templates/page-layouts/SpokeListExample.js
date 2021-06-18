import React from 'react';
import { Box } from 'grommet';

import { AppContainer } from './AppContainer';
import { ListSkeleton } from './skeletons';
import { HubButton } from '.';
import {
  FooterExample,
  HeaderExample,
  HeaderPageExample,
} from '../../components';

export const SpokeListExample = () => (
  <AppContainer>
    <HeaderExample />
    <Box flex={false}>
      <HubButton />
      <HeaderPageExample
        pad={{ horizontal: 'medium', top: 'none', bottom: 'medium' }}
      />
    </Box>
    <Box flex="grow">
      <ListSkeleton pad={{ horizontal: 'medium' }} />
    </Box>
    <FooterExample />
  </AppContainer>
);
