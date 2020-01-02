import React, {
  useContext,
  useRef,
  useEffect,
  useState,
  useCallback,
} from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Keyboard, TextInput, ResponsiveContext } from 'grommet';
import { Search as SearchIcon } from 'grommet-icons';
import { structure, nameToPath } from '../../data';

const allSuggestions = structure.sections
  .map(section => (section.pages || []).concat(section.name))
  .reduce((acc, val) => acc.concat(val), [])
  .sort();

export const Search = ({ focused, setFocused }) => {
  const router = useRouter();
  const size = useContext(ResponsiveContext);
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState(allSuggestions);

  const boxRef = useRef();
  const inputRef = useRef();
  // Needed so that boxRef.current is not undefined. Allows suggestions drop
  // to match width of containing box as opposed to just width of text input
  const [, updateState] = useState();
  const forceUpdate = useCallback(() => updateState({}), []);
  useEffect(() => {
    forceUpdate();
  }, [forceUpdate]);

  useEffect(() => {
    if (focused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [focused, setFocused]);

  const onChange = event => {
    const {
      target: { value: nextValue },
    } = event;
    let nextSuggestions;
    if (nextValue) {
      const regexp = new RegExp(nextValue, 'i');
      nextSuggestions = allSuggestions.filter(c => regexp.test(c));
    } else {
      nextSuggestions = allSuggestions;
    }
    // don't use newer value if nothing matches it
    if (nextSuggestions.length > 0) {
      setValue(nextValue);
      setSuggestions(nextSuggestions);
    }
  };

  const onEnter = () => {
    if (value) {
      if (suggestions.length === 1) {
        router.push(nameToPath(suggestions[0]));
      } else {
        const matches = allSuggestions.filter(
          c => c.toLowerCase() === value.toLowerCase(),
        );
        if (matches.length === 1) {
          router.push(nameToPath(matches[0]));
        }
      }
    }
  };

  const onSelect = event => {
    router.push(nameToPath(event.suggestion));
  };

  return (
    <Box
      ref={boxRef}
      align="center"
      background={size !== 'small' || focused ? 'background-front' : undefined}
      direction="row"
      onClick={() => setFocused(true)}
      onFocus={() => setFocused(true)}
      pad={{ right: 'small' }}
      round="small"
      width={size !== 'small' || focused ? 'medium' : undefined}
    >
      {size !== 'small' || focused ? (
        <Keyboard onEsc={() => setFocused(false)} onEnter={onEnter}>
          <TextInput
            ref={inputRef}
            dropTarget={boxRef.current}
            dropProps={{
              margin: {
                // push drop just below focus indicator of text input
                top: '3px',
              },
            }}
            dropHeight="small"
            onChange={onChange}
            onSelect={onSelect}
            placeholder="Search HPE Design System"
            plain
            suggestions={suggestions}
            value={value}
          />
        </Keyboard>
      ) : (
        undefined
      )}
      <Box
        pad={
          size === 'small' && !focused
            ? { vertical: 'medium', left: 'medium' }
            : undefined
        }
      >
        <SearchIcon color="text" />
      </Box>
    </Box>
  );
};

Search.propTypes = {
  focused: PropTypes.bool.isRequired,
  setFocused: PropTypes.func.isRequired,
};
