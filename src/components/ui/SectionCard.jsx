import React from 'react';
import { Card, CardContent } from '@mui/material';
import { cardStyles, cardContentStyles } from '../../theme/cardStyles';

const SectionCard = ({ children, sx = {}, contentSx = {}, ...props }) => (
  <Card
    elevation={0}
    sx={{
      ...cardStyles,
      ...sx,
    }}
    {...props}
  >
    <CardContent sx={{ ...cardContentStyles, ...contentSx }}>
      {children}
    </CardContent>
  </Card>
);

export default SectionCard;