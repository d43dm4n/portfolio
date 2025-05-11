import React from 'react';
import { Box, Typography, Card, Fade } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BuildIcon from '@mui/icons-material/Build';
import BarChartIcon from '@mui/icons-material/BarChart';
import DataIcon from '@mui/icons-material/DataUsage';
import SkillProgressBar from './SkillProgressBar';

const SkillCategoryCard = ({ category, index }) => {
  // Icon mapping function
  const getIcon = (iconName) => {
    const iconProps = { 
      sx: { 
        fontSize: '1.5rem',
        color: category.color,
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
    <Box sx={{ width: '100%', mb: 4 }}>
      <Card
        elevation={1}
        sx={{
          width: '100%',
          borderRadius: 2,
          backgroundColor: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
          transition: 'transform 0.2s ease-out',
          '&:hover': {
            transform: 'translateY(-4px)',
          },
        }}
      >
        {/* Header */}
        <Box 
          sx={{ 
            px: 3,
            py: 2,
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: 2,
          }}
        >
          {/* Icon */}
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: category.color,
            }}
          >
            {getIcon(category.icon)}
          </Box>
          
          {/* Title */}
          <Typography 
            variant="h6"
            component="h2" 
            fontWeight={600}
            sx={{ color: 'white' }}
          >
            {category.name}
          </Typography>
        </Box>

        {/* Content - Now with multi-column grid */}
        <Box sx={{ p: 3 }}>
          <Box
            sx={{
              display: 'grid',
              // Multiple columns to make it wider instead of list-like
              gridTemplateColumns: {
                xs: '1fr',                  // 1 column on mobile
                sm: 'repeat(2, 1fr)',       // 2 columns on tablets
                md: 'repeat(2, 1fr)',       // 2 columns on laptop
                lg: 'repeat(4, 1fr)',       // 5 columns on desktop
              },
              gap: 2.5,
              width: '100%',
            }}
          >
            {category.skills.map((skill) => (
              <Box key={skill.name}>
                <SkillProgressBar 
                  skill={skill} 
                  color={category.color}
                />
              </Box>
            ))}
          </Box>
        </Box>
      </Card>
    </Box>
  );
};

export default SkillCategoryCard;