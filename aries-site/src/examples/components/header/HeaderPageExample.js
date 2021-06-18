import React from 'react';
import PropTypes from 'prop-types';
import { Button, Header, Heading } from 'grommet';

export const HeaderPageExample = ({ action = true, ...rest }) => (
  <Header
    pad={{ horizontal: 'medium', vertical: 'small' }}
    fill="horizontal"
    {...rest}
  >
    <Heading size="small" margin="none">
      Page Heading
    </Heading>
    {action && <Button label="Action" secondary />}
  </Header>
);

HeaderPageExample.propTypes = {
  action: PropTypes.bool,
};
