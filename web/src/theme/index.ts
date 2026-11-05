import { createTheme, responsiveFontSizes } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    whatsapp: Palette['primary'];
  }
  interface PaletteOptions {
    whatsapp?: PaletteOptions['primary'];
  }
}

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#B45309', // Warm amber / Safari sunset
      dark: '#78350F',
      light: '#D97706',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#1E3A2F', // Deep savanna forest green
      dark: '#14271F',
      light: '#2D5544',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FAF8F5', // Warm African sand
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1C1917', // Earth dark, high contrast > 7:1
      secondary: '#57534E', // Warm gray
    },
    whatsapp: {
      main: '#25D366',
      dark: '#1EBE5D',
      light: '#4CE085',
      contrastText: '#FFFFFF',
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.15,
    },
    h2: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 700,
      letterSpacing: '-0.01em',
      lineHeight: 1.2,
    },
    h3: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 600,
      lineHeight: 1.25,
    },
    h4: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Playfair Display", Georgia, serif',
      fontWeight: 600,
    },
    h6: {
      fontWeight: 600,
    },
    subtitle1: {
      fontSize: '1.125rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 30, // Elegant pill buttons like BlasTrips
          padding: '10px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.1)',
          },
        },
        contained: {
          backgroundColor: '#B45309',
          '&:hover': {
            backgroundColor: '#92400E',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
          transition: 'transform 0.25s ease, box-shadow 0.25s ease',
          '&:hover': {
            transform: 'translateY(-4px)',
            boxShadow: '0 12px 30px rgba(0, 0, 0, 0.12)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 600,
          borderRadius: 20,
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
