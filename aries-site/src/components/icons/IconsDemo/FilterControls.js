import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Anchor,
  Box,
  Button,
  CheckBoxGroup,
  FormField,
  Grid,
  Header,
  Heading,
  Layer,
  ResponsiveContext,
  Text,
  TextInput,
} from 'grommet';
import { Filter, FormClose, Search } from 'grommet-icons';

const defaultFilters = {};

const FilterButton = styled(Button)`
  border: 1px solid
    ${({ theme }) => theme.global.colors.border[theme.dark ? 'dark' : 'light']};
  &:hover {
    background: transparent;
  }
`;

const StyledButton = styled(Button)`
  border: 1px solid
    ${({ theme }) => theme.global.colors.border[theme.dark ? 'dark' : 'light']};
  &:hover {
    background: transparent;
  }
`;

const StyledTextInput = styled(TextInput).attrs(() => ({
  'aria-labelledby': 'search-icon',
}))``;

export const FilterControls = ({ allData, dataState, ...rest }) => {
  const { data, setData } = dataState;
  const [filtering, setFiltering] = useState(false);
  const [filters, setFilters] = useState(defaultFilters);
  const [searchFocused, setSearchFocused] = useState(false);
  const [search, setSearch] = useState();
  const inputRef = useRef();
  const size = useContext(ResponsiveContext);

  useEffect(() => {
    if (searchFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [searchFocused, setSearchFocused]);

  const filterData = (array, criteria, searchValue = search) => {
    if (Object.keys(criteria).length) setFiltering(true);
    else setFiltering(false);
    setFilters(criteria);

    let filterResults;
    const filterKeys = Object.keys(criteria);
    filterResults = array.filter(item => {
      // validates all filter criteria
      return filterKeys.every(key => {
        // ignores non-function predicates
        if (typeof criteria[key] !== 'function') return true;
        return criteria[key](item[key]);
      });
    });

    if (searchValue) {
      filterResults = filterResults.filter(o =>
        Object.keys(o).some(
          k =>
            typeof o[k] === 'string' &&
            o[k].toLowerCase().includes(searchValue.toLowerCase()),
        ),
      );
    }
    return filterResults;
  };

  return (
    <Box {...rest}>
      <Box align="center" direction="row" gap="small">
        {size !== 'small' || searchFocused ? (
          <Box width="medium">
            <StyledTextInput
              ref={inputRef}
              type="search"
              icon={<Search id="search-icon" />}
              placeholder="Search by icon name"
              onBlur={() => setSearchFocused(false)}
              value={search}
              onChange={event => {
                setSearch(event.target.value);
                const nextData = filterData(
                  allData,
                  filters,
                  event.target.value,
                );
                setData(nextData);
              }}
            />
          </Box>
        ) : (
          <StyledButton
            id="search-button"
            icon={<Search />}
            onClick={() => setSearchFocused(true)}
          />
        )}
        {/* {(size !== 'small' || !searchFocused) && (
          <Filters
            allData={allData}
            data={data}
            filtering={filtering}
            setFiltering={setFiltering}
            setData={setData}
            filters={filters}
            setFilters={setFilters}
            filterData={filterData}
          />
        )} */}
      </Box>
      <RecordSummary allData={allData} data={data} filtering={filtering} />
    </Box>
  );
};

FilterControls.propTypes = {
  allData: PropTypes.array,
  dataState: PropTypes.shape({
    data: PropTypes.array,
    setData: PropTypes.func,
  }),
};

const Filters = ({
  allData,
  filters,
  setFilters,
  filterData,
  filtering,
  setData,
  setFiltering,
}) => {
  const [service, setService] = useState([]);
  const [previousValues, setPreviousValues] = useState({});
  const [previousFilters, setPreviousFilters] = useState({});
  const [status, setStatus] = useState([]);
  const [tenant, setTenant] = useState([]);
  const [showLayer, setShowLayer] = useState(false);

  const size = useContext(ResponsiveContext);

  const resetFilters = () => {
    setData(allData);
    setStatus([]);
    setService([]);
    setTenant([]);
    setFilters(defaultFilters);
    setFiltering(false);
  };

  // everytime the Filters layer opens, save a temp
  // of the previous filters and values in case user clicks "x"
  const storePreviousFilterInfo = () => {
    setPreviousFilters(filters);
    setPreviousValues({
      ...previousValues,
      service,
      status,
      tenant,
    });
  };

  const restoreValues = values => {
    setTenant(values.tenant);
    setService(values.service);
    setStatus(values.status);
  };

  const content = (
    <Box width={size !== 'small' ? 'large' : undefined}>
      <Grid
        columns={size !== 'small' ? { count: 'fit', size: 'small' } : 'auto'}
        gap={size !== 'small' ? 'large' : undefined}
      >
        <Box flex={false}>
          <ServiceFilter
            filters={filters}
            setFilters={setFilters}
            service={service}
            setService={setService}
          />
        </Box>
        {/* <Box flex={false}>
          <StatusFilter
            filters={filters}
            setFilters={setFilters}
            status={status}
            setStatus={setStatus}
          />
        </Box> */}
        {/* <Box flex={false}>
          <TenantFilter
            filters={filters}
            setFilters={setFilters}
            tenant={tenant}
            setTenant={setTenant}
          />
        </Box> */}
      </Grid>
    </Box>
  );

  return (
    <>
      <Box align="center" direction="row" gap="small">
        <FilterButton
          icon={<Filter />}
          onClick={() => {
            setShowLayer(true);
            storePreviousFilterInfo();
          }}
        />
        {filtering && <Anchor label="Clear filters" onClick={resetFilters} />}
      </Box>
      {showLayer && (
        <Layer
          position={size !== 'small' ? 'center' : undefined}
          modal
          onClickOutside={() => {
            filterData(allData, previousFilters);
            restoreValues(previousValues);
            setShowLayer(!showLayer);
          }}
          onEsc={() => {
            filterData(allData, previousFilters);
            restoreValues(previousValues);
            setShowLayer(!showLayer);
          }}
        >
          <Box
            height={size !== 'small' ? { max: 'large' } : undefined}
            pad={{ horizontal: 'large', vertical: 'medium' }}
            gap="medium"
          >
            <Header>
              <Heading as="p" color="text-strong" level={1} margin="none">
                Filters
              </Heading>
              <Button
                icon={<FormClose />}
                onClick={() => {
                  filterData(allData, previousFilters);
                  restoreValues(previousValues);
                  setShowLayer(!showLayer);
                }}
              />
            </Header>
            <Box pad="xsmall" overflow="auto" flex>
              {content}
            </Box>
            <Box align="center" direction="row" gap="small">
              <Button
                label="Apply Filters"
                onClick={() => {
                  const nextData = filterData(allData, filters);
                  setData(nextData);
                  setShowLayer(!showLayer);
                }}
                primary
              />
              <Button label="Reset Filters" onClick={resetFilters} secondary />
            </Box>
          </Box>
        </Layer>
      )}
    </>
  );
};

Filters.propTypes = {
  allData: PropTypes.array,
  filters: PropTypes.shape({}).isRequired,
  setFilters: PropTypes.func.isRequired,
  filtering: PropTypes.bool.isRequired,
  filterData: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
  setFiltering: PropTypes.func.isRequired,
};

const RecordSummary = ({ allData, data, filtering }) => (
  <Box direction="row" gap="xxsmall">
    <Text size="small" weight="bold">
      {data.length}
    </Text>
    <Text size="small">{filtering ? 'results from ' : 'icons'}</Text>
    {filtering && (
      <Box direction="row" gap="xxsmall">
        <Text size="small" weight="bold">
          {allData && allData.length}
        </Text>
        <Text size="small">icons</Text>
      </Box>
    )}
  </Box>
);

RecordSummary.propTypes = {
  allData: PropTypes.array,
  data: PropTypes.array,
  filtering: PropTypes.bool.isRequired,
};

const ServiceFilter = ({ filters, setFilters, service, setService }) => (
  <FormField label="Service" htmlFor="service-filter-a" name="service-filter-a">
    <CheckBoxGroup
      id="service-filter-a"
      name="service-filter-a"
      options={
        ['eenie', 'meenie', 'miny', 'moe']
        // defaultservice
      }
      value={service}
      onChange={({ value }) => {
        setService(value);
        const nextFilters = {
          ...filters,
          service: value.length && (nextservice => value.includes(nextservice)),
        };
        setFilters(nextFilters);
      }}
    />
  </FormField>
);

ServiceFilter.propTypes = {
  filters: PropTypes.shape({
    service: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
    status: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  }).isRequired,
  service: PropTypes.array.isRequired,
  setService: PropTypes.func.isRequired,
  setFilters: PropTypes.func.isRequired,
};
