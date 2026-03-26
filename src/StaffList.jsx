
// import React, { useEffect, useState } from "react";
// import {
//   Container,
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
//   DialogTitle,
//   DialogContent,
//   DialogActions,
//   TextField,
//   IconButton,
//   AppBar,
//   Toolbar,
//   Box,
//   Alert,
// } from "@mui/material";
// import { Edit, Delete, Add } from "@mui/icons-material";
// import { Link } from "react-router-dom";
// import axios from "axios";

// export default function StaffList() {
//   const [staff, setStaff] = useState([]);
//   const [open, setOpen] = useState(false);
//   const [editingStaff, setEditingStaff] = useState(null);
//   const [errorMsg, setErrorMsg] = useState("");
//   const [successMsg, setSuccessMsg] = useState("");
//   const [loading, setLoading] = useState(false);

//   const [formData, setFormData] = useState({
//     name: "",
//     designation: "",
//     email: "",
//     phone: "",
//   });

//   /* ================= FETCH STAFF ================= */
//   const fetchStaff = async () => {
//     try {
//       const res = await axios.get("https://school-backend-6udp.onrender.com/api/staff");
//       setStaff(Array.isArray(res.data) ? res.data : []);
//     } catch (error) {
//       console.error("Error fetching staff:", error);
//       setStaff([]);
//     }
//   };

//   useEffect(() => {
//     fetchStaff();
//   }, []);

//   /* ================= OPEN MODAL ================= */
//   const handleOpen = (staffMember = null) => {
//     setErrorMsg("");

//     if (staffMember) {
//       setEditingStaff(staffMember);
//       setFormData({
//         name: staffMember.name,
//         designation: staffMember.designation,
//         email: staffMember.email,
//         phone: staffMember.phone,
//       });
//     } else {
//       setEditingStaff(null);
//       setFormData({
//         name: "",
//         designation: "",
//         email: "",
//         phone: "",
//       });
//     }
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//     setEditingStaff(null);
//     setErrorMsg("");
//     setSuccessMsg("");
//   };

//   /* ================= SAVE STAFF ================= */
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setErrorMsg("");
//     setLoading(true);

//     try {
//       // Use localhost for both - make it consistent
//       const apiUrl = "https://school-backend-6udp.onrender.com/api/staff";
      
//       if (editingStaff) {
//         await axios.put(`${apiUrl}/${editingStaff._id}`, formData);
//       } else {
//         await axios.post(apiUrl, formData);
//       }

//       // Show success message
//       setSuccessMsg(editingStaff ? "Staff updated successfully!" : "Staff added successfully!");
      
//       // Refresh list and close modal after a short delay
//       setTimeout(() => {
//         fetchStaff();
//         handleClose();
//       }, 1000);
//     } catch (error) {
//       if (error.response) {
//         // Handle known backend errors
//         if (error.response.status === 409) {
//           setErrorMsg(error.response.data.message);
//         } else if (error.response.status === 400) {
//           setErrorMsg(error.response.data.message);
//         } else {
//           setErrorMsg("Something went wrong. Please try again.");
//         }
//       } else {
//         setErrorMsg("Server not reachable. Make sure backend is running on port 8080.");
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* ================= DELETE STAFF ================= */
//   const handleDelete = async (id) => {
//     if (!window.confirm("Are you sure you want to delete this staff member?")) return;

//     try {
//       await axios.delete(`https://school-backend-6udp.onrender.com/api/staff/${id}`);
//       fetchStaff();
//     } catch (error) {
//       console.error("Error deleting staff:", error);
//     }
//   };

//   /* ================= UI ================= */
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             Staff Management
//           </Typography>
//           <Button component={Link} to="/" color="inherit">
//             Dashboard
//           </Button>
//         </Toolbar>
//       </AppBar>

//       <Container maxWidth="lg" sx={{ mt: 4 }}>
//         <Box display="flex" justifyContent="space-between" mb={3}>
//           <Typography variant="h4">Staff List</Typography>
//           <Button variant="contained" startIcon={<Add />} onClick={() => handleOpen()}>
//             Add Staff
//           </Button>
//         </Box>

//         <TableContainer component={Paper}>
//           <Table>
//             <TableHead>
//               <TableRow>
//                 <TableCell>Name</TableCell>
//                 <TableCell>Designation</TableCell>
//                 <TableCell>Email</TableCell>
//                 <TableCell>Phone</TableCell>
//                 <TableCell>Actions</TableCell>
//               </TableRow>
//             </TableHead>

//             <TableBody>
//               {staff.length > 0 ? (
//                 staff.map((member) => (
//                   <TableRow key={member._id}>
//                     <TableCell>{member.name}</TableCell>
//                     <TableCell>{member.designation}</TableCell>
//                     <TableCell>{member.email}</TableCell>
//                     <TableCell>{member.phone}</TableCell>
//                     <TableCell>
//                       <IconButton onClick={() => handleOpen(member)} color="primary">
//                         <Edit />
//                       </IconButton>
//                       <IconButton
//                         onClick={() => handleDelete(member._id)}
//                         color="error"
//                       >
//                         <Delete />
//                       </IconButton>
//                     </TableCell>
//                   </TableRow>
//                 ))
//               ) : (
//                 <TableRow>
//                   <TableCell colSpan={5} align="center">
//                     No staff found
//                   </TableCell>
//                 </TableRow>
//               )}
//             </TableBody>
//           </Table>
//         </TableContainer>

//         {/* ================= MODAL ================= */}
//         <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
//           <DialogTitle>{editingStaff ? "Edit Staff" : "Add Staff"}</DialogTitle>

//           <form onSubmit={handleSubmit}>
//             <DialogContent>
//               {errorMsg && (
//                 <Alert severity="error" sx={{ mb: 2 }}>
//                   {errorMsg}
//                 </Alert>
//               )}
//               {successMsg && (
//                 <Alert severity="success" sx={{ mb: 2 }}>
//                   {successMsg}
//                 </Alert>
//               )}

//               <TextField
//                 label="Name"
//                 fullWidth
//                 margin="dense"
//                 required
//                 value={formData.name}
//                 onChange={(e) => setFormData({ ...formData, name: e.target.value })}
//               />

//               <TextField
//                 label="Designation"
//                 fullWidth
//                 margin="dense"
//                 required
//                 value={formData.designation}
//                 onChange={(e) =>
//                   setFormData({ ...formData, designation: e.target.value })
//                 }
//               />

//               <TextField
//                 label="Email"
//                 type="email"
//                 fullWidth
//                 margin="dense"
//                 required
//                 disabled={Boolean(editingStaff)} // ✅ prevent email change
//                 value={formData.email}
//                 onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//               />

//               <TextField
//                 label="Phone"
//                 fullWidth
//                 margin="dense"
//                 required
//                 value={formData.phone}
//                 onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
//               />
//             </DialogContent>

//             <DialogActions>
//               <Button onClick={handleClose}>Cancel</Button>
//               <Button type="submit" variant="contained" disabled={loading}>
//                 {loading ? "Saving..." : editingStaff ? "Update" : "Add"}
//               </Button>
//             </DialogActions>
//           </form>
//         </Dialog>
//       </Container>
//     </Box>
//   );
// }











import React, { useEffect, useState, useMemo } from "react";
import {
  Container,
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
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  AppBar,
  Toolbar,
  Box,
  Snackbar,
  Alert,
  InputAdornment,
  Skeleton,
  TablePagination,
  Chip,
  Avatar,
  useMediaQuery,
  useTheme,
  Fade,
  Grow,
} from "@mui/material";
import {
  Edit,
  Delete,
  Add,
  Search,
  Person,
  Email,
  Phone,
  Close,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import axios from "axios";

export default function StaffList() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [staff, setStaff] = useState([]);
  const [open, setOpen] = useState(false);
  const [editingStaff, setEditingStaff] = useState(null);
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const [initialLoading, setInitialLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const [formData, setFormData] = useState({
    name: "",
    designation: "",
    email: "",
    phone: "",
  });

  // Snackbar state
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  /* ================= FETCH STAFF ================= */
  const fetchStaff = async () => {
    try {
      const res = await axios.get("https://school-backend-6udp.onrender.com/api/staff");
      setStaff(Array.isArray(res.data) ? res.data : []);
    } catch (error) {
      console.error("Error fetching staff:", error);
      setStaff([]);
      setSnackbar({
        open: true,
        message: "Failed to load staff data",
        severity: "error",
      });
    } finally {
      setInitialLoading(false);
    }
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  /* ================= SEARCH FILTER ================= */
  const filteredStaff = useMemo(() => {
    if (!searchTerm.trim()) return staff;
    const term = searchTerm.toLowerCase();
    return staff.filter(
      (member) =>
        member.name.toLowerCase().includes(term) ||
        member.designation.toLowerCase().includes(term) ||
        member.email.toLowerCase().includes(term) ||
        member.phone.includes(term)
    );
  }, [staff, searchTerm]);

  /* ================= PAGINATION ================= */
  const paginatedStaff = useMemo(() => {
    return filteredStaff.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  }, [filteredStaff, page, rowsPerPage]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  /* ================= OPEN MODAL ================= */
  const handleOpen = (staffMember = null) => {
    setErrorMsg("");
    setSuccessMsg("");

    if (staffMember) {
      setEditingStaff(staffMember);
      setFormData({
        name: staffMember.name,
        designation: staffMember.designation,
        email: staffMember.email,
        phone: staffMember.phone,
      });
    } else {
      setEditingStaff(null);
      setFormData({
        name: "",
        designation: "",
        email: "",
        phone: "",
      });
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingStaff(null);
    setErrorMsg("");
    setSuccessMsg("");
  };

  /* ================= SAVE STAFF ================= */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    try {
      const apiUrl = "https://school-backend-6udp.onrender.com/api/staff";

      if (editingStaff) {
        await axios.put(`${apiUrl}/${editingStaff._id}`, formData);
        setSnackbar({
          open: true,
          message: "Staff updated successfully!",
          severity: "success",
        });
      } else {
        await axios.post(apiUrl, formData);
        setSnackbar({
          open: true,
          message: "Staff added successfully!",
          severity: "success",
        });
      }

      fetchStaff();
      handleClose();
    } catch (error) {
      let msg = "Something went wrong. Please try again.";
      if (error.response) {
        if (error.response.status === 409 || error.response.status === 400) {
          msg = error.response.data.message;
        }
      } else {
        msg = "Server not reachable. Please try again later.";
      }
      setErrorMsg(msg);
      setSnackbar({
        open: true,
        message: msg,
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  /* ================= DELETE STAFF ================= */
  const handleDelete = async (id, name) => {
    if (!window.confirm(`Are you sure you want to delete ${name}?`)) return;

    try {
      await axios.delete(`https://school-backend-6udp.onrender.com/api/staff/${id}`);
      setSnackbar({
        open: true,
        message: "Staff deleted successfully!",
        severity: "success",
      });
      fetchStaff();
    } catch (error) {
      console.error("Error deleting staff:", error);
      setSnackbar({
        open: true,
        message: "Failed to delete staff member.",
        severity: "error",
      });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  /* ================= RENDER LOADING SKELETON ================= */
  const renderSkeletonRows = () => {
    return Array.from(new Array(rowsPerPage)).map((_, idx) => (
      <TableRow key={idx}>
        <TableCell>
          <Skeleton variant="circular" width={40} height={40} />
        </TableCell>
        <TableCell>
          <Skeleton variant="text" width="80%" />
        </TableCell>
        <TableCell>
          <Skeleton variant="text" width="60%" />
        </TableCell>
        <TableCell>
          <Skeleton variant="text" width="70%" />
        </TableCell>
        <TableCell>
          <Skeleton variant="text" width="50%" />
        </TableCell>
        <TableCell>
          <Skeleton variant="rectangular" width={80} height={30} />
        </TableCell>
      </TableRow>
    ));
  };

  /* ================= UI ================= */
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "#f5f7fa", minHeight: "100vh" }}>
      {/* AppBar with Gradient */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              fontWeight: 600,
              letterSpacing: "0.5px",
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Person fontSize="large" />
            Staff Management
          </Typography>
          <Button component={Link} to="/" color="inherit" sx={{ fontWeight: 500 }}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        {/* Header Section */}
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: isMobile ? "stretch" : "center",
            mb: 4,
            gap: 2,
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            sx={{
              fontWeight: 700,
              background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
            }}
          >
            Staff Directory
          </Typography>

          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={() => handleOpen()}
            sx={{
              background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
              borderRadius: "30px",
              px: 3,
              py: 1,
              fontWeight: 600,
              textTransform: "none",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              "&:hover": {
                background: "linear-gradient(135deg, #2a5298 0%, #1e3c72 100%)",
                boxShadow: "0 6px 16px rgba(0,0,0,0.15)",
              },
            }}
          >
            Add New Staff
          </Button>
        </Box>

        {/* Search Bar */}
        <Paper
          elevation={0}
          sx={{
            p: 2,
            mb: 3,
            borderRadius: "16px",
            background: "white",
            boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
          }}
        >
          <TextField
            fullWidth
            variant="outlined"
            placeholder="Search by name, designation, email, or phone..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setPage(0);
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search color="action" />
                </InputAdornment>
              ),
              endAdornment: searchTerm && (
                <InputAdornment position="end">
                  <IconButton size="small" onClick={() => setSearchTerm("")}>
                    <Close fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ),
              sx: { borderRadius: "30px" },
            }}
          />
        </Paper>

        {/* Staff Table */}
        <TableContainer
          component={Paper}
          elevation={2}
          sx={{
            borderRadius: "20px",
            overflowX: "auto",
            background: "white",
            boxShadow: "0 8px 24px rgba(0,0,0,0.05)",
          }}
        >
          <Table>
            <TableHead sx={{ bgcolor: "#f8fafc" }}>
              <TableRow>
                <TableCell sx={{ fontWeight: 700, width: "60px" }}>Avatar</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Name</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Designation</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Email</TableCell>
                <TableCell sx={{ fontWeight: 700 }}>Phone</TableCell>
                <TableCell sx={{ fontWeight: 700, width: "100px" }}>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {initialLoading ? (
                renderSkeletonRows()
              ) : paginatedStaff.length > 0 ? (
                paginatedStaff.map((member, index) => (
                  <TableRow
                    key={member._id}
                    sx={{
                      "&:hover": {
                        bgcolor: "#f1f5f9",
                        transition: "0.2s",
                      },
                      ...(index % 2 === 0 && { bgcolor: "#fefefe" }),
                    }}
                  >
                    <TableCell>
                      <Avatar
                        sx={{
                          bgcolor: "#2a5298",
                          width: 40,
                          height: 40,
                        }}
                      >
                        {member.name.charAt(0).toUpperCase()}
                      </Avatar>
                    </TableCell>
                    <TableCell>
                      <Typography fontWeight={500}>{member.name}</Typography>
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={member.designation}
                        size="small"
                        sx={{
                          bgcolor: "#e9f0ff",
                          color: "#1e3c72",
                          fontWeight: 500,
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Email fontSize="small" color="action" />
                        {member.email}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Phone fontSize="small" color="action" />
                        {member.phone}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <IconButton
                        onClick={() => handleOpen(member)}
                        color="primary"
                        size="small"
                        sx={{ mr: 1 }}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                        onClick={() => handleDelete(member._id, member.name)}
                        color="error"
                        size="small"
                      >
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} align="center" sx={{ py: 6 }}>
                    <Typography variant="body1" color="textSecondary">
                      {searchTerm
                        ? "No staff members match your search."
                        : "No staff members found. Click 'Add New Staff' to get started."}
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>

          {/* Pagination */}
          {!initialLoading && filteredStaff.length > 0 && (
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={filteredStaff.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              sx={{ borderTop: "1px solid #e2e8f0" }}
            />
          )}
        </TableContainer>
      </Container>

      {/* Add/Edit Modal */}
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm"
        TransitionComponent={Grow}
        PaperProps={{
          sx: {
            borderRadius: "24px",
            padding: 1,
          },
        }}
      >
        <DialogTitle sx={{ pb: 1, fontWeight: 700, fontSize: "1.5rem" }}>
          {editingStaff ? "Edit Staff Member" : "Add New Staff"}
        </DialogTitle>

        <form onSubmit={handleSubmit}>
          <DialogContent sx={{ pt: 0 }}>
            <TextField
              label="Full Name"
              fullWidth
              margin="normal"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person color="action" />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Designation"
              fullWidth
              margin="normal"
              required
              value={formData.designation}
              onChange={(e) => setFormData({ ...formData, designation: e.target.value })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person color="action" />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              label="Email Address"
              type="email"
              fullWidth
              margin="normal"
              required
              disabled={Boolean(editingStaff)}
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="action" />
                  </InputAdornment>
                ),
              }}
              helperText={editingStaff ? "Email cannot be changed" : ""}
            />

            <TextField
              label="Phone Number"
              fullWidth
              margin="normal"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Phone color="action" />
                  </InputAdornment>
                ),
              }}
            />
          </DialogContent>

          <DialogActions sx={{ px: 3, pb: 3, gap: 1 }}>
            <Button
              onClick={handleClose}
              sx={{ textTransform: "none", borderRadius: "30px", px: 3 }}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                textTransform: "none",
                borderRadius: "30px",
                px: 3,
                background: "linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)",
                "&:hover": {
                  background: "linear-gradient(135deg, #2a5298 0%, #1e3c72 100%)",
                },
              }}
            >
              {loading ? "Saving..." : editingStaff ? "Update Staff" : "Add Staff"}
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      {/* Global Snackbar for Notifications */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        TransitionComponent={Fade}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: "100%", borderRadius: "12px" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}