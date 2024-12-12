import React from 'react';
import { Button, Container, Typography, Box, AppBar, Toolbar, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
      {/* Header with Sign Up and Login buttons */}
      <AppBar position="fixed" sx={{ backgroundColor: 'white', zIndex: 1100 }}>
        <Toolbar>
          <Typography variant="h3" sx={{ flexGrow: 1, fontWeight: 'bold', fontSize: '24px', color: '#55f47c' }}>
            TaskManager
          </Typography>
          <div>
            <Button
              variant="text"
              sx={{ color: '#55f47c', marginLeft: 2 }}
              component={Link}
              to="/login"
            >
              Login
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              sx={{ color: '#55f47c', marginLeft: 2 }}
              component={Link}
              to="/register"
            >
              Register
            </Button>
          </div>
        </Toolbar>
      </AppBar>

      {/* Hero Section (Background Image and Call-to-Action) */}
      <p
        sx={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: '#fff',
          textAlign: 'center',
          padding: 4,
         
        }}
      >
        
      </p>

      {/* Features Section */}
     

      {/* Call to Action (CTA) Section */}
      <Box sx={{ backgroundColor: 'secondary.main', color: '#fff', padding: '40px 0' , marginTop: 20 }}>
        <Container>
          <Typography variant="h2" align="center" sx={{ marginBottom: 4 }}>
            Welcome..! Organize Multiple Task According to You
          </Typography>
          <Box textAlign="center">
            <Button
              variant="contained"
              sx={{ backgroundColor: '#55f47c', color: '#fff', padding: '12px 30px', borderRadius: '5px' }}
              component={Link}
              to="/register"
            >
              Join Now
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
