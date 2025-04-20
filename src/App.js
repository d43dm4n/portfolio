import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Container, ThemeProvider, CssBaseline, GlobalStyles } from '@mui/material';
import AppBarComponent from './components/layout/AppBar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contacts';
import theme from './theme/theme';
import './App.css';

import { ShapeElements } from './theme/shapeElements';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          '@keyframes float': {
            '0%': { transform: 'translate(0, 0) rotate(0deg)' },
            '50%': { transform: 'translate(10px, 15px) rotate(5deg)' },
            '100%': { transform: 'translate(-10px, -15px) rotate(-5deg)' }
          },
          '@keyframes rotate': {
            from: { transform: 'rotate(0deg)' },
            to: { transform: 'rotate(360deg)' }
          },
          '@keyframes twinkle': {
            '0%': { opacity: 0.3, transform: 'scale(1)' },
            '100%': { opacity: 0.8, transform: 'scale(1.5)' }
          },
          'body': {
            overflowX: 'hidden'
          }
        }}
      />
      
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
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </Box>
          </Container>
        </Router>
      </div>
    </ThemeProvider>
  );
}

export default App;