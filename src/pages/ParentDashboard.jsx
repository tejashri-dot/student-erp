// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   Grid,
//   Button,
//   Avatar,
//   CircularProgress,
//   LinearProgress,
//   Divider,
// } from "@mui/material";

// import { Person, FactCheck, Assessment, Payment } from "@mui/icons-material";

// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   Tooltip,
//   ResponsiveContainer,
// } from "recharts";

// // Use production URL for backend
// const API_URL = "https://school-backend-6udp.onrender.com";
// // For local testing, use: const API_URL = "http://localhost:5000";

// function ParentDashboard() {
//   const navigate = useNavigate();

//   const [loading, setLoading] = useState(true);

//   const [student, setStudent] = useState(null);
//   const [attendance, setAttendance] = useState(null);
//   const [exams, setExams] = useState([]);
//   const [fees, setFees] = useState([]);

//   useEffect(() => {
//     const user = JSON.parse(localStorage.getItem("user"));

//     if (!user) {
//       navigate("/login");
//       return;
//     }

//     fetchDashboard(user.id);
//   }, []);

//   const fetchDashboard = async (parentId) => {
//     try {
//       const token = localStorage.getItem("token");

//       const res = await fetch(`${API_URL}/api/parent/dashboard/${parentId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       const data = await res.json();

//       setStudent(data.student);
//       setAttendance(data.attendanceSummary);
//       setExams(data.exams);
//       setFees(data.fees);

//       setLoading(false);
//     } catch (err) {
//       console.error(err);
//       setLoading(false);
//     }
//   };

//   if (loading) {
//     return (
//       <Box sx={{ display: "flex", justifyContent: "center", mt: 10 }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   const pendingFees = fees.reduce((sum, f) => {
//     return f.status === "Pending" ? sum + f.amount : sum;
//   }, 0);

//   return (
//     <Box sx={{ p: 4 }}>
//       <Typography variant="h4" sx={{ mb: 4 }}>
//         Parent Dashboard
//       </Typography>

//       {/* STUDENT PROFILE */}

//       <Card sx={{ mb: 4 }}>
//         <CardContent>
//           <Grid container spacing={2} alignItems="center">
//             <Grid item>
//               <Avatar sx={{ width: 70, height: 70 }}>
//                 <Person />
//               </Avatar>
//             </Grid>

//             <Grid item>
//               <Typography variant="h6">{student?.name}</Typography>

//               <Typography color="text.secondary">
//                 Class: {student?.className}
//               </Typography>

//               <Typography color="text.secondary">
//                 Seat No: {student?.seatNumber}
//               </Typography>
//             </Grid>
//           </Grid>
//         </CardContent>
//       </Card>

//       {/* STATS */}

//       <Grid container spacing={3} sx={{ mb: 4 }}>
//         {/* Attendance */}

//         <Grid item xs={12} md={4}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6">Attendance</Typography>

//               <Typography variant="h3" sx={{ mt: 2 }}>
//                 {attendance?.attendancePercentage || 0}%
//               </Typography>

//               <LinearProgress
//                 variant="determinate"
//                 value={attendance?.attendancePercentage || 0}
//                 sx={{ mt: 2 }}
//               />

//               <Typography sx={{ mt: 1 }}>
//                 {attendance?.presentDays} / {attendance?.totalDays} Days
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Exams */}

//         <Grid item xs={12} md={4}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6">Exams Taken</Typography>

//               <Typography variant="h3" sx={{ mt: 2 }}>
//                 {exams.length}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>

//         {/* Fees */}

//         <Grid item xs={12} md={4}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6">Pending Fees</Typography>

//               <Typography variant="h3" sx={{ mt: 2 }}>
//                 ₹{pendingFees}
//               </Typography>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>

//       {/* ATTENDANCE CHART */}

//       <Card sx={{ mb: 4 }}>
//         <CardContent>
//           <Typography variant="h6" sx={{ mb: 2 }}>
//             Attendance Trend
//           </Typography>

//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={attendance?.monthly || []}>
//               <XAxis dataKey="month" />

//               <YAxis />

//               <Tooltip />

//               <Line
//                 type="monotone"
//                 dataKey="percentage"
//                 stroke="#1976d2"
//                 strokeWidth={3}
//               />
//             </LineChart>
//           </ResponsiveContainer>
//         </CardContent>
//       </Card>

//       {/* EXAM TABLE */}

//       <Card sx={{ mb: 4 }}>
//         <CardContent>
//           <Typography variant="h6" sx={{ mb: 2 }}>
//             Exam Scores
//           </Typography>

//           {exams.map((exam) => (
//             <Box
//               key={exam._id}
//               sx={{
//                 display: "flex",
//                 justifyContent: "space-between",
//                 py: 1,
//               }}
//             >
//               <Typography>{exam.subject}</Typography>

//               <Typography>
//                 {exam.marks} / {exam.maxMarks}
//               </Typography>
//             </Box>
//           ))}
//         </CardContent>
//       </Card>

//       <Divider sx={{ mb: 3 }} />

//       {/* QUICK ACTIONS */}

//       <Typography variant="h6" sx={{ mb: 2 }}>
//         Quick Actions
//       </Typography>

//       <Grid container spacing={2}>
//         <Grid item xs={12} md={3}>
//           <Button
//             fullWidth
//             variant="contained"
//             startIcon={<FactCheck />}
//             onClick={() => navigate("/parent/attendance")}
//           >
//             Attendance
//           </Button>
//         </Grid>

//         <Grid item xs={12} md={3}>
//           <Button
//             fullWidth
//             variant="contained"
//             startIcon={<Assessment />}
//             onClick={() => navigate("/parent/exams")}
//           >
//             Exams
//           </Button>
//         </Grid>

//         <Grid item xs={12} md={3}>
//           <Button
//             fullWidth
//             variant="contained"
//             startIcon={<Payment />}
//             onClick={() => navigate("/parent/fees")}
//           >
//             Fees
//           </Button>
//         </Grid>

//         <Grid item xs={12} md={3}>
//           <Button
//             fullWidth
//             variant="contained"
//             color="success"
//             onClick={() => navigate("/fee-payment")}
//           >
//             Pay Fees
//           </Button>
//         </Grid>
//       </Grid>
//     </Box>
//   );
// }

// export default ParentDashboard;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  Avatar,
  CircularProgress,
  LinearProgress,
  Divider,
} from "@mui/material";

import { Person, FactCheck, Assessment, Payment } from "@mui/icons-material";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// const API_URL =
//   window.location.hostname === "localhost"
//     ? "http://localhost:8080"
//     : "https://school-backend-6udp.onrender.com";
const API_URL = "http://localhost:8080";

function ParentDashboard() {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [student, setStudent] = useState(null);
  const [attendance, setAttendance] = useState(null);
  const [exams, setExams] = useState([]);
  const [fees, setFees] = useState([]);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    const token = localStorage.getItem("token");

    if (!user || !token) {
      navigate("/login");
      return;
    }

    fetchDashboard(user.id); // MongoDB uses _id
  }, [navigate]);

  const fetchDashboard = async (parentId) => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${API_URL}/api/parent/dashboard/${parentId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch dashboard");
      }

      const data = await response.json();

      setStudent(data.student || null);
      setAttendance(data.attendanceSummary || null);
      setExams(data.exams || []);
      setFees(data.fees || []);

      setLoading(false);
    } catch (error) {
      console.error("Dashboard Error:", error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          mt: 10,
          p: 3,
        }}
      >
        <CircularProgress />
        <Typography sx={{ mt: 2 }}>Loading Dashboard...</Typography>
      </Box>
    );
  }

  const pendingFees = fees.reduce((sum, fee) => {
    return fee.status === "Pending" ? sum + fee.amount : sum;
  }, 0);

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Parent Dashboard
      </Typography>

      {/* STUDENT PROFILE */}

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar sx={{ width: 70, height: 70 }}>
                <Person />
              </Avatar>
            </Grid>

            <Grid item>
              <Typography variant="h6">{student?.name || "Student"}</Typography>

              <Typography color="text.secondary">
                Class: {student?.className || "-"}
              </Typography>

              <Typography color="text.secondary">
                Seat No: {student?.seatNumber || "-"}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* STATS */}

      <Grid container spacing={3} sx={{ mb: 4 }}>
        {/* Attendance */}

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Attendance</Typography>

              <Typography variant="h3" sx={{ mt: 2 }}>
                {attendance?.attendancePercentage || 0}%
              </Typography>

              <LinearProgress
                variant="determinate"
                value={attendance?.attendancePercentage || 0}
                sx={{ mt: 2 }}
              />

              <Typography sx={{ mt: 1 }}>
                {attendance?.presentDays || 0} / {attendance?.totalDays || 0}{" "}
                Days
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Exams */}

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Exams Taken</Typography>

              <Typography variant="h3" sx={{ mt: 2 }}>
                {exams.length}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Fees */}

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6">Pending Fees</Typography>

              <Typography variant="h3" sx={{ mt: 2 }}>
                ₹{pendingFees}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* ATTENDANCE CHART */}

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Attendance Trend
          </Typography>

          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={attendance?.monthly || []}>
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />

              <Line
                type="monotone"
                dataKey="percentage"
                stroke="#1976d2"
                strokeWidth={3}
              />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* EXAM SCORES */}

      <Card sx={{ mb: 4 }}>
        <CardContent>
          <Typography variant="h6" sx={{ mb: 2 }}>
            Exam Scores
          </Typography>

          {exams.length === 0 && <Typography>No exam records</Typography>}

          {exams.map((exam) => (
            <Box
              key={exam._id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                py: 1,
              }}
            >
              <Typography>{exam.subject}</Typography>

              <Typography>
                {exam.marks} / {exam.maxMarks}
              </Typography>
            </Box>
          ))}
        </CardContent>
      </Card>

      <Divider sx={{ mb: 3 }} />

      {/* QUICK ACTIONS */}

      <Typography variant="h6" sx={{ mb: 2 }}>
        Quick Actions
      </Typography>

      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<FactCheck />}
            onClick={() => navigate("/parent/attendance")}
          >
            Attendance
          </Button>
        </Grid>

        <Grid item xs={12} md={3}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<Assessment />}
            onClick={() => navigate("/parent/exams")}
          >
            Exams
          </Button>
        </Grid>

        <Grid item xs={12} md={3}>
          <Button
            fullWidth
            variant="contained"
            startIcon={<Payment />}
            onClick={() => navigate("/parent/fees")}
          >
            Fees
          </Button>
        </Grid>

        <Grid item xs={12} md={3}>
          <Button
            fullWidth
            variant="contained"
            color="success"
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
