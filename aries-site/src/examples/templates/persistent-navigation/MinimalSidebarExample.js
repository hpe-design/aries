import React from 'react';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Drop,
  Grid,
  Header,
  Heading,
  List,
  Nav,
  ResponsiveContext,
  Sidebar,
  Text,
} from 'grommet';
import {
  Cli,
  Clock,
  Configure,
  Location,
  Hpe,
  Projects,
  Splits,
  StatusInfoSmall,
} from 'grommet-icons';

const pages = [
  {
    name: 'Focus',
    icon: <StatusInfoSmall />,
    content: 'panes',
  },
  {
    name: 'Services',
    icon: <Projects />,
    content: 'cards',
  },
  {
    name: 'Glances',
    icon: <Clock />,
    content: 'cards',
  },
  {
    name: 'Flows',
    icon: <Splits />,
    content: 'list',
  },
  {
    name: 'Locations',
    icon: <Location />,
    content: 'list',
  },
  {
    name: 'Console',
    icon: <Cli />,
    content: 'panes',
  },
  {
    name: 'Configure',
    icon: <Configure />,
    content: 'panes',
  },
];

export const MinimalSidebarExample = () => {
  const [activeItem, setActiveItem] = React.useState(1);
  const size = React.useContext(ResponsiveContext);

  return (
    <AppContainer activeItem={activeItem}>
      <Sidebar
        gridArea="sidebar"
        /* Sidebar should switch from column to row orientation 
              when on smaller screens */
        direction={size !== 'small' ? 'column' : 'row'}
        /* Only display most critical navigation items in mobile 
              contexts */
        header={size !== 'small' && <SidebarHeader />}
        /* Min height is not needed in mobile contexts */
        height={size !== 'small' ? { min: '100%' } : undefined}
        align="center"
        background="blue!"
        pad={{
          top: size !== 'small' ? 'medium' : 'small',
          bottom: 'medium',
          horizontal: size !== 'small' ? 'medium' : 'small',
        }}
      >
        <MainNavigation activeItem={activeItem} setActiveItem={setActiveItem} />
      </Sidebar>
      <PageContent
        gridArea="pageContent"
        activeItem={activeItem}
        setActiveItem={setActiveItem}
      />
    </AppContainer>
  );
};

const AppContainer = ({ ...rest }) => {
  const size = React.useContext(ResponsiveContext);

  return (
    <Box
      direction={size === 'small' ? 'column-reverse' : 'row'}
      background="background-back"
      height={size === 'small' ? { max: 'large' } : undefined}
      width={size === 'small' ? 'medium' : '100%'}
      {...rest}
    />
  );
};

const MainNavigation = ({ activeItem, setActiveItem }) => {
  const size = React.useContext(ResponsiveContext);
  const maxItems = size !== 'small' ? undefined : 5;

  return (
    <Nav direction={size !== 'small' ? 'column' : 'row'}>
      {pages &&
        pages
          .slice(0, maxItems)
          .map((item, index) => (
            <NavButton
              key={item.name}
              a11yTitle={item.name}
              active={index === activeItem}
              icon={item.icon}
              name={item.name}
              onClick={() => setActiveItem(index)}
              round="xsmall"
            />
          ))}
    </Nav>
  );
};

MainNavigation.propTypes = {
  activeItem: PropTypes.number,
  setActiveItem: PropTypes.func,
};

const NavButton = ({ active, icon, name, ...rest }) => {
  const [hover, setHover] = React.useState();
  const ref = React.useRef();
  const size = React.useContext(ResponsiveContext);

  return (
    <Box fill="horizontal">
      <Button
        ref={ref}
        color="text-strong"
        icon={icon}
        onMouseOver={() => setHover(true)}
        onFocus={() => setHover(true)}
        onMouseOut={() => setHover(false)}
        onBlur={() => setHover(false)}
        {...rest}
      />
      {/* Show tooltip on hover and focus states as a supplemental
      reminder to icon's meaning */
      ref.current && hover && (
        <Drop
          align={size !== 'small' ? { left: 'right' } : { top: 'bottom' }}
          target={ref.current}
          plain
        >
          <Box
            animation={{ type: ['fadeIn', 'slideRight'] }}
            elevation="small"
            margin={{ left: 'xsmall', vertical: 'xxsmall' }}
            pad={{ horizontal: 'xsmall', vertical: 'xxsmall' }}
            background="blue"
            round="xsmall"
          >
            <Text size="small" color="text-strong">
              {name}
            </Text>
          </Box>
        </Drop>
      )}
    </Box>
  );
};

NavButton.propTypes = {
  active: PropTypes.bool,
  icon: PropTypes.element,
  name: PropTypes.string,
};

const PageContent = ({ activeItem }) => {
  const { content, name } = pages[activeItem];
  const items = new Array(9).fill(); // Mock data

  return (
    pages && (
      <Box flex overflow="auto">
        <Header
          fill="horizontal"
          height="xsmall"
          pad={{ horizontal: 'medium' }}
        >
          <AppIdentity name={name} />
        </Header>
        <Box pad={{ horizontal: 'medium', bottom: 'large' }} flex="grow">
          <Heading level={2} margin={{ vertical: 'small' }}>
            {name}
          </Heading>
          {content && content === 'cards' && <GridLayout items={items} />}
          {content && content === 'list' && <ListLayout items={items} />}
          {content && content === 'panes' && <PanesLayout items={items} />}
        </Box>
      </Box>
    )
  );
};

PageContent.propTypes = {
  activeItem: PropTypes.number,
};

const SidebarHeader = () => <Avatar background="background-front">DS</Avatar>;

const AppIdentity = ({ name }) => (
  <Button plain>
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

const GridLayout = ({ items }) => {
  return (
    <Grid columns={{ count: 'fit', size: 'small' }} rows="small" gap="medium">
      {items.map((item, index) => (
        <Box key={index} background="background-front" fill round="small" />
      ))}
    </Grid>
  );
};

GridLayout.propTypes = {
  items: PropTypes.array,
};

const ListLayout = ({ items }) => (
  <List data={items} border={{ size: '0' }} pad={{ vertical: 'xsmall' }}>
    {(datum, index) => (
      <Box
        key={index}
        background="background-front"
        height="xxsmall"
        round="xsmall"
      />
    )}
  </List>
);
ListLayout.propTypes = {
  items: PropTypes.array,
};

const PanesLayout = ({ items }) => {
  return items.map((item, index) => (
    <Box
      key={index}
      background="background-front"
      height="medium"
      margin={{ vertical: 'small' }}
      round="xsmall"
    />
  ));
};

PanesLayout.propTypes = {
  items: PropTypes.array,
};
