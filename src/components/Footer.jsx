import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';

function Footer() {
 return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="absolute" bottom="0">
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