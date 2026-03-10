import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Divider,
  CircularProgress,
} from "@mui/material";
import {
  FactCheck,
  Assessment,
  Payment,
  Person,
} from "@mui/icons-material";

const API_URL = "https://localhost:8080";

function ParentDashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [studentData, setStudentData] = useState(null);
  const [attendanceData, setAttendanceData] = useState(null);
  const [feeData, setFeeData] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
      fetchParentData(parsedUser.id);
    } else {
      navigate("/login");
    }
  }, [navigate]);

  const fetchParentData = async (parentId) => {
    try {
      setLoading(true);
      
      // Fetch attendance data
      const attRes = await fetch(
        `${API_URL}/api/attendance/parent/${parentId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const attData = await attRes.json();
      if (attData.success !== false) {
        setAttendanceData(attData);
      }

      // Fetch fee data
      const feeRes = await fetch(
        `${API_URL}/api/fees/parent/${parentId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const feeRespData = await feeRes.json();
      if (feeRespData.success !== false) {
        setFeeData(feeRespData);
        setStudentData(feeRespData.student);
      }

      // Fetch exam data
      const examRes = await fetch(
        `${API_URL}/api/exams/parent/${parentId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      const examData = await examRes.json();
      if (examData.success !== false) {
        setStudentData(examData.student);
      }
    } catch (error) {
      console.error("Error fetching parent data:", error);
    } finally {
      setLoading(false);
    }
  };

  const menuStyles = {
    card: {
      cursor: "pointer",
      transition: "transform 0.2s, box-shadow 0.2s",
      "&:hover": {
        transform: "translateY(-4px)",
        boxShadow: "0 8px 20px rgba(0,0,0,0.12)",
      },
    },
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
      <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
        Welcome, {user?.name || "Parent"}!
      </Typography>

      {/* Student Info Card */}
      {studentData && (
        <Card sx={{ mb: 3, bgcolor: "#f5f5f5" }}>
          <CardContent>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Person sx={{ fontSize: 40, color: "#1976d2" }} />
              <Box>
                <Typography variant="h6">
                  Student: {studentData.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Class: {studentData.className} | Seat No: {studentData.seatNumber}
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Card>
      )}

      {/* Quick Stats */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {/* Attendance Stats */}
        <Grid item xs={12} md={4}>
          <Card sx={menuStyles.card}>
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box>
                  <Typography variant="h6" color="primary">
                    Attendance
                  </Typography>
                  <Typography variant="h4" sx={{ my: 1 }}>
                    {attendanceData?.summary?.attendancePercentage || 0}%
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {attendanceData?.summary?.presentDays || 0} Present / {attendanceData?.summary?.totalDays || 0} Total
                  </Typography>
                </Box>
              <FactCheck sx={{ fontSize: 50, color: "#4caf50", opacity: 0.7 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Exam Stats */}
        <Grid item xs={12} md={4}>
          <Card sx={menuStyles.card}>
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box>
                  <Typography variant="h6" color="primary">
                    Exams
                  </Typography>
                  <Typography variant="h4" sx={{ my: 1 }}>
                    {feeData?.fees?.length || 0}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Total Exams Taken
                  </Typography>
                </Box>
                <Assessment sx={{ fontSize: 50, color: "#ff9800", opacity: 0.7 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Fee Stats */}
        <Grid item xs={12} md={4}>
          <Card sx={menuStyles.card}>
            <CardContent>
              <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <Box>
                  <Typography variant="h6" color="primary">
                    Fees
                  </Typography>
                  <Typography variant="h4" sx={{ my: 1 }}>
                    ₹{feeData?.summary?.totalPending || 0}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Pending Amount
                  </Typography>
                </Box>
                <Payment sx={{ fontSize: 50, color: "#f44336", opacity: 0.7 }} />
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Divider sx={{ my: 3 }} />

      {/* Quick Actions */}
      <Typography variant="h5" gutterBottom>
        Quick Actions
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            fullWidth
            size="large"
            onClick={() => navigate("/parent/attendance")}
            sx={{ py: 2 }}
          >
            View Attendance
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            fullWidth
            size="large"
            onClick={() => navigate("/parent/exams")}
            sx={{ py: 2 }}
          >
            View Exam Scores
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            fullWidth
            size="large"
            onClick={() => navigate("/parent/fees")}
            sx={{ py: 2 }}
          >
            View Fee History
          </Button>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Button
            variant="contained"
            color="success"
            fullWidth
            size="large"
            onClick={() => navigate("/fee-payment")}
            sx={{ py: 2 }}
          >
            Pay Fees
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ParentDashboard;

