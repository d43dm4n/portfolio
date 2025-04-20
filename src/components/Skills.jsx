import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Card,  
  Grid,
  LinearProgress,
  Chip,
  Stack,
  useTheme,
  useMediaQuery,
  Fade,
  Grow
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import BrushIcon from '@mui/icons-material/Brush';
import BuildIcon from '@mui/icons-material/Build';
import BarChartIcon from '@mui/icons-material/BarChart';

const Skills = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));

  // Skills data grouped by category
  const skillCategories = [
    {
      name: "Frontend",
      icon: <CodeIcon />,
      color: theme.palette.primary.main,
      skills: [
        { name: "React", level: 50 },
        { name: "JavaScript", level: 65 },
        { name: "HTML/CSS", level: 50 },
        { name: "Material UI", level: 75 },
        { name: "Responsive Design", level: 70 },
      ]
    },
    {
      name: "Backend",
      icon: <StorageIcon />,
      color: theme.palette.secondary.main,
      skills: [
        { name: "Node.js", level: 25 },
        { name: "Firebase", level: 60 },
        { name: "SQL", level: 75 },
      ]
    },
    {
      name: "Tools & DevOps",
      icon: <BuildIcon />,
      color: "#f4acdc", // Using the theme colors from App.js
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Docker", level: 70 },
        { name: "Testing", level: 80 },
      ]
    },
    {
      name: "Data Science",
      icon: <BuildIcon />,
      color: "#f4acdc", // Using the theme colors from App.js
      skills: [
        { name: "Python", level: 50 },
        { name: "Pandas", level: 60 },
        { name: "NumPy", level: 50 },
        { name: "Machine Learning", level: 50 },
        { name: "Data Visualization", level: 50 },
        { name: "Data Analysis", level: 50 },
        { name: "Data Cleaning", level: 60 },
      ]
    },
    {
      name: "Other Skills",
      icon: <BarChartIcon />,
      color: "#80deea", // Using the theme colors from App.js
      skills: [
        { name: "Project Management", level: 60 },
        { name: "Problem Solving", level: 90 },
        { name: "Team Collaboration", level: 85 },
        { name: "Technical Writing", level: 65 },
      ]
    }
  ];

  // Helper function to determine skill level text
  const getSkillLevelText = (level) => {
    if (level >= 90) return "Expert";
    if (level >= 75) return "Advanced";
    if (level >= 60) return "Intermediate";
    return "Basic";
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ pt: 2, pb: 8 }}>
        {/* Header */}
        <Box sx={{ mb: 6, textAlign: 'center' }}>
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
            }}
          >
            My Skills
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              maxWidth: 700, 
              mx: 'auto',
              color: 'text.secondary',
              mb: 4 
            }}
          >
            A comprehensive overview of my technical expertise and professional competencies.
          </Typography>
        </Box>

        {/* Skills Categories */}
        <Grid container spacing={4}>
          {skillCategories.map((category, categoryIndex) => (
            <Grid item xs={12} key={category.name}>
              <Fade in={true} timeout={500 + categoryIndex * 100}>
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: 4,
                    backgroundColor: 'rgba(15, 23, 42, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    overflow: 'visible',
                    mb: 2,
                    position: 'relative',
                  }}
                >
                  {/* Category Header */}
                  <Box 
                    sx={{ 
                      p: 3,
                      pb: 2,
                      borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2
                    }}
                  >
                    <Box
                      sx={{
                        width: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '50%',
                        backgroundColor: `${category.color}40`,
                        color: category.color,
                      }}
                    >
                      {category.icon}
                    </Box>
                    <Typography variant="h5" component="h2" fontWeight={600}>
                      {category.name}
                    </Typography>
                  </Box>

                  {/* Skills List */}
                  <Box sx={{ p: 3 }}>
                    <Grid container spacing={4}>
                      {category.skills.map((skill, index) => (
                        <Grid item xs={12} md={6} key={skill.name}>
                          <Grow 
                            in={true} 
                            timeout={(index + 1) * 200}
                            style={{ transformOrigin: '0 0 0' }}
                          >
                            <Box sx={{ mb: 1 }}>
                              <Box sx={{ 
                                display: 'flex', 
                                justifyContent: 'space-between', 
                                alignItems: 'center', 
                                mb: 1 
                              }}>
                                <Typography variant="body1" fontWeight={500}>
                                  {skill.name}
                                </Typography>
                                <Chip 
                                  label={getSkillLevelText(skill.level)} 
                                  size="small"
                                  sx={{ 
                                    borderRadius: '16px',
                                    backgroundColor: `${category.color}20`,
                                    color: category.color,
                                    fontWeight: 500,
                                    fontSize: '0.7rem'
                                  }} 
                                />
                              </Box>

                              <LinearProgress 
                                variant="determinate" 
                                value={skill.level}
                                sx={{
                                  height: 8,
                                  borderRadius: 4,
                                  backgroundColor: 'rgba(255, 255, 255, 0.08)',
                                  '& .MuiLinearProgress-bar': {
                                    borderRadius: 4,
                                    backgroundImage: `linear-gradient(90deg, ${category.color}90, ${category.color})`,
                                  }
                                }}
                              />
                            </Box>
                          </Grow>
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>

        {/* Additional Skills Cloud */}
        <Fade in={true} timeout={1000}>
          <Card
            elevation={0}
            sx={{
              borderRadius: 4,
              backgroundColor: 'rgba(15, 23, 42, 0.4)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              mt: 6,
              p: 3,
            }}
          >
            <Typography variant="h5" component="h2" fontWeight={600} gutterBottom>
              Other Technologies & Tools
            </Typography>
            
            <Stack 
              direction="row" 
              spacing={1} 
              useFlexGap 
              flexWrap="wrap" 
              gap={1}
              sx={{ mt: 2 }}
            >
              {["Git", "GitHub", "VS Code", "Firebase", "NPM", "Python", 
                "NumPy", "Pandas", "Docker",
                "MSSQL","Jupyter Notebook",
                "Jenkins", "Portainer", "SVN", "IOT"
              ].map((item, index) => (
                <Chip
                  key={item}
                  label={item}
                  sx={{
                    borderRadius: '20px', // Very rounded
                    backgroundColor: `rgba(${(index * 20) % 255}, ${(index * 40) % 255}, ${(index * 60) % 255}, 0.15)`,
                    color: 'white',
                    fontWeight: 500,
                    '&:hover': {
                      backgroundColor: `rgba(${(index * 20) % 255}, ${(index * 40) % 255}, ${(index * 60) % 255}, 0.25)`,
                    }
                  }}
                />
              ))}
            </Stack>
          </Card>
        </Fade>
      </Box>
    </Container>
  );
};

export default Skills;