import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
        </IconButton>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          product APP
        </Typography>
        <Button color="inherit"><Link to ='/'>View</Link></Button>
        <Button color="inherit"><Link to ='/add'>Add product</Link></Button>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar
