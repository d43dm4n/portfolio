import React from 'react';
import { Box, Container, Grid, Fade } from '@mui/material';
import SectionHeader from '../components/ui/SectionHeader';
import SkillCategoryCard from '../components/ui/SkillCategoryCard';
import TechnologyCloud from '../components/ui/TechnologyCloud';
import { skillCategories, otherTechnologies } from '../constants/SkillsData';

/**
 * Skills page displaying proficiency levels and technical expertise
 */
const Skills = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ pt: 2, pb: 8 }}>
        {/* Header */}
        <SectionHeader
          title="My Skills"
          subtitle="A comprehensive overview of my technical expertise and professional competencies."
          centered={true}
          titleProps={{
            component: 'h1',
          }}
          subtitleProps={{
            sx: {
              maxWidth: 700,
              mx: 'auto',
            }
          }}
          sx={{ mb: 6 }}
        />

        {/* Skills Categories */}
        <Grid container spacing={4}>
          {skillCategories.map((category, categoryIndex) => (
            <Grid item xs={12} key={category.name}>
              <Fade in={true} timeout={500 + categoryIndex * 100}>
                <Box>
                  <SkillCategoryCard 
                    category={category}
                    index={categoryIndex}
                  />
                </Box>
              </Fade>
            </Grid>
          ))}
        </Grid>

        {/* Additional Skills Cloud */}
        <Fade in={true} timeout={1000}>
          <Box sx={{ mt: 6 }}>
            <TechnologyCloud 
              technologies={otherTechnologies}
              title="Other Technologies & Tools"
            />
          </Box>
        </Fade>
      </Box>
    </Container>
  );
};

export default Skills;