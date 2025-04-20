import React, { useState } from 'react';
import {
  Box, 
  Typography, 
  Button, 
  Stack,
  Card, 
  CardContent,
  Snackbar,
  Alert,
  useTheme
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import SubjectIcon from '@mui/icons-material/Subject';
import MessageIcon from '@mui/icons-material/Message';
import SendIcon from '@mui/icons-material/Send';
import FormTextField from '../../ui/FormTextField';
import { cardStyles, cardPadding } from '../../../theme/cardStyles';

/**
 * Contact form component with clear layout
 */
const ContactForm = () => {
  const theme = useTheme();
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState({ 
    open: false, 
    type: 'success', 
    message: '' 
  });

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

  return (
    <Box sx={{ 
      display: 'flex',
      width: '100%',
      height: '100%',
      minHeight: { xs: '600px', lg: '800px' }, // Force minimum height
    }}>
      <Card
        elevation={0}
        sx={{
          borderRadius: '20px',
          backgroundColor: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1, // Added to ensure expansion
        }}
      >
        <CardContent sx={{ 
          p: { xs: cardPadding.xs, sm: cardPadding.sm, md: cardPadding.md }, 
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          '&:last-child': { pb: { xs: cardPadding.xs, sm: cardPadding.sm, md: cardPadding.md } },
        }}>
          <Typography 
            variant="h5" 
            component="h2" 
            fontWeight={600} 
            sx={{ mb: 3 }}
          >
            Send Me a Message
          </Typography>
          
          <Box 
            component="form" 
            onSubmit={handleSubmit} 
            noValidate
            sx={{ 
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              flexGrow: 1 // This makes the form take all available vertical space
            }}
          >
            <Stack spacing={3} sx={{ width: '100%', flexGrow: 1 }}>
              {/* Name field */}
              <FormTextField
                label="Your Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={errors.name}
                helperText={errors.name}
                startIcon={<PersonIcon />}
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(15, 23, 42, 0.3)',
                  }
                }}
              />
              
              {/* Email field */}
              <FormTextField
                label="Email Address"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
                helperText={errors.email}
                startIcon={<EmailIcon />}
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(15, 23, 42, 0.3)',
                  }
                }}
              />
              
              {/* Subject field */}
              <FormTextField
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                error={errors.subject}
                helperText={errors.subject}
                startIcon={<SubjectIcon />}
                fullWidth
                sx={{
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(15, 23, 42, 0.3)',
                  }
                }}
              />
              
              {/* Message field - make it flex-grow */}
              <FormTextField
                label="Your Message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
                helperText={errors.message}
                multiline
                rows={6}
                startIcon={<MessageIcon />}
                fullWidth
                sx={{
                  flexGrow: 1,
                  '& .MuiOutlinedInput-root': {
                    backgroundColor: 'rgba(15, 23, 42, 0.3)',
                    height: '100%',
                  }
                }}
              />
              
              {/* Send button */}
              <Box sx={{ display: 'flex', justifyContent: 'center', mt: 'auto' }}>
                <Button
                  type="submit"
                  variant="contained"
                  size="large"
                  endIcon={<SendIcon />}
                  sx={{
                    py: 1.5,
                    px: 4,
                    borderRadius: '28px',
                    textTransform: 'none',
                    fontWeight: 500,
                    fontSize: '1rem',
                    background: 'linear-gradient(90deg, #a6c1ff 0%, #f4acdc 100%)',
                  }}
                >
                  Send Message
                </Button>
              </Box>
            </Stack>
          </Box>
        </CardContent>
      </Card>

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
    </Box>
  );
};

export default ContactForm;