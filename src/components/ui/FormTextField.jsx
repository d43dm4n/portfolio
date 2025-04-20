import React from 'react';
import { TextField, InputAdornment, useTheme } from '@mui/material';

/**
 * Consistent styled text field for forms
 */
const FormTextField = ({
  label,
  name,
  value,
  onChange,
  error,
  helperText,
  startIcon,
  multiline = false,
  rows = 1,
  sx = {},
  ...props
}) => {
  const theme = useTheme();
  
  return (
    <TextField
      fullWidth
      label={label}
      name={name}
      value={value}
      onChange={onChange}
      error={!!error}
      helperText={helperText}
      multiline={multiline}
      rows={rows}
      InputProps={{
        startAdornment: startIcon ? (
          <InputAdornment position="start" sx={multiline ? { alignSelf: 'flex-start', mt: 2 } : {}}>
            {React.cloneElement(startIcon, { sx: { color: theme.palette.primary.light } })}
          </InputAdornment>
        ) : null,
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
        ...sx
      }}
      {...props}
    />
  );
};

export default FormTextField;