import React from 'react';
import { Box, Card, CardBody, CardHeader, CardFooter, Grid } from 'grommet';

import { AppContainer } from './AppContainer';
import { HeadingSkeleton, ParagraphSkeleton } from './skeletons';
import {
  FooterExample,
  HeaderExample,
  HeaderPageExample,
} from '../../components';
import { useDarkMode } from '../../../utils';

export const HubCardsExample = () => (
  <AppContainer>
    <HeaderExample />
    <HeaderPageExample />
    <Box flex="grow">
      <Grid
        columns="medium"
        pad={{ horizontal: 'medium' }}
        rows={[['auto', 'full']]}
        gap="medium"
      >
        {[0, 1, 2, 3, 4].map(item => (
          <SkeletonCard key={item} />
        ))}
      </Grid>
    </Box>
    <FooterExample />
  </AppContainer>
);

const SkeletonCard = () => {
  const { value: darkMode } = useDarkMode();
  return (
    <Card background="background" fill>
      <CardHeader>
        <HeadingSkeleton />
      </CardHeader>
      <CardBody>
        <ParagraphSkeleton />
      </CardBody>
      <CardFooter
        background={darkMode ? 'background-front' : 'background-back'}
        pad="medium"
        flex={false}
      />
    </Card>
  );
};
