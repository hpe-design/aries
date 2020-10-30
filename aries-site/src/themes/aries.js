import { hpe } from 'grommet-theme-hpe';
import { deepMerge } from 'grommet/utils';
import { Unsorted } from 'grommet-icons';

export const aries = deepMerge(hpe, {
  defaultMode: 'dark',
  // To be stripped out once theme changes are made in grommet-theme-hpe
  // keeping file for use as playground for future theme adjusments that need
  // to be quickly tested
  dataTable: {
    body: {
      extend: ({ theme }) => `
        /* Margin and pad allow room for focus on table body */
        margin: ${theme.global.edgeSize.xxsmall} 0px;
        pad: 0px ${theme.global.edgeSize.xxsmall};
      `,
    },
    // groupHeader: {
    //   background: {
    //     dark: 'dark-2',
    //     light: 'light-2',
    //   },
    //   border: { side: 'bottom', size: 'xsmall' },
    //   pad: { horizontal: 'small', vertical: 'xsmall' },
    // },
    // groupEnd: {
    //   border: { side: 'bottom', size: 'xsmall' },
    // },
    header: {
      // background: undefined,
      border: { side: 'bottom' },
      color: 'text-strong',
      font: {
        weight: 'bold',
        // size: undefined,
      },
      gap: 'none',
      hover: {
        background: {
          color: 'background-contrast',
        },
      },
      pad: { horizontal: 'small', vertical: 'xsmall' },
    },
    icons: {
      // contract: FormUp,
      // expand: FormDown,
      sortable: Unsorted,
    },
    pinned: {
      header: {
        background: {
          color: 'background-front',
          opacity: 'strong',
        },
        extend: 'backdrop-filter: blur(8px);',
      },
      body: {
        background: {
          color: 'background-front',
          opacity: 'strong',
        },
        extend: 'backdrop-filter: blur(8px);',
      },
      footer: {
        background: {
          color: 'background-front',
          opacity: 'strong',
        },
        extend: 'backdrop-filter: blur(8px);',
      },
    },
    // primary: {
    //   // weight: 'bold',
    // },
    // resize: {
    //   border: {
    //     color: 'border',
    //     side: 'end',
    //   },
    // },
  },
  table: {
    header: {
      extend: `
        > div { 
          height: 100%;
          justify-content: center;
        }
        // align onSelect checkbox to center of header cell
        label { 
          justify-content: center;
        }
      `,
      // space for focus indicator on sortable columns
      pad: { left: 'none', vertical: 'none', right: 'xxsmall' },
    },
    body: {
      extend: ({ theme }) => {
        return `
          :hover {
            button {
              background: ${
                theme.global.colors['background-contrast'][
                  theme.dark ? 'dark' : 'light'
                ]
              }
            }
          }
        `;
      },
    },
    row: {
      hover: {
        background: 'background-contrast',
      },
    },
    footer: {
      extend: `
          span {
            font-weight: bold;
          }
        `,
    },
  },
  icon: {
    extend: `
      // stroke-linecap: round;      
    `,
  },
});

export const { colors } = aries.global;
