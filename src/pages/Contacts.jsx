import React from 'react';
import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import Stack from '@mui/material/Stack';
import ContactForm from '../components/sections/contacts/ContactForm';
import ContactInfo from '../components/sections/contacts/ContactInfo';
import MapCard from '../components/sections/contacts/MapCard';
import GradientText from '../components/ui/GradientText';
import { contactInfo, socialLinks, location } from '../constants/ContactData';


/**
 * Contact page with form, contact information and map
 * Simplified layout that maximizes form space
 */
const Contact = () => {
  const theme = useTheme();
  const isLgScreen = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: { xs: 4, md: 6, lg: 8 } }}>
        {/* Header */}
        <Box sx={{ 
          mb: { xs: 6, lg: 8 },
          textAlign: 'center' 
        }}>
          <GradientText
            variant="h2"
            component="h1" 
            sx={{ 
              mb: 2.5,
              fontSize: { xs: '2.5rem', md: '3.5rem', lg: '4rem' },
            }}
          >
            Get In Touch
          </GradientText>
          <Typography 
            variant="h6" 
            sx={{ 
              maxWidth: 900, 
              mx: 'auto',
              color: 'text.secondary',
              mb: 5,
              fontSize: { xs: '1rem', md: '1.125rem' },
            }}
          >
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </Typography>
        </Box>

        {/* Switched to Box layout for more direct control */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', lg: 'row' },
            gap: 5,
            minHeight: '800px'
          }}
        >
          {/* Contact Form */}
          <Box
            sx={{
              flex: { lg: '0 0 60%' }, // Fixed width on large screens
              width: '100%', // Full width on small screens
              height: { xs: 'auto', lg: '800px' }, // Fixed height on large screens
            }}
          >
            <ContactForm />
          </Box>
          
          {/* Contact Info and Map */}
          <Box
            sx={{
              flex: { lg: '0 0 40%' }, // Fixed width on large screens
              width: '100%', // Full width on small screens
              display: 'flex',
              flexDirection: 'column',
              gap: 5
            }}
          >
            <ContactInfo 
              contactInfo={contactInfo} 
              socialLinks={socialLinks} 
            />
            <MapCard location={location} />
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;