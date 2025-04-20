import React from 'react';
import { Chip } from '@mui/material';

/**
 * A styled skill chip for displaying technology tags
 */
const SkillChip = ({ 
  label, 
  sx = {},
  size = "medium",
  ...props 
}) => {
  return (
    <Chip
      label={label}
      sx={{
        borderRadius: '16px',
        backgroundColor: 'rgba(25, 118, 210, 0.2)',
        color: 'white',
        py: size === "small" ? { xs: 0.5, sm: 1 } : { xs: 1.5, sm: 2.5 },
        px: { xs: 0.5, sm: 1 },
        fontSize: size === "small" 
          ? { xs: '0.7rem', sm: '0.75rem' }
          : { xs: '0.8rem', sm: '0.9rem' },
        '&:hover': {
          backgroundColor: 'rgba(25, 118, 210, 0.4)',
        },
        transition: 'background-color 0.3s ease',
        margin: '4px',
        ...sx,
      }}
      {...props}
    />
  );
};

export default SkillChip;