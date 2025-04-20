import React from 'react';
import { Box, Container } from '@mui/material';
import HeroSection from '../components/sections/home/HeroSection';
import SkillsSection from '../components/sections/home/SkillsSection';
import FeaturedProjectsSection from '../components/sections/home/FeaturedProjectsSection';
import CallToActionSection from '../components/sections/home/CallToActionSection';
import { skills } from '../constants/SkillsData';
import { featuredProjects } from '../constants/ProjectsData';
import { personalData } from '../constants/PersonalData';

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ py: { xs: 4, md: 8 } }}>
        <HeroSection personalInfo={personalData} />
        <SkillsSection skills={skills} />
        <FeaturedProjectsSection projects={featuredProjects} />
        <CallToActionSection />
      </Box>
    </Container>
  );
};

export default Home;