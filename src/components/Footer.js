import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CopyrightIcon from '@mui/icons-material/Copyright';
function Footer() {
  return (
    <Box sx={{ flexGrow: 1, top: 'auto' }} >
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} align="center">
            <CopyrightIcon />Copyrighted to pavithran
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Footer