import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const contactInfo = [
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

export const socialLinks = [
  { icon: <LinkedInIcon />, url: 'https://linkedin.com/in/yourusername', label: 'LinkedIn' },
  { icon: <GitHubIcon />, url: 'https://github.com/d43dm4n', label: 'GitHub' },
];

export const location = 'Győr, Hungary';