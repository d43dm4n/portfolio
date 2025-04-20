import React from 'react';
import { Card, Typography, Stack, Chip } from '@mui/material';

/**
 * Displays a collection of technology chips in a cloud layout
 */
const TechnologyCloud = ({ technologies, title, sx = {} }) => {
  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 4,
        backgroundColor: 'rgba(15, 23, 42, 0.4)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        p: 3,
        ...sx
      }}
    >
      {title && (
        <Typography variant="h5" component="h2" fontWeight={600} gutterBottom>
          {title}
        </Typography>
      )}
      
      <Stack 
        direction="row" 
        spacing={1} 
        useFlexGap 
        flexWrap="wrap" 
        gap={1}
        sx={{ mt: 2 }}
      >
        {technologies.map((item, index) => (
          <Chip
            key={item}
            label={item}
            sx={{
              borderRadius: '20px',
              backgroundColor: `rgba(${(index * 20) % 255}, ${(index * 40) % 255}, ${(index * 60) % 255}, 0.15)`,
              color: 'white',
              fontWeight: 500,
              '&:hover': {
                backgroundColor: `rgba(${(index * 20) % 255}, ${(index * 40) % 255}, ${(index * 60) % 255}, 0.25)`,
              }
            }}
          />
        ))}
      </Stack>
    </Card>
  );
};

export default TechnologyCloud;