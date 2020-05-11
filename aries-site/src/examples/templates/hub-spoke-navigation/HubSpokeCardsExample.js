import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Grid,
  Header,
  Heading,
  List,
  Text,
  ResponsiveContext,
} from 'grommet';
import {
  Cluster,
  Group,
  Hpe,
  List as ListIcon,
  Location,
  LocationPin,
  Optimize,
  Overview,
  Server,
  Servers,
  ShieldSecurity,
  UnorderedList,
} from 'grommet-icons';

// Mock application page data
const pages = [
  {
    name: 'Home',
    layout: 'cards',
    children: ['Devices', 'Performance', 'Users', 'Remote Access', 'Security'],
  },
  {
    name: 'Performance',
    icon: <Optimize />,
    layout: 'cards',
    parent: 'Home',
    children: ['Sessions', 'Logs', 'Diagnostics'],
  },
  {
    name: 'Devices',
    icon: <Servers />,
    layout: 'cards',
    parent: 'Home',
    children: ['Server Cluster', 'Beacon Cluster', 'Server XYZ'],
  },
  {
    name: 'Users',
    icon: <Group />,
    layout: 'list',
    parent: 'Home',
    children: new Array(17).fill(''),
  },
  {
    name: 'Sessions',
    icon: <ListIcon />,
    layout: 'list',
    parent: 'Performance',
    children: new Array(17).fill(''),
  },
  {
    name: 'Logs',
    icon: <UnorderedList />,
    layout: 'list',
    parent: 'Performance',
    children: ['Beacon D', 'Server B', 'Server XYZ', 'Server A'].concat(
      new Array(12).fill(''),
    ),
  },
  {
    name: 'Remote Access',
    icon: <Location />,
    layout: 'panes',
    parent: 'Home',
  },
  {
    name: 'Security',
    icon: <ShieldSecurity />,
    layout: 'panes',
    parent: 'Home',
  },
  {
    name: 'Diagnostics',
    icon: <Overview />,
    layout: 'panes',
    parent: 'Performance',
  },
  {
    name: 'Server Cluster',
    icon: <Cluster />,
    layout: 'cards',
    parent: 'Devices',
    children: ['Server A', 'Server B'],
  },
  {
    name: 'Server XYZ',
    icon: <Server />,
    layout: 'panes',
    status: 'critical',
    parent: 'Devices',
  },
  {
    name: 'Beacon Cluster',
    icon: <Cluster />,
    layout: 'cards',
    parent: 'Devices',
    children: ['Beacon A', 'Beacon B', 'Beacon C', 'Beacon D'],
  },
  {
    name: 'Server A',
    icon: <Server />,
    layout: 'panes',
    parent: 'Server Cluster',
    status: 'ok',
  },
  {
    name: 'Server B',
    icon: <Server />,
    layout: 'panes',
    parent: 'Server Cluster',
    status: 'ok',
  },
  {
    name: 'Beacon A',
    icon: <LocationPin />,
    layout: 'panes',
    parent: 'Beacon Cluster',
  },
  {
    name: 'Beacon B',
    icon: <LocationPin />,
    layout: 'panes',
    parent: 'Beacon Cluster',
  },
  {
    name: 'Beacon C',
    icon: <LocationPin />,
    layout: 'panes',
    parent: 'Beacon Cluster',
  },
  {
    name: 'Beacon D',
    icon: <LocationPin />,
    layout: 'panes',
    parent: 'Beacon Cluster',
    status: 'warning',
  },
];

const getPageDetails = pageName => pages.find(page => page.name === pageName);

export const HubSpokeCardsExample = () => {
  const [currentPage, setCurrentPage] = React.useState(getPageDetails('Home'));
  const [subPages, setSubPages] = React.useState();

  React.useEffect(() => {
    const pageDetails =
      currentPage.children &&
      currentPage.children.map(child =>
        pages.find(page => page.name === child),
      );
    setSubPages(pageDetails);
  }, [currentPage]);

  const { children, layout, name, parent } = currentPage;

  return (
    <AppContainer>
      <AppHeader currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {/* Display parent as 'back button' for depth levels 2+ of hub & spoke 
        hierarchy. AppIdentity in Header serves as 'back button' at root and 
        1st level depth. */}
      {typeof parent !== 'undefined' && parent !== 'Home' && (
        <SimpleButton
          alignSelf="start"
          onClick={() => setCurrentPage(getPageDetails(parent))}
        >
          {parent}
        </SimpleButton>
      )}
      <Heading level={2} margin={{ top: 'none', bottom: 'medium' }}>
        {name}
      </Heading>
      {layout === 'cards' && (
        <GridLayout
          items={subPages}
          onClick={page => setCurrentPage(getPageDetails(page))}
        />
      )}
      {layout === 'list' && (
        <ListLayout items={children} setCurrentPage={setCurrentPage} />
      )}
      {layout === 'panes' && (
        <PanesLayout
          content={currentPage}
          items={children}
          setCurrentPage={setCurrentPage}
        />
      )}
    </AppContainer>
  );
};

const AppContainer = ({ ...rest }) => {
  const size = React.useContext(ResponsiveContext);

  return (
    <Box
      background="background-back"
      height={size === 'small' ? { max: 'large' } : '100%'}
      width={size === 'small' ? 'medium' : '100%'}
      overflow="auto"
      pad={{
        horizontal: size !== 'small' ? 'large' : 'medium',
        bottom: 'large',
      }}
      {...rest}
    />
  );
};

const AppHeader = ({ setCurrentPage }) => (
  <Header fill="horizontal" height="xsmall">
    <AppIdentity
      name="Service"
      onClick={() => setCurrentPage(getPageDetails('Home'))}
    />
  </Header>
);

AppHeader.propTypes = {
  setCurrentPage: PropTypes.func,
};

const AppIdentity = ({ name, ...rest }) => (
  <Button plain {...rest}>
    <Box direction="row" align="center" gap="small">
      <Hpe color="brand" />
      <Box direction="row" gap="xsmall">
        <Text color="text" weight="bold">
          HPE
        </Text>
        <Text color="text">{name}</Text>
      </Box>
    </Box>
  </Button>
);

AppIdentity.propTypes = {
  name: PropTypes.string,
};

const GridLayout = ({ items, onClick }) => (
  <Grid columns={{ count: 'fit', size: 'small' }} rows="small" gap="medium">
    {items &&
      items.map((item, index) => (
        <Box
          key={index}
          background="background-front"
          fill
          onClick={() => onClick(item.name)}
          pad="medium"
          round="small"
        >
          {item && (
            <Header justify="start" gap="small">
              {item.icon}
              <Text>{item.name}</Text>
            </Header>
          )}
        </Box>
      ))}
  </Grid>
);

GridLayout.propTypes = {
  items: PropTypes.array,
  onClick: PropTypes.func,
};

const ListLayout = ({ items, setCurrentPage }) => (
  <List data={items} border={{ size: '0' }} pad={{ vertical: 'xsmall' }}>
    {(datum, index) => {
      const page = getPageDetails(datum) || '';
      const { name, icon, status } = page;

      return (
        <Button key={index} onClick={() => (page ? setCurrentPage(page) : {})}>
          <Box
            direction="row"
            align="center"
            background="background-front"
            flex={false}
            gap="medium"
            height="xxsmall"
            justify="between"
            pad="small"
            round="xsmall"
          >
            {page && (
              <>
                <Box direction="row" align="center" gap="xsmall">
                  {icon}
                  <Text weight="bold">{name}</Text>
                </Box>
                {status && (
                  <Box direction="row" align="center" gap="xsmall">
                    <Text>{status}</Text>
                    <Box
                      background={`status-${status}`}
                      round="100%"
                      height="12px"
                      width="12px"
                    />
                  </Box>
                )}
              </>
            )}
          </Box>
        </Button>
      );
    }}
  </List>
);

ListLayout.propTypes = {
  items: PropTypes.array,
  setCurrentPage: PropTypes.func,
};

const PanesLayout = ({ content, items, setCurrentPage }) => {
  const sections = items || [''];

  return (
    <>
      {sections.map((section, index) => (
        <Box
          key={index}
          background="background-front"
          height="medium"
          margin={{ vertical: 'small' }}
          round="xsmall"
        >
          {content.status && (
            <Button
              alignSelf="end"
              label="View Logs"
              margin="medium"
              onClick={() => setCurrentPage(getPageDetails('Logs'))}
            />
          )}
        </Box>
      ))}
    </>
  );
};

PanesLayout.propTypes = {
  content: PropTypes.object,
  items: PropTypes.array,
  setCurrentPage: PropTypes.func,
};

const SimpleButton = ({ children, ...rest }) => {
  const [hover, setHover] = React.useState();

  return (
    /* Wrapping Button in Box with 'flex' prop, otherwise Button 
    gets a height of 0 in Safari. 'height' prop restricts how
    much growth -- needed for Chrome and Firefox.
    This execution should be replaced once this PR is merged into
    Grommet: https://github.com/grommet/grommet/pull/4050
    */
    <Box flex="grow" height={{ max: 'xxsmall' }} justify="center">
      <Button
        onMouseOver={() => setHover(true)}
        onFocus={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        onBlur={() => setHover(false)}
        {...rest}
      >
        <Box
          pad={{ horizontal: 'xxsmall', vertical: 'xsmall' }}
          round="xxsmall"
          background={hover ? 'active-background' : undefined}
        >
          <Text weight="bold" margin="none">
            {children}
          </Text>
        </Box>
      </Button>
    </Box>
  );
};

SimpleButton.propTypes = {
  children: PropTypes.node,
};
