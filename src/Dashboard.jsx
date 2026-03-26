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
//   LinearProgress,
//   Paper,
//   Stack,
//   useTheme,
//   alpha,
//   Skeleton,
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
//   TrendingUp as TrendingUpIcon,
//   CalendarToday as CalendarIcon,
//   AttachMoney as MoneyIcon,
// } from "@mui/icons-material";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import { format } from "date-fns"; // For nice date formatting

// export default function Dashboard() {
//   const [students, setStudents] = useState([]);
//   const [staff, setStaff] = useState([]);
//   const [admissions, setAdmissions] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const navigate = useNavigate();
//   const theme = useTheme();

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const [studentsRes, staffRes, admissionsRes] = await Promise.all([
//           axios.get("https://school-backend-6udp.onrender.com/api/students"),
//           axios.get("https://school-backend-6udp.onrender.com/api/staff"),
//           axios.get("https://school-backend-6udp.onrender.com/api/admission/all"),
//         ]);
//         setStudents(studentsRes.data);
//         setStaff(staffRes.data);
//         setAdmissions(admissionsRes.data.data || []);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   const handleLogout = () => {
//     window.location.reload(); // Replace with proper logout logic
//   };

//   const menuItems = [
//     { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
//     { text: "Students", icon: <SchoolIcon />, path: "/students" },
//     { text: "Staff", icon: <PeopleIcon />, path: "/staff" },
//     { text: "Attendance", icon: <AssessmentIcon />, path: "/attendance" },
//     { text: "Admission Management", icon: <AccountBalanceIcon />, path: "/admission-management" },
//   ];

//   // Prepare recent admissions (most recent 4 based on admissionDate)
//   const recentAdmissions = [...admissions]
//     .sort((a, b) => new Date(b.admissionDate || b.createdAt) - new Date(a.admissionDate || a.createdAt))
//     .slice(0, 4)
//     .map(admission => ({
//       id: admission._id,
//       text: `New admission: ${admission.studentName || "Student"} enrolled in ${admission.className || "class"}`,
//       date: admission.admissionDate || admission.createdAt,
//       icon: <SchoolIcon fontSize="small" />,
//     }));

//   // Fallback recent activities if no admissions
//   const fallbackActivities = [
//     { id: 1, text: "No recent admissions found", icon: <CalendarIcon fontSize="small" />, date: new Date() },
//   ];

//   const activitiesToShow = recentAdmissions.length > 0 ? recentAdmissions : fallbackActivities;

//   const stats = [
//     {
//       title: "Total Students",
//       value: students.length,
//       icon: <SchoolIcon sx={{ fontSize: 40 }} />,
//       color: theme.palette.primary.main,
//       bgColor: alpha(theme.palette.primary.main, 0.1),
//       link: "/students",
//     },
//     {
//       title: "Total Staff",
//       value: staff.length,
//       icon: <PeopleIcon sx={{ fontSize: 40 }} />,
//       color: theme.palette.secondary.main,
//       bgColor: alpha(theme.palette.secondary.main, 0.1),
//       link: "/staff",
//     },
//     {
//       title: "Attendance Rate",
//       value: "95%",
//       icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
//       color: theme.palette.success.main,
//       bgColor: alpha(theme.palette.success.main, 0.1),
//       link: "/attendance",
//     },
//     {
//       title: "Total Admissions",
//       value: admissions.length,
//       icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />,
//       color: theme.palette.warning.main,
//       bgColor: alpha(theme.palette.warning.main, 0.1),
//       link: "/admission-management",
//     },
//   ];

//   return (
//     <Box sx={{ display: "flex", bgcolor: "#f8fafc", minHeight: "100vh" }}>
//       {/* App Bar with Gradient */}
//       <AppBar
//         position="fixed"
//         sx={{
//           zIndex: theme.zIndex.drawer + 1,
//           background: `linear-gradient(135deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`,
//           boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
//         }}
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
//           <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, fontWeight: 600, letterSpacing: 1 }}>
//             School ERP System
//           </Typography>
//           <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
//             <Chip
//               avatar={
//                 <Avatar sx={{ bgcolor: alpha(theme.palette.common.white, 0.2) }}>
//                   <PersonIcon />
//                 </Avatar>
//               }
//               label="Admin"
//               variant="outlined"
//               sx={{ color: "white", borderColor: "white", "& .MuiChip-label": { fontWeight: 500 } }}
//             />
//             <IconButton color="inherit" onClick={handleLogout} sx={{ "&:hover": { bgcolor: alpha(theme.palette.common.white, 0.1) } }}>
//               <ExitToAppIcon />
//             </IconButton>
//           </Box>
//         </Toolbar>
//       </AppBar>

//       {/* Sidebar Drawer */}
//       <Drawer
//         open={drawerOpen}
//         onClose={() => setDrawerOpen(false)}
//         sx={{
//           width: 260,
//           flexShrink: 0,
//           "& .MuiDrawer-paper": {
//             width: 260,
//             boxSizing: "border-box",
//             borderRight: "none",
//             boxShadow: "2px 0 20px rgba(0,0,0,0.05)",
//           },
//         }}
//       >
//         <Toolbar />
//         <Box sx={{ overflow: "auto", mt: 2 }}>
//           <List>
//             {menuItems.map((item) => (
//               <ListItem key={item.text} disablePadding>
//                 <ListItemButton
//                   component={Link}
//                   to={item.path}
//                   onClick={() => setDrawerOpen(false)}
//                   sx={{
//                     mx: 1,
//                     borderRadius: 2,
//                     "&:hover": {
//                       bgcolor: alpha(theme.palette.primary.main, 0.08),
//                     },
//                   }}
//                 >
//                   <ListItemIcon sx={{ color: theme.palette.primary.main, minWidth: 40 }}>
//                     {item.icon}
//                   </ListItemIcon>
//                   <ListItemText primary={item.text} primaryTypographyProps={{ fontWeight: 500 }} />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//           <Divider sx={{ my: 2 }} />
//         </Box>
//       </Drawer>

//       {/* Main Content */}
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <Toolbar />
        
//         {/* Welcome Header */}
//         <Paper
//           elevation={0}
//           sx={{
//             p: 4,
//             mb: 4,
//             borderRadius: 4,
//             background: `linear-gradient(135deg, ${alpha(theme.palette.primary.main, 0.05)} 0%, ${alpha(theme.palette.primary.light, 0.02)} 100%)`,
//             border: `1px solid ${alpha(theme.palette.primary.main, 0.1)}`,
//           }}
//         >
//           <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, color: theme.palette.text.primary }}>
//             Welcome back, Admin! 👋
//           </Typography>
//           <Typography variant="body1" color="text.secondary" sx={{ maxWidth: "80%" }}>
//             Here's what's happening with your school today. Monitor student enrollment, staff performance, and financial activities all in one place.
//           </Typography>
//         </Paper>

//         {/* Stats Cards Grid - Proper widths */}
//         <Grid container spacing={3} sx={{ mb: 4 }}>
//           {loading
//             ? Array.from(new Array(4)).map((_, index) => (
//                 <Grid item xs={12} sm={6} md={3} key={index}>
//                   <Card sx={{ height: "100%", borderRadius: 4, p: 2 }}>
//                     <Skeleton variant="circular" width={40} height={40} sx={{ mb: 2 }} />
//                     <Skeleton variant="text" width="60%" height={40} />
//                     <Skeleton variant="text" width="80%" height={30} />
//                     <Skeleton variant="rectangular" width="100%" height={36} sx={{ mt: 2, borderRadius: 2 }} />
//                   </Card>
//                 </Grid>
//               ))
//             : stats.map((stat, index) => (
//                 <Grid item xs={12} sm={6} md={3} key={index}>
//                   <Card
//                     sx={{
//                       height: "100%",
//                       borderRadius: 4,
//                       transition: "transform 0.2s, box-shadow 0.2s",
//                       "&:hover": {
//                         transform: "translateY(-4px)",
//                         boxShadow: theme.shadows[8],
//                       },
//                       position: "relative",
//                       overflow: "visible",
//                     }}
//                   >
//                     <CardContent sx={{ textAlign: "center", p: 3 }}>
//                       <Box
//                         sx={{
//                           display: "inline-flex",
//                           p: 1.5,
//                           borderRadius: "50%",
//                           bgcolor: stat.bgColor,
//                           color: stat.color,
//                           mb: 2,
//                         }}
//                       >
//                         {stat.icon}
//                       </Box>
//                       <Typography variant="h3" sx={{ fontWeight: 700, mb: 0.5 }}>
//                         {stat.value}
//                       </Typography>
//                       <Typography variant="body2" color="text.secondary" gutterBottom>
//                         {stat.title}
//                       </Typography>
//                       <Button
//                         component={Link}
//                         to={stat.link}
//                         variant="contained"
//                         fullWidth
//                         sx={{
//                           mt: 2,
//                           borderRadius: 2,
//                           textTransform: "none",
//                           boxShadow: "none",
//                           "&:hover": { boxShadow: "none" },
//                         }}
//                       >
//                         Manage
//                       </Button>
//                     </CardContent>
//                   </Card>
//                 </Grid>
//               ))}
//         </Grid>

//         {/* Attendance & Recent Activity Section */}
//         <Grid container spacing={3}>
//           {/* Attendance Overview */}
//           <Grid item xs={12} md={6}>
//             <Card sx={{ borderRadius: 4, height: "100%" }}>
//               <CardContent>
//                 <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
//                   Attendance Overview
//                 </Typography>
//                 <Box sx={{ mb: 2 }}>
//                   <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
//                     <Typography variant="body2">Overall Attendance</Typography>
//                     <Typography variant="body2" fontWeight={500}>95%</Typography>
//                   </Box>
//                   <LinearProgress
//                     variant="determinate"
//                     value={95}
//                     sx={{
//                       height: 8,
//                       borderRadius: 4,
//                       bgcolor: alpha(theme.palette.success.main, 0.2),
//                       "& .MuiLinearProgress-bar": {
//                         bgcolor: theme.palette.success.main,
//                         borderRadius: 4,
//                       },
//                     }}
//                   />
//                 </Box>
//                 <Box sx={{ mt: 3 }}>
//                   <Typography variant="subtitle2" color="text.secondary" gutterBottom>
//                     This Month's Trend
//                   </Typography>
//                   <Stack direction="row" spacing={1} flexWrap="wrap">
//                     {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, i) => (
//                       <Chip
//                         key={day}
//                         label={`${day} ${[94, 96, 97, 95, 98][i]}%`}
//                         size="small"
//                         sx={{ bgcolor: alpha(theme.palette.success.main, 0.1), color: theme.palette.success.main }}
//                       />
//                     ))}
//                   </Stack>
//                 </Box>
//               </CardContent>
//             </Card>
//           </Grid>

//           {/* Recent Activity - Now showing actual admissions */}
//           <Grid item xs={12} md={6}>
//             <Card sx={{ borderRadius: 4, height: "100%" }}>
//               <CardContent>
//                 <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
//                   Recent Admissions
//                 </Typography>
//                 <List disablePadding>
//                   {activitiesToShow.map((activity) => (
//                     <ListItem key={activity.id} disablePadding sx={{ mb: 1.5 }}>
//                       <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
//                         <Avatar sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1), mr: 2, width: 32, height: 32 }}>
//                           {activity.icon}
//                         </Avatar>
//                         <Box sx={{ flex: 1 }}>
//                           <Typography variant="body2" sx={{ fontWeight: 500 }}>
//                             {activity.text}
//                           </Typography>
//                           <Typography variant="caption" color="text.secondary">
//                             {activity.date ? format(new Date(activity.date), "PPP") : "Just now"}
//                           </Typography>
//                         </Box>
//                       </Box>
//                     </ListItem>
//                   ))}
//                 </List>
//                 {recentAdmissions.length > 0 && (
//                   <Button
//                     variant="text"
//                     fullWidth
//                     sx={{ mt: 1, textTransform: "none", borderRadius: 2 }}
//                     component={Link}
//                     to="/payments"
//                   >
//                     View All Admissions
//                   </Button>
//                 )}
//               </CardContent>
//             </Card>
//           </Grid>
//         </Grid>

//         {/* Footer */}
//         <Box sx={{ mt: 5, textAlign: "center", py: 2 }}>
//           <Typography variant="body2" color="text.secondary">
//             © {new Date().getFullYear()} School ERP System. All rights reserved.
//           </Typography>
//         </Box>
//       </Box>
//     </Box>
//   );
// }








import React, { useEffect, useState, useMemo } from "react";
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
  Alert,
  Badge,
  Container,
  Fab,
  Tooltip,
  AvatarGroup,
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
  ArrowForward as ArrowForwardIcon,
  Refresh as RefreshIcon,
  VerifiedUser as VerifiedUserIcon,
  MonetizationOn as MonetizationIcon,
  EmojiEvents as EmojiEventsIcon,
  MoreVert as MoreVertIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";

export default function Dashboard() {
  const [students, setStudents] = useState([]);
  const [staff, setStaff] = useState([]);
  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [refreshing, setRefreshing] = useState(false);

  const theme = useTheme();

  // Fetch data function
  const fetchData = async () => {
    setLoading(true);
    setErrorMsg("");

    try {
      const studentsReq = axios.get("https://school-backend-6udp.onrender.com/api/students");
      const staffReq = axios.get("https://school-backend-6udp.onrender.com/api/staff");
      const admissionsReq = axios.get("https://school-backend-6udp.onrender.com/api/admission/");

      const studentsRes = await studentsReq.catch(err => {
        console.error("❌ Students API:", err?.response?.data || err.message);
        return { data: [] };
      });

      const staffRes = await staffReq.catch(err => {
        console.error("❌ Staff API:", err?.response?.data || err.message);
        return { data: [] };
      });

      const admissionsRes = await admissionsReq.catch(err => {
        console.error("❌ Admissions API:", err?.response?.data || err.message);
        return { data: { data: [] } };
      });

      setStudents(Array.isArray(studentsRes.data) ? studentsRes.data : []);
      setStaff(Array.isArray(staffRes.data) ? staffRes.data : []);
      setAdmissions(admissionsRes?.data?.data || []);

      if (!studentsRes.data.length || !staffRes.data.length || !admissionsRes?.data?.data) {
        setErrorMsg("Some data failed to load (server issue)");
      }
    } catch (error) {
      console.error("🔥 Unexpected Error:", error);
      setErrorMsg("Server error. Please try again.");
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = async () => {
    setRefreshing(true);
    await fetchData();
  };

  const handleLogout = () => {
    window.location.reload();
  };

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
    { text: "Students", icon: <SchoolIcon />, path: "/students" },
    { text: "Staff", icon: <PeopleIcon />, path: "/staff" },
    { text: "Attendance", icon: <AssessmentIcon />, path: "/attendance" },
    { text: "Admission Management", icon: <AccountBalanceIcon />, path: "/admission-management" },
  ];

  // Recent admissions sorted by date
  const recentAdmissions = useMemo(() => {
    return [...admissions]
      .sort((a, b) => new Date(b.admissionDate || b.createdAt) - new Date(a.admissionDate || a.createdAt))
      .slice(0, 5)
      .map(admission => ({
        id: admission._id,
        studentName: admission.studentName || "Student",
        className: admission.className || "N/A",
        date: admission.admissionDate || admission.createdAt,
        status: admission.status || "Pending",
        icon: <SchoolIcon fontSize="small" />,
      }));
  }, [admissions]);

  // Stats cards configuration with enhanced visuals
  const stats = [
    {
      title: "Total Students",
      value: students.length,
      icon: <SchoolIcon sx={{ fontSize: 40 }} />,
      color: theme.palette.primary.main,
      bgColor: alpha(theme.palette.primary.main, 0.1),
      link: "/students",
      trend: "+12%",
    },
    {
      title: "Total Staff",
      value: staff.length,
      icon: <PeopleIcon sx={{ fontSize: 40 }} />,
      color: theme.palette.secondary.main,
      bgColor: alpha(theme.palette.secondary.main, 0.1),
      link: "/staff",
      trend: "+5%",
    },
    {
      title: "Attendance Rate",
      value: "95%",
      icon: <TrendingUpIcon sx={{ fontSize: 40 }} />,
      color: theme.palette.success.main,
      bgColor: alpha(theme.palette.success.main, 0.1),
      link: "/attendance",
      trend: "+2%",
      progress: 95,
    },
    {
      title: "Total Admissions",
      value: admissions.length,
      icon: <AccountBalanceIcon sx={{ fontSize: 40 }} />,
      color: theme.palette.warning.main,
      bgColor: alpha(theme.palette.warning.main, 0.1),
      link: "/admission-management",
      trend: "+8%",
    },
  ];

  // Quick actions
  const quickActions = [
    { label: "Add Student", icon: <SchoolIcon />, link: "/students", color: "primary" },
    { label: "Record Attendance", icon: <AssessmentIcon />, link: "/attendance", color: "secondary" },
    { label: "New Admission", icon: <AccountBalanceIcon />, link: "/admission-management", color: "warning" },
    { label: "View Reports", icon: <TrendingUpIcon />, link: "/reports", color: "info" },
  ];

  return (
    <Box sx={{ display: "flex", bgcolor: "#f8fafc", minHeight: "100vh" }}>
      {/* App Bar */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          zIndex: theme.zIndex.drawer + 1,
          backgroundColor: "white",
          color: theme.palette.text.primary,
          borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        }}
      >
        <Toolbar>
          <IconButton edge="start" color="inherit" onClick={() => setDrawerOpen(true)} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600, letterSpacing: "-0.5px" }}>
            School ERP Dashboard
          </Typography>
          <Tooltip title="Refresh Data">
            <IconButton color="inherit" onClick={handleRefresh} disabled={refreshing}>
              <RefreshIcon sx={{ animation: refreshing ? "spin 1s linear infinite" : "none" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Logout">
            <IconButton color="inherit" onClick={handleLogout}>
              <ExitToAppIcon />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer */}
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Box sx={{ width: 280, p: 2 }}>
          <Toolbar />
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mb: 3 }}>
            <Avatar sx={{ width: 80, height: 80, bgcolor: theme.palette.primary.main, mb: 2 }}>
              <SchoolIcon sx={{ fontSize: 48 }} />
            </Avatar>
            <Typography variant="h6" fontWeight={600}>
              Admin Portal
            </Typography>
          
          </Box>
          <Divider sx={{ my: 2 }} />
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding sx={{ mb: 1 }}>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  sx={{
                    borderRadius: 2,
                    "&:hover": { bgcolor: alpha(theme.palette.primary.main, 0.08) },
                  }}
                >
                  <ListItemIcon sx={{ color: theme.palette.primary.main }}>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} primaryTypographyProps={{ fontWeight: 500 }} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        <Container maxWidth="xl">
          {/* Error Alert */}
          {errorMsg && (
            <Alert
              severity="warning"
              sx={{ mb: 3, borderRadius: 2 }}
              action={
                <Button color="inherit" size="small" onClick={handleRefresh}>
                  Retry
                </Button>
              }
            >
              {errorMsg}
            </Alert>
          )}

          {/* Welcome Header */}
          <Paper
            elevation={0}
            sx={{
              p: 3,
              mb: 4,
              borderRadius: 3,
              background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
              color: "white",
            }}
          >
            <Stack direction={{ xs: "column", md: "row" }} justifyContent="space-between" alignItems="center">
              <Box>
                <Typography variant="h4" fontWeight={700} gutterBottom>
                  Welcome back, Admin!
                </Typography>
                <Typography variant="body1" sx={{ opacity: 0.9 }}>
                  Here's what's happening with your school today.
                </Typography>
              </Box>
              <Chip
                icon={<VerifiedUserIcon />}
                label="System Online"
                sx={{
                  bgcolor: alpha(theme.palette.common.white, 0.2),
                  color: "white",
                  "& .MuiChip-icon": { color: "white" },
                }}
              />
            </Stack>
          </Paper>

          {/* Stats Cards */}
          <Grid container spacing={3} sx={{ mb: 4 }}>
            {loading
              ? Array.from(new Array(4)).map((_, i) => (
                  <Grid item xs={12} sm={6} md={3} key={i}>
                    <Card elevation={0} sx={{ borderRadius: 3 }}>
                      <CardContent>
                        <Skeleton variant="circular" width={40} height={40} sx={{ mb: 2 }} />
                        <Skeleton variant="text" width="60%" height={40} />
                        <Skeleton variant="text" width="80%" />
                      </CardContent>
                    </Card>
                  </Grid>
                ))
              : stats.map((stat, i) => (
                  <Grid item xs={12} sm={6} md={3} key={i}>
                    <Card
                      elevation={0}
                      sx={{
                        borderRadius: 3,
                        transition: "transform 0.2s, box-shadow 0.2s",
                        "&:hover": {
                          transform: "translateY(-4px)",
                          boxShadow: theme.shadows[8],
                        },
                        cursor: "pointer",
                      }}
                      onClick={() => (window.location.href = stat.link)}
                    >
                      <CardContent>
                        <Stack direction="row" justifyContent="space-between" alignItems="center">
                          <Box sx={{ bgcolor: stat.bgColor, p: 1.5, borderRadius: 2 }}>{stat.icon}</Box>
                          <Chip
                            label={stat.trend}
                            size="small"
                            sx={{
                              bgcolor: alpha(stat.color, 0.1),
                              color: stat.color,
                              fontWeight: 600,
                            }}
                          />
                        </Stack>
                        <Typography variant="h3" fontWeight={700} sx={{ mt: 2, mb: 0.5 }}>
                          {stat.value}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {stat.title}
                        </Typography>
                        {stat.progress && (
                          <LinearProgress
                            variant="determinate"
                            value={stat.progress}
                            sx={{ mt: 2, height: 6, borderRadius: 3, bgcolor: alpha(stat.color, 0.2) }}
                          />
                        )}
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
          </Grid>

          {/* Two Column Layout: Recent Admissions & Quick Actions */}
          <Grid container spacing={3}>
            {/* Recent Admissions */}
            <Grid item xs={12} md={7}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  height: "100%",
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                }}
              >
                <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 2 }}>
                  <Typography variant="h6" fontWeight={600}>
                    Recent Admissions
                  </Typography>
                  <Button
                    component={Link}
                    to="/admission-management"
                    endIcon={<ArrowForwardIcon />}
                    size="small"
                    color="primary"
                  >
                    View All
                  </Button>
                </Stack>
                <Divider sx={{ mb: 2 }} />
                {loading ? (
                  <Stack spacing={2}>
                    {[1, 2, 3].map((i) => (
                      <Skeleton key={i} variant="rounded" height={72} />
                    ))}
                  </Stack>
                ) : recentAdmissions.length > 0 ? (
                  <Stack spacing={2}>
                    {recentAdmissions.map((admission) => (
                      <Box
                        key={admission.id}
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          p: 1.5,
                          borderRadius: 2,
                          bgcolor: alpha(theme.palette.background.default, 0.6),
                          transition: "all 0.2s",
                          "&:hover": { bgcolor: alpha(theme.palette.primary.main, 0.05) },
                        }}
                      >
                        <Stack direction="row" spacing={2} alignItems="center">
                          <Avatar sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1), color: theme.palette.primary.main }}>
                            <SchoolIcon />
                          </Avatar>
                          <Box>
                            <Typography variant="subtitle2" fontWeight={600}>
                              {admission.studentName}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              Class: {admission.className} • {format(new Date(admission.date), "PPP")}
                            </Typography>
                          </Box>
                        </Stack>
                        <Chip
                          label={admission.status}
                          size="small"
                          sx={{
                            bgcolor: admission.status === "Approved" ? alpha(theme.palette.success.main, 0.1) : alpha(theme.palette.warning.main, 0.1),
                            color: admission.status === "Approved" ? theme.palette.success.main : theme.palette.warning.main,
                          }}
                        />
                      </Box>
                    ))}
                  </Stack>
                ) : (
                  <Alert severity="info" sx={{ borderRadius: 2 }}>
                    No recent admissions found.
                  </Alert>
                )}
              </Paper>
            </Grid>

            {/* Quick Actions & Activity Feed */}
            <Grid item xs={12} md={5}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  borderRadius: 3,
                  height: "100%",
                  border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                }}
              >
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Quick Actions
                </Typography>
                <Grid container spacing={2} sx={{ mb: 3 }}>
                  {quickActions.map((action) => (
                    <Grid item xs={6} key={action.label}>
                      <Button
                        component={Link}
                        to={action.link}
                        variant="outlined"
                        color={action.color}
                        startIcon={action.icon}
                        fullWidth
                        sx={{
                          py: 1.5,
                          borderRadius: 2,
                          justifyContent: "flex-start",
                          textTransform: "none",
                        }}
                      >
                        {action.label}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
                <Divider sx={{ my: 2 }} />
                <Typography variant="h6" fontWeight={600} gutterBottom>
                  Upcoming Events
                </Typography>
                <Stack spacing={2}>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar sx={{ bgcolor: alpha(theme.palette.info.main, 0.1), color: theme.palette.info.main }}>
                      <CalendarIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="body2" fontWeight={600}>
                        Parent-Teacher Meeting
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        March 28, 2025 • 10:00 AM
                      </Typography>
                    </Box>
                  </Box>
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar sx={{ bgcolor: alpha(theme.palette.warning.main, 0.1), color: theme.palette.warning.main }}>
                      <EmojiEventsIcon />
                    </Avatar>
                    <Box>
                      <Typography variant="body2" fontWeight={600}>
                        Annual Sports Day
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        April 15, 2025 • 8:00 AM
                      </Typography>
                    </Box>
                  </Box>
                </Stack>
              </Paper>
            </Grid>
          </Grid>

          {/* System Status */}
          <Paper
            elevation={0}
            sx={{
              mt: 4,
              p: 3,
              borderRadius: 3,
              textAlign: "center",
              border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
              bgcolor: alpha(theme.palette.background.default, 0.4),
            }}
          >
            <Typography variant="body2" color="text.secondary">
              System Status: All systems operational • Last updated: {format(new Date(), "PPP 'at' p")}
            </Typography>
          </Paper>
        </Container>
      </Box>

      {/* Add CSS for spin animation */}
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </Box>
  );
}