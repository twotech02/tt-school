import { createTheme, MantineColorsTuple } from '@mantine/core';

// Custom dark charcoal scale matching #1F1F1F
const charcoal: MantineColorsTuple = [
  '#F5F5F4',
  '#E7E7E5',
  '#D1D1CD',
  '#9E9E98',
  '#6E6E69',
  '#4A4A46',
  '#333330',
  '#1F1F1F',
  '#171717',
  '#0F0F0F',
];

// Deep forest accent for subtle highlights
const forest: MantineColorsTuple = [
  '#EBF4EC',
  '#D5E5D8',
  '#AAC9B0',
  '#7CAE87',
  '#559562',
  '#387C46',
  '#2C6237',
  '#1E4326',
  '#15301B',
  '#0D1E11',
];

export const theme = createTheme({
  colors: {
    charcoal,
    forest,
  },
  primaryColor: 'charcoal',
  primaryShade: 7,

  fontFamily: 'DM Sans, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  headings: {
    fontFamily: 'Manrope, -apple-system, BlinkMacSystemFont, sans-serif',
    fontWeight: '600',
    sizes: {
      h1: { fontSize: '3rem', lineHeight: '1.15', fontWeight: '700' },
      h2: { fontSize: '2.25rem', lineHeight: '1.2', fontWeight: '600' },
      h3: { fontSize: '1.75rem', lineHeight: '1.25', fontWeight: '600' },
      h4: { fontSize: '1.35rem', lineHeight: '1.3', fontWeight: '600' },
      h5: { fontSize: '1.15rem', lineHeight: '1.35', fontWeight: '500' },
      h6: { fontSize: '1rem', lineHeight: '1.4', fontWeight: '500' },
    },
  },

  // Minimal radius discipline - no oversized pills
  defaultRadius: 'xs',

  shadows: {
    xs: '0 1px 2px rgba(0, 0, 0, 0.04)',
    sm: '0 2px 4px rgba(0, 0, 0, 0.05)',
    md: '0 4px 12px rgba(0, 0, 0, 0.06)',
    lg: '0 10px 24px rgba(0, 0, 0, 0.08)',
    xl: '0 20px 40px rgba(0, 0, 0, 0.1)',
  },

  components: {
    Button: {
      defaultProps: {
        radius: 0,
        size: 'md',
      },
      styles: {
        root: {
          fontWeight: 500,
          letterSpacing: '-0.01em',
          transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
        },
      },
    },
    Card: {
      defaultProps: {
        radius: 0,
        padding: 'xl',
      },
      styles: {
        root: {
          backgroundColor: '#FFFFFF',
          border: '1px solid #EAEAEA',
        },
      },
    },
    TextInput: {
      defaultProps: {
        radius: 0,
      },
      styles: {
        input: {
          borderColor: '#E2E2DF',
          backgroundColor: '#FFFFFF',
          '&:focus': {
            borderColor: '#1F1F1F',
          },
        },
      },
    },
    Textarea: {
      defaultProps: {
        radius: 0,
      },
      styles: {
        input: {
          borderColor: '#E2E2DF',
          backgroundColor: '#FFFFFF',
          '&:focus': {
            borderColor: '#1F1F1F',
          },
        },
      },
    },
    Select: {
      defaultProps: {
        radius: 0,
      },
      styles: {
        input: {
          borderColor: '#E2E2DF',
          backgroundColor: '#FFFFFF',
          '&:focus': {
            borderColor: '#1F1F1F',
          },
        },
      },
    },
    Accordion: {
      styles: {
        item: {
          borderColor: '#EAEAEA',
        },
        control: {
          paddingTop: '20px',
          paddingBottom: '20px',
        },
      },
    },
  },
});

export default theme;
