import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  TextField, 
  Button, 
  Grid, 
  Paper, 
  Box 
} from '@mui/material';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send formData to your backend or email service.
    console.log('Form submitted:', formData);
    setSubmitted(true);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, mb: 4 }}>
      {/* Page Title */}
      <Typography variant="h3" align="center" gutterBottom>
        Contact Us
      </Typography>

      {/* Contact Form */}
      <Paper elevation={3} sx={{ p: 3, mt: 2 }}>
        {submitted ? (
          <Box sx={{ textAlign: 'center', py: 3 }}>
            <Typography variant="h5" color="primary">
              Thank you for contacting us!
            </Typography>
            <Typography variant="body1">
              We will get back to you as soon as possible.
            </Typography>
          </Box>
        ) : (
          <form onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField 
                  name="name"
                  label="Your Name"
                  variant="outlined"
                  fullWidth
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField 
                  name="email"
                  label="Your Email"
                  variant="outlined"
                  type="email"
                  fullWidth
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField 
                  name="subject"
                  label="Subject"
                  variant="outlined"
                  fullWidth
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12}>
                <TextField 
                  name="message"
                  label="Message"
                  variant="outlined"
                  fullWidth
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Grid>
              <Grid item xs={12} sx={{ textAlign: 'center' }}>
                <Button type="submit" variant="contained" color="primary">
                  Send Message
                </Button>
              </Grid>
            </Grid>
          </form>
        )}
      </Paper>

      {/* Contact Details Section */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom>
          Our Contact Details
        </Typography>
        <Typography variant="body1">
          Restore App<br />
          1234 Finance Street<br />
          Financial City, FC 12345<br />
          Phone: (123) 456-7890<br />
          Email: support@restoreapp.com
        </Typography>
      </Box>
    </Container>
  );
}
