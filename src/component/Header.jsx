import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { Link, Links } from 'react-router-dom';
import { Tooltip } from '@mui/material';
Tooltip
function Header() {
    const projectInfo = "Resume Builder helps you create a professional, job-ready resume in minutes with customizable templates. Build, edit, and download your resume easily to showcase your skills and experience effectively."

  return (
     <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static " sx={{backgroundColor:'purple'}}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <img width={'30px'} src="https://png.pngtree.com/png-vector/20190501/ourmid/pngtree-vector-resume-icon-png-image_1018862.jpg" alt="logo" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to={'/'} className='text-light text-decoration-none'>rBuilder</Link>
          </Typography>
          <Tooltip title={projectInfo}>
            <Button color="inherit">About Us</Button>
            </Tooltip>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header