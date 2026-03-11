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
  Avatar,
  Alert
} from "@mui/material";
import {
  FactCheck,
  Assessment,
  Payment,
  Person
} from "@mui/icons-material";

const API_URL = "https://school-backend-6udp.onrender.com";

function ParentDashboard() {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const [studentData, setStudentData] = useState(null);
  const [attendanceData, setAttendanceData] = useState(null);
  const [feeData, setFeeData] = useState(null);
  const [examData, setExamData] = useState(null);

  const [error, setError] = useState("");

  useEffect(() => {

    const userData = localStorage.getItem("user");

    if (!userData) {
      navigate("/login");
      return;
    }

    const parsedUser = JSON.parse(userData);
    setUser(parsedUser);

    fetchParentData(parsedUser.id);

  }, []);

  const fetchParentData = async (parentId) => {

    try {

      setLoading(true);

      const token = localStorage.getItem("token");

      /* ---------------- Attendance ---------------- */

      const attRes = await fetch(
        `${API_URL}/api/attendance/parent/${parentId}`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      const attData = await attRes.json();
      console.log("Attendance Data:", attData);

      if (attData && attData.student) {
        setAttendanceData(attData);
        setStudentData(attData.student);
      }

      /* ---------------- Fees ---------------- */

      const feeRes = await fetch(
        `${API_URL}/api/fees/parent/${parentId}`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      const feeResp = await feeRes.json();
      console.log("Fee Data:", feeResp);

      if (feeResp) {
        setFeeData(feeResp);
      }

      /* ---------------- Exams ---------------- */

      const examRes = await fetch(
        `${API_URL}/api/exams/parent/${parentId}`,
        {
          headers: { Authorization: `Bearer ${token}` }
        }
      );

      const examResp = await examRes.json();
      console.log("Exam Data:", examResp);

      if (examResp) {
        setExamData(examResp);
      }

    } catch (err) {

      console.error(err);
      setError("Failed to load dashboard data");

    } finally {

      setLoading(false);

    }

  };

  const menuStyles = {
    card: {
      cursor: "pointer",
      transition: "0.3s",
      "&:hover": {
        transform: "translateY(-5px)",
        boxShadow: "0 10px 20px rgba(0,0,0,0.15)"
      }
    }
  };

  if (loading) {

    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "60vh"
        }}
      >
        <CircularProgress />
      </Box>
    );

  }

  return (

    <Box sx={{ p: 3 }}>

      <Typography variant="h4" sx={{ mb: 3 }}>
        Welcome, {user?.name || "Parent"} 👋
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}

      {/* ---------------- Student Profile ---------------- */}

      {studentData && (

        <Card sx={{ mb: 4, bgcolor: "#f5f5f5" }}>

          <CardContent>

            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>

              <Avatar sx={{ width: 60, height: 60 }}>
                <Person />
              </Avatar>

              <Box>

                <Typography variant="h6">
                  {studentData.name}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Class: {studentData.className}
                </Typography>

                <Typography variant="body2" color="text.secondary">
                  Seat Number: {studentData.seatNumber}
                </Typography>

              </Box>

            </Box>

          </CardContent>

        </Card>

      )}

      {/* ---------------- Stats Cards ---------------- */}

      <Grid container spacing={3} sx={{ mb: 4 }}>

        {/* Attendance */}

        <Grid item xs={12} md={4}>

          <Card sx={menuStyles.card}>

            <CardContent>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>

                <Box>

                  <Typography color="primary" variant="h6">
                    Attendance
                  </Typography>

                  <Typography variant="h4">

                    {attendanceData?.summary?.attendancePercentage || 0}%

                  </Typography>

                  <Typography variant="body2">

                    {attendanceData?.summary?.presentDays || 0} /
                    {attendanceData?.summary?.totalDays || 0} Present

                  </Typography>

                </Box>

                <FactCheck sx={{ fontSize: 50, color: "#4caf50" }} />

              </Box>

            </CardContent>

          </Card>

        </Grid>

        {/* Exams */}

        <Grid item xs={12} md={4}>

          <Card sx={menuStyles.card}>

            <CardContent>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>

                <Box>

                  <Typography color="primary" variant="h6">
                    Exams
                  </Typography>

                  <Typography variant="h4">
                    {examData?.exams?.length || 0}
                  </Typography>

                  <Typography variant="body2">
                    Exams Taken
                  </Typography>

                </Box>

                <Assessment sx={{ fontSize: 50, color: "#ff9800" }} />

              </Box>

            </CardContent>

          </Card>

        </Grid>

        {/* Fees */}

        <Grid item xs={12} md={4}>

          <Card sx={menuStyles.card}>

            <CardContent>

              <Box sx={{ display: "flex", justifyContent: "space-between" }}>

                <Box>

                  <Typography color="primary" variant="h6">
                    Fees
                  </Typography>

                  <Typography variant="h4">
                    ₹{feeData?.summary?.totalPending || 0}
                  </Typography>

                  <Typography variant="body2">
                    Pending Amount
                  </Typography>

                </Box>

                <Payment sx={{ fontSize: 50, color: "#f44336" }} />

              </Box>

            </CardContent>

          </Card>

        </Grid>

      </Grid>

      <Divider sx={{ mb: 3 }} />

      {/* ---------------- Quick Actions ---------------- */}

      <Typography variant="h5" sx={{ mb: 2 }}>
        Quick Actions
      </Typography>

      <Grid container spacing={2}>

        <Grid item xs={12} md={3}>

          <Button
            fullWidth
            variant="contained"
            sx={{ py: 2 }}
            onClick={() => navigate("/parent/attendance")}
          >
            View Attendance
          </Button>

        </Grid>

        <Grid item xs={12} md={3}>

          <Button
            fullWidth
            variant="contained"
            sx={{ py: 2 }}
            onClick={() => navigate("/parent/exams")}
          >
            View Exams
          </Button>

        </Grid>

        <Grid item xs={12} md={3}>

          <Button
            fullWidth
            variant="contained"
            sx={{ py: 2 }}
            onClick={() => navigate("/parent/fees")}
          >
            View Fee History
          </Button>

        </Grid>

        <Grid item xs={12} md={3}>

          <Button
            fullWidth
            color="success"
            variant="contained"
            sx={{ py: 2 }}
            onClick={() => navigate("/fee-payment")}
          >
            Pay Fees
          </Button>

        </Grid>

      </Grid>

    </Box>

  );

}

export default ParentDashboard;