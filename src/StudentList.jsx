// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import {
//   Box,
//   Typography,
//   Table,
//   TableBody,
//   TableCell,
//   TableContainer,
//   TableHead,
//   TableRow,
//   Paper,
//   Button,
//   Dialog,
//   DialogActions,
//   DialogContent,
//   DialogTitle,
//   TextField,
//   IconButton,
//   Fab,
//   AppBar,
//   Toolbar,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   Divider,
//   Avatar,
//   Chip,
//   InputAdornment,
//   TablePagination,
// } from "@mui/material";
// import {
//   Add,
//   Edit,
//   Delete,
//   Menu as MenuIcon,
//   Dashboard as DashboardIcon,
//   People as PeopleIcon,
//   School as SchoolIcon,
//   AccountBalance as AccountBalanceIcon,
//   Assessment as AssessmentIcon,
//   ExitToApp as ExitToAppIcon,
//   Person as PersonIcon,
//   Search as SearchIcon,
// } from "@mui/icons-material";
// import { Link, useNavigate } from "react-router-dom";

// export default function StudentList() {
//   const [students, setStudents] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [editing, setEditing] = useState(null);
//   const [form, setForm] = useState({ name: "", className: "", rollNo: "" });
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     try {
//       const res = await axios.get("/api/students");
//       setStudents(res.data);
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleOpen = (student = null) => {
//     setEditing(student);
//     setForm(
//       student
//         ? {
//             name: student.name,
//             className: student.className,
//             rollNo: student.rollNo,
//           }
//         : { name: "", className: "", rollNo: "" },
//     );
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setEditing(null);
//   };

//   const handleSubmit = async () => {
//     try {
//       if (editing) {
//         await axios.put(`/api/students/${editing._id}`, form);
//       } else {
//         await axios.post("http://localhost:8080/api/students", form);
//       }
//       fetchStudents();
//       handleClose();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(`/api/students/${id}`);
//       fetchStudents();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const handleLogout = () => {
//     window.location.reload();
//   };

//   const filteredStudents = students.filter(
//     (student) =>
//       student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       student.className.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       student.rollNo.toLowerCase().includes(searchTerm.toLowerCase()),
//   );

//   const paginatedStudents = filteredStudents.slice(
//     page * rowsPerPage,
//     page * rowsPerPage + rowsPerPage,
//   );

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
//         <Typography variant="h4" gutterBottom sx={{ mb: 3 }}>
//           Student Management
//         </Typography>

//         {/* Search and Add Button */}
//         <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
//           <TextField
//             placeholder="Search students..."
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <SearchIcon />
//                 </InputAdornment>
//               ),
//             }}
//             sx={{ width: 300 }}
//           />
//           <Fab color="primary" aria-label="add" onClick={() => handleOpen()}>
//             <Add />
//           </Fab>
//         </Box>

//         {/* Students Table */}
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow sx={{ backgroundColor: "grey.100" }}>
//                 <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Class</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Roll No</TableCell>
//                 <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               {paginatedStudents.map((student) => (
//                 <TableRow key={student._id} hover>
//                   <TableCell>{student.name}</TableCell>
//                   <TableCell>{student.className}</TableCell>
//                   <TableCell>{student.rollNo}</TableCell>
//                   <TableCell>
//                     <IconButton
//                       color="primary"
//                       onClick={() => handleOpen(student)}
//                     >
//                       <Edit />
//                     </IconButton>
//                     <IconButton
//                       color="error"
//                       onClick={() => handleDelete(student._id)}
//                     >
//                       <Delete />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//           <TablePagination
//             rowsPerPageOptions={[5, 10, 25]}
//             component="div"
//             count={filteredStudents.length}
//             rowsPerPage={rowsPerPage}
//             page={page}
//             onPageChange={(event, newPage) => setPage(newPage)}
//             onRowsPerPageChange={(event) => {
//               setRowsPerPage(parseInt(event.target.value, 10));
//               setPage(0);
//             }}
//           />
//         </TableContainer>

//         {/* Add/Edit Dialog */}
//         <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
//           <DialogTitle>
//             {editing ? "Edit Student" : "Add New Student"}
//           </DialogTitle>
//           <DialogContent>
//             <TextField
//               autoFocus
//               margin="dense"
//               label="Student Name"
//               fullWidth
//               value={form.name}
//               onChange={(e) => setForm({ ...form, name: e.target.value })}
//               variant="outlined"
//             />
//             <TextField
//               margin="dense"
//               label="Class"
//               fullWidth
//               value={form.className}
//               onChange={(e) => setForm({ ...form, className: e.target.value })}
//               variant="outlined"
//             />
//             <TextField
//               margin="dense"
//               label="Roll Number"
//               fullWidth
//               value={form.rollNo}
//               onChange={(e) => setForm({ ...form, rollNo: e.target.value })}
//               variant="outlined"
//             />
//           </DialogContent>
//           <DialogActions>
//             <Button onClick={handleClose} color="inherit">
//               Cancel
//             </Button>
//             <Button onClick={handleSubmit} variant="contained">
//               {editing ? "Update" : "Add"} Student
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </Box>
//     </Box>
//   );
// }








import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  IconButton,
  Fab,
  AppBar,
  Toolbar,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Avatar,
  Chip,
  InputAdornment,
  TablePagination,
} from "@mui/material";
import {
  Add,
  Edit,
  Delete,
  Menu as MenuIcon,
  Dashboard as DashboardIcon,
  People as PeopleIcon,
  School as SchoolIcon,
  AccountBalance as AccountBalanceIcon,
  Assessment as AssessmentIcon,
  ExitToApp as ExitToAppIcon,
  Person as PersonIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function StudentList() {
  const [students, setStudents] = useState([]);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  // ✅ MATCH BACKEND SCHEMA
  const [form, setForm] = useState({
    name: "",
    className: "",
    seatNumber: "",
  });

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  useEffect(() => {
    fetchStudents();
  }, []);

  /* ================= FETCH ================= */
  const fetchStudents = async () => {
    try {
      const res = await axios.get("http://localhost:8080/api/students");

      // ✅ Backend returns ARRAY
      setStudents(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Fetch students failed:", err);
      setStudents([]);
    }
  };

  /* ================= OPEN DIALOG ================= */
  const handleOpen = (student = null) => {
    setEditing(student);
    setForm(
      student
        ? {
            name: student.name,
            className: student.className,
            seatNumber: student.seatNumber,
          }
        : { name: "", className: "", seatNumber: "" }
    );
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditing(null);
  };

  /* ================= SAVE ================= */
  const handleSubmit = async () => {
    try {
      const payload = {
        name: form.name,
        className: form.className,
        seatNumber: Number(form.seatNumber), // ✅ MUST BE NUMBER
      };

      if (editing) {
        await axios.put(`http://localhost:8080/api/students/${editing._id}`, payload);
      } else {
        await axios.post("http://localhost:8080/api/students", payload);
      }

      fetchStudents();
      handleClose();
    } catch (err) {
      console.error("Save student failed:", err.response?.data || err.message);
      alert(err.response?.data?.message || "Something went wrong");
    }
  };

  /* ================= DELETE ================= */
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/students/${id}`);
      fetchStudents();
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  /* ================= FILTER ================= */
  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.className.toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(s.seatNumber).includes(searchTerm)
  );

  const paginatedStudents = filteredStudents.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  /* ================= UI ================= */
  return (
    <Box sx={{ display: "flex" }}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
            <MenuIcon />
          </IconButton>
          <Typography sx={{ flexGrow: 1 }}>School ERP System</Typography>
          <Chip
            avatar={<Avatar><PersonIcon /></Avatar>}
            label="Admin"
            sx={{ color: "white" }}
          />
        </Toolbar>
      </AppBar>

      <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
        <Toolbar />
        <List>
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/students">
              <ListItemIcon><SchoolIcon /></ListItemIcon>
              <ListItemText primary="Students" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <TextField
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
          />
          <Fab color="primary" onClick={() => handleOpen()}>
            <Add />
          </Fab>
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Class</TableCell>
                <TableCell>Seat No</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {paginatedStudents.map((s) => (
                <TableRow key={s._id}>
                  <TableCell>{s.name}</TableCell>
                  <TableCell>{s.className}</TableCell>
                  <TableCell>{s.seatNumber}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleOpen(s)}><Edit /></IconButton>
                    <IconButton color="error" onClick={() => handleDelete(s._id)}><Delete /></IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <TablePagination
            component="div"
            count={filteredStudents.length}
            page={page}
            onPageChange={(e, p) => setPage(p)}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={(e) => {
              setRowsPerPage(+e.target.value);
              setPage(0);
            }}
          />
        </TableContainer>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>{editing ? "Edit Student" : "Add Student"}</DialogTitle>
          <DialogContent>
            <TextField label="Name" fullWidth margin="dense"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <TextField label="Class" fullWidth margin="dense"
              value={form.className}
              onChange={(e) => setForm({ ...form, className: e.target.value })}
            />
            <TextField label="Seat Number" type="number" fullWidth margin="dense"
              value={form.seatNumber}
              onChange={(e) => setForm({ ...form, seatNumber: e.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button variant="contained" onClick={handleSubmit}>
              {editing ? "Update" : "Add"}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  );
}