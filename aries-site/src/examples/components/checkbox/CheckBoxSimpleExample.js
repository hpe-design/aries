import React, { useState } from 'react';
import { Box, CheckBox, Form, FormField } from 'grommet';

export const CheckBoxSimpleExample = () => {
  const [checked, setChecked] = useState(true);
  return (
    <Box width="medium" align="center">
      <Form>
        <FormField name="checkbox" fill htmlFor="simple-checkbox" label="Label">
          <CheckBox
            name="checkbox"
            label="Choice"
            id="simple-checkbox"
            checked={checked}
            onChange={event => setChecked(event.target.checked)}
          />
        </FormField>
      </Form>
    </Box>
  );
};
