import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function Footer() {
 return (
    <Box sx={{ flexGrow: 4 }}>
      <AppBar position="sticky">
        <Toolbar>
          <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
            Copyrighted to pavithran
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Footer