import React from 'react';
import { 
  Box, 
  Typography, 
  Grid,  
  Avatar, 
  Chip, 
  Container, 
  Stack,
  useMediaQuery,
  useTheme
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import InterestsIcon from '@mui/icons-material/Interests';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GradientText from '../components/ui/GradientText';
import ProfileSection from '../components/ui/ProfileSection';
import { aboutData } from '../constants/PersonalData';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

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
              bgcolor: 'rgba(25, 118, 210, 0.2)',
              border: '4px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.2)',
            }}
            alt={aboutData.name}
          >
            <CodeIcon sx={{ fontSize: isMobile ? 60 : 80 }} />
          </Avatar>

          <Box>
            <GradientText
              variant="h2"
              component="h1"
              sx={{
                mb: 1,
              }}
            >
              {aboutData.name}
            </GradientText>
            <Typography
              variant="h5"
              sx={{
                color: 'text.secondary',
                mb: 2,
                fontWeight: 500,
              }}
            >
              {aboutData.title}
            </Typography>
            <Typography variant="body1" sx={{ maxWidth: 600 }}>
              {aboutData.bio}
            </Typography>
          </Box>
        </Box>

        {/* Main Content */}
        <Grid container spacing={4}>
          {/* About Me */}
          <Grid item xs={12}>
            <ProfileSection title="About Me">
              <Typography variant="body1" paragraph>
                {aboutData.longBio}
              </Typography>
            </ProfileSection>
          </Grid>

          {/* Experience */}
          <Grid item xs={12} md={6}>
            <ProfileSection title="Experience" icon={<WorkIcon />}>
              {aboutData.experience.map((job, index) => (
                <Box key={index} sx={{ mb: index !== aboutData.experience.length - 1 ? 4 : 0 }}>
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
            </ProfileSection>
          </Grid>

          {/* Education */}
          <Grid item xs={12} md={6}>
            <ProfileSection title="Education" icon={<SchoolIcon />}>
              {aboutData.education.map((edu, index) => (
                <Box key={index} sx={{ mb: index !== aboutData.education.length - 1 ? 4 : 0 }}>
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
            </ProfileSection>
          </Grid>

          {/* Interests */}
          <Grid item xs={12}>
            <ProfileSection title="Interests & Hobbies" icon={<InterestsIcon />}>
              <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                {aboutData.interests.map((interest, index) => (
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
            </ProfileSection>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default About;