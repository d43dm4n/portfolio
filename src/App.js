import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Container, ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import AppBarComponent from './components/AppBar';
import About from './components/About';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contacts from './components/Contacts';
import './App.css';

const SkillsPage = () => (
  <Box sx={{ p: 3, borderRadius: 4, minHeight: '80vh' }}>
    Skills Page Content
  </Box>
);

const ContactPage = () => (
  <Box sx={{ p: 3, borderRadius: 4, minHeight: '80vh' }}>
    Contact Page Content
  </Box>
);

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

// Shapes for Material You design
const ShapeElements = () => (
  <>
    {/* Blob shape 1 - top right */}
    <Box
      sx={{
        position: 'absolute',
        top: '-5%',
        right: '-2%',
        width: '35%',
        height: '40%',
        background: 'radial-gradient(circle at center, rgba(166, 193, 255, 0.2) 0%, rgba(166, 193, 255, 0) 70%)',
        borderRadius: '80% 60% 70% 50%',
        filter: 'blur(40px)',
        animation: 'float 25s infinite alternate ease-in-out',
        zIndex: 0,
      }}
    />
    
    {/* Blob shape 2 - bottom left */}
    <Box
      sx={{
        position: 'absolute',
        bottom: '-5%',
        left: '-5%',
        width: '40%',
        height: '40%',
        background: 'radial-gradient(circle at center, rgba(244, 172, 220, 0.15) 0%, rgba(244, 172, 220, 0) 70%)',
        borderRadius: '60% 70% 50% 80%',
        filter: 'blur(40px)',
        animation: 'float 20s infinite alternate-reverse ease-in-out',
        zIndex: 0,
      }}
    />
    
    {/* Decorative circle 1 */}
    <Box
      sx={{
        position: 'absolute',
        top: '20%',
        right: '25%',
        width: '15vw',
        maxWidth: '200px',
        height: '15vw',
        maxHeight: '200px',
        border: '2px solid rgba(255, 255, 255, 0.03)',
        borderRadius: '50%',
        animation: 'rotate 60s infinite linear',
        zIndex: 0,
      }}
    />
    
    {/* Decorative circle 2 */}
    <Box
      sx={{
        position: 'absolute',
        bottom: '15%',
        left: '15%',
        width: '20vw',
        maxWidth: '250px',
        height: '20vw',
        maxHeight: '250px',
        border: '3px dashed rgba(255, 255, 255, 0.03)',
        borderRadius: '50%',
        animation: 'rotate 80s infinite linear reverse',
        zIndex: 0,
      }}
    />
    
    {/* Small decorative dots */}
    {[...Array(12)].map((_, i) => (
      <Box
        key={i}
        sx={{
          position: 'absolute',
          top: `${Math.random() * 90 + 5}%`,
          left: `${Math.random() * 90 + 5}%`,
          width: `${Math.random() * 6 + 2}px`,
          height: `${Math.random() * 6 + 2}px`,
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '50%',
          animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate ease-in-out`,
          zIndex: 0,
        }}
      />
    ))}

    {/* Subtle grid pattern */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        zIndex: 0,
      }}
    />
  </>
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <style jsx global>{`
        @keyframes float {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(10px, 15px) rotate(5deg); }
          100% { transform: translate(-10px, -15px) rotate(-5deg); }
        }
        
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes twinkle {
          0% { opacity: 0.3; transform: scale(1); }
          100% { opacity: 0.8; transform: scale(1.5); }
        }
        
        body {
          overflow-x: hidden;
        }
      `}</style>
      
      <div className="App" style={{ 
        background: 'linear-gradient(135deg, #1a2a56 0%, #263878 40%, #2a4494 65%, #1e5386 100%)',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <ShapeElements />
        
        <Router>
          <AppBarComponent />
          <Container 
            maxWidth="xl" 
            component="main"
            sx={{
              mt: 2,
              mb: 4,
              borderRadius: 6,
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <Box 
              sx={{ 
                backgroundColor: 'rgba(22, 28, 46, 0.7)',
                backdropFilter: 'blur(16px)',
                borderRadius: '32px',
                flex: 1,
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: '0 10px 40px rgba(0, 0, 0, 0.25)',
                p: { xs: 2, sm: 3, md: 4 },
                position: 'relative',
              }}
            >
              {/* Decorative corner accents */}
              <Box sx={{ 
                position: 'absolute', 
                width: '10%', 
                maxWidth: '80px',
                height: '10%', 
                maxHeight: '80px',
                borderTop: '3px solid rgba(166, 193, 255, 0.4)', 
                borderLeft: '3px solid rgba(166, 193, 255, 0.4)',
                borderTopLeftRadius: '20px',
                top: 20, 
                left: 20,
              }} />
              
              <Box sx={{ 
                position: 'absolute', 
                width: '10%', 
                maxWidth: '80px', 
                height: '10%', 
                maxHeight: '80px',
                borderBottom: '3px solid rgba(244, 172, 220, 0.4)', 
                borderRight: '3px solid rgba(244, 172, 220, 0.4)',
                borderBottomRightRadius: '20px',
                bottom: 20, 
                right: 20,
              }} />
              
              <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/home" element={<Home/>} />
                <Route path="/about" element={<About/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/skills" element={<Skills/>} />
                <Route path="/contact" element={<Contacts />} />
              </Routes>
            </Box>
          </Container>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;