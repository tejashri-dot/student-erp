import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table, TableBody, TableCell, TableHead,
  TableRow, Button, Typography, Grid, TextField, Box
} from "@mui/material";

export default function StaffAttendance() {
  const [staff, setStaff] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split("T")[0]);
  const [attendanceStatus, setAttendanceStatus] = useState({});

  const token = localStorage.getItem("token");
  const API_URL = "http://localhost:8080/api";

  // Fetch staff list
  useEffect(() => {
    axios.get("https://school-backend-6udp.onrender.com/api/staff")
      .then((res) => {
        setStaff(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  // Fetch attendance for selected date
  useEffect(() => {
    fetchAttendanceForDate(selectedDate);
  }, [selectedDate]);

  const fetchAttendanceForDate = async (date) => {
    try {
      const res = await axios.get(
        `${API_URL}/attendance/staff?date=${date}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      
      // Create a map of staff ID to attendance status
      const statusMap = {};
      res.data.forEach(record => {
        if (record.userId) {
          statusMap[record.userId._id] = record.status;
        }
      });
      setAttendanceStatus(statusMap);
    } catch (error) {
      console.error("Error fetching attendance:", error);
    }
  };

  const markAttendance = async (staffId, status) => {
    try {
      await axios.post(
        `${API_URL}/attendance/mark`,
        {
          userId: staffId,
          userType: "Staff",
          date: selectedDate,
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update local state
      setAttendanceStatus(prev => ({
        ...prev,
        [staffId]: status
      }));
      
      alert(`Attendance marked: ${status}`);
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Failed to mark attendance");
    }
  };

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Staff Attendance
      </Typography>

      {/* Date Selection */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} sm={6}>
          <TextField
            type="date"
            label="Select Date"
            value={selectedDate}
            onChange={handleDateChange}
            fullWidth
            InputLabelProps={{ shrink: true }}
          />
        </Grid>
      </Grid>

      {/* Selected Info */}
      {selectedDate && (
        <Typography variant="body1" sx={{ mb: 2 }}>
          Showing attendance for <strong>{selectedDate}</strong>
        </Typography>
      )}

      {/* Attendance Table */}
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Present</TableCell>
            <TableCell align="center">Absent</TableCell>
            <TableCell align="center">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {staff.length > 0 ? (
            staff.map((s) => (
              <TableRow key={s._id}>
                <TableCell>{s.name}</TableCell>
                <TableCell align="center">
                  <Button
                    variant={attendanceStatus[s._id] === "Present" ? "contained" : "outlined"}
                    color="success"
                    size="small"
                    onClick={() => markAttendance(s._id, "Present")}
                  >
                    P
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Button
                    variant={attendanceStatus[s._id] === "Absent" ? "contained" : "outlined"}
                    color="error"
                    size="small"
                    onClick={() => markAttendance(s._id, "Absent")}
                  >
                    A
                  </Button>
                </TableCell>
                <TableCell align="center">
                  <Typography
                    variant="body2"
                    color={attendanceStatus[s._id] === "Present" ? "success.main" : 
                           attendanceStatus[s._id] === "Absent" ? "error.main" : "text.secondary"}
                  >
                    {attendanceStatus[s._id] || "Not Marked"}
                  </Typography>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={4} align="center">
                <Typography variant="body1" color="text.secondary">
                  No staff members found
                </Typography>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </Box>
  );
}

