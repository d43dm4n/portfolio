import React, { useState } from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Chip,
  Button,
  Stack,
  Tabs,
  Tab,
  useTheme,
  useMediaQuery,
  alpha,
  Fade,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LaunchIcon from "@mui/icons-material/Launch";

const Projects = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [filter, setFilter] = useState("all");

  // Categories for filtering
  const categories = ["all", "web", "mobile", "design", "backend", "AI", "ML", "Data Science"];

  // Project data - replace with your own projects
  const projectsData = [
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A responsive portfolio website built with React and Material UI to showcase projects and skills.",
      longDescription:
        "Designed and developed a modern portfolio website using React and Material UI with a focus on performance, accessibility, and responsive design. Features include dark mode, smooth animations, contact form integration, and optimized asset loading.",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3",
      demoLink: "https://yourportfolio.com",
      repoLink: "https://github.com/d43dm4n/portfolio",
      tags: ["React", "Material UI", "Responsive Design"],
      categories: ["web", "design"],
    },
    {
      id: 2,
      title: "Project Portfolio Management PWA alpha version",
      description:
        "A project management tool for tracking tasks and progress, built with React and Firebase.",
      longDescription:
        "It was my thesis project for bsc for computer science engineering. I developed a project management tool using React and Firebase, allowing users to create, manage, and track tasks in real-time. The app features user authentication, task categorization, and progress tracking, and priorization.",
      image:
        "https://images.unsplash.com/photo-1598791318878-10e76d178023?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80",
      demoLink: "https://yourprojectmanagementapp.com",
      repoLink: "https://github.com/d43dm4n/Szakdolgozat",
      tags: ["React", "Firebase", "PWA"],
      categories: ["web", "mobile", "backend", "design"],
    }
  ];

  // Filter projects based on selected category
  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) => project.categories.includes(filter));

  const handleFilterChange = (event, newValue) => {
    setFilter(newValue);
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: { xs: 4, md: 6 } }}>
        {/* Header */}
        <Box sx={{ mb: 6, textAlign: "center" }}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 700,
              background: "linear-gradient(90deg, #90caf9 0%, #ce93d8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
            }}
          >
            My Projects
          </Typography>
          <Typography
            variant="h6"
            sx={{
              maxWidth: 700,
              mx: "auto",
              color: "text.secondary",
              mb: 4,
            }}
          >
            A collection of my recent work spanning web development, mobile
            applications, and UI/UX design.
          </Typography>

          {/* Project Filters */}
          <Box sx={{ mb: 4, display: "flex", justifyContent: "center" }}>
            <Tabs
              value={filter}
              onChange={handleFilterChange}
              variant={isMobile ? "scrollable" : "standard"}
              scrollButtons={isMobile ? "auto" : false}
              allowScrollButtonsMobile
              centered={!isMobile}
              sx={{
                "& .MuiTab-root": {
                  textTransform: "capitalize",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  py: 1.5,
                  px: 3,
                  borderRadius: "28px",
                  minWidth: "auto",
                  mx: 0.5,
                  color: "text.secondary",
                  "&.Mui-selected": {
                    color: "white",
                    bgcolor: "primary.main",
                  },
                },
                "& .MuiTabs-indicator": {
                  display: "none",
                },
              }}
            >
              {categories.map((category) => (
                <Tab
                  key={category}
                  label={category === "all" ? "All Projects" : category}
                  value={category}
                />
              ))}
            </Tabs>
          </Box>
        </Box>

        {/* Projects Grid */}
        <Grid container spacing={4}>
          {filteredProjects.map((project) => (
            <Grid item key={project.id} xs={12} md={6} lg={4}>
              <Fade in={true} timeout={500}>
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: 4,
                    backgroundColor: "rgba(15, 23, 42, 0.6)",
                    backdropFilter: "blur(10px)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "translateY(-8px)",
                      boxShadow: "0 12px 30px rgba(0, 0, 0, 0.3)",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    height="200"
                    image={project.image}
                    alt={project.title}
                    sx={{
                      borderTopLeftRadius: "16px",
                      borderTopRightRadius: "16px",
                    }}
                  />
                  <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography variant="h5" component="h2" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" paragraph sx={{ mb: 3 }}>
                      {project.description}
                    </Typography>
                    <Stack
                      direction="row"
                      spacing={1}
                      flexWrap="wrap"
                      gap={1}
                      sx={{ mb: 2 }}
                    >
                      {project.tags.map((tag, index) => (
                        <Chip
                          key={index}
                          label={tag}
                          size="small"
                          sx={{
                            borderRadius: "12px",
                            backgroundColor: alpha(
                              theme.palette.primary.main,
                              0.15
                            ),
                            color: theme.palette.primary.light,
                            fontSize: "0.75rem",
                          }}
                        />
                      ))}
                    </Stack>
                  </CardContent>
                  <CardActions
                    sx={{
                      p: 3,
                      pt: 0,
                      pb: 3,
                      marginTop: "auto",
                    }}
                  >
                    <Stack
                      direction="row"
                      spacing={1.5} // Reduced spacing for smaller buttons
                      sx={{
                        width: "100%",
                        mb: 0.5,
                        justifyContent: "center", // Center the buttons
                      }}
                    >
                      {project.demoLink && (
                        <Button
                          variant="contained"
                          color="primary"
                          startIcon={<LaunchIcon sx={{ fontSize: "1rem" }} />} // Smaller icon
                          href={project.demoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="small" // Use small size
                          sx={{
                            borderRadius: "20px", // Full rounded for chip-like appearance
                            textTransform: "none",
                            fontWeight: 500,
                            fontSize: "0.75rem", // Smaller font for chip-like look
                            py: 0.5, // Reduced padding for smaller height
                            px: 1.5, // Control width with horizontal padding
                            minWidth: "auto", // Allow button to shrink
                            background:
                              "linear-gradient(90deg, rgba(25, 118, 210, 0.9) 0%, rgba(66, 133, 244, 0.9) 100%)",
                            boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                            transition: "all 0.2s ease-in-out",
                            "&:hover": {
                              transform: "translateY(-2px)",
                              boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.15)",
                            },
                            "&:active": {
                              transform: "translateY(0px)",
                              boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.1)",
                            },
                            letterSpacing: "0.1px",
                          }}
                        >
                          Live Demo
                        </Button>
                      )}
                      {project.repoLink && (
                        <Button
                          variant="outlined"
                          startIcon={<GitHubIcon sx={{ fontSize: "1rem" }} />} // Smaller icon
                          href={project.repoLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          size="small" // Use small size
                          sx={{
                            borderRadius: "20px", // Full rounded for chip-like appearance
                            textTransform: "none",
                            fontWeight: 500,
                            fontSize: "0.75rem", // Smaller font for chip-like look
                            py: 0.5, // Reduced padding for smaller height
                            px: 1.5, // Control width with horizontal padding
                            minWidth: "auto", // Allow button to shrink
                            borderWidth: "1px",
                            borderColor: theme.palette.primary.main,
                            color: theme.palette.primary.light,
                            transition: "all 0.2s ease-in-out",
                            "&:hover": {
                              backgroundColor: alpha(
                                theme.palette.primary.main,
                                0.04
                              ),
                              transform: "translateY(-2px)",
                              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.08)",
                            },
                            "&:active": {
                              transform: "translateY(0px)",
                              backgroundColor: alpha(
                                theme.palette.primary.main,
                                0.08
                              ),
                            },
                            letterSpacing: "0.1px",
                          }}
                        >
                          Code
                        </Button>
                      )}
                    </Stack>
                  </CardActions>
                </Card>
              </Fade>
            </Grid>
          ))}
        </Grid>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <Box
            sx={{
              textAlign: "center",
              py: 8,
              px: 3,
              backgroundColor: "rgba(15, 23, 42, 0.4)",
              backdropFilter: "blur(10px)",
              borderRadius: 4,
              border: "1px solid rgba(255, 255, 255, 0.08)",
            }}
          >
            <Typography variant="h6" gutterBottom>
              No projects found in this category
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Try selecting a different category or check back later for new
              projects.
            </Typography>
          </Box>
        )}
      </Box>
    </Container>
  );
};

export default Projects;
