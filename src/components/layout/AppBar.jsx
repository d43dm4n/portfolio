import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
  Container,
  Avatar,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CodeIcon from "@mui/icons-material/Code";
import { useNavigate, Link, useLocation } from "react-router-dom";

const navItems = ["Home", "About", "Projects", "Skills", "Contact"];

const AppBarComponent = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (item) => {
    setMobileOpen(false);
    navigate(`/${item.toLowerCase()}`);
  };

  // Helper to determine if a nav item is active
  const isActive = (path) => {
    const currentPath = location.pathname.slice(1) || "home";
    return path.toLowerCase() === currentPath;
  };

  const drawer = (
    <Box
      sx={{
        textAlign: "center",
        height: "100%",
        background: "rgba(20, 20, 20, 0.95)",
        backdropFilter: "blur(10px)",
        borderRight: "1px solid rgba(255, 255, 255, 0.08)",
        color: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 3,
        }}
      >
        <CodeIcon sx={{ mr: 1, color: "white" }} />
        <Typography variant="h6" component="div" sx={{ color: "white" }}>
          Pintér Szilveszter
        </Typography>
      </Box>

      <List sx={{ p: 2 }}>
        {navItems.map((item) => {
          const isItemActive = isActive(item);

          return (
            <ListItem key={item} disablePadding sx={{ mb: 1 }}>
              <ListItemButton
                sx={{
                  textAlign: "center",
                  borderRadius: "24px",
                  background: isItemActive
                    ? "rgba(25, 118, 210, 0.5)"
                    : "transparent",
                  color: "white",
                  py: 1.5,
                  px: 3,
                  transition: "all 0.2s ease",
                  border: isItemActive
                    ? "1px solid rgba(255, 255, 255, 0.12)"
                    : "none",
                  "&:hover": {
                    background: isItemActive
                      ? "rgba(25, 118, 210, 0.6)"
                      : "rgba(255, 255, 255, 0.1)",
                    transform: "scale(1.02)",
                  },
                  "&:active": {
                    transform: "scale(0.98)",
                  },
                }}
                onClick={() => handleNavigation(item)}
              >
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{
                    fontWeight: isItemActive ? 600 : 500,
                    fontSize: "1rem",
                  }}
                />
              </ListItemButton>
            </ListItem>
          );
        })}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          backgroundColor: "rgba(20, 20, 20, 0.7)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          color: "white",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
            {/* Menu Button (Mobile) */}
            {isMobile && (
              <IconButton
                color="inherit"
                aria-label={mobileOpen ? "close drawer" : "open drawer"}
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  mr: 2,
                  borderRadius: "16px",
                  p: 1,
                }}
              >
                {mobileOpen ? <ArrowBackIcon /> : <MenuIcon />}
              </IconButton>
            )}

            {/* Logo/Name */}
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                sx={{
                  width: 40,
                  height: 40,
                  marginRight: 1,
                  bgcolor: "rgba(25, 118, 210, 0.2)",
                  border: "4px solid rgba(255, 255, 255, 0.1)",
                  boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                  // Remove padding - this is causing the internal space issue
                  p: 0,
                  // Add these properties to control image fit
                  "& .MuiAvatar-img": {
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  },
                }}
                src="https://media.licdn.com/dms/image/v2/D4D03AQFVKvtKErjlyw/profile-displayphoto-shrink_800_800/B4DZYf1AKxG4Ak-/0/1744290710756?e=1749686400&v=beta&t=GmPKhrJQlC6IvIrbzKzaGFrjknMFfJCo77dTqPm1zBI"
                alt="Pintér Szilveszter"
              />
              <Typography
                variant="h6"
                component={Link}
                to="/"
                sx={{
                  fontWeight: 600,
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Pintér Szilveszter
              </Typography>
            </Box>

            {/* Navigation buttons */}
            {!isMobile && (
              <Box sx={{ display: "flex", gap: { xs: 1, md: 1.5, lg: 2 } }}>
                {navItems.map((item) => {
                  const isItemActive = isActive(item);

                  return (
                    <Button
                      key={item}
                      component={Link}
                      to={`/${item.toLowerCase()}`}
                      disableElevation
                      sx={{
                        color: "white",
                        fontWeight: isItemActive ? 500 : 400,
                        fontSize: "0.95rem",
                        px: 3,
                        py: 1,
                        // More rounded pill shape
                        borderRadius: "28px",
                        transition: "all 0.2s ease",
                        background: isItemActive
                          ? "rgba(25, 118, 210, 0.55)"
                          : "transparent",
                        "&:hover": {
                          background: isItemActive
                            ? "rgba(25, 118, 210, 0.65)"
                            : "rgba(255, 255, 255, 0.1)",
                          transform: "scale(1.03)",
                        },
                        "&:active": {
                          transform: "scale(0.97)",
                        },
                        border: isItemActive
                          ? "1px solid rgba(255, 255, 255, 0.15)"
                          : "none",
                        textTransform: "none",
                      }}
                    >
                      {item}
                    </Button>
                  );
                })}
              </Box>
            )}
          </Toolbar>
        </Container>
      </AppBar>

      {/* Toolbar spacer */}
      <Toolbar />

      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 260,
            backgroundColor: "transparent",
            height: "100%",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
};

export default AppBarComponent;
