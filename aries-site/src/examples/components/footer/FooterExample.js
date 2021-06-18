import React, { useContext } from 'react';
import { Box, Button, Footer, ResponsiveContext, Text } from 'grommet';

export const FooterExample = () => {
  const size = useContext(ResponsiveContext);
  const year = new Date().getFullYear();

  const footerLinks = [
    { label: 'Terms' },
    { label: 'Privacy' },
    { label: 'Security' },
    { label: 'Feedback' },
  ];
  return (
    <Footer
      direction={size !== 'small' ? 'row' : 'column'}
      align={size !== 'small' ? 'center' : undefined}
      pad={{ horizontal: 'medium', vertical: 'small' }}
    >
      <Box
        direction={size !== 'small' ? 'row' : 'column'}
        align={size !== 'small' ? 'center' : undefined}
        gap="xsmall"
      >
        <Text size="small">
          &copy; {year} Hewlett Packard Enterprise Development LP
        </Text>
      </Box>
      <Box
        direction="row"
        align={size !== 'small' ? 'center' : undefined}
        gap="xsmall"
        wrap
      >
        {footerLinks.map(link => (
          <Button key={link.label} label={link.label} />
        ))}
      </Box>
    </Footer>
  );
};
