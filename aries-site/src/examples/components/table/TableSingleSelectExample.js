import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  DataTable,
  Heading,
  Text,
  ResponsiveContext,
  Button,
} from 'grommet';
import { FormPrevious } from 'grommet-icons';
import { TruncatedText } from './TruncatedText';

const DetailsPage = ({ orderDetails, orderPageDetails, ...rest }) => (
  <Box direction="row" align="start" {...rest}>
    <Box width="small">
      <Text size="small">{orderDetails}</Text>
    </Box>
    <Text color="text-strong">{orderPageDetails}</Text>
  </Box>
);

DetailsPage.propTypes = {
  orderDetails: PropTypes.string,
  orderPageDetails: PropTypes.string,
};

const data = [
  {
    id: 'OID257383',
    orderName: 'My PVT Cloud Order',
    purchaseOrder: '9701231123323',
    state: 'Created',
    service: 'HPE GreenLake Private Cloud',
    tenant: 'Suncor Energy',
    contact: {
      email: 'melinda@suncor.co',
    },
    orderDate: '04/30/2020',
  },
  {
    id: 'OID789345',
    orderName: 'GEM_1',
    purchaseOrder: '9253856295',
    state: 'Build Prep',
    service: 'HPE Goats as a Service',
    tenant: 'Nestle',
    contact: {
      email: 'wan@nestle.com',
    },
    orderDate: '04/05/2020',
  },
  {
    id: 'OID894567',
    orderName: 'VMaaS for R&D',
    purchaseOrder: '7239456727',
    state: 'Processing',
    service: 'VMaaS for R&D',
    tenant: 'Coke',
    contact: {
      email: 'muhtar@coke.com',
    },
    orderDate: '03/04/2020',
  },
  {
    id: 'OID829374',
    orderName: 'GEM_1',
    purchaseOrder: '1926573453',
    state: 'Factory Express',
    service: 'HPE GreenLake Private Cloud',
    tenant: 'Domain',
    contact: {
      email: 'priyanka@domain.com',
    },
    orderDate: '02/28/2020',
  },
  {
    id: 'OID648379',
    orderName: 'VMaas for R&D',
    purchaseOrder: '2341835675',
    state: 'Provisioning',
    service: 'VMaaS for R&D',
    tenant: 'Nestle',
    contact: {
      email: 'wan@nestle.com',
    },
    orderDate: '02/15/2020',
  },
  {
    id: 'OID192653',
    orderName: 'GEM_1',
    purchaseOrder: '9253578367',
    state: 'In Transit',
    service: 'HPE GreenLake Private Cloud',
    tenant: 'Suncor Energy',
    contact: {
      email: 'melinda@suncor.co',
    },
    orderDate: '01/30/2020',
  },
  {
    id: 'OID524387',
    orderName: 'My MVT Cloud Order',
    purchaseOrder: '2634986755',
    state: 'Cancelled',
    service: 'HPE GreenLake Private Cloud',
    tenant: 'Boeing',
    contact: {
      email: 'susan@boeing.com',
    },
    orderDate: '01/15/2020',
  },
  {
    id: 'OID824567',
    orderName: 'VMaaS for R&D',
    purchaseOrder: '1986476536',
    state: 'Ready to Ship',
    service: 'HPE Goats as a Service',
    tenant: 'Coke',
    contact: {
      email: 'muhtar@coke.com',
    },
    orderDate: '12/29/2019',
  },
  {
    id: 'OID945423',
    orderName: 'My PVT Cloud Order',
    purchaseOrder: '9454285743',
    state: 'Created',
    service: 'HPE GreenLake Private Cloud',
    tenant: 'Domain',
    contact: {
      email: 'priyanka@domain.com',
    },
    orderDate: '12/15/2019',
  },
  {
    id: 'OID253462',
    orderName: 'GEM_1',
    purchaseOrder: '4459253462',
    state: 'Accepted',
    service: 'VMaaS for R&D',
    tenant: 'Suncor Energy',
    contact: {
      email: 'melinda@suncor.co',
    },
    orderDate: '11/01/2019',
  },
  {
    id: 'OID953856',
    orderName: 'DevStageSymR31 (default)',
    purchaseOrder: '2341835675',
    state: 'Processing',
    service: 'VMaaS for R&D',
    tenant: 'Coke',
    contact: {
      email: 'muhtar@coke.com',
    },
    orderDate: '11/01/2019',
  },
  {
    id: 'OID953890',
    orderName: 'DevStageSymR31 (default)',
    purchaseOrder: '475078908',
    state: 'Delivered',
    service: 'Mercury',
    tenant: 'Nestle',
    contact: {
      email: 'wan@nestle.com',
    },
    orderDate: '11/01/2019',
  },
];

const columns = [
  {
    property: 'orderName',
    header: 'Name',
    render: datum => <TruncatedText value={datum.orderName} />,
    size: 'small',
  },
  {
    property: 'purchaseOrder',
    header: 'P.O. #',
    render: datum => <TruncatedText value={datum.purchaseOrder} />,
    size: 'xsmall',
    align: 'end',
  },
  {
    property: 'state',
    header: 'State',
    render: datum => <TruncatedText value={datum.state} />,
    size: 'xsmall',
  },
  {
    property: 'service',
    header: 'Service',
    render: datum => <TruncatedText value={datum.service} />,
    size: 'small',
  },
  {
    property: 'tenant',
    header: 'Tenant',
    render: datum => <TruncatedText value={datum.tenant} />,
    size: 'xsmall',
  },
  {
    property: 'contact.email',
    header: 'Contact',
  },
  {
    property: 'orderDate',
    header: 'Order Date',
    render: datum =>
      datum.orderDate && new Date(datum.orderDate).toLocaleDateString(),
    align: 'end',
  },
];

export const TableSingleSelectExample = () => {
  const size = React.useContext(ResponsiveContext);
  const [pageDetails, setPageDetals] = React.useState({});

  return !pageDetails.id ? (
    <>
      <Heading
        id="orders-heading"
        level={3}
        margin={{ bottom: 'small', top: 'none' }}
      >
        Orders
      </Heading>
      <Box overflow="auto">
        <DataTable
          aria-describedby="orders-heading"
          data={data}
          columns={[
            { property: 'id', header: 'Id', pin: size === 'small' },
            ...columns,
          ]}
          onClickRow={({ datum }) => setPageDetals(datum)}
          pin={size === 'small'}
        />
      </Box>
    </>
  ) : (
    <>
      <Button
        onClick={() => {
          setPageDetals({});
        }}
        alignSelf="start"
        icon={<FormPrevious />}
        label="Orders"
      />
      <Box margin={{ horizontal: 'large' }} border="bottom">
        <Heading size="small">Order Number: {pageDetails.id}</Heading>
      </Box>
      <Heading
        size="small"
        level={2}
        margin={{ horizontal: 'large', top: 'large', bottom: 'medium' }}
      >
        Details
      </Heading>
      <Box margin={{ horizontal: 'large' }} gap="small">
        <DetailsPage
          orderDetails="Order Name"
          orderPageDetails={pageDetails.orderName}
        />
        <DetailsPage
          orderDetails="Purchase Order"
          orderPageDetails={pageDetails.purchaseOrder}
        />
        <DetailsPage
          orderDetails="State"
          orderPageDetails={pageDetails.state}
        />
        <DetailsPage
          orderDetails="Services"
          orderPageDetails={pageDetails.service}
        />
        <DetailsPage
          orderDetails="Tenant"
          orderPageDetails={pageDetails.tenant}
        />
        <DetailsPage
          orderDetails="Order Date"
          orderPageDetails={pageDetails.orderDate}
        />
        <DetailsPage
          orderDetails="Contact"
          orderPageDetails={pageDetails.contact.email}
        />
      </Box>
    </>
  );
};
