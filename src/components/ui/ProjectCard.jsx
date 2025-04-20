import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import SkillChip from './SkillChip';

/**
 * A reusable project card component
 */
const ProjectCard = ({ project }) => {
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card
      elevation={0}
      sx={{
        borderRadius: 4,
        backgroundColor: 'rgba(15, 23, 42, 0.6)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
        },
        overflow: 'hidden',
      }}
    >
      <CardMedia
        component="img"
        height={isSmall ? "140" : "180"}
        image={project.image}
        alt={project.title}
        sx={{ borderRadius: '16px 16px 0 0' }}
      />
      <CardContent sx={{ 
        flexGrow: 1, 
        p: { xs: 2, sm: 3 },
        '&:last-child': { pb: { xs: 2.5, sm: 3.5 } }, // Increased bottom padding
        display: 'flex',
        flexDirection: 'column',
      }}>
        <Typography 
          variant="h6" 
          component="h3" 
          gutterBottom
          sx={{ fontSize: { xs: '1.1rem', sm: '1.25rem' } }}
        >
          {project.title}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            mb: 2,
            fontSize: { xs: '0.875rem', sm: '0.875rem' },
            display: '-webkit-box',
            overflow: 'hidden',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
          }}
        >
          {project.description}
        </Typography>
        {/* Added flexGrow: 1 to push the tags to the bottom with proper spacing */}
        <Box sx={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          gap: 0.8, // Increased gap between chips
          mt: 'auto',
          pt: 1.5, // Added top padding for more space
        }}>
          {project.tags.map((tag, index) => (
            <SkillChip 
              key={index} 
              label={tag} 
              size="small" 
              sx={{
                height: { xs: '22px', sm: '24px' },
                mb: 0.5,
              }}
            />
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;