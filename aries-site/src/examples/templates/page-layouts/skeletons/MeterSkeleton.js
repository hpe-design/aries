import React from 'react';
import { Box, Meter } from 'grommet';
import { useDarkMode } from '../../../../utils';

export const MeterSkeleton = ({ ...rest }) => {
  const { value: darkMode } = useDarkMode();

  return (
    <Box flex={false}>
      <Meter
        type="circle"
        values={[
          {
            value: 66,
            color: darkMode ? 'background-front' : 'background-back',
          },
          { value: 22, color: 'border' },
          { value: 12, color: 'border-weak' },
        ]}
        size="small"
        {...rest}
      />
    </Box>
  );
};
