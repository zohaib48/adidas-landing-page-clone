import { Box, useTheme } from '@mui/material';
import React from 'react';

const ScrolbarBox = ({ children, marginLeft }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        mt: 10,
        ml: marginLeft !== undefined ? marginLeft : 2, // Use passed marginLeft or default to 2
        [theme.breakpoints.up('md')]: {
          ml: marginLeft !== undefined ? marginLeft : 20, // Use passed marginLeft or default to 20
        },
        
        display: 'flex',
        overflowX: 'scroll',
        scrollbarWidth: '3px',
        '&::-webkit-scrollbar': {
          height: '12px',
        },
        '&::-webkit-scrollbar-track': {
          background: '#F7F6F6',
          marginLeft: 3,
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#888',
          borderRadius: '6px',
          '&:hover': {
            background: '#555',
          },
        },
      }}
    >
      {children}
    </Box>
  );
};

export default ScrolbarBox;
