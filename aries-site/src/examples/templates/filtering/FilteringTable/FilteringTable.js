import { useContext } from 'react';
import { Box, DataTable, Heading, Menu, ResponsiveContext } from 'grommet';
import {
  StatusWarningSmall,
  StatusCriticalSmall,
  StatusGoodSmall,
  StatusUnknownSmall,
} from 'grommet-icons';

import {
  FilterControls,
  FiltersProvider,
  useFilters,
} from '../../FilterControls';
import { servers } from './mockData';

export const FilteringTable = () => {
  // Define which attributes should be made available for the user
  // to filter upon
  const filtersConfig = [
    {
      property: 'hardware.health.summary',
      label: 'Status',
      filterType: 'CheckBoxGroup',
    },
    {
      property: 'state.connected',
      label: 'State',
      filterType: 'CheckBoxGroup',
      render: datum => (datum ? 'Connected' : 'Not Connected'),
    },
    {
      property: 'hardware.powerState',
      label: 'Power',
      filterType: 'CheckBoxGroup',
    },
    {
      property: 'hardware.model',
      label: 'Model',
      filterType: 'CheckBoxGroup',
    },
  ];

  return (
    <Box background="background-front" pad="small" gap="medium" fill>
      <Heading id="servers-heading" level={2} margin="none">
        Servers
      </Heading>
      <FiltersProvider>
        <Box align="start" direction="row" justify="between" wrap>
          <FilterControls
            actions={
              <Menu
                label="Actions"
                items={[
                  { label: 'Power On' },
                  { label: 'Power Off' },
                  { label: 'Upgrade' },
                  { label: 'Delete' },
                ]}
              />
            }
            data={servers}
            filters={filtersConfig}
            primaryKey="id"
            searchFilter={{ placeholder: 'Search servers...' }}
          />
        </Box>
        <ServerResults />
      </FiltersProvider>
    </Box>
  );
};

const columns = [
  {
    property: 'hardware.serialNumber',
    header: 'Serial',
  },
  {
    property: 'state.connected',
    header: 'State',
    render: datum => (datum.state.connected ? 'Connected' : 'Not Connected'),
  },
  {
    property: 'hardware.powerState',
    header: 'Power',
  },
  {
    property: 'hardware.model',
    header: 'Model',
  },
];

const statusIcons = {
  Warning: <StatusWarningSmall color="status-warning" size="small" />,
  OK: <StatusGoodSmall color="status-ok" size="small" />,
  Critical: <StatusCriticalSmall color="status-critical" size="small" />,
  Unknown: <StatusUnknownSmall color="status-unknown" size="small" />,
};

const ServerResults = () => {
  const size = useContext(ResponsiveContext);
  const { filteredResults, selected, setSelected } = useFilters();

  return (
    <Box height="medium" overflow="auto">
      <DataTable
        aria-describedby="servers-heading"
        data={filteredResults}
        columns={[
          {
            property: 'hardware.health.summary',
            header: 'Status',
            render: datum =>
              datum.hardware.health.summary
                ? statusIcons[datum.hardware.health.summary]
                : '-',
            align: 'center',
            sortable: false,
          },
          {
            property: 'id',
            header: 'Name',
            pin: size === 'small',
            primary: true,
            render: datum => datum.displayName,
          },
          ...columns,
        ]}
        pin
        primaryKey="id"
        sortable
        onSelect={nextSelected => setSelected(nextSelected)}
        select={selected}
      />
    </Box>
  );
};
