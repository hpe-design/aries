import React, { useState } from 'react';
import { Box, Button, Paragraph, Spinner } from 'grommet';

export const AnnounceSpinnerExample = () => {
  // 'show=true' will trigger the announcement
  const [show, setShow] = useState(false);
  return (
    <Box align="center" gap="small">
      <Paragraph textAlign="center">
        Spinner has a built in Screen Reader functionality. The message prop is
        going to be the message given over the voice reader.
      </Paragraph>
      <Button
        label="Load"
        onClick={() => {
          setShow(true);
          setTimeout(() => {
            setShow(false);
          }, 1500);
        }}
      />
      {show && (
        <Spinner
          border={[
            { side: 'all', color: 'background-contrast', size: 'medium' },
            { side: 'right', color: 'brand', size: 'medium' },
            { side: 'top', color: 'brand', size: 'medium' },
            { side: 'left', color: 'brand', size: 'medium' },
          ]}
          message="Start Built-in Spinner Announcement"
        />
      )}
    </Box>
  );
};
