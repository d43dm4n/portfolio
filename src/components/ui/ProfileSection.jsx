import React from 'react';
import { Box, Typography, Card, CardContent, Divider } from '@mui/material';
import { cardStyles, cardPadding } from '../../theme/cardStyles';

/**
 * Reusable component for profile sections with consistent styling
 */
const ProfileSection = ({ 
  title, 
  icon,
  children,
  sx = {},
  titleSx = {},
  ...props 
}) => {
  return (
    <Card
      elevation={0}
      sx={{
        ...cardStyles,
        height: '100%',
        transition: 'transform 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
        },
        ...sx
      }}
      {...props}
    >
      <CardContent sx={{ 
        p: { xs: cardPadding.xs, sm: cardPadding.sm, md: cardPadding.md } 
      }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          {icon && React.cloneElement(icon, { sx: { mr: 1, color: 'primary.main' } })}
          <Typography variant="h5" component="h2" sx={titleSx}>
            {title}
          </Typography>
        </Box>
        <Divider sx={{ mb: 3, opacity: 0.3 }} />
        {children}
      </CardContent>
    </Card>
  );
};

export default ProfileSection;