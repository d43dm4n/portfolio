import React from 'react';
import { Box, Tabs, Tab, useMediaQuery, useTheme } from '@mui/material';

/**
 * Reusable filter tabs component for category filtering
 */
const FilterTabs = ({ 
  categories, 
  selectedFilter,
  onChange,
  sx = {} 
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center',
      ...sx 
    }}>
      <Tabs
        value={selectedFilter}
        onChange={onChange}
        variant={isMobile ? 'scrollable' : 'standard'}
        scrollButtons={isMobile ? 'auto' : false}
        allowScrollButtonsMobile
        centered={!isMobile}
        sx={{
          '& .MuiTab-root': {
            textTransform: 'capitalize',
            fontWeight: 500,
            fontSize: '0.95rem',
            py: 1.5,
            px: 3,
            borderRadius: '28px',
            minWidth: 'auto',
            mx: 0.5,
            color: 'text.secondary',
            '&.Mui-selected': {
              color: 'white',
              bgcolor: 'primary.main',
            },
          },
          '& .MuiTabs-indicator': {
            display: 'none',
          },
        }}
      >
        {categories.map((category) => (
          <Tab
            key={category}
            label={category === 'all' ? 'All Projects' : category}
            value={category}
          />
        ))}
      </Tabs>
    </Box>
  );
};

export default FilterTabs;