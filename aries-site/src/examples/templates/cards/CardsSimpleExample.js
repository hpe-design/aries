import React from 'react';
import { Box, Card, CardBody, Grid, Text } from 'grommet';

import { cardSize } from './cardVariants';
import { data } from './data';

export const CardsSimpleExample = () => {
  return (
    <Box background="background-back" overflow="auto" pad="medium" fill>
      <Grid columns={{ count: 'fit', size: cardSize }} gap="medium">
        {data &&
          data.map(({ displayName: title, location: subtitle }, index) => (
            <Card key={index}>
              <CardBody>
                <Text color="text-strong" size="xxlarge" weight="bold">
                  {title}
                </Text>
                <Text>{subtitle}</Text>
              </CardBody>
            </Card>
          ))}
      </Grid>
    </Box>
  );
};
