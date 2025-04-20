import React, { useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Grid,
  Card, 
  CardContent,
  useTheme,
  useMediaQuery,
  InputAdornment,
  Fade,
  Grow,
  Divider,
  Stack,
  IconButton,
  Snackbar,
  Alert
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import SubjectIcon from '@mui/icons-material/Subject';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState({ open: false, type: 'success', message: '' });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, you'd send this data to your backend
      console.log('Form data submitted:', formData);
      
      // Show success message
      setSubmitStatus({
        open: true,
        type: 'success',
        message: 'Message sent successfully! I\'ll get back to you soon.'
      });
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      // Show error message
      setSubmitStatus({
        open: true,
        type: 'error',
        message: 'Please fix the errors in the form.'
      });
    }
  };

  // Close notification
  const handleCloseSnackbar = () => {
    setSubmitStatus(prev => ({
      ...prev,
      open: false
    }));
  };

  // Contact information
  const contactInfo = [
    { 
      icon: <EmailIcon />, 
      title: 'Email', 
      value: 'szilveszter.pinter@gmail.com',
      link: 'mailto:szilveszter.pinter@gmail.com'
    },
    { 
      icon: <LocationOnIcon />, 
      title: 'Location', 
      value: 'Győr, Hungary',
      link: null
    }
  ];

  // Social media links
  const socialLinks = [
    { icon: <LinkedInIcon />, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
    { icon: <GitHubIcon />, url: 'https://github.com/d43dm4n', label: 'GitHub' },
  ];

  return (
    <Container maxWidth="lg">
      <Box sx={{ py: { xs: 4, md: 6 } }}>
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
            Get In Touch
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
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {/* Contact Form */}
          <Grid item xs={12} md={7}>
            <Fade in={true} timeout={500}>
              <Card
                elevation={0}
                sx={{
                  borderRadius: 4,
                  backgroundColor: 'rgba(15, 23, 42, 0.6)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  height: '100%',
                }}
              >
                <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                  <Typography variant="h5" component="h2" fontWeight={600} gutterBottom>
                    Send Me a Message
                  </Typography>
                  
                  <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 3 }}>
                    <Grid container spacing={3}>
                      <Grid item xs={12}>
                        <Grow in={true} timeout={600}>
                          <TextField
                            fullWidth
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            error={!!errors.name}
                            helperText={errors.name}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <PersonIcon sx={{ color: theme.palette.primary.light }} />
                                </InputAdornment>
                              ),
                            }}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: '16px',
                                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                  borderColor: 'rgba(255, 255, 255, 0.2)',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                  borderColor: theme.palette.primary.main,
                                },
                              },
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(255, 255, 255, 0.1)',
                              },
                              '& .MuiInputLabel-root': {
                                color: 'rgba(255, 255, 255, 0.7)',
                              },
                            }}
                          />
                        </Grow>
                      </Grid>
                      <Grid item xs={12}>
                        <Grow in={true} timeout={700}>
                          <TextField
                            fullWidth
                            label="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            error={!!errors.email}
                            helperText={errors.email}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <EmailIcon sx={{ color: theme.palette.primary.light }} />
                                </InputAdornment>
                              ),
                            }}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: '16px',
                                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                  borderColor: 'rgba(255, 255, 255, 0.2)',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                  borderColor: theme.palette.primary.main,
                                },
                              },
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(255, 255, 255, 0.1)',
                              },
                              '& .MuiInputLabel-root': {
                                color: 'rgba(255, 255, 255, 0.7)',
                              },
                            }}
                          />
                        </Grow>
                      </Grid>
                      <Grid item xs={12}>
                        <Grow in={true} timeout={800}>
                          <TextField
                            fullWidth
                            label="Subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            error={!!errors.subject}
                            helperText={errors.subject}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  <SubjectIcon sx={{ color: theme.palette.primary.light }} />
                                </InputAdornment>
                              ),
                            }}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: '16px',
                                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                  borderColor: 'rgba(255, 255, 255, 0.2)',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                  borderColor: theme.palette.primary.main,
                                },
                              },
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(255, 255, 255, 0.1)',
                              },
                              '& .MuiInputLabel-root': {
                                color: 'rgba(255, 255, 255, 0.7)',
                              },
                            }}
                          />
                        </Grow>
                      </Grid>
                      <Grid item xs={12}>
                        <Grow in={true} timeout={900}>
                          <TextField
                            fullWidth
                            multiline
                            rows={6}
                            label="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            error={!!errors.message}
                            helperText={errors.message}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start" sx={{ alignSelf: 'flex-start', mt: 2 }}>
                                  <MessageIcon sx={{ color: theme.palette.primary.light }} />
                                </InputAdornment>
                              ),
                            }}
                            sx={{
                              '& .MuiOutlinedInput-root': {
                                borderRadius: '16px',
                                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                '&:hover .MuiOutlinedInput-notchedOutline': {
                                  borderColor: 'rgba(255, 255, 255, 0.2)',
                                },
                                '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                  borderColor: theme.palette.primary.main,
                                },
                              },
                              '& .MuiOutlinedInput-notchedOutline': {
                                borderColor: 'rgba(255, 255, 255, 0.1)',
                              },
                              '& .MuiInputLabel-root': {
                                color: 'rgba(255, 255, 255, 0.7)',
                              },
                            }}
                          />
                        </Grow>
                      </Grid>
                      <Grid item xs={12} sx={{ textAlign: 'center' }}>
                        <Grow in={true} timeout={1000}>
                          <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            endIcon={<SendIcon />}
                            sx={{
                              mt: 2,
                              py: 1.5,
                              px: 4,
                              borderRadius: '28px',
                              textTransform: 'none',
                              fontWeight: 500,
                              fontSize: '1rem',
                              boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
                              background: 'linear-gradient(90deg, #a6c1ff 0%, #f4acdc 100%)',
                              '&:hover': {
                                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.25)',
                              },
                            }}
                          >
                            Send Message
                          </Button>
                        </Grow>
                      </Grid>
                    </Grid>
                  </Box>
                </CardContent>
              </Card>
            </Fade>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={5}>
            <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Fade in={true} timeout={700}>
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: 4,
                    backgroundColor: 'rgba(15, 23, 42, 0.6)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <CardContent sx={{ p: { xs: 3, md: 4 } }}>
                    <Typography variant="h5" component="h2" fontWeight={600} gutterBottom>
                      Contact Information
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      Feel free to reach out to me through any of these channels:
                    </Typography>
                    
                    <Box sx={{ mt: 4 }}>
                      {contactInfo.map((info, index) => (
                        <Grow in={true} timeout={600 + index * 200} key={info.title}>
                          <Box
                            sx={{
                              display: 'flex',
                              alignItems: 'flex-start',
                              mb: 3,
                            }}
                          >
                            <Box
                              sx={{
                                width: 44,
                                height: 44,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                borderRadius: '16px',
                                mr: 2,
                                background: 'rgba(166, 193, 255, 0.15)',
                                color: theme.palette.primary.light,
                              }}
                            >
                              {info.icon}
                            </Box>
                            <Box>
                              <Typography variant="subtitle1" fontWeight={600}>
                                {info.title}
                              </Typography>
                              {info.link ? (
                                <Typography
                                  component="a"
                                  href={info.link}
                                  variant="body2"
                                  color="primary"
                                  sx={{
                                    textDecoration: 'none',
                                    '&:hover': {
                                      textDecoration: 'underline',
                                    },
                                  }}
                                >
                                  {info.value}
                                </Typography>
                              ) : (
                                <Typography variant="body2" color="text.secondary">
                                  {info.value}
                                </Typography>
                              )}
                            </Box>
                          </Box>
                        </Grow>
                      ))}
                    </Box>

                    <Divider sx={{ my: 3, borderColor: 'rgba(255, 255, 255, 0.08)' }} />

                    <Typography variant="h6" fontWeight={600} sx={{ mb: 2 }}>
                      Connect with me
                    </Typography>

                    <Stack direction="row" spacing={2}>
                      {socialLinks.map((social, index) => (
                        <Grow in={true} timeout={1000 + index * 100} key={social.label}>
                          <IconButton
                            component="a"
                            href={social.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            sx={{
                              width: 44,
                              height: 44,
                              borderRadius: '12px',
                              backgroundColor: 'rgba(255, 255, 255, 0.05)',
                              color: theme.palette.primary.light,
                              transition: 'all 0.2s ease',
                              '&:hover': {
                                backgroundColor: 'rgba(166, 193, 255, 0.2)',
                                transform: 'translateY(-3px)',
                              },
                            }}
                          >
                            {social.icon}
                          </IconButton>
                        </Grow>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>
              </Fade>

              <Fade in={true} timeout={900}>
                <Card
                  elevation={0}
                  sx={{
                    borderRadius: 4,
                    backgroundColor: 'rgba(15, 23, 42, 0.4)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                    overflow: 'hidden',
                    display: { xs: 'none', sm: 'block' }, // Hide on very small screens
                    }}
                  >
                    <Box
                      component="iframe"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85893.06095079347!2d17.575285765483795!3d47.68745877401629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476bbf87407ea035%3A0x400c4290c1e11e0!2sGy%C5%91r%2C%20Hungary!5e0!3m2!1sen!2sus!4v1681827261619!5m2!1sen!2sus"
                      width="100%"
                      height={isSmall ? "200" : "250"}
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Map location - Győr, Hungary"
                      sx={{ 
                        filter: 'grayscale(1) invert(0.8)',
                        opacity: 0.8,
                      }}
                    />
                  </Card>
                  </Fade>
                </Box>
                </Grid>
              </Grid>
              </Box>

              {/* Success/Error notifications */}
      <Snackbar 
        open={submitStatus.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={submitStatus.type} 
          variant="filled"
          sx={{ width: '100%', borderRadius: '12px' }}
        >
          {submitStatus.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Contact;