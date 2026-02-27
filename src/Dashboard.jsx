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
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Dashboard() {
  const [students, setStudents] = useState([]);
  const [staff, setStaff] = useState([]);
  const [admissions, setAdmissions] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const [studentsRes, staffRes, admissionRes] = await Promise.all([
        axios.get("http://localhost:8080/api/students"),
        axios.get("http://localhost:8080/api/staff"),
        axios.get("http://localhost:8080/api/admission/all"),
      ]);

      setStudents(studentsRes.data || []);
      setStaff(staffRes.data || []);
      setAdmissions(admissionRes.data.data || []);
    } catch (error) {
      console.error("Dashboard API Error:", error);
    }
  };

  const handleLogout = () => {
    window.location.reload();
  };

  const menuItems = [
    { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
    { text: "Students", icon: <SchoolIcon />, path: "/students" },
    { text: "Staff", icon: <PeopleIcon />, path: "/staff" },
    { text: "Attendance", icon: <AssessmentIcon />, path: "/attendance" },
    { text: "Payments", icon: <AccountBalanceIcon />, path: "/payments" },
  ];

  // recent 5 admissions
  const recentAdmissions = admissions.slice(0, 5);

  return (
    <Box sx={{ display: "flex" }}>
      {/* App Bar */}
      <AppBar position="fixed" sx={{ zIndex: (t) => t.zIndex.drawer + 1 }}>
        <Toolbar>
          <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography sx={{ flexGrow: 1 }} variant="h6">
            School ERP System
          </Typography>
          <Chip
            avatar={
              <Avatar>
                <PersonIcon />
              </Avatar>
            }
            label="Admin"
            variant="outlined"
            sx={{ color: "white", borderColor: "white" }}
          />
          <IconButton color="inherit" onClick={handleLogout}>
            <ExitToAppIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Toolbar />
        <List sx={{ width: 240 }}>
          {menuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton component={Link} to={item.path}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h4" mb={4}>
          Welcome to School ERP Dashboard
        </Typography>

        {/* Top Cards */}
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent align="center">
                <SchoolIcon sx={{ fontSize: 48 }} color="primary" />
                <Typography variant="h4">{students.length}</Typography>
                <Typography>Total Students</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card>
              <CardContent align="center">
                <PeopleIcon sx={{ fontSize: 48 }} color="secondary" />
                <Typography variant="h4">{staff.length}</Typography>
                <Typography>Total Staff</Typography>
              </CardContent>
            </Card>
          </Grid>

          <Grid item xs={12} md={3}>
            <Card>
              <CardContent align="center">
                <AssessmentIcon sx={{ fontSize: 48 }} color="success" />
                <Typography variant="h4">95%</Typography>
                <Typography>Attendance</Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* TOTAL ADMISSION */}
          <Grid item xs={12} md={3}>
            <Card>
              <CardContent align="center">
                <AccountBalanceIcon sx={{ fontSize: 48 }} color="warning" />
                <Typography variant="h4">{admissions.length}</Typography>
                <Typography>Total Admissions</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Recent Admissions */}
        <Box sx={{ mt: 5 }}>
          <Typography variant="h5" gutterBottom>
            Recent Admissions
          </Typography>

          <Card>
            <CardContent>
              {recentAdmissions.length === 0 ? (
                <Typography color="text.secondary">
                  No recent admissions found.
                </Typography>
              ) : (
                recentAdmissions.map((admission) => (
                  <Typography
                    key={admission._id}
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    • {admission.studentName} applied for{" "}
                    {admission.classApplying}
                  </Typography>
                ))
              )}
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}