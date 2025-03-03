import React from 'react';
import { 
  Container, 
  Typography, 
  Paper, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Box, 
  Button 
} from '@mui/material';
import { Link } from 'react-router-dom';

export default function AboutPage() {
  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      {/* Page Title */}
      <Typography variant="h3" component="h1" align="center" gutterBottom>
        About Restore App
      </Typography>
      <Typography variant="subtitle1" align="center" gutterBottom>
        Empowering you to take control of your financial future.
      </Typography>

      {/* Overview Section */}
      <Paper elevation={3} sx={{ p: 3, mt: 4 }}>
        <Typography variant="body1" paragraph>
          Restore App is a modern solution designed to help you manage, track, and improve your financial health.
          Our platform brings together powerful analytics, secure transactions, and an intuitive interface, making
          it easier than ever to get a clear picture of your finances.
        </Typography>
        <Typography variant="body1" paragraph>
          Whether you’re looking to consolidate your expenses, optimize your budget, or simply gain better insights into your spending habits,
          Restore App provides the tools and support you need. We’re committed to empowering you to make informed financial decisions.
        </Typography>
        <Typography variant="body1" paragraph>
          Join us on your journey to financial restoration and experience the convenience of managing your money smarter.
        </Typography>
      </Paper>

      {/* Features Section */}
      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="/images/secure-transactions.jpg" // Replace with your image path
              alt="Secure Transactions"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Secure Transactions
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Your data is protected with industry-leading encryption and secure payment integrations.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="200"
              image="/images/intuitive-design.jpg" // Replace with your image path
              alt="Intuitive Design"
            />
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Intuitive Design
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Enjoy a user-friendly interface designed to give you insights at a glance.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Call to Action */}
      <Box textAlign="center" sx={{ mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          component={Link}
          to="/login"
        >
          Get Started
        </Button>
      </Box>
    </Container>
  );
}
