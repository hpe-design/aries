import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Box, ResponsiveContext } from 'grommet';
import { AvatarSkeleton, ParagraphSkeleton, TextSkeleton } from '.';

export const ListSkeleton = ({ numberItems = 5, ...rest }) => {
  const size = useContext(ResponsiveContext);
  const itemsArray = Array(numberItems).fill();

  return (
    <Box flex={false} gap="medium" {...rest}>
      {itemsArray.map(item => (
        <Box align="center" direction="row" justify="between" key={item}>
          <Box align="center" direction="row" gap="small">
            <AvatarSkeleton />
            <ParagraphSkeleton width="small" />
          </Box>
          <TextSkeleton width={size !== 'small' ? 'xsmall' : 'xxsmall'} />
        </Box>
      ))}
    </Box>
  );
};

ListSkeleton.propTypes = {
  numberItems: PropTypes.number,
};
