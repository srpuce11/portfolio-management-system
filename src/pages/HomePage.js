import React, { useEffect, useState } from "react";
import { Box, MenuItem, Select, FormControl, InputLabel } from "@mui/material";

const HomePage = ({ onSelectUser }) => {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState("");

  useEffect(() => {
    const fetchUsers = () => {
      const keys = Object.keys(localStorage);
      const userData = keys.map((key) => JSON.parse(localStorage.getItem(key)));
      setUsers(userData);
    };

    fetchUsers();
  }, []);

  const handleUserChange = (event) => {
    const userId = event.target.value;
    setSelectedUserId(userId);
    const selectedUser = users.find((user) => user.userId === userId);
    onSelectUser(selectedUser);
  };

  return (
    <Box m="20px">
      <FormControl fullWidth>
        <InputLabel id="user-select-label">Select User</InputLabel>
        <Select
          labelId="user-select-label"
          value={selectedUserId}
          onChange={handleUserChange}
        >
          {users.map((user) => (
            <MenuItem key={user?.userId} value={user?.userId}>
              {user?.personalDetails?.firstName} {user?.personalDetails?.lastName}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default HomePage;
