import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Container, Typography, TextField, Button, Box, Grid, Paper, Alert } from '@mui/material';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/auth/register', { email, password });

      if (response.data.success) {
        navigate('/login'); // Redirect to login page after successful registration
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
    }
  };

  return (

      <Paper elevation={1} sx={{ padding: 9 }}>
        <Typography variant="h4" component="h1" align="center" sx={{ marginBottom: 9 }}>
          <div color="22c55e">
            Register for TaskManager
          </div>
        </Typography>

        {error && <Alert severity="error" sx={{ marginBottom: 2 }}>{error}</Alert>}

        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {/* Email Input */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
              />
            </Grid>

            {/* Password Input */}
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
              />
            </Grid>

            {/* Submit Button */}
            <Grid item xs={12}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{
                  padding: '10px',
                  borderRadius: '5px',
                  '&:hover': {
                    backgroundColor: '#55f47c',
                  },
                }}
              >
                Register
              </Button>
            </Grid>
          </Grid>
        </form>

        <Box sx={{ marginTop: 2, textAlign: 'center' }}>
          <Typography variant="body2">
            Already have an account?{' '}
            <Button color="primary" onClick={() => navigate('/login')}>
              Login here
            </Button>
          </Typography>
        </Box>
      </Paper>
  
  );
};

export default Register;
