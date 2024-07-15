import React from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, Card, CardContent, Grid, Paper } from '@mui/material';
import { styled } from '@mui/system';
import { motion } from 'framer-motion';

const StyledCard = styled(Card)(({ theme }) => ({
  marginTop: theme.spacing(4),
  padding: theme.spacing(2),
  borderRadius: 15,
  boxShadow: '0px 3px 15px rgba(0, 0, 0, 0.2)',
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  marginTop: theme.spacing(2),
  borderRadius: 10,
  boxShadow: '0px 3px 10px rgba(0, 0, 0, 0.1)',
}));

const MainPage = () => {
  const { firstName } = useParams();
  const userDetails = JSON.parse(localStorage.getItem('userDetails'));
  const user = userDetails.find(user => user.personalDetails.firstName === firstName);

  if (!user) {
    return <Typography variant="h5">User not found</Typography>;
  }

  return (
    <Container component={motion.div} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
      <StyledCard>
        <CardContent>
          <Typography variant="h4" component="div" gutterBottom>
            {user.personalDetails.firstName} {user.personalDetails.lastName}
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <StyledPaper>
                <Typography variant="h6">Personal Details</Typography>
                <Typography>Email: {user.personalDetails.email}</Typography>
                <Typography>Contact: {user.personalDetails.contact}</Typography>
                <Typography>Address 1: {user.personalDetails.address1}</Typography>
                <Typography>Address 2: {user.personalDetails.address2}</Typography>
              </StyledPaper>
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledPaper>
                <Typography variant="h6">Education Details</Typography>
                <Typography>Degree: {user.educationDetails.degree}</Typography>
                <Typography>University: {user.educationDetails.university}</Typography>
                <Typography>Graduation Year: {user.educationDetails.graduationYear}</Typography>
              </StyledPaper>
            </Grid>
            <Grid item xs={12}>
              <StyledPaper>
                <Typography variant="h6">Employment Details</Typography>
                <Typography>Company: {user.employmentDetails.company}</Typography>
                <Typography>Position: {user.employmentDetails.position}</Typography>
                <Typography>Years: {user.employmentDetails.years}</Typography>
              </StyledPaper>
            </Grid>
          </Grid>
        </CardContent>
      </StyledCard>
    </Container>
  );
};

export default MainPage;
