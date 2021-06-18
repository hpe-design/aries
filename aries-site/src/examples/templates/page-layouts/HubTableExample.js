import React from 'react';
import { Box } from 'grommet';

import { AppContainer } from './AppContainer';
import { TableSkeleton } from './skeletons';
import {
  FooterExample,
  HeaderExample,
  HeaderPageExample,
} from '../../components';
import { FiltersProvider, FilterControls } from '../FilterControls';

export const HubTableExample = () => (
  <AppContainer>
    <HeaderExample />
    <HeaderPageExample action={false} />
    <Box pad={{ horizontal: 'medium', vertical: 'small' }} flex="grow">
      <FiltersProvider>
        <Box gap="medium">
          <FilterControls
            data={[]}
            filters={[]}
            searchFilter={{ placeholder: 'Search servers...' }}
          />
          <Box overflow="auto">
            <TableSkeleton />
          </Box>
        </Box>
      </FiltersProvider>
    </Box>
    <FooterExample />
  </AppContainer>
);
