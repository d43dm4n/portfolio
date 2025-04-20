import React from 'react';
import {
  Box,
  Typography,
  Card,
  CardContent,
  Divider,
  Stack,
  IconButton,
  Grow,
  useTheme
} from '@mui/material';

/**
 * Contact information card with social links and contact details
 */
const ContactInfo = ({ contactInfo, socialLinks }) => {
  const theme = useTheme();

  return (
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
  );
};

export default ContactInfo;