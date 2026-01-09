import React, { useState } from 'react';
import { Box, Paper, Typography, TextField, Button, Tab, Tabs, InputAdornment, IconButton, Container } from '@mui/material';
import { Visibility, VisibilityOff, Google as GoogleIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

interface AuthPageProps {
  initialMode?: 'login' | 'register';
}

const validationSchema = yup.object({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup.string().min(8, 'Password should be of minimum 8 characters length').required('Password is required'),
});

const AuthPage: React.FC<AuthPageProps> = ({ initialMode = 'login' }) => {
  const [tabIndex, setTabIndex] = useState(initialMode === 'login' ? 0 : 1);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log('Values:', values);
      alert(JSON.stringify(values, null, 2));
      // TODO: Connect to NestJS API
      navigate('/dashboard'); // Mock redirect
    },
  });

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '80vh',
      }}
    >
      <Container maxWidth="xs">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              borderRadius: 3,
              backdropFilter: 'blur(10px)',
              backgroundColor: (theme) => theme.palette.mode === 'dark' ? 'rgba(30, 41, 59, 0.8)' : 'rgba(255, 255, 255, 0.8)',
            }}
          >
            <Typography variant="h4" fontWeight="bold" gutterBottom color="primary">
              FateWeaver
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              {tabIndex === 0 ? 'Welcome back, Traveler' : 'Begin your journey'}
            </Typography>

            <Tabs value={tabIndex} onChange={handleTabChange} sx={{ mb: 3, width: '100%' }} variant="fullWidth">
                <Tab label="Login" />
                <Tab label="Register" />
            </Tabs>

            <Box component="form" onSubmit={formik.handleSubmit} sx={{ width: '100%' }}>
              <TextField
                fullWidth
                id="email"
                name="email"
                label="Email Address"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
                margin="normal"
                variant="outlined"
              />
              <TextField
                fullWidth
                id="password"
                name="password"
                label="Password"
                type={showPassword ? 'text' : 'password'}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.password && Boolean(formik.errors.password)}
                helperText={formik.touched.password && formik.errors.password}
                margin="normal"
                variant="outlined"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => setShowPassword(!showPassword)}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <Button
                color="primary"
                variant="contained"
                fullWidth
                size="large"
                type="submit"
                sx={{ mt: 3, mb: 2, height: 48 }}
              >
                {tabIndex === 0 ? 'Sign In' : 'Sign Up'}
              </Button>
              
              <Button
                variant="outlined"
                fullWidth
                startIcon={<GoogleIcon />}
                onClick={() => alert('Google Auth to be implemented')}
                sx={{ mb: 2 }}
              >
                Continue with Google
              </Button>
              
              <Button 
                 fullWidth 
                 size="small" 
                 sx={{ mt: 1, textTransform: 'none' }}
                 color="inherit"
              >
                Forgot password?
              </Button>
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AuthPage;
