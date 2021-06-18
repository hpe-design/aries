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

export const SpokeThreeColumnExample = () => (
  <AppContainer>
    <HeaderExample />
    <Box flex={false}>
      <HubButton />
      <HeaderPageExample
        pad={{ horizontal: 'medium', top: 'none', bottom: 'medium' }}
      />
    </Box>
    <Box flex="grow" gap="medium">
      <ThreeColumnGrid>
        {[0, 1, 2].map(item => (
          <TextCardSkeleton key={item} />
        ))}
      </ThreeColumnGrid>
      <ThreeColumnGrid>
        <MeterCardSkeleton />
        <MeterCardSkeleton />
        <DataChartSkeletonCard />
      </ThreeColumnGrid>
    </Box>
    <FooterExample />
  </AppContainer>
);

const ThreeColumnGrid = ({ ...rest }) => {
  const size = useContext(ResponsiveContext);
  return (
    <Grid
      columns={{ count: size !== 'small' ? 3 : 1, size: 'flex' }}
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

const TextCardSkeleton = ({ ...rest }) => (
  <Box gap="small" {...rest}>
    <HeadingSkeleton />
    <>
      <TextRowSkeleton />
      <TextRowSkeleton />
      <TextRowSkeleton />
      <TextRowSkeleton />
      <TextRowSkeleton />
      <TextRowSkeleton />
      <TextRowSkeleton />
    </>
  </Box>
);

const MeterCardSkeleton = () => {
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
        <MeterSkeleton size="xsmall" thickness="small" />
        <ParagraphSkeleton width="small" numberLines={5} />
      </CardBody>
    </Card>
  );
};

const mockData = [
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
];

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
          data={mockData}
          guide={{ y: { granularity: 'coarse' } }}
          series={['date', 'amount']}
        />
      </CardBody>
    </Card>
  );
};
