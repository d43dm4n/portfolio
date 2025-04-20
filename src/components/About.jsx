import React from 'react';
import { 
  Box, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  Avatar, 
  Chip, 
  Container, 
  Divider, 
  Stack,
  useMediaQuery,
  useTheme
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import InterestsIcon from '@mui/icons-material/Interests';
import FavoriteIcon from '@mui/icons-material/Favorite';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // Personal details - replace with your own
  const personalDetails = {
    name: "Pintér Szilveszter",
    title: "Computer Science Student",
    bio: "I love technology since I was a child. I believe that with the right tools and mindset, we can create amazing things. I am passionate about coding and always eager to learn new skills.",
    longBio: "I'm working in tech since I was 21. I had varius projects at my work. I wrote my first thesis in React, Firebase and using the MUI library. Since then I also \
              have worked in IOT projects, where I had to use C++ and Python, Java, PHP, C and a lot of other technologies. From then I started my Master's degree in Computer Science, where I learn \
              machine learning, data science, and HPC and other interesting things. I am a team player and I love to work in a team.",
    education: [
      { 
        degree: "Master of Computer Science", 
        school: "Széchenyi István University", 
        year: "2024-present" 
      },
      { 
        degree: "Bachelor of Computer Science engineering", 
        school: "Széchenyi István University", 
        year: "2019-2024" 
      }
    ],
    experience: [
      { 
        role: "Developement Support Engineer", 
        company: "Comtech Kft", 
        period: "2022-2025",
        description: "Automation, Dev-ops, Web developent,IOT, and Driver implementation using various technologies."
      },
      { 
        role: "Metrology assistant intern", 
        company: "Digital Creations", 
        period: "2021-2022",
        description: "Here I developed a system that can store data about measurement instruments and their calibration. I used MSSQL and .Net for this project. I also worked with precise measurement instruments."
      }
    ],
    interests: ["Coding", "Gardening", "Photography", "Hiking", "Reading", "Traveling", "Music", "Gaming", "Cooking", "Design and Creativity"],
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ pt: 3, pb: 8 }}>
        {/* Header Section */}
        <Box
          sx={{
            mb: 6,
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            alignItems: 'center',
            justifyContent: isMobile ? 'center' : 'flex-start',
            gap: 4,
            textAlign: isMobile ? 'center' : 'left',
          }}
        >
          <Avatar
            sx={{
              width: isMobile ? 120 : 160,
              height: isMobile ? 120 : 160,
              bgcolor: 'primary.main',
              border: '4px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
            }}
            alt={personalDetails.name}
          >
            <CodeIcon sx={{ fontSize: isMobile ? 60 : 80 }} />
          </Avatar>

          <Box>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                background: 'linear-gradient(90deg, #90caf9 0%, #ce93d8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 1,
              }}
            >
              {personalDetails.name}
            </Typography>
            <Typography
              variant="h5"
              sx={{
                color: 'text.secondary',
                mb: 2,
                fontWeight: 500,
              }}
            >
              {personalDetails.title}
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 600 }}>
              {personalDetails.bio}
            </Typography>
          </Box>
        </Box>

        {/* Main Content */}
        <Grid container spacing={4}>
          {/* About Me */}
          <Grid item xs={12}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 4,
                backgroundColor: 'rgba(15, 23, 42, 0.6)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                height: '100%',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Typography variant="h4" component="h2" gutterBottom>
                  About Me
                </Typography>
                <Divider sx={{ mb: 3, opacity: 0.3 }} />
                <Typography variant="body1" paragraph>
                  {personalDetails.longBio}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Experience */}
          <Grid item xs={12} md={6}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 4,
                backgroundColor: 'rgba(15, 23, 42, 0.6)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                height: '100%',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <WorkIcon sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="h5" component="h2">
                    Experience
                  </Typography>
                </Box>
                <Divider sx={{ mb: 3, opacity: 0.3 }} />
                
                {personalDetails.experience.map((job, index) => (
                  <Box key={index} sx={{ mb: index !== personalDetails.experience.length - 1 ? 4 : 0 }}>
                    <Typography variant="h6" component="h3">
                      {job.role}
                    </Typography>
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        color: 'primary.light',
                        mb: 1 
                      }}
                    >
                      {job.company} | {job.period}
                    </Typography>
                    <Typography variant="body2">
                      {job.description}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>

          {/* Education */}
          <Grid item xs={12} md={6}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 4,
                backgroundColor: 'rgba(15, 23, 42, 0.6)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                height: '100%',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <SchoolIcon sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="h5" component="h2">
                    Education
                  </Typography>
                </Box>
                <Divider sx={{ mb: 3, opacity: 0.3 }} />
                
                {personalDetails.education.map((edu, index) => (
                  <Box key={index} sx={{ mb: index !== personalDetails.education.length - 1 ? 4 : 0 }}>
                    <Typography variant="h6" component="h3">
                      {edu.degree}
                    </Typography>
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        color: 'primary.light',
                        mb: 1 
                      }}
                    >
                      {edu.school} | {edu.year}
                    </Typography>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>

          {/* Interests */}
          <Grid item xs={12}>
            <Card
              elevation={0}
              sx={{
                borderRadius: 4,
                backgroundColor: 'rgba(15, 23, 42, 0.6)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.08)',
                height: '100%',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                },
              }}
            >
              <CardContent sx={{ p: 4 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <InterestsIcon sx={{ mr: 1, color: 'primary.main' }} />
                  <Typography variant="h5" component="h2">
                    Interests & Hobbies
                  </Typography>
                </Box>
                <Divider sx={{ mb: 3, opacity: 0.3 }} />
                
                <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                  {personalDetails.interests.map((interest, index) => (
                    <Chip
                      key={index}
                      icon={<FavoriteIcon />}
                      label={interest}
                      variant="outlined"
                      sx={{
                        borderRadius: '16px',
                        borderColor: 'rgba(255, 255, 255, 0.2)',
                        backdropFilter: 'blur(10px)',
                        px: 1,
                        '&:hover': {
                          backgroundColor: 'primary.main',
                          color: 'white'
                        }
                      }}
                    />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;