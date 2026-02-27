import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Typography,
  MenuItem,
  Select,
  Card,
  CardContent,
} from "@mui/material";
import axios from "axios";

export default function Attendance() {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState("present");

  useEffect(() => {
    axios.get("http://localhost:8080/api/students").then((res) => setUsers(res.data));
  }, []);

  const markAttendance = async (userId) => {
    await axios.post("http://localhost:8080/api/attendance/mark", {
      userId,
      role: "student",
      status,
      className: "10-A",
    });

    alert("Attendance marked");
  };

  return (
    <Box p={3}>
      <Typography variant="h4" mb={3}>
        Student Attendance
      </Typography>

      {users.map((u) => (
        <Card key={u._id} sx={{ mb: 2 }}>
          <CardContent
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Typography>
              {u.name} ({u.rollNumber})
            </Typography>

            <Box>
              <Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                size="small"
              >
                <MenuItem value="present">Present</MenuItem>
                <MenuItem value="absent">Absent</MenuItem>
              </Select>

              <Button
                sx={{ ml: 2 }}
                variant="contained"
                onClick={() => markAttendance(u._id)}
              >
                Mark
              </Button>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}