import React from 'react';
import { Box, Card, CardContent, Typography, Button, useMediaQuery, useTheme } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const CallToActionSection = () => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ mt: 8 }}>
      <Card
        elevation={0}
        sx={{
          borderRadius: 4,
          background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.4) 0%, rgba(206, 147, 216, 0.4) 100%)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          p: { xs: 2, sm: 3, md: 5 },
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        <CardContent sx={{ p: { xs: 1, sm: 2 } }}>
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{ 
              fontWeight: 600,
              fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' }
            }}
          >
            Let's Work Together
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: { xs: 2, sm: 3, md: 4 },
              maxWidth: 600,
              mx: 'auto',
              fontSize: { xs: '0.9rem', sm: '1rem' },
            }}
          >
            I'm currently available for freelance projects, contract work, or half-time positions.
            If you're interested in working together, get in touch!
          </Typography>
          
          <Button 
            variant="contained" 
            color="primary" 
            size={isSmall ? "medium" : "large"}
            component={Link}
            to="/contact"
            endIcon={<ArrowForwardIcon />}
            sx={{ 
              borderRadius: '28px',
              px: { xs: 2, sm: 3, md: 4 },
              py: { xs: 1, sm: 1.5 },
              textTransform: 'none',
              fontSize: { xs: '0.9rem', sm: '1rem' },
              fontWeight: 500,
              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
            }}
          >
            Contact Me
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CallToActionSection;