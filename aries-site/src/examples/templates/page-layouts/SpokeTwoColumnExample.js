import React, { useContext } from 'react';
import {
  Box,
  DataChart,
  Card,
  CardBody,
  CardHeader,
  Grid,
  ResponsiveContext,
} from 'grommet';

import { AppContainer } from './AppContainer';
import {
  HeadingSkeleton,
  MeterSkeleton,
  ParagraphSkeleton,
  TextSkeleton,
} from './skeletons';
import { HubButton } from '.';
import {
  FooterExample,
  HeaderExample,
  HeaderPageExample,
} from '../../components';
import { useDarkMode } from '../../../utils';

export const SpokeTwoColumnExample = () => (
  <AppContainer>
    <HeaderExample />
    <Box flex={false}>
      <HubButton />
      <HeaderPageExample
        pad={{ horizontal: 'medium', top: 'none', bottom: 'medium' }}
      />
    </Box>
    <Box flex="grow">
      <TwoColumnGrid>
        <MeterSkeletonCard />
        <DataChartSkeletonCard />
        {[0, 1].map(item => (
          <TextSkeletonCard key={item} />
        ))}
      </TwoColumnGrid>
    </Box>
    <FooterExample />
  </AppContainer>
);

const TwoColumnGrid = ({ ...rest }) => {
  const size = useContext(ResponsiveContext);
  return (
    <Grid
      columns={{ count: size !== 'small' ? 2 : 1, size: 'flex' }}
      pad={{ horizontal: 'medium' }}
      rows={[['auto', 'full']]}
      gap="medium"
      {...rest}
    />
  );
};

const TextRowSkeleton = () => (
  <Box direction="row" gap="large" wrap>
    <TextSkeleton width="xsmall" margin={{ bottom: 'small' }} />
    <TextSkeleton width="small" margin={{ bottom: 'small' }} />
  </Box>
);

const TextSkeletonCard = () => (
  <Card background="background" fill>
    <CardHeader>
      <HeadingSkeleton />
    </CardHeader>
    <CardBody>
      <TextRowSkeleton />
      <TextRowSkeleton />
      <TextRowSkeleton />
      <TextRowSkeleton />
    </CardBody>
  </Card>
);

const MeterSkeletonCard = () => {
  const size = useContext(ResponsiveContext);

  return (
    <Card background="background" fill>
      <CardHeader>
        <HeadingSkeleton />
      </CardHeader>
      <CardBody
        direction={size !== 'small' ? 'row' : 'column'}
        gap="medium"
        wrap
      >
        <MeterSkeleton />
        <ParagraphSkeleton width="small" numberLines={5} />
      </CardBody>
    </Card>
  );
};

const DataChartSkeletonCard = () => {
  const { value: darkMode } = useDarkMode();
  return (
    <Card background="background" fill>
      <CardHeader>
        <HeadingSkeleton />
      </CardHeader>
      <CardBody align="center">
        <DataChart
          axis={{ x: { granularity: 'coarse' }, y: { granularity: 'coarse' } }}
          chart={{
            property: 'amount',
            color: darkMode ? 'background-front' : 'background-back',
            thickness: 'medium',
          }}
          data={[
            {
              date: '2020-01-15',
              amount: 22,
            },
            {
              date: '2020-02-15',
              amount: 11,
            },
            {
              date: '2020-03-15',
              amount: 33,
            },
            {
              date: '2020-04-15',
              amount: 77,
            },
            {
              date: '2020-05-15',
              amount: 88,
            },
            {
              date: '2020-06-15',
              amount: 22,
            },
            {
              date: '2020-07-15',
              amount: 11,
            },
            {
              date: '2020-08-15',
              amount: 33,
            },
            {
              date: '2020-09-15',
              amount: 77,
            },
            {
              date: '2020-10-15',
              amount: 88,
            },
          ]}
          guide={{ y: { granularity: 'coarse' } }}
          series={['date', 'amount']}
        />
      </CardBody>
    </Card>
  );
};
