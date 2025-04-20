import React from 'react';
import { Box, Typography } from '@mui/material';
import GradientText from './GradientText';

/**
 * A consistent section header with optional subtitle
 */
const SectionHeader = ({ 
  title, 
  subtitle,
  centered = false,
  titleProps = {},
  subtitleProps = {},
  ...props 
}) => {
  return (
    <Box 
      sx={{ 
        mb: subtitle ? 1 : 3,
        textAlign: centered ? 'center' : 'left',
      }}
      {...props}
    >
      <GradientText 
        variant="h4" 
        component="h2" 
        gutterBottom
        sx={{ 
          mb: subtitle ? 1 : 3, 
          fontWeight: 600,
          ...titleProps?.sx
        }}
        {...titleProps}
      >
        {title}
      </GradientText>
      
      {subtitle && (
        <Typography 
          variant="body1" 
          sx={{ 
            mb: 4, 
            color: 'text.secondary',
            ...subtitleProps?.sx
          }}
          {...subtitleProps}
        >
          {subtitle}
        </Typography>
      )}
    </Box>
  );
};

export default SectionHeader;