import React from 'react';
import { 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Stack, 
  Box, 
  Chip, 
  alpha, 
  CardActions,
  Button,
  useTheme
} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
import { cardStyles, cardPadding } from '../../theme/cardStyles';

/**
 * Enhanced project card with action buttons and detailed styling
 */
const ProjectDisplayCard = ({ project }) => {
  const theme = useTheme();

  return (
    <Card
      elevation={0}
      sx={{
        ...cardStyles,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 12px 30px rgba(0, 0, 0, 0.3)',
        },
      }}
    >
      <CardMedia
        component="img"
        height="200"
        image={project.image}
        alt={project.title}
        sx={{
          borderTopLeftRadius: '16px',
          borderTopRightRadius: '16px',
        }}
      />
      <CardContent sx={{ 
        flexGrow: 1, 
        p: { xs: cardPadding.xs, sm: cardPadding.sm, md: cardPadding.md },
        '&:last-child': { pb: { xs: cardPadding.xs, sm: cardPadding.sm, md: cardPadding.md } }
      }}>
        <Typography variant="h5" component="h2" gutterBottom>
          {project.title}
        </Typography>
        <Typography variant="body2" paragraph sx={{ mb: 3 }}>
          {project.description}
        </Typography>
        <Stack
          direction="row"
          spacing={1}
          flexWrap="wrap"
          gap={1}
          sx={{ mb: 2 }}
        >
          {project.tags.map((tag, index) => (
            <Chip
              key={index}
              label={tag}
              size="small"
              sx={{
                borderRadius: '12px',
                backgroundColor: alpha(theme.palette.primary.main, 0.15),
                color: theme.palette.primary.light,
                fontSize: '0.75rem',
              }}
            />
          ))}
        </Stack>
      </CardContent>
      <CardActions
        sx={{
          p: { xs: cardPadding.xs, sm: cardPadding.sm },
          pt: 0,
          marginTop: 'auto',
        }}
      >
        <Stack
          direction="row"
          spacing={1.5}
          sx={{
            width: '100%',
            mb: 0.5,
            justifyContent: 'center',
          }}
        >
          {project.demoLink && (
            <Button
              variant="contained"
              color="primary"
              startIcon={<LaunchIcon sx={{ fontSize: '1rem' }} />}
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                borderRadius: '20px',
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '0.75rem',
                py: 0.5,
                px: 1.5,
                minWidth: 'auto',
                background: 'linear-gradient(90deg, rgba(25, 118, 210, 0.9) 0%, rgba(66, 133, 244, 0.9) 100%)',
                boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-2px)',
                  boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.15)',
                },
                '&:active': {
                  transform: 'translateY(0px)',
                  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
                },
                letterSpacing: '0.1px',
              }}
            >
              Live Demo
            </Button>
          )}
          {project.repoLink && (
            <Button
              variant="outlined"
              startIcon={<GitHubIcon sx={{ fontSize: '1rem' }} />}
              href={project.repoLink}
              target="_blank"
              rel="noopener noreferrer"
              size="small"
              sx={{
                borderRadius: '20px',
                textTransform: 'none',
                fontWeight: 500,
                fontSize: '0.75rem',
                py: 0.5,
                px: 1.5,
                minWidth: 'auto',
                borderWidth: '1px',
                borderColor: theme.palette.primary.main,
                color: theme.palette.primary.light,
                transition: 'all 0.2s ease-in-out',
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.04),
                  transform: 'translateY(-2px)',
                  boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.08)',
                },
                '&:active': {
                  transform: 'translateY(0px)',
                  backgroundColor: alpha(theme.palette.primary.main, 0.08),
                },
                letterSpacing: '0.1px',
              }}
            >
              Code
            </Button>
          )}
        </Stack>
      </CardActions>
    </Card>
  );
};

export default ProjectDisplayCard;