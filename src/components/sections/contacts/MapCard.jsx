import React from 'react';
import { Box, Card, useMediaQuery } from '@mui/material';

/**
 * Google Maps embed card
 */
const MapCard = ({ location }) => {
  const isSmall = useMediaQuery(theme => theme.breakpoints.down('sm'));
  
  // Build the Google Maps URL - in a real implementation you might want to use an API key
  const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85893.06095079347!2d17.575285765483795!3d47.68745877401629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476bbf87407ea035%3A0x400c4290c1e11e0!2sGy%C5%91r%2C%20Hungary!5e0!3m2!1sen!2sus!4v1681827261619!5m2!1sen!2sus`;
  
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 4,
        backgroundColor: 'rgba(15, 23, 42, 0.4)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'hidden',
        display: { xs: 'none', sm: 'block' }, // Hide on very small screens
      }}
    >
      <Box
        component="iframe"
        src={mapUrl}
        width="100%"
        height={isSmall ? "200" : "250"}
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={`Map location - ${location}`}
        sx={{ 
          filter: 'grayscale(1) invert(0.8)',
          opacity: 0.8,
        }}
      />
    </Card>
  );
};

export default MapCard;