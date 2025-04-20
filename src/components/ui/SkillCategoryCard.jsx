import React from 'react';
import { Box, Typography, Card, Grid, Grow } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import BarChartIcon from '@mui/icons-material/BarChart';
import DataIcon from '@mui/icons-material/DataUsage';
import SkillProgressBar from './SkillProgressBar';
import { cardStyles, cardPadding } from '../../theme/cardStyles';

/**
 * A component for displaying a category of skills with progress bars
 */
const SkillCategoryCard = ({ category, index }) => {
  // Removed cardPadding from props ^^^ since we're importing it
  
  // Map icon names to actual components with consistent sizing
  const getIcon = (iconName) => {
    const iconProps = { 
      sx: { 
        fontSize: '1.75rem',
        filter: 'drop-shadow(0px 2px 3px rgba(0, 0, 0, 0.2))'
      }
    };
    
    switch(iconName) {
      case 'CodeIcon': return <CodeIcon {...iconProps} />;
      case 'StorageIcon': return <StorageIcon {...iconProps} />;
      case 'BuildIcon': return <BuildIcon {...iconProps} />;
      case 'BarChartIcon': return <BarChartIcon {...iconProps} />;
      case 'DataIcon': return <DataIcon {...iconProps} />;
      default: return <CodeIcon {...iconProps} />;
    }
  };

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 4,
        backgroundColor: 'rgba(15, 23, 42, 0.6)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        overflow: 'visible',
        mb: 2,
        position: 'relative',
        transition: 'transform 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-2px)',
        },
      }}
    >
      {/* Category Header */}
      <Box 
        sx={{ 
          px: { xs: cardPadding.xs, sm: cardPadding.sm, md: cardPadding.md },      
          py: { xs: cardPadding.xs - 0.5, sm: cardPadding.sm - 0.5, md: cardPadding.md - 0.5 },      
          pb: { xs: cardPadding.xs - 1, sm: cardPadding.sm - 1, md: cardPadding.md - 1 },      
          borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          display: 'flex',
          alignItems: 'center',
          gap: 2
        }}
      >
        {/* Improved icon container with better visual integration */}
        <Box
          sx={{
            width: 52,
            height: 52,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: '16px',
            backgroundColor: `${category.color}30`,
            border: `1px solid ${category.color}60`,
            boxShadow: `0 4px 12px ${category.color}20`,
            color: category.color,
            position: 'relative',
            overflow: 'hidden',
            // Adding subtle gradient to icon background
            '&:before': {
              content: '""',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: `linear-gradient(135deg, ${category.color}40 0%, transparent 100%)`,
              opacity: 0.7,
            }
          }}
        >
          {getIcon(category.icon)}
        </Box>
        
        <Typography 
          variant="h5" 
          component="h2" 
          fontWeight={600}
          sx={{
            // Adding subtle gradient to title text for a more premium look
            background: `linear-gradient(90deg, #fff 30%, rgba(255,255,255,0.8) 100%)`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            textShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)'
          }}
        >
          {category.name}
        </Typography>
      </Box>

      {/* Skills List */}
      <Box sx={{ 
        px: { xs: cardPadding.xs, sm: cardPadding.sm, md: cardPadding.md },
        pt: { xs: cardPadding.xs - 0.5, sm: cardPadding.sm - 0.5, md: cardPadding.md - 0.5 },
        pb: { xs: cardPadding.xs, sm: cardPadding.sm, md: cardPadding.md }
      }}>
        <Grid container spacing={4}>
          {category.skills.map((skill, skillIndex) => (
            <Grid item xs={12} md={6} key={skill.name}>
              <Grow 
                in={true} 
                timeout={(skillIndex + 1) * 200}
                style={{ transformOrigin: '0 0 0' }}
              >
                <Box sx={{ 
                  mb: 0.5,              // Add margin to bottom of each skill item
                  mt: skillIndex % 2 === 0 ? 0 : 0.5  // Stagger odd/even items slightly
                }}>
                  <SkillProgressBar 
                    skill={skill} 
                    color={category.color}
                    sx={{ mb: 1.5 }}     // Add more margin to bottom of progress bar
                  />
                </Box>
              </Grow>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Card>
  );
};

export default SkillCategoryCard;