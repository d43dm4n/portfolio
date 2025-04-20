import React from 'react';
import { Box, Typography, LinearProgress, Chip } from '@mui/material';

/**
 * Displays a skill with name, level indicator, and progress bar
 */
const SkillProgressBar = ({ 
  skill, 
  color = "#a6c1ff",
  sx = {} 
}) => {
  // Helper function to determine skill level text
  const getSkillLevelText = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 75) return "Advanced";
    if (level >= 60) return "Intermediate";
    return "Basic";
  };

  return (
    <Box sx={{ mb: 1, ...sx }}>
      <Box sx={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        mb: 1 
      }}>
        <Typography variant="body1" fontWeight={500}>
          {skill.name}
        </Typography>
        <Chip 
          label={getSkillLevelText(skill.level)} 
          size="small"
          sx={{ 
            borderRadius: '16px',
            backgroundColor: `${color}20`,
            color: color,
            fontWeight: 500,
            fontSize: '0.7rem'
          }} 
        />
      </Box>

      <LinearProgress 
        variant="determinate" 
        value={skill.level}
        sx={{
          height: 8,
          borderRadius: 4,
          backgroundColor: 'rgba(255, 255, 255, 0.08)',
          '& .MuiLinearProgress-bar': {
            borderRadius: 4,
            backgroundImage: `linear-gradient(90deg, ${color}90, ${color})`,
          }
        }}
      />
    </Box>
  );
};

export default SkillProgressBar;