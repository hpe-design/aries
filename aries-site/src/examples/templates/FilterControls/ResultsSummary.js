import { Box, Button, Text } from 'grommet';

import { useFilters } from '.';

export const ResultsSummary = () => {
  const {
    data,
    filteredResults,
    isFiltered,
    selected,
    setSelected,
  } = useFilters();
  const textSize = 'small';

  return selected.length ? (
    <Box align="center" direction="row" gap="small" flex={false}>
      <Box direction="row" gap="xxsmall">
        <Text size={textSize} weight="bold">
          {selected.length}
        </Text>
        <Text size={textSize}>item{selected.length > 1 ? 's' : ''} of</Text>
        <Text size={textSize} weight="bold">
          {isFiltered ? filteredResults.length : data.length}
        </Text>
        <Text size={textSize}>
          result{filteredResults.length > 1 ? 's' : ''} selected
        </Text>
      </Box>
      <Button label="Clear Selection" onClick={() => setSelected([])} />
    </Box>
  ) : (
    <Box direction="row" gap="xxsmall">
      <Text size={textSize} weight="bold">
        {isFiltered ? filteredResults.length : data.length}
      </Text>
      <Text size={textSize}>
        {isFiltered
          ? `result${filteredResults.length > 1 ? 's' : ''} of `
          : 'items'}
      </Text>
      {isFiltered && (
        <Box direction="row" gap="xxsmall">
          <Text size={textSize} weight="bold">
            {data.length}
          </Text>
          <Text size={textSize}>{`item${data.length > 1 ? 's' : ''}`}</Text>
        </Box>
      )}
    </Box>
  );
};
