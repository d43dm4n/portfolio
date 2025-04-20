import React from 'react';
import { 
  Box, 
  Typography, 
  Button, 
  Container, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Avatar, 
  Stack, 
  Chip,
  useTheme,
  useMediaQuery} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  // Featured projects - replace with your own
  const featuredProjects = [
    {
      id: 1,
      title: "Measurement Equipment Software",
      description: "A software solution for monitoring measurement equipment, and their calibration dates",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3",
      tags: ["C#", "MSSMS"]
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A responsive portfolio website built with React and Material UI.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3",
      tags: ["React", "MUI", "Responsive"]
    },
    {
      id: 3,
      title: "Project Portfolio Management PWA alpha version for thesis",
      description: "A progressive web app for managing project portfolios, built with React and Firebase.",
      image: "https://images.unsplash.com/photo-1598791318878-10e76d178023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      tags: ["React", "Firebase", "MUI"]
    }
  ];

  // Skills - replace with your own
  const skills = [
    "C", "C++","C#", "React.js", "Firebase", "Material UI", "Java", "Groovy", "Automation",
     "Python", "Data analysis", "HPC", "Machine learning"
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: { xs: 4, md: 8 } }}>
        {/* Hero Section */}
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
            <Typography 
              variant="h2" 
              component="h1" 
              gutterBottom
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(90deg, #90caf9 0%, #ce93d8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2,
                lineHeight: 1.2
              }}
            >
              Hi, I'm Pintér Szilveszter
            </Typography>

            <Typography 
              variant="h4" 
              sx={{ 
                mb: 3, 
                color: 'text.secondary',
                fontWeight: 500
              }}
            >
              Full Stack Developer
            </Typography>

            <Typography 
              variant="body1" 
              paragraph 
              sx={{ 
                mb: 4, 
                maxWidth: '90%', 
                mx: isMobile ? 'auto' : 0 
              }}
            >
              I build modern web applications with clean code and exceptional user experiences.
              Specializing in React, Node.js, and cutting-edge web technologies.
            </Typography>

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
    // Remove padding - this is causing the internal space issue
    p: 0,
    // Add these properties to control image fit
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

        {/* Skills Section */}
        <Box sx={{ mb: 8 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{ 
              mb: 3, 
              fontWeight: 600,
              textAlign: 'center'
            }}
          >
            My Tech Stack
          </Typography>
          
          <Card
            elevation={0}
            sx={{
              borderRadius: 4,
              backgroundColor: 'rgba(15, 23, 42, 0.6)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              p: { xs: 2, sm: 3 },
              overflow: 'hidden',
            }}
          >
            <CardContent sx={{ px: { xs: 1, sm: 2 } }}>
              <Stack 
                direction="row" 
                spacing={1} 
                useFlexGap 
                flexWrap="wrap" 
                justifyContent="center"
                gap={1}
              >
                {skills.map((skill, index) => (
                  <Chip
                    key={index}
                    label={skill}
                    sx={{
                      borderRadius: '16px',
                      backgroundColor: 'rgba(25, 118, 210, 0.2)',
                      color: 'white',
                      py: { xs: 1.5, sm: 2.5 },
                      px: { xs: 0.5, sm: 1 },
                      fontSize: { xs: '0.8rem', sm: '0.9rem' },
                      '&:hover': {
                        backgroundColor: 'rgba(25, 118, 210, 0.4)',
                      },
                      transition: 'background-color 0.3s ease',
                      margin: '4px',
                    }}
                  />
                ))}
              </Stack>
            </CardContent>
          </Card>
        </Box>

        {/* Featured Projects Section */}
        <Box sx={{ mb: 4 }}>
          <Typography 
            variant="h4" 
            component="h2" 
            gutterBottom
            sx={{ 
              mb: 1, 
              fontWeight: 600,
              textAlign: 'center'
            }}
          >
            Featured Projects
          </Typography>
          
          <Typography 
            variant="body1" 
            sx={{ 
              mb: 4, 
              color: 'text.secondary',
              textAlign: 'center'
            }}
          >
            Some of my recent work
          </Typography>

          <Grid container spacing={3}>
            {featuredProjects.map((project) => (
              <Grid item key={project.id} xs={12} md={4}>
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
                    '&:last-child': { pb: { xs: 2, sm: 3 } }
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
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 'auto' }}>
                      {project.tags.map((tag, index) => (
                        <Chip
                          key={index}
                          label={tag}
                          size="small"
                          sx={{
                            borderRadius: '12px',
                            backgroundColor: 'rgba(25, 118, 210, 0.15)',
                            fontSize: { xs: '0.7rem', sm: '0.75rem' },
                            height: { xs: '22px', sm: '24px' },
                            mb: 0.5,
                          }}
                        />
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <Button 
              variant="outlined"
              component={Link}
              to="/projects"
              endIcon={<ArrowForwardIcon />}
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
              View All Projects
            </Button>
          </Box>
        </Box>

        {/* Call to Action */}
        <Box sx={{ mt: 8 }}>
          <Card
            elevation={0}
            sx={{
              borderRadius: 4,
              background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.4) 0%, rgba(206, 147, 216, 0.4) 100%)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              p: { xs: 2, sm: 3, md: 5 },
              textAlign: 'center',
              overflow: 'hidden',
            }}
          >
            <CardContent sx={{ p: { xs: 1, sm: 2 } }}>
              <Typography 
                variant="h4" 
                component="h2" 
                gutterBottom
                sx={{ 
                  fontWeight: 600,
                  fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' }
                }}
              >
                Let's Work Together
              </Typography>
              
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: { xs: 2, sm: 3, md: 4 },
                  maxWidth: 600,
                  mx: 'auto',
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                }}
              >
                I'm currently available for freelance projects, contract work, or full-time positions.
                If you're interested in working together, get in touch!
              </Typography>
              
              <Button 
                variant="contained" 
                color="primary" 
                size={isSmall ? "medium" : "large"}
                component={Link}
                to="/contact"
                endIcon={<ArrowForwardIcon />}
                sx={{ 
                  borderRadius: '28px',
                  px: { xs: 2, sm: 3, md: 4 },
                  py: { xs: 1, sm: 1.5 },
                  textTransform: 'none',
                  fontSize: { xs: '0.9rem', sm: '1rem' },
                  fontWeight: 500,
                  boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)'
                }}
              >
                Contact Me
              </Button>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;