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
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function Dashboard() {
  const [students, setStudents] = useState([]);
  const [staff, setStaff] = useState([]);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/students").then((res) => setStudents(res.data));
    axios.get("/api/staff").then((res) => setStaff(res.data));
  }, []);

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

  return (
    <Box sx={{ display: "flex" }}>
      {/* App Bar */}
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
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
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            School ERP System
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
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
          </Box>
        </Toolbar>
      </AppBar>

      {/* Sidebar */}
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        sx={{
          width: 240,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto" }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.path}
                  onClick={() => setDrawerOpen(false)}
                >
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Typography variant="h4" gutterBottom sx={{ mb: 4 }}>
          Welcome to School ERP Dashboard
        </Typography>

        <Grid container spacing={3}>
          {/* Students Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: "100%" }}>
              <CardContent sx={{ textAlign: "center" }}>
                <SchoolIcon
                  sx={{ fontSize: 48, color: "primary.main", mb: 2 }}
                />
                <Typography variant="h4" color="primary">
                  {students.length}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Total Students
                </Typography>
                <Button
                  component={Link}
                  to="/students"
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Manage Students
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Staff Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: "100%" }}>
              <CardContent sx={{ textAlign: "center" }}>
                <PeopleIcon
                  sx={{ fontSize: 48, color: "secondary.main", mb: 2 }}
                />
                <Typography variant="h4" color="secondary">
                  {staff.length}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Total Staff
                </Typography>
                <Button
                  component={Link}
                  to="/staff"
                  variant="contained"
                  fullWidth
                  sx={{ mt: 2 }}
                >
                  Manage Staff
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Attendance Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: "100%" }}>
              <CardContent sx={{ textAlign: "center" }}>
                <AssessmentIcon
                  sx={{ fontSize: 48, color: "success.main", mb: 2 }}
                />
                <Typography variant="h4" color="success">
                  95%
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Attendance Rate
                </Typography>
                <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                  View Attendance
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {/* Payments Card */}
          <Grid item xs={12} sm={6} md={3}>
            <Card sx={{ height: "100%" }}>
              <CardContent sx={{ textAlign: "center" }}>
                <AccountBalanceIcon
                  sx={{ fontSize: 48, color: "warning.main", mb: 2 }}
                />
                <Typography variant="h4" color="warning">
                  $12,500
                </Typography>
                <Typography variant="h6" gutterBottom>
                  Pending Payments
                </Typography>
                <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                  Manage Payments
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Recent Activity Section */}
        <Box sx={{ mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Recent Activity
          </Typography>
          <Card>
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                • New student John Doe enrolled in Class 10-A
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Teacher Sarah Johnson marked attendance for Class 9-B
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Payment received from Parent of Emma Wilson
              </Typography>
              <Typography variant="body2" color="text.secondary">
                • Staff meeting scheduled for tomorrow
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Box>
  );
}
