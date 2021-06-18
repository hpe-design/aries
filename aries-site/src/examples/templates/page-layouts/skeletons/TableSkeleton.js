import React from 'react';
import { DataTable } from 'grommet';
import { HeadingSkeleton, TextSkeleton } from '.';

const columns = [
  {
    property: 'col-1',
    header: (
      <HeadingSkeleton margin={{ horizontal: 'small', vertical: 'small' }} />
    ),
    primary: true,
    render: () => <TextSkeleton width="small" margin={{ vertical: 'small' }} />,
  },
  {
    property: 'col-2',
    header: (
      <HeadingSkeleton margin={{ horizontal: 'small', vertical: 'small' }} />
    ),
    render: () => <TextSkeleton width="small" margin={{ vertical: 'small' }} />,
  },
  {
    property: 'col-3',
    header: (
      <HeadingSkeleton margin={{ horizontal: 'small', vertical: 'small' }} />
    ),
    render: () => <TextSkeleton width="small" margin={{ vertical: 'small' }} />,
  },
];

export const data = [];

for (let i = 0; i < 7; i += 1) {
  data.push({
    'col-1': i,
    'col-2': i,
    'col-3': i,
  });
}

export const TableSkeleton = () => (
  <DataTable background="background" columns={columns} data={data} />
);
