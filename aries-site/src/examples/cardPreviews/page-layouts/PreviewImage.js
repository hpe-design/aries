import React from 'react';
import PropTypes from 'prop-types';
import { Box, Image } from 'grommet';
import { useDarkMode } from '../../../utils';

export const PreviewImage = ({ src, ...rest }) => {
  const darkMode = useDarkMode();

  return (
    <Box fill>
      <Image
        src={darkMode.value ? src.dark : src.light}
        fit="contain"
        {...rest}
      />
    </Box>
  );
};

PreviewImage.propTypes = {
  src: PropTypes.shape({
    dark: PropTypes.string.isRequired,
    light: PropTypes.string.isRequired,
  }),
};
