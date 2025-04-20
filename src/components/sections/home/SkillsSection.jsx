import React from 'react';
import { Box, Card, CardContent, Stack } from '@mui/material';
import SectionHeader from '../../ui/SectionHeader';
import SkillChip from '../../ui/SkillChip';

const SkillsSection = ({ skills }) => {
  return (
    <Box sx={{ mb: 8 }}>
      <SectionHeader 
        title="My Tech Stack"
        centered={true}
      />
      
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
              <SkillChip key={index} label={skill} />
            ))}
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};

export default SkillsSection;