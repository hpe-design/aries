import React from 'react';
import { Box } from 'grommet';
import { useDarkMode } from '../../../../utils';

export const AvatarSkeleton = ({ ...rest }) => {
  const { value: darkMode } = useDarkMode();

  return (
    <Box
      background={darkMode ? 'background-front' : 'background-back'}
      pad="medium"
      flex={false}
      round
      {...rest}
    />
  );
};
