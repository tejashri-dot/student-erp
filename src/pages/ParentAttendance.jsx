import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  Grid,
  CircularProgress,
  Button,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// 
const API_URL = "https://school-backend-6udp.onrender.com";

function ParentAttendance() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [attendanceData, setAttendanceData] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      fetchAttendance(parsedUser.id);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const fetchAttendance = async (parentId) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${API_URL}/api/attendance/parent/${parentId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      const data = await response.json();
      setAttendanceData(data);
    } catch (error) {
      console.error("Error fetching attendance:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <Box sx={{ p: 3 }}>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => navigate("/parent")}
        sx={{ mb: 2 }}
      >
        Back to Dashboard
      </Button>

      <Typography variant="h4" gutterBottom>
        Attendance Record
      </Typography>

      {/* Student Info */}
      {attendanceData?.student && (
        <Card sx={{ mb: 3, bgcolor: "#f5f5f5" }}>
          <CardContent>
            <Typography variant="h6">
              Student: {attendanceData.student.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Class: {attendanceData.student.className} | Seat No:{" "}
              {attendanceData.student.seatNumber}
            </Typography>
          </CardContent>
        </Card>
      )}

      {/* Summary Cards */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={6} md={3}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6" color="primary">
                Total Days
              </Typography>
              <Typography variant="h4">
                {attendanceData?.summary?.totalDays || 0}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6" color="success.main">
                Present
              </Typography>
              <Typography variant="h4" color="success.main">
                {attendanceData?.summary?.presentDays || 0}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6" color="error.main">
                Absent
              </Typography>
              <Typography variant="h4" color="error.main">
                {attendanceData?.summary?.absentDays || 0}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={3}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <Typography variant="h6" color="primary">
                Attendance %
              </Typography>
              <Typography variant="h4">
                {attendanceData?.summary?.attendancePercentage || 0}%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Attendance Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "#1976d2" }}>
              <TableCell sx={{ color: "white" }}>Date</TableCell>
              <TableCell sx={{ color: "white" }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {attendanceData?.attendance?.length > 0 ? (
              attendanceData.attendance.map((record, index) => (
                <TableRow key={index}>
                  <TableCell>{record.date}</TableCell>
                  <TableCell>
                    <Chip
                      label={record.status}
                      color={record.status === "Present" ? "success" : "error"}
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={2} align="center">
                  No attendance records found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default ParentAttendance;
