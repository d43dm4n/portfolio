import React from 'react';
import { Box } from '@mui/material';

// Shapes for Material You design
export const ShapeElements = () => (
  <>
    {/* Blob shape 1 - top right */}
    <Box
      sx={{
        position: 'absolute',
        top: '-5%',
        right: '-2%',
        width: '35%',
        height: '40%',
        background: 'radial-gradient(circle at center, rgba(166, 193, 255, 0.2) 0%, rgba(166, 193, 255, 0) 70%)',
        borderRadius: '80% 60% 70% 50%',
        filter: 'blur(40px)',
        animation: 'float 25s infinite alternate ease-in-out',
        zIndex: 0,
      }}
    />
    
    {/* Blob shape 2 - bottom left */}
    <Box
      sx={{
        position: 'absolute',
        bottom: '-5%',
        left: '-5%',
        width: '40%',
        height: '40%',
        background: 'radial-gradient(circle at center, rgba(244, 172, 220, 0.15) 0%, rgba(244, 172, 220, 0) 70%)',
        borderRadius: '60% 70% 50% 80%',
        filter: 'blur(40px)',
        animation: 'float 20s infinite alternate-reverse ease-in-out',
        zIndex: 0,
      }}
    />
    
    {/* Decorative circle 1 */}
    <Box
      sx={{
        position: 'absolute',
        top: '20%',
        right: '25%',
        width: '15vw',
        maxWidth: '200px',
        height: '15vw',
        maxHeight: '200px',
        border: '2px solid rgba(255, 255, 255, 0.03)',
        borderRadius: '50%',
        animation: 'rotate 60s infinite linear',
        zIndex: 0,
      }}
    />
    
    {/* Decorative circle 2 */}
    <Box
      sx={{
        position: 'absolute',
        bottom: '15%',
        left: '15%',
        width: '20vw',
        maxWidth: '250px',
        height: '20vw',
        maxHeight: '250px',
        border: '3px dashed rgba(255, 255, 255, 0.03)',
        borderRadius: '50%',
        animation: 'rotate 80s infinite linear reverse',
        zIndex: 0,
      }}
    />
    
    {/* Small decorative dots */}
    {[...Array(12)].map((_, i) => (
      <Box
        key={i}
        sx={{
          position: 'absolute',
          top: `${Math.random() * 90 + 5}%`,
          left: `${Math.random() * 90 + 5}%`,
          width: `${Math.random() * 6 + 2}px`,
          height: `${Math.random() * 6 + 2}px`,
          background: 'rgba(255, 255, 255, 0.2)',
          borderRadius: '50%',
          animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate ease-in-out`,
          zIndex: 0,
        }}
      />
    ))}

    {/* Subtle grid pattern */}
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
        backgroundSize: '50px 50px',
        zIndex: 0,
      }}
    />
  </>
);