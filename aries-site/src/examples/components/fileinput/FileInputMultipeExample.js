import React from 'react';
import { Box, FileInput } from 'grommet';

export const FileInputMultipeExample = () => (
  <Box width="medium" align="center" pad="large">
    <FileInput
      messages={{
        dropPrompt: 'Drag and Drop',
        browse: 'Select File',
      }}
      multiple
      onChange={event => {
        const fileList = event.target.files;
        for (let i = 0; i < fileList.length; i += 1) {
          const file = fileList[i];
          console.log(file.name);
        }
      }}
    />
  </Box>
);
