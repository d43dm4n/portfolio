import React from 'react';
import { Box, Container, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SectionHeader from '../../ui/SectionHeader';
import ProjectDisplayCard from '../../ui/ProjectDisplayCard';
import { Link } from 'react-router-dom';

const FeaturedProjectsSection = ({ projects }) => {
  return (
    <Box component="section" sx={{ py: { xs: 5, md: 8 } }}>
      <Container maxWidth="lg">
        {/* Section Header */}
        <SectionHeader 
          title="Featured Projects"
          subtitle="A selection of my recent work"
          centered={false}
          sx={{ mb: 5 }}
        />

        {/* Projects Grid - Using Box with CSS Grid instead of MUI Grid */}
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
          {projects.map((project) => (
            <ProjectDisplayCard key={project.id} project={project} />
          ))}
        </Box>

        {/* View All Button */}
        <Box 
          sx={{ 
            display: 'flex', 
            justifyContent: 'center',
            mt: 6 
          }}
        >
          <Button
            component={Link}
            to="/projects"
            variant="outlined"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            sx={{
              borderRadius: '28px',
              textTransform: 'none',
              px: 4,
              py: 1.5,
              fontSize: '1rem',
              fontWeight: 500,
              borderWidth: 2,
              '&:hover': {
                borderWidth: 2,
              }
            }}
          >
            View All Projects
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default FeaturedProjectsSection;