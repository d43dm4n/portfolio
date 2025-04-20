import React, { useState } from 'react';
import { Box, Container, Typography, Fade } from '@mui/material';
import SectionHeader from '../components/ui/SectionHeader';
import FilterTabs from '../components/ui/FilterTabs';
import ProjectDisplayCard from '../components/ui/ProjectDisplayCard';
import { allProjects, projectCategories } from '../constants/ProjectsData';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  // Filter projects based on selected category
  const filteredProjects = filter === 'all'
    ? allProjects
    : allProjects.filter(project => project.categories.includes(filter));

  const handleFilterChange = (event, newValue) => {
    setFilter(newValue);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: { xs: 4, md: 6 } }}>
        {/* Header */}
        <SectionHeader 
          title="My Projects"
          subtitle="A collection of my recent work spanning web development, mobile applications, and UI/UX design."
          centered={true}
          titleProps={{
            component: 'h1'
          }}
          subtitleProps={{
            sx: { 
              maxWidth: 700,
              mx: 'auto',
            }
          }}
        />
        
        {/* Project Filters */}
        <FilterTabs 
          categories={projectCategories}
          selectedFilter={filter}
          onChange={handleFilterChange}
          sx={{ mb: 4 }}
        />

        {/* Projects Grid - Using Box with CSS Grid instead of custom Grid */}
        <Box
          sx={{
            display: 'grid',
            gap: 5,
            gridTemplateColumns: {
              xs: '1fr',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(3, 1fr)'
            }
          }}
        >
          {filteredProjects.map(project => (
            <Fade key={project.id} in={true} timeout={500}>
              <Box>
                <ProjectDisplayCard project={project} />
              </Box>
            </Fade>
          ))}
        </Box>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <Box
            sx={{
              textAlign: 'center',
              py: 8,
              px: 3,
              backgroundColor: 'rgba(15, 23, 42, 0.4)',
              backdropFilter: 'blur(10px)',
              borderRadius: 4,
              border: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <Typography variant="h6" gutterBottom>
              No projects found in this category
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Try selecting a different category or check back later for new projects.
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Projects;