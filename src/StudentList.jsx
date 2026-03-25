


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
//   Avatar,
//   Chip,
//   InputAdornment,
//   TablePagination,
//   MenuItem,
// } from "@mui/material";

// import {
//   Add,
//   Edit,
//   Delete,
//   Menu as MenuIcon,
//   School as SchoolIcon,
//   Person as PersonIcon,
//   Search as SearchIcon,
// } from "@mui/icons-material";

// import { Link } from "react-router-dom";

// export default function StudentList() {
//   const [students, setStudents] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [editing, setEditing] = useState(null);

//   // ✅ UPDATED FORM (WITH GENDER)
//   const [form, setForm] = useState({
//     name: "",
//     className: "",
//     seatNumber: "",
//     gender: "",
//   });

//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   /* ================= FETCH ================= */
//   const fetchStudents = async () => {
//     try {
//       const res = await axios.get(
//         "https://school-backend-6udp.onrender.com/api/students"
//       );

//       setStudents(Array.isArray(res.data) ? res.data : []);
//     } catch (err) {
//       console.error("Fetch students failed:", err);
//       setStudents([]);
//     }
//   };

//   /* ================= OPEN ================= */
//   const handleOpen = (student = null) => {
//     setEditing(student);

//     setForm(
//       student
//         ? {
//             name: student.name,
//             className: student.className,
//             seatNumber: student.seatNumber,
//             gender: student.gender || "",
//           }
//         : {
//             name: "",
//             className: "",
//             seatNumber: "",
//             gender: "",
//           }
//     );

//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setEditing(null);
//   };

//   /* ================= SAVE ================= */
//   const handleSubmit = async () => {
//     try {
//       // ✅ VALIDATION
//       if (!form.name || !form.className || !form.seatNumber || !form.gender) {
//         alert("All fields are required");
//         return;
//       }

//       const payload = {
//         name: form.name,
//         className: form.className,
//         seatNumber: Number(form.seatNumber),
//         gender: form.gender,
//       };

//       if (editing) {
//         await axios.put(
//           `https://school-backend-6udp.onrender.com/api/students/${editing._id}`,
//           payload
//         );
//       } else {
//         await axios.post(
//           "https://school-backend-6udp.onrender.com/api/students",
//           payload
//         );
//       }

//       fetchStudents();
//       handleClose();
//     } catch (err) {
//       console.error("Save student failed:", err.response?.data || err.message);
//       alert(err.response?.data?.message || "Something went wrong");
//     }
//   };

//   /* ================= DELETE ================= */
//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(
//         `https://school-backend-6udp.onrender.com/api/students/${id}`
//       );
//       fetchStudents();
//     } catch (err) {
//       console.error("Delete failed:", err);
//     }
//   };

//   /* ================= FILTER ================= */
//   const filteredStudents = students.filter(
//     (s) =>
//       s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       s.className.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       String(s.seatNumber).includes(searchTerm) ||
//       s.gender?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const paginatedStudents = filteredStudents.slice(
//     page * rowsPerPage,
//     page * rowsPerPage + rowsPerPage
//   );

//   return (
//     <Box sx={{ display: "flex" }}>
//       {/* HEADER */}
//       <AppBar position="fixed">
//         <Toolbar>
//           <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
//             <MenuIcon />
//           </IconButton>
//           <Typography sx={{ flexGrow: 1 }}>School ERP System</Typography>
//           <Chip
//             avatar={
//               <Avatar>
//                 <PersonIcon />
//               </Avatar>
//             }
//             label="Admin"
//             sx={{ color: "white" }}
//           />
//         </Toolbar>
//       </AppBar>

//       {/* DRAWER */}
//       <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
//         <Toolbar />
//         <List>
//           <ListItem disablePadding>
//             <ListItemButton component={Link} to="/students">
//               <ListItemIcon>
//                 <SchoolIcon />
//               </ListItemIcon>
//               <ListItemText primary="Students" />
//             </ListItemButton>
//           </ListItem>
//         </List>
//       </Drawer>

//       {/* MAIN */}
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <Toolbar />

//         {/* SEARCH + ADD */}
//         <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
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
//           />

//           <Fab color="primary" onClick={() => handleOpen()}>
//             <Add />
//           </Fab>
//         </Box>

//         {/* TABLE */}
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Name</TableCell>
//                 <TableCell>Class</TableCell>
//                 <TableCell>Seat No</TableCell>
//                 <TableCell>Gender</TableCell>
//                 <TableCell>Actions</TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {paginatedStudents.map((s) => (
//                 <TableRow key={s._id}>
//                   <TableCell>{s.name}</TableCell>
//                   <TableCell>{s.className}</TableCell>
//                   <TableCell>{s.seatNumber}</TableCell>
//                   <TableCell>
//                     <Chip label={s.gender} color="secondary" size="small" />
//                   </TableCell>

//                   <TableCell>
//                     <IconButton onClick={() => handleOpen(s)}>
//                       <Edit />
//                     </IconButton>

//                     <IconButton
//                       color="error"
//                       onClick={() => handleDelete(s._id)}
//                     >
//                       <Delete />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>

//           <TablePagination
//             component="div"
//             count={filteredStudents.length}
//             page={page}
//             onPageChange={(e, p) => setPage(p)}
//             rowsPerPage={rowsPerPage}
//             onRowsPerPageChange={(e) => {
//               setRowsPerPage(+e.target.value);
//               setPage(0);
//             }}
//           />
//         </TableContainer>

//         {/* DIALOG */}
//         <Dialog open={open} onClose={handleClose}>
//           <DialogTitle>
//             {editing ? "Edit Student" : "Add Student"}
//           </DialogTitle>

//           <DialogContent>
//             <TextField
//               label="Name"
//               fullWidth
//               margin="dense"
//               value={form.name}
//               onChange={(e) =>
//                 setForm({ ...form, name: e.target.value })
//               }
//             />

//             <TextField
//               label="Class"
//               fullWidth
//               margin="dense"
//               value={form.className}
//               onChange={(e) =>
//                 setForm({ ...form, className: e.target.value })
//               }
//             />

//             <TextField
//               label="Seat Number"
//               type="number"
//               fullWidth
//               margin="dense"
//               value={form.seatNumber}
//               onChange={(e) =>
//                 setForm({ ...form, seatNumber: e.target.value })
//               }
//             />

//             {/* ✅ GENDER FIELD */}
//             <TextField
//               select
//               label="Gender"
//               fullWidth
//               margin="dense"
//               value={form.gender}
//               onChange={(e) =>
//                 setForm({ ...form, gender: e.target.value })
//               }
//             >
//               <MenuItem value="">Select Gender</MenuItem>
//               <MenuItem value="boy">Boy</MenuItem>
//               <MenuItem value="girl">Girl</MenuItem>
//               {/* <MenuItem value="other">Other</MenuItem> */}
//             </TextField>
//           </DialogContent>

//           <DialogActions>
//             <Button onClick={handleClose}>Cancel</Button>

//             <Button variant="contained" onClick={handleSubmit}>
//               {editing ? "Update" : "Add"}
//             </Button>
//           </DialogActions>
//         </Dialog>
//       </Box>
//     </Box>
//   );
// }







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
//   Avatar,
//   Chip,
//   InputAdornment,
//   TablePagination,
//   MenuItem,
//   FormControl,
//   InputLabel,
//   Select,
// } from "@mui/material";

// import {
//   Add,
//   Edit,
//   Delete,
//   Menu as MenuIcon,
//   School as SchoolIcon,
//   Person as PersonIcon,
//   Search as SearchIcon,
// } from "@mui/icons-material";

// import { Link } from "react-router-dom";

// export default function StudentList() {
//   const [students, setStudents] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [editing, setEditing] = useState(null);

//   const [form, setForm] = useState({
//     name: "",
//     className: "",
//     seatNumber: "",
//     gender: "",
//   });

//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [searchTerm, setSearchTerm] = useState("");
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   const classOptions = [
//     "1st","2nd","3rd","4th","5th",
//     "6th","7th","8th","9th","10th",
//   ];

//   useEffect(() => {
//     fetchStudents();
//   }, []);

//   const fetchStudents = async () => {
//     try {
//       const res = await axios.get(
//         "https://school-backend-6udp.onrender.com/api/students"
//       );
//       setStudents(Array.isArray(res.data) ? res.data : []);
//     } catch (err) {
//       console.error("Fetch students failed:", err);
//       setStudents([]);
//     }
//   };

//   const handleOpen = (student = null) => {
//     setEditing(student);

//     setForm(
//       student
//         ? {
//             name: student.name || "",
//             className: student.className || "",
//             seatNumber: String(student.seatNumber || ""),
//             gender: student.gender || "",
//           }
//         : {
//             name: "",
//             className: "",
//             seatNumber: "",
//             gender: "",
//           }
//     );

//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setEditing(null);
//   };

//   const handleSubmit = async () => {
//     try {
//       console.log("FORM:", form);

//       if (
//         !form.name.trim() ||
//         !form.className ||
//         !form.seatNumber ||
//         !form.gender
//       ) {
//         alert("All fields are required");
//         return;
//       }

//       if (!/^\d+$/.test(form.seatNumber)) {
//         alert("Seat Number must be numeric");
//         return;
//       }

//       const payload = {
//         name: form.name.trim(),
//         className: form.className,
//         seatNumber: Number(form.seatNumber),
//         gender: form.gender,
//       };

//       console.log("PAYLOAD:", payload);

//       if (editing) {
//         await axios.put(
//           `https://school-backend-6udp.onrender.com/api/students/${editing._id}`,
//           payload
//         );
//       } else {
//         await axios.post(
//           " https://school-backend-6udp.onrender.com/api/students",
//           payload
//         );
//       }

//       fetchStudents();
//       handleClose();
//     } catch (err) {
//       console.error("Save student failed:", err.response?.data || err.message);
//       alert(err.response?.data?.message || "Something went wrong");
//     }
//   };

//   const handleDelete = async (id) => {
//     try {
//       await axios.delete(
//         `https://school-backend-6udp.onrender.com/api/students/${id}`
//       );
//       fetchStudents();
//     } catch (err) {
//       console.error("Delete failed:", err);
//     }
//   };

//   const filteredStudents = students.filter(
//     (s) =>
//       s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       s.className.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       String(s.seatNumber).includes(searchTerm) ||
//       s.gender?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const paginatedStudents = filteredStudents.slice(
//     page * rowsPerPage,
//     page * rowsPerPage + rowsPerPage
//   );

//   return (
//     <Box sx={{ display: "flex" }}>
//       {/* HEADER */}
//       <AppBar position="fixed">
//         <Toolbar>
//           <IconButton color="inherit" onClick={() => setDrawerOpen(true)}>
//             <MenuIcon />
//           </IconButton>
//           <Typography sx={{ flexGrow: 1 }}>School ERP System</Typography>
//           <Chip
//             avatar={<Avatar><PersonIcon /></Avatar>}
//             label="Admin"
//             sx={{ color: "white" }}
//           />
//         </Toolbar>
//       </AppBar>

//       {/* DRAWER */}
//       <Drawer open={drawerOpen} onClose={() => setDrawerOpen(false)}>
//         <Toolbar />
//         <List>
//           <ListItem disablePadding>
//             <ListItemButton component={Link} to="/students">
//               <ListItemIcon><SchoolIcon /></ListItemIcon>
//               <ListItemText primary="Students" />
//             </ListItemButton>
//           </ListItem>
//         </List>
//       </Drawer>

//       {/* MAIN */}
//       <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//         <Toolbar />

//         {/* SEARCH */}
//         <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
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
//           />
//           <Fab color="primary" onClick={() => handleOpen()}>
//             <Add />
//           </Fab>
//         </Box>

//         {/* TABLE */}
//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Name</TableCell>
//                 <TableCell>Class</TableCell>
//                 <TableCell>Seat No</TableCell>
//                 <TableCell>Gender</TableCell>
//                 <TableCell>Actions</TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {paginatedStudents.map((s) => (
//                 <TableRow key={s._id}>
//                   <TableCell>{s.name}</TableCell>
//                   <TableCell>{s.className}</TableCell>
//                   <TableCell>{s.seatNumber}</TableCell>
//                   <TableCell>
//                     <Chip label={s.gender} color="secondary" size="small" />
//                   </TableCell>
//                   <TableCell>
//                     <IconButton onClick={() => handleOpen(s)}>
//                       <Edit />
//                     </IconButton>
//                     <IconButton color="error" onClick={() => handleDelete(s._id)}>
//                       <Delete />
//                     </IconButton>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>

//           <TablePagination
//             component="div"
//             count={filteredStudents.length}
//             page={page}
//             onPageChange={(e, p) => setPage(p)}
//             rowsPerPage={rowsPerPage}
//             onRowsPerPageChange={(e) => {
//               setRowsPerPage(+e.target.value);
//               setPage(0);
//             }}
//           />
//         </TableContainer>

//         {/* DIALOG */}
//         <Dialog open={open} onClose={handleClose}>
//           <DialogTitle>
//             {editing ? "Edit Student" : "Add Student"}
//           </DialogTitle>

//           <DialogContent>

//             <TextField
//               label="Name"
//               fullWidth
//               margin="dense"
//               value={form.name}
//               onChange={(e) =>
//                 setForm((prev) => ({ ...prev, name: e.target.value }))
//               }
//             />

//             {/* CLASS */}
//             <FormControl fullWidth margin="dense">
//               <InputLabel>Class</InputLabel>
//               <Select
//                 value={form.className || ""}
//                 label="Class"
//                 onChange={(e) =>
//                   setForm((prev) => ({
//                     ...prev,
//                     className: e.target.value,
//                   }))
//                 }
//               >
//                 {classOptions.map((cls) => (
//                   <MenuItem key={cls} value={cls}>
//                     {cls}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>

//             {/* SEAT */}
//             <TextField
//               label="Seat Number"
//               fullWidth
//               margin="dense"
//               value={form.seatNumber}
//               onChange={(e) => {
//                 if (/^\d*$/.test(e.target.value)) {
//                   setForm((prev) => ({
//                     ...prev,
//                     seatNumber: e.target.value,
//                   }));
//                 }
//               }}
//             />

//             {/* GENDER */}
//             <FormControl fullWidth margin="dense">
//               <InputLabel>Gender</InputLabel>
//               <Select
//                 value={form.gender || ""}
//                 label="Gender"
//                 onChange={(e) =>
//                   setForm((prev) => ({
//                     ...prev,
//                     gender: e.target.value,
//                   }))
//                 }
//               >
//                 <MenuItem value="boy">Boy</MenuItem>
//                 <MenuItem value="girl">Girl</MenuItem>
//               </Select>
//             </FormControl>

//           </DialogContent>

//           <DialogActions>
//             <Button onClick={handleClose}>Cancel</Button>
//             <Button variant="contained" onClick={handleSubmit}>
//               {editing ? "Update" : "Add"}
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
  Avatar,
  Chip,
  InputAdornment,
  TablePagination,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Grid,
  Card,
  CardContent,
  CircularProgress,
  Skeleton,
  Alert,
  Snackbar,
  Tooltip,
  Zoom,
  Fade,
  useTheme,
  alpha,
} from "@mui/material";

import {
  Add,
  Edit,
  Delete,
  Menu as MenuIcon,
  School as SchoolIcon,
  Person as PersonIcon,
  Search as SearchIcon,
  Dashboard as DashboardIcon,
  PeopleAlt as PeopleAltIcon,
  DeleteSweep as DeleteSweepIcon,
  Close as CloseIcon,
} from "@mui/icons-material";

import { Link, useLocation } from "react-router-dom";

export default function StudentList() {
  const theme = useTheme();
  const location = useLocation();

  // Data states
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState(null);

  // Form state
  const [form, setForm] = useState({
    name: "",
    className: "",
    seatNumber: "",
    gender: "",
  });

  // UI states
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  // Delete confirmation
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [studentToDelete, setStudentToDelete] = useState(null);

  // Snackbar notification
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const classOptions = [
    "1st", "2nd", "3rd", "4th", "5th",
    "6th", "7th", "8th", "9th", "10th",
  ];

  // Fetch students
  const fetchStudents = async () => {
    setLoading(true);
    try {
      const res = await axios.get(
        "https://school-backend-6udp.onrender.com/api/students"
      );
      setStudents(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.error("Fetch students failed:", err);
      setSnackbar({
        open: true,
        message: "Failed to load students",
        severity: "error",
      });
      setStudents([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  const handleOpen = (student = null) => {
    setEditing(student);
    setForm(
      student
        ? {
            name: student.name || "",
            className: student.className || "",
            seatNumber: String(student.seatNumber || ""),
            gender: student.gender || "",
          }
        : {
            name: "",
            className: "",
            seatNumber: "",
            gender: "",
          }
    );
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditing(null);
  };

  const handleSubmit = async () => {
    // Validation
    if (!form.name.trim() || !form.className || !form.seatNumber || !form.gender) {
      setSnackbar({
        open: true,
        message: "All fields are required",
        severity: "warning",
      });
      return;
    }

    if (!/^\d+$/.test(form.seatNumber)) {
      setSnackbar({
        open: true,
        message: "Seat Number must be numeric",
        severity: "warning",
      });
      return;
    }

    const payload = {
      name: form.name.trim(),
      className: form.className,
      seatNumber: Number(form.seatNumber),
      gender: form.gender,
    };

    try {
      if (editing) {
        await axios.put(
          `https://school-backend-6udp.onrender.com/api/students/${editing._id}`,
          payload
        );
        setSnackbar({
          open: true,
          message: "Student updated successfully",
          severity: "success",
        });
      } else {
        await axios.post(
          "https://school-backend-6udp.onrender.com/api/students",
          payload
        );
        setSnackbar({
          open: true,
          message: "Student added successfully",
          severity: "success",
        });
      }
      fetchStudents();
      handleClose();
    } catch (err) {
      console.error("Save student failed:", err.response?.data || err.message);
      setSnackbar({
        open: true,
        message: err.response?.data?.message || "Something went wrong",
        severity: "error",
      });
    }
  };

  const handleDeleteClick = (student) => {
    setStudentToDelete(student);
    setConfirmOpen(true);
  };

  const handleDeleteConfirm = async () => {
    if (!studentToDelete) return;
    try {
      await axios.delete(
        `https://school-backend-6udp.onrender.com/api/students/${studentToDelete._id}`
      );
      setSnackbar({
        open: true,
        message: "Student deleted successfully",
        severity: "success",
      });
      fetchStudents();
    } catch (err) {
      console.error("Delete failed:", err);
      setSnackbar({
        open: true,
        message: "Failed to delete student",
        severity: "error",
      });
    } finally {
      setConfirmOpen(false);
      setStudentToDelete(null);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  // Filter and pagination
  const filteredStudents = students.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.className.toLowerCase().includes(searchTerm.toLowerCase()) ||
      String(s.seatNumber).includes(searchTerm) ||
      s.gender?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const paginatedStudents = filteredStudents.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  // Get gender color for chip
  const getGenderColor = (gender) => {
    return gender === "boy" ? "info" : "secondary";
  };

  // Stats
  const totalStudents = students.length;
  const totalBoys = students.filter(s => s.gender === "boy").length;
  const totalGirls = students.filter(s => s.gender === "girl").length;

  return (
    <Box sx={{ display: "flex", bgcolor: "#f5f7fb", minHeight: "100vh" }}>
      {/* App Bar with Gradient */}
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.primary.dark} 100%)`,
          backdropFilter: "blur(10px)",
        }}
      >
        <Toolbar>
          <IconButton color="inherit" onClick={() => setDrawerOpen(true)} edge="start">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 600, letterSpacing: 1 }}>
            📚 SchoolERP
          </Typography>
          <Tooltip title="Admin Profile">
            <Chip
              avatar={
                <Avatar sx={{ bgcolor: alpha(theme.palette.common.white, 0.2) }}>
                  <PersonIcon />
                </Avatar>
              }
              label="Admin"
              sx={{
                color: "white",
                bgcolor: alpha(theme.palette.common.white, 0.15),
                "&:hover": { bgcolor: alpha(theme.palette.common.white, 0.25) },
              }}
            />
          </Tooltip>
        </Toolbar>
      </AppBar>

      {/* Modern Drawer */}
      <Drawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: 280,
            background: `linear-gradient(180deg, ${theme.palette.background.paper} 0%, ${theme.palette.grey[50]} 100%)`,
            borderRight: `1px solid ${theme.palette.divider}`,
          },
        }}
      >
        <Toolbar />
        <Box sx={{ p: 3, textAlign: "center", mb: 2 }}>
          <SchoolIcon sx={{ fontSize: 48, color: theme.palette.primary.main, mb: 1 }} />
          <Typography variant="h6" fontWeight={600}>
            School Manager
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Student Management System
          </Typography>
        </Box>
        <List>
          <ListItem disablePadding>
            <ListItemButton
              component={Link}
              to="/students"
              selected={location.pathname === "/students"}
              sx={{
                borderRadius: 2,
                mx: 1,
                mb: 0.5,
                "&.Mui-selected": {
                  bgcolor: alpha(theme.palette.primary.main, 0.1),
                  "&:hover": { bgcolor: alpha(theme.palette.primary.main, 0.15) },
                },
              }}
            >
              <ListItemIcon>
                <SchoolIcon color={location.pathname === "/students" ? "primary" : "action"} />
              </ListItemIcon>
              <ListItemText primary="Students" primaryTypographyProps={{ fontWeight: 500 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />

        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={0} sx={{ borderRadius: 4, background: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Box>
                    <Typography color="textSecondary" variant="body2" gutterBottom>
                      Total Students
                    </Typography>
                    <Typography variant="h4" fontWeight={700}>
                      {totalStudents}
                    </Typography>
                  </Box>
                  <Avatar sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1), color: theme.palette.primary.main }}>
                    <PeopleAltIcon />
                  </Avatar>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={0} sx={{ borderRadius: 4, background: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Box>
                    <Typography color="textSecondary" variant="body2" gutterBottom>
                      Boys
                    </Typography>
                    <Typography variant="h4" fontWeight={700}>
                      {totalBoys}
                    </Typography>
                  </Box>
                  <Avatar sx={{ bgcolor: alpha(theme.palette.info.main, 0.1), color: theme.palette.info.main }}>
                    <PersonIcon />
                  </Avatar>
                </Box>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Card elevation={0} sx={{ borderRadius: 4, background: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}>
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <Box>
                    <Typography color="textSecondary" variant="body2" gutterBottom>
                      Girls
                    </Typography>
                    <Typography variant="h4" fontWeight={700}>
                      {totalGirls}
                    </Typography>
                  </Box>
                  <Avatar sx={{ bgcolor: alpha(theme.palette.secondary.main, 0.1), color: theme.palette.secondary.main }}>
                    <PersonIcon />
                  </Avatar>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        </Grid>

        {/* Search & Add Button */}
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 3 }}>
          <TextField
            placeholder="Search by name, class, seat or gender..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            variant="outlined"
            size="small"
            sx={{ width: { xs: "100%", sm: 300 }, bgcolor: "white", borderRadius: 2 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon color="action" />
                </InputAdornment>
              ),
              sx: { borderRadius: 3 },
            }}
          />
          <Tooltip title="Add New Student" TransitionComponent={Zoom}>
            <Fab
              color="primary"
              onClick={() => handleOpen()}
              sx={{
                boxShadow: "0 8px 20px rgba(0,0,0,0.1)",
                "&:hover": { transform: "scale(1.05)", transition: "transform 0.2s" },
              }}
            >
              <Add />
            </Fab>
          </Tooltip>
        </Box>

        {/* Students Table */}
        <TableContainer
          component={Paper}
          elevation={0}
          sx={{ borderRadius: 4, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
        >
          <Table>
            <TableHead sx={{ bgcolor: theme.palette.grey[50] }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 700 }}>Student</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Class</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Seat No</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Gender</TableCell>
                <TableCell sx={{ fontWeight: 700 }} align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {loading ? (
                // Loading skeletons
                [...Array(rowsPerPage)].map((_, idx) => (
                  <TableRow key={idx}>
                    <TableCell><Skeleton variant="text" width={150} /></TableCell>
                    <TableCell><Skeleton variant="text" width={80} /></TableCell>
                    <TableCell><Skeleton variant="text" width={60} /></TableCell>
                    <TableCell><Skeleton variant="rounded" width={60} height={24} /></TableCell>
                    <TableCell><Skeleton variant="circular" width={32} height={32} sx={{ mr: 1 }} /><Skeleton variant="circular" width={32} height={32} /></TableCell>
                  </TableRow>
                ))
              ) : paginatedStudents.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} align="center" sx={{ py: 6 }}>
                    <Typography variant="body1" color="text.secondary">
                      No students found
                    </Typography>
                  </TableCell>
                </TableRow>
              ) : (
                paginatedStudents.map((student) => (
                  <TableRow
                    key={student._id}
                    sx={{
                      "&:hover": { bgcolor: alpha(theme.palette.primary.main, 0.02) },
                      transition: "background-color 0.2s",
                    }}
                  >
                    <TableCell>
                      <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
                        <Avatar
                          sx={{
                            bgcolor: alpha(theme.palette.primary.main, 0.1),
                            color: theme.palette.primary.main,
                            width: 36,
                            height: 36,
                          }}
                        >
                          {student.name.charAt(0).toUpperCase()}
                        </Avatar>
                        <Typography fontWeight={500}>{student.name}</Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={student.className}
                        size="small"
                        variant="outlined"
                        sx={{ borderRadius: 2, fontWeight: 500 }}
                      />
                    </TableCell>
                    <TableCell>{student.seatNumber}</TableCell>
                    <TableCell>
                      <Chip
                        label={student.gender === "boy" ? "Boy" : "Girl"}
                        size="small"
                        color={getGenderColor(student.gender)}
                        sx={{ borderRadius: 2, fontWeight: 500 }}
                      />
                    </TableCell>
                    <TableCell align="center">
                      <Tooltip title="Edit">
                        <IconButton onClick={() => handleOpen(student)} size="small" sx={{ mr: 1 }}>
                          <Edit fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton onClick={() => handleDeleteClick(student)} size="small" color="error">
                          <Delete fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>
                ))
              )}
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
            sx={{ borderTop: `1px solid ${theme.palette.divider}` }}
          />
        </TableContainer>

        {/* Add/Edit Dialog */}
        <Dialog
          open={open}
          onClose={handleClose}
          maxWidth="sm"
          fullWidth
          TransitionComponent={Fade}
          PaperProps={{ sx: { borderRadius: 4, p: 1 } }}
        >
          <DialogTitle sx={{ fontWeight: 700, pb: 1 }}>
            {editing ? "✏️ Edit Student" : "➕ Add New Student"}
          </DialogTitle>
          <DialogContent>
            <TextField
              label="Full Name"
              fullWidth
              margin="dense"
              value={form.name}
              onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
              variant="outlined"
              sx={{ mb: 2 }}
              InputProps={{ sx: { borderRadius: 2 } }}
            />
            <FormControl fullWidth margin="dense" sx={{ mb: 2 }}>
              <InputLabel>Class</InputLabel>
              <Select
                value={form.className || ""}
                label="Class"
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, className: e.target.value }))
                }
                sx={{ borderRadius: 2 }}
              >
                {classOptions.map((cls) => (
                  <MenuItem key={cls} value={cls}>
                    {cls}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Seat Number"
              fullWidth
              margin="dense"
              value={form.seatNumber}
              onChange={(e) => {
                if (/^\d*$/.test(e.target.value)) {
                  setForm((prev) => ({ ...prev, seatNumber: e.target.value }));
                }
              }}
              variant="outlined"
              sx={{ mb: 2 }}
              InputProps={{ sx: { borderRadius: 2 } }}
            />
            <FormControl fullWidth margin="dense">
              <InputLabel>Gender</InputLabel>
              <Select
                value={form.gender || ""}
                label="Gender"
                onChange={(e) =>
                  setForm((prev) => ({ ...prev, gender: e.target.value }))
                }
                sx={{ borderRadius: 2 }}
              >
                <MenuItem value="boy">Boy</MenuItem>
                <MenuItem value="girl">Girl</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 2 }}>
            <Button onClick={handleClose} variant="outlined" sx={{ borderRadius: 2 }}>
              Cancel
            </Button>
            <Button onClick={handleSubmit} variant="contained" sx={{ borderRadius: 2, px: 3 }}>
              {editing ? "Update" : "Add"}
            </Button>
          </DialogActions>
        </Dialog>

        {/* Delete Confirmation Dialog */}
        <Dialog
          open={confirmOpen}
          onClose={() => setConfirmOpen(false)}
          maxWidth="xs"
          PaperProps={{ sx: { borderRadius: 4, textAlign: "center", p: 1 } }}
        >
          <DialogTitle sx={{ fontWeight: 700, pb: 1 }}>Confirm Delete</DialogTitle>
          <DialogContent>
            <Typography>
              Are you sure you want to delete <strong>{studentToDelete?.name}</strong>?
              This action cannot be undone.
            </Typography>
          </DialogContent>
          <DialogActions sx={{ justifyContent: "center", pb: 3 }}>
            <Button onClick={() => setConfirmOpen(false)} variant="outlined" sx={{ borderRadius: 2 }}>
              Cancel
            </Button>
            <Button onClick={handleDeleteConfirm} color="error" variant="contained" sx={{ borderRadius: 2 }}>
              Delete
            </Button>
          </DialogActions>
        </Dialog>

        {/* Snackbar Notifications */}
        <Snackbar
          open={snackbar.open}
          autoHideDuration={4000}
          onClose={handleSnackbarClose}
          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        >
          <Alert
            onClose={handleSnackbarClose}
            severity={snackbar.severity}
            variant="filled"
            sx={{ width: "100%", borderRadius: 2 }}
            elevation={6}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
}