// import React, { useEffect, useState } from "react";
// import {
//   Box,
//   Card,
//   CardContent,
//   Typography,
//   Grid,
//   Button,
//   AppBar,
//   Toolbar,
//   IconButton,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Divider,
//   Avatar,
//   Chip,
// } from "@mui/material";
// import {
//   Menu as MenuIcon,
//   Dashboard as DashboardIcon,
//   People as PeopleIcon,
//   School as SchoolIcon,
//   AccountBalance as AccountBalanceIcon,
//   Assessment as AssessmentIcon,
//   ExitToApp as ExitToAppIcon,
//   Person as PersonIcon,
// } from "@mui/icons-material";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Dashboard() {
//   const [students, setStudents] = useState([]);
//   const [staff, setStaff] = useState([]);
//   const [admissions, setAdmissions] = useState([]);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get("http://localhost:8080/api/students").then((res) => setStudents(res.data));
//     axios.get("http://localhost:8080/api/staff").then((res) => setStaff(res.data));
//     axios.get("http://localhost:8080/api/admission/all").then((res) =>setAdmissions(res.data.data));
//   }, []);

//   const handleLogout = () => {
//     window.location.reload();
//   };

//   const menuItems = [
//     { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
//     { text: "Students", icon: <SchoolIcon />, path: "/students" },
//     { text: "Staff", icon: <PeopleIcon />, path: "/staff" },
//     { text: "Attendance", icon: <AssessmentIcon />, path: "/attendance" },
//     { text: "Payments", icon: <AccountBalanceIcon />, path: "/payments" },
//   ];

//   return (
//     <Box sx={{ display: "flex" }}>
//       {/* App Bar */}
//       <AppBar
//         position="fixed"
//         sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
//       >
//         <Toolbar>
//           <IconButton
//             color="inherit"
//             edge="start"
//             onClick={() => setDrawerOpen(true)}
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
//             School ERP System
//           </Typography>
//           <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//             <Chip
//               avatar={
//                 <Avatar>
//                   <PersonIcon />
//                 </Avatar>
//               }
//               label="Admin"
//               variant="outlined"
//               sx={{ color: "white", borderColor: "white" }}
//             />
//             <IconButton color="inherit" onClick={handleLogout}>
//               <ExitToAppIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Sidebar */}
//       <Drawer
//         open={drawerOpen}
//         onClose={() => setDrawerOpen(false)}
//         sx={{
//           width: 240,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": {
//             width: 240,
//             boxSizing: "border-box",
//           },
//         }}
//       >
//         <Toolbar />
//         <Box sx={{ overflow: "auto" }}>
//           <List>
//             {menuItems.map((item) => (
//               <ListItem key={item.text} disablePadding>
//                 <ListItemButton
//                   component={Link}
//                   to={item.path}
//                   onClick={() => setDrawerOpen(false)}
//                 >
//                   <ListItemIcon>{item.icon}</ListItemIcon>
//                   <ListItemText primary={item.text} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//           <Divider />
//         </Box>
//       </Drawer>

//       {/* Main Content */}
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <Toolbar />
//         <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
//           Welcome to School ERP Dashboard
//         </Typography>

//         <Grid container spacing={3}>
//           {/* Students Card */}
//           <Grid item xs={12} sm={6} md={3}>
//             <Card sx={{ height: "100%" }}>
//               <CardContent sx={{ textAlign: "center" }}>
//                 <SchoolIcon
//                   sx={{ fontSize: 48, color: "primary.main", mb: 2 }}
//                 />
//                 <Typography variant="h4" color="primary">
//                   {students.length}
//                 </Typography>
//                 <Typography variant="h6" gutterBottom>
//                   Total Students
//                 </Typography>
//                 <Button
//                   component={Link}
//                   to="/students"
//                   variant="contained"
//                   fullWidth
//                   sx={{ mt: 2 }}
//                 >
//                   Manage Students
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>

//           {/* Staff Card */}
//           <Grid item xs={12} sm={6} md={3}>
//             <Card sx={{ height: "100%" }}>
//               <CardContent sx={{ textAlign: "center" }}>
//                 <PeopleIcon
//                   sx={{ fontSize: 48, color: "secondary.main", mb: 2 }}
//                 />
//                 <Typography variant="h4" color="secondary">
//                   {staff.length}
//                 </Typography>
//                 <Typography variant="h6" gutterBottom>
//                   Total Staff
//                 </Typography>
//                 <Button
//                   component={Link}
//                   to="/staff"
//                   variant="contained"
//                   fullWidth
//                   sx={{ mt: 2 }}
//                 >
//                   Manage Staff
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>

//           {/* Attendance Card */}
//           <Grid item xs={12} sm={6} md={3}>
//             <Card sx={{ height: "100%" }}>
//               <CardContent sx={{ textAlign: "center" }}>
//                 <AssessmentIcon
//                   sx={{ fontSize: 48, color: "success.main", mb: 2 }}
//                 />
//                 <Typography variant="h4" color="success">
//                   95%
//                 </Typography>
//                 <Typography variant="h6" gutterBottom>
//                   Attendance Rate
//                 </Typography>
//                 <Button variant="contained" fullWidth sx={{ mt: 2 }}>
//                   View Attendance
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>

//           {/* Payments Card */}
//           <Grid item xs={12} sm={6} md={3}>
//             <Card sx={{ height: "100%" }}>
//               <CardContent sx={{ textAlign: "center" }}>
//                 <AccountBalanceIcon
//                   sx={{ fontSize: 48, color: "warning.main", mb: 2 }}
//                 />
//                 <Typography variant="h4" color="warning">
//                   10
//                 </Typography>
//                 <Typography variant="h6" gutterBottom>
                 
//                 </Typography>
//                 <Button variant="contained" fullWidth sx={{ mt: 2 }}>
//                  Total Admission
//                 </Button>
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>

//         {/* Recent Activity Section */}
//         <Box sx={{ mt: 4 }}>
//           <Typography variant="h5" gutterBottom>
//             Recent Activity
//           </Typography>
//           <Card>
//             <CardContent>
//               <Typography variant="body2" color="text.secondary">
//                 • New student John Doe enrolled in Class 10-A
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 • Teacher Sarah Johnson marked attendance for Class 9-B
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 • Payment received from Parent of Emma Wilson
//               </Typography>
//               <Typography variant="body2" color="text.secondary">
//                 • Staff meeting scheduled for tomorrow
//               </Typography>
//             </CardContent>
//           </Card>
//         </Box>
//       </Box>
//     </Box>
//   );
// }





import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Chip,
  LinearProgress,
  Paper,
  Stack,
  useTheme,
  alpha,
  Skeleton,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  School as SchoolIcon,
  AccountBalance as AccountBalanceIcon,
  Assessment as AssessmentIcon,
  ExitToApp as ExitToAppIcon,
  Person as PersonIcon,
  TrendingUp as TrendingUpIcon,
  CalendarToday as CalendarIcon,
  AttachMoney as MoneyIcon,
} from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns"; // For nice date formatting

export default function Dashboard() {
  const [students, setStudents] = useState([]);
  const [staff, setStaff] = useState([]);
  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();
  const theme = useTheme();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [studentsRes, staffRes, admissionsRes] = await Promise.all([
          axios.get("https://school-backend-6udp.onrender.com/api/students"),
          axios.get("https://school-backend-6udp.onrender.com/api/staff"),
          axios.get("https://school-backend-6udp.onrender.com/api/admission/all"),
        ]);
        setStudents(studentsRes.data);
        setStaff(staffRes.data);
        setAdmissions(admissionsRes.data.data || []);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleLogout = () => {
    window.location.reload(); // Replace with proper logout logic
  };

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
    { text: "Students", icon: <SchoolIcon />, path: "/students" },
    { text: "Staff", icon: <PeopleIcon />, path: "/staff" },
    { text: "Attendance", icon: <AssessmentIcon />, path: "/attendance" },
    { text: "Payments", icon: <AccountBalanceIcon />, path: "/payments" },
  ];

  // Prepare recent admissions (most recent 4 based on admissionDate)
  const recentAdmissions = [...admissions]
    .sort((a, b) => new Date(b.admissionDate || b.createdAt) - new Date(a.admissionDate || a.createdAt))
    .slice(0, 4)
    .map(admission => ({
      id: admission._id,
      text: `New admission: ${admission.studentName || "Student"} enrolled in ${admission.className || "class"}`,
      date: admission.admissionDate || admission.createdAt,
      icon: <SchoolIcon fontSize="small" />,
    }));

  // Fallback recent activities if no admissions
  const fallbackActivities = [
    { id: 1, text: "No recent admissions found", icon: <CalendarIcon fontSize="small" />, date: new Date() },
  ];

  const activitiesToShow = recentAdmissions.length > 0 ? recentAdmissions : fallbackActivities;

  const stats = [
    {
      title: "Total Students",
      value: students.length,
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      color: theme.palette.primary.main,
      bgColor: alpha(theme.palette.primary.main, 0.1),
      link: "/students",
    },
    {
      title: "Total Staff",
      value: staff.length,
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      color: theme.palette.secondary.main,
      bgColor: alpha(theme.palette.secondary.main, 0.1),
      link: "/staff",
    },
    {
      title: "Attendance Rate",
      value: "95%",
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      color: theme.palette.success.main,
      bgColor: alpha(theme.palette.success.main, 0.1),
      link: "/attendance",
    },
    {
      title: "Total Admissions",
      value: admissions.length,
      icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />,
      color: theme.palette.warning.main,
      bgColor: alpha(theme.palette.warning.main, 0.1),
      link: "/payments",
    },
  ];

  return (
    <Box sx={{ display: "flex", bgcolor: "#f8fafc", minHeight: "100vh" }}>
      {/* App Bar with Gradient */}
      <AppBar
        position="fixed"
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={() => setDrawerOpen(true)}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, fontWeight: 600, letterSpacing: 1 }}>
            School ERP System
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Chip
              avatar={
                <Avatar sx={{ bgcolor: alpha(theme.palette.common.white, 0.2) }}>
                  <PersonIcon />
                </Avatar>
              }
              label="Admin"
              variant="outlined"
              sx={{ color: "white", borderColor: "white", "& .MuiChip-label": { fontWeight: 500 } }}
            />
            <IconButton color="inherit" onClick={handleLogout} sx={{ "&:hover": { bgcolor: alpha(theme.palette.common.white, 0.1) } }}>
              <ExitToAppIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          width: 260,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 260,
            boxSizing: "border-box",
            borderRight: "none",
            boxShadow: "2px 0 20px rgba(0,0,0,0.05)",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", mt: 2 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={() => setDrawerOpen(false)}
                  sx={{
                    mx: 1,
                    borderRadius: 2,
                    "&:hover": {
                      bgcolor: alpha(theme.palette.primary.main, 0.08),
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: theme.palette.primary.main, minWidth: 40 }}>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText primary={item.text} primaryTypographyProps={{ fontWeight: 500 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider sx={{ my: 2 }} />
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        
        {/* Welcome Header */}
        <Paper
          elevation={0}
          sx={{
            p: 4,
            mb: 4,
            borderRadius: 4,
            background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.primary.light, 0.02)} 100%)`,
            border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
            Welcome back, Admin! 👋
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: "80%" }}>
            Here's what's happening with your school today. Monitor student enrollment, staff performance, and financial activities all in one place.
          </Typography>
        </Paper>

        {/* Stats Cards Grid - Proper widths */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          {loading
            ? Array.from(new Array(4)).map((_, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card sx={{ height: "100%", borderRadius: 4, p: 2 }}>
                    <Skeleton variant="circular" width={40} height={40} sx={{ mb: 2 }} />
                    <Skeleton variant="text" width="60%" height={40} />
                    <Skeleton variant="text" width="80%" height={30} />
                    <Skeleton variant="rectangular" width="100%" height={36} sx={{ mt: 2, borderRadius: 2 }} />
                  </Card>
                </Grid>
              ))
            : stats.map((stat, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card
                    sx={{
                      height: "100%",
                      borderRadius: 4,
                      transition: "transform 0.2s, box-shadow 0.2s",
                      "&:hover": {
                        transform: "translateY(-4px)",
                        boxShadow: theme.shadows[8],
                      },
                      position: "relative",
                      overflow: "visible",
                    }}
                  >
                    <CardContent sx={{ textAlign: "center", p: 3 }}>
                      <Box
                        sx={{
                          display: "inline-flex",
                          p: 1.5,
                          borderRadius: "50%",
                          bgcolor: stat.bgColor,
                          color: stat.color,
                          mb: 2,
                        }}
                      >
                        {stat.icon}
                      </Box>
                      <Typography variant="h3" sx={{ fontWeight: 700, mb: 0.5 }}>
                        {stat.value}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" gutterBottom>
                        {stat.title}
                      </Typography>
                      <Button
                        component={Link}
                        to={stat.link}
                        variant="contained"
                        fullWidth
                        sx={{
                          mt: 2,
                          borderRadius: 2,
                          textTransform: "none",
                          boxShadow: "none",
                          "&:hover": { boxShadow: "none" },
                        }}
                      >
                        Manage
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
        </Grid>

        {/* Attendance & Recent Activity Section */}
        <Grid container spacing={3}>
          {/* Attendance Overview */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 4, height: "100%" }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Attendance Overview
                </Typography>
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                    <Typography variant="body2">Overall Attendance</Typography>
                    <Typography variant="body2" fontWeight={500}>95%</Typography>
                  </Box>
                  <LinearProgress
                    variant="determinate"
                    value={95}
                    sx={{
                      height: 8,
                      borderRadius: 4,
                      bgcolor: alpha(theme.palette.success.main, 0.2),
                      "& .MuiLinearProgress-bar": {
                        bgcolor: theme.palette.success.main,
                        borderRadius: 4,
                      },
                    }}
                  />
                </Box>
                <Box sx={{ mt: 3 }}>
                  <Typography variant="subtitle2" color="text.secondary" gutterBottom>
                    This Month's Trend
                  </Typography>
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, i) => (
                      <Chip
                        key={day}
                        label={`${day} ${[94, 96, 97, 95, 98][i]}%`}
                        size="small"
                        sx={{ bgcolor: alpha(theme.palette.success.main, 0.1), color: theme.palette.success.main }}
                      />
                    ))}
                  </Stack>
                </Box>
              </CardContent>
            </Card>
          </Grid>

          {/* Recent Activity - Now showing actual admissions */}
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 4, height: "100%" }}>
              <CardContent>
                <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
                  Recent Admissions
                </Typography>
                <List disablePadding>
                  {activitiesToShow.map((activity) => (
                    <ListItem key={activity.id} disablePadding sx={{ mb: 1.5 }}>
                      <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
                        <Avatar sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1), mr: 2, width: 32, height: 32 }}>
                          {activity.icon}
                        </Avatar>
                        <Box sx={{ flex: 1 }}>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {activity.text}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            {activity.date ? format(new Date(activity.date), "PPP") : "Just now"}
                          </Typography>
                        </Box>
                      </Box>
                    </ListItem>
                  ))}
                </List>
                {recentAdmissions.length > 0 && (
                  <Button
                    variant="text"
                    fullWidth
                    sx={{ mt: 1, textTransform: "none", borderRadius: 2 }}
                    component={Link}
                    to="/payments"
                  >
                    View All Admissions
                  </Button>
                )}
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Footer */}
        <Box sx={{ mt: 5, textAlign: "center", py: 2 }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} School ERP System. All rights reserved.
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}