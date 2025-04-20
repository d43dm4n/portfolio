import { createTheme } from '@mui/material';

// Enhanced Material You theme with more playful elements
const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#a6c1ff', // Softer blue
      light: '#e3f2fd',
      dark: '#6d8de2',
    },
    secondary: {
      main: '#f4acdc', // Softer pink
      light: '#fff0f7',
      dark: '#cf66b5',
    },
    background: {
      default: '#121c2e',
      paper: 'rgba(22, 28, 46, 0.8)',
    },
    accent1: {
      main: '#80deea', // Teal accent for variety
    },
    accent2: {
      main: '#a5d6a7', // Green accent for variety
    },
  },
  shape: {
    borderRadius: 24, // Even more rounded corners for Material You
  },
  typography: {
    fontFamily: '"Google Sans", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.75rem',
      fontWeight: 700,
      letterSpacing: '-0.5px',
    },
    h2: {
      fontSize: '2.25rem',
      fontWeight: 600,
      letterSpacing: '-0.25px',
    },
    body1: {
      lineHeight: 1.7,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 28, // More rounded buttons
          textTransform: 'none',
          padding: '10px 24px',
          fontWeight: 500,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 28, // More rounded cards
          backgroundColor: 'rgba(22, 28, 46, 0.75)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.2)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
  },
});

export default theme;