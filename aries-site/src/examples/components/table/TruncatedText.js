import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'grommet';

export const TruncatedText = ({ value }) => {
  const ref = useRef();
  const [tip, setTip] = useState();

  useEffect(() => {
    if (ref.current && ref.current.scrollWidth > ref.current.offsetWidth) {
      setTip(`${value}`);
    } else setTip(undefined);
  }, [value]);

  return (
    <Text ref={ref} truncate tip={tip}>
      {value}
    </Text>
  );
};

TruncatedText.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};
