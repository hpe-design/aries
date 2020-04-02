import { hpe } from 'grommet-theme-hpe';
import { deepMerge, normalizeColor } from 'grommet/utils';

export const aries = deepMerge(hpe, {
  defaultMode: 'dark',
  formField: {
    border: {
      error: {
        color: 'text',
      },
    },
    error: {
      background: {
        color: { light: '#FF40404D', dark: '#FF404066' },
      },
    },
  },
  checkBox: {
    color: 'selected-text',
    gap: 'small',
    check: {
      radius: '2px',
    },
    border: {
      width: '1px',
    },
    toggle: {
      extend: ({ checked, theme }) => `
          border: none;
          ${checked && `background-color: ${normalizeColor('brand', theme)};`}
      `,
      knob: {
        extend: ({ theme }) => `
          border: 2px solid ${
            theme.global.colors.text[theme.dark ? 'dark' : 'light']
          };
          top: 0px;
        `,
      },
    },
  },
  rangeInput: {
    thumb: {
      color: {
        dark: 'background-front',
        light: 'background',
      },
      extend: ({ theme }) => `
        border: 2px solid ${
          theme.global.colors.text[theme.dark ? 'dark' : 'light']
        };
      `,
    },
    track: {
      extend: ({ max, theme, value }) => {
        const lowerTrack = normalizeColor('brand', theme);
        const upperTrack = normalizeColor('background-contrast', theme);
        const trackPoint = `${(value / max) * 100}%`;

        return `background: linear-gradient(
          to right, 
          ${lowerTrack}, 
          ${lowerTrack} ${trackPoint},
          ${upperTrack} ${trackPoint},
          ${upperTrack}
        );`;
      },
    },
  },
  anchor: {
    color: 'text',
    textDecoration: 'underline',
    fontWeight: 500,
    hover: {
      textDecoration: 'underline',
    },
  },
});

export const { colors } = aries.global;
