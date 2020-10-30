import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  CardBody,
  Grid,
  Header,
  Heading,
  InfiniteScroll,
  RangeInput,
  Text,
} from 'grommet';
import * as GrommetIcons from 'grommet-icons';
import { Add, Subtract } from 'grommet-icons';

import { FilterControls } from './FilterControls';

const Icons = Object.entries(GrommetIcons).filter(
  icon => typeof icon[1] === 'function',
);

const IconContainer = ({ ...rest }) => (
  <Box
    align="center"
    border
    gap="small"
    pad={{ horizontal: 'medium', top: 'small', bottom: 'xsmall' }}
    round="xsmall"
    fill
    {...rest}
  />
);

export const IconDemo = () => {
  const [scale, setScale] = useState(100);
  const baseSpacing = 24;
  const [cardSize, setCardSize] = useState({
    height: `${baseSpacing * 9}px`,
    width: `${baseSpacing * 12}px`,
  });

  useEffect(() => {
    const nextHeight = `${scale * 0.01 * baseSpacing * 10}px`;
    const nextWidth = `${scale * 0.01 * baseSpacing * 12}px`;

    setCardSize({ height: nextHeight, width: nextWidth });
  }, [scale, setCardSize, baseSpacing]);

  const [data, setData] = useState(Icons);

  return (
    <Box background="background-front" round="small" pad="medium" gap="medium">
      <ControlsContainer>
        <FilterControls allData={Icons} dataState={{ data, setData }} />
        <SizeControl sizeState={{ value: scale, setValue: setScale }} />
      </ControlsContainer>
      {data && <IconsGrid cardSize={cardSize} data={data} />}
    </Box>
  );
};

const ControlsContainer = ({ children }) => (
  <Header direction="column" align="start" pad={{ top: 'medium' }}>
    <Heading level={2} margin={{ bottom: 'small', top: 'none' }}>
      Grommet Icons
    </Heading>
    <Box direction="row" align="end" justify="between" fill>
      {children}
    </Box>
  </Header>
);

ControlsContainer.propTypes = {
  children: PropTypes.node,
};

const IconsGrid = ({ cardSize, data }) => (
  <Box
    background="background-back"
    height="500px"
    overflow="auto"
    pad={{ horizontal: 'medium', top: 'large', bottom: 'xlarge' }}
    round="xsmall"
  >
    <Grid
      columns={{ count: 'fill', size: cardSize.width }}
      rows="auto"
      gap="medium"
    >
      <InfiniteScroll items={data}>
        {icon => {
          return (
            <Card key={icon[0]} height={cardSize.height} width={cardSize.width}>
              <CardBody align="center" gap="medium" justify="center" flex>
                <Box
                  direction="row"
                  gap="small"
                  justify="center"
                  fill="horizontal"
                >
                  <IconContainer>
                    {icon[1]({
                      style: { width: 'auto', height: 'auto' },
                    })}
                    <Text>Standard</Text>
                  </IconContainer>
                  <IconContainer>
                    {icon[1]({
                      strokeLinecap: 'round',
                      style: { width: 'auto', height: 'auto' },
                    })}
                    <Text>Rounded</Text>
                  </IconContainer>
                </Box>
                <Text weight={600}>{icon[0]}</Text>
              </CardBody>
            </Card>
          );
        }}
      </InfiniteScroll>
    </Grid>
  </Box>
);

IconsGrid.propTypes = {
  cardSize: PropTypes.shape({ height: PropTypes.any, width: PropTypes.any }),
  data: PropTypes.array,
};

const SizeControl = ({ sizeState, ...rest }) => {
  const { value, setValue } = sizeState;

  return (
    <Box gap="xsmall" width="medium" {...rest}>
      <Box direction="row" gap="xsmall">
        <Text>Icon Scale</Text>
      </Box>
      <Box direction="row" gap="medium" width="large">
        <Box align="center">
          <Subtract />
          <Text size="xsmall" weight={500}>
            Smaller
          </Text>
        </Box>
        <RangeInput
          max={200}
          min={70}
          value={value}
          onChange={event => setValue(event.target.value)}
        />
        <Box align="center">
          <Add />
          <Text size="xsmall" weight={500}>
            Larger
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

SizeControl.propTypes = {
  sizeState: PropTypes.shape({
    value: PropTypes.any,
    setValue: PropTypes.func,
  }),
};
