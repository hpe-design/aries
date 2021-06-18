import React from 'react';
import PropTypes from 'prop-types';
import { Box } from 'grommet';
import { TextSkeleton } from '.';

export const ParagraphSkeleton = ({ numberLines = 2, ...rest }) => {
  const count = Array(numberLines).fill();

  return (
    <Box gap="small" flex={false}>
      {count.map(item => (
        <TextSkeleton {...rest} key={item} />
      ))}
    </Box>
  );
};

ParagraphSkeleton.propTypes = {
  numberLines: PropTypes.number,
};
