import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Avatar, 
  Stack,
  useTheme,
  useMediaQuery
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import GradientText from '../../ui/GradientText';

const HeroSection = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box 
      sx={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        mb: 8,
        gap: 4,
      }}
    >
      <Box 
        sx={{ 
          textAlign: isMobile ? 'center' : 'left',
          order: isMobile ? 2 : 1,
          flex: 1
        }}
      >
        <GradientText 
          variant="h2" 
          component="h1" 
          sx={{
            mb: 2,
            lineHeight: 1.2
          }}
        >
          Hi, I'm Pintér Szilveszter
        </GradientText>

        <Typography 
          variant="h4" 
          sx={{ 
            mb: 3, 
            color: 'text.secondary',
            fontWeight: 500
          }}
        >
          Computer Science Student
        </Typography>

        {/* Bio paragraph */}
        <Typography 
          variant="body1" 
          paragraph 
          sx={{ 
            mb: 4, 
            maxWidth: '90%', 
            mx: isMobile ? 'auto' : 0 
          }}
        >
          I am a passionate computer science student with a keen interest in software development and data analysis.
          I enjoy solving complex problems and creating efficient solutions. I have worked on various projects,
          ranging from web applications to driver implementations, autoHideDuration, DevOps, and linux arm development.
          I am always eager to learn new technologies and improve my skills.
          <br />
          I'm currently looking for opportunities to apply my knowledge and skills in Data Science, Software Development, or Web Development.
        </Typography>

        {/* Call to action buttons */}
        <Stack 
          direction="row" 
          spacing={2} 
          sx={{ 
            mb: 4,
            justifyContent: isMobile ? 'center' : 'flex-start'
          }}
        >
          <Button 
            variant="contained" 
            color="primary" 
            size="large"
            component={Link}
            to="/contact"
            endIcon={<ArrowForwardIcon />}
            sx={{ 
              borderRadius: '28px',
              px: 3, 
              py: 1.5,
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              boxShadow: '0 8px 16px rgba(25, 118, 210, 0.3)'
            }}
          >
            Get in Touch
          </Button>
          <Button 
            variant="outlined"
            component={Link}
            to="/projects"
            sx={{ 
              borderRadius: '28px',
              px: 3, 
              py: 1.5,
              textTransform: 'none',
              fontSize: '1rem',
              fontWeight: 500,
              borderWidth: 2
            }}
          >
            View Projects
          </Button>
        </Stack>

        {/* Social links */}
        <Stack 
          direction="row" 
          spacing={2}
          sx={{ 
            justifyContent: isMobile ? 'center' : 'flex-start'
          }}
        >
          <Button 
            startIcon={<GitHubIcon />}
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ 
              borderRadius: '50%',
              minWidth: 0,
              p: 1.5,
              color: 'text.secondary',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'primary.main'
              }
            }}
          />
          <Button 
            startIcon={<LinkedInIcon />}
            href="https://www.linkedin.com/in/szilveszter-pinter-7a4740249/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ 
              borderRadius: '50%',
              minWidth: 0,
              p: 1.5,
              color: 'text.secondary',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                color: 'primary.main'
              }
            }}
          />
        </Stack>
      </Box>

      {/* Profile Image */}
      <Box 
        sx={{ 
          display: 'flex', 
          justifyContent: 'center',
          order: isMobile ? 1 : 2,
          flex: isMobile ? undefined : 0.8
        }}
      >
        <Avatar
          sx={{
            width: isMobile ? 200 : 350,
            height: isMobile ? 200 : 350,
            bgcolor: 'rgba(25, 118, 210, 0.2)',
            border: '4px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
            p: 0,
            '& .MuiAvatar-img': {
              objectFit: 'cover',
              width: '100%',
              height: '100%',
            }
          }}             
          src="https://media.licdn.com/dms/image/v2/D4D03AQFVKvtKErjlyw/profile-displayphoto-shrink_800_800/B4DZYf1AKxG4Ak-/0/1744290710756?e=1749686400&v=beta&t=GmPKhrJQlC6IvIrbzKzaGFrjknMFfJCo77dTqPm1zBI"
          alt="Pintér Szilveszter"
        />
      </Box>
    </Box>
  );
};

export default HeroSection;