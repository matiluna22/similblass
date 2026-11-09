import { createTheme, responsiveFontSizes } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    whatsapp: Palette['primary'];
  }
  interface PaletteOptions {
    whatsapp?: PaletteOptions['primary'];
  }
  interface BreakpointOverrides {
    nav: true;
    press: true;
  }
}

let theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      nav: 769,
      press: 861,
      lg: 1025,
      xl: 1440,
    },
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#344C36',
      dark: '#233625',
      light: '#456347',
      contrastText: '#FFFFFF',
    },
    secondary: {
      main: '#A6845B',
      dark: '#7A5C3A',
      light: '#C5A882',
      contrastText: '#1C241C',
    },
    error: {
      main: '#B42318',
      contrastText: '#FFFFFF',
    },
    warning: {
      main: '#8A4B08',
      contrastText: '#FFFFFF',
    },
    success: {
      main: '#267341',
      contrastText: '#FFFFFF',
    },
    background: {
      default: '#FAF8F5', // Warm African sand
      paper: '#FFFFFF',
    },
    text: {
      primary: '#1C241C',
      secondary: '#485449',
    },
    whatsapp: {
      main: '#25D366',
      dark: '#1EBE5D',
      light: '#4CE085',
      contrastText: '#162417',
    },
  },
  spacing: 8,
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
    body1: {
      lineHeight: 1.65,
    },
    body2: {
      lineHeight: 1.65,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 14,
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
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 24,
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
