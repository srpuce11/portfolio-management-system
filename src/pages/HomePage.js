import React, { useEffect, useState } from "react";
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Box, Typography, Grid, Paper } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const getStyles = (name, personName, theme) => {
  return {
    fontWeight: personName.indexOf(name) === -1
      ? theme.typography.fontWeightRegular
      : theme.typography.fontWeightMedium,
  };
};

const HomePage = ({ onSelectUser = () => {} }) => {
  const theme = useTheme();
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");
  const [selectedUser, setSelectedUser] = useState(null);
  
  useEffect(() => {
    const fetchUsers = () => {
      const storedUsers = JSON.parse(localStorage.getItem('userDetails')) || [];
      setUsers(storedUsers);
    };

    fetchUsers();
  }, []);

  const handleUserChange = (event) => {
    const {
      target: { value },
    } = event;
    setSelectedUserId(value);
    const user = users.find((user) => user.userId === value);
    setSelectedUser(user);
    onSelectUser(user);
  };

  return (
    <Box m="20px">
      <FormControl fullWidth>
        <InputLabel id="user-select-label">Select User</InputLabel>
        <Select
          labelId="user-select-label"
          id="user-select"
          value={selectedUserId}
          onChange={handleUserChange}
          input={<OutlinedInput label="Name" />}
          MenuProps={MenuProps}
        >
          {users.map((user) => (
            <MenuItem
              key={user?.userId}
              value={user?.userId}
              style={getStyles(user?.personalDetails?.firstName, selectedUserId, theme)}
            >
              {user?.personalDetails?.firstName} {user?.personalDetails?.lastName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selectedUser && (
        <Box mt="20px" component={Paper} p="20px">
          <Typography variant="h6">Personal Details</Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body1">First Name: {selectedUser.personalDetails.firstName}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">Last Name: {selectedUser.personalDetails.lastName}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">Email: {selectedUser.personalDetails.email}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">Contact: {selectedUser.personalDetails.contact}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">Address 1: {selectedUser.personalDetails.address1}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="body1">Address 2: {selectedUser.personalDetails.address2}</Typography>
            </Grid>
          </Grid>

          <Typography variant="h6" mt="20px">Education Details</Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body1">Degree: {selectedUser.educationDetails.degree}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">University: {selectedUser.educationDetails.university}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">Graduation Year: {selectedUser.educationDetails.graduationYear}</Typography>
            </Grid>
          </Grid>

          <Typography variant="h6" mt="20px">Employment Details</Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="body1">Company: {selectedUser.employmentDetails.company}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">Position: {selectedUser.employmentDetails.position}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1">Years: {selectedUser.employmentDetails.years}</Typography>
            </Grid>
          </Grid>
        </Box>
      )}
    </Box>
  );
};

export default HomePage;
