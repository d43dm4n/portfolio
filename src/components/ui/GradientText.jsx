import React from 'react';
import { Typography } from '@mui/material';

const GradientText = ({ variant, component, children, sx = {}, ...props }) => (
  <Typography
    variant={variant}
    component={component}
    sx={{
      fontWeight: 700,
      background: 'linear-gradient(90deg, #90caf9 0%, #ce93d8 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      ...sx,
    }}
    {...props}
  >
    {children}
  </Typography>
);

export default GradientText;