import React from 'react';
import { Box } from 'grommet';
import { useDarkMode } from '../../../../utils';

export const HeadingSkeleton = ({ ...rest }) => {
  const { value: darkMode } = useDarkMode();

  return (
    <Box
      background={darkMode ? 'background-front' : 'background-back'}
      flex={false}
      pad="small"
      width="small"
      {...rest}
    />
  );
};
