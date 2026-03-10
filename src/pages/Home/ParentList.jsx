import { useState, useEffect } from "react";
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
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  MenuItem,
  Chip,
  CircularProgress,
  Alert,
} from "@mui/material";
import { Add, Edit, Delete, Refresh } from "@mui/icons-material";

const API_URL = "https://school-backend-6udp.onrender.com";

function ParentList() {
  const [parents, setParents] = useState([]);
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [openDialog, setOpenDialog] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [selectedParent, setSelectedParent] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    contact: "",
    studentId: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  useEffect(() => {
    fetchParents();
    fetchAvailableStudents();
  }, []);

  const fetchParents = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_URL}/api/parents`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      const data = await response.json();
      setParents(data);
    } catch (error) {
      console.error("Error fetching parents:", error);
      setError("Failed to fetch parents");
    } finally {
      setLoading(false);
    }
  };

  const fetchAvailableStudents = async () => {
    try {
      const response = await fetch(
        `${API_URL}/api/parents/students/available`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      const data = await response.json();
      setStudents(data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  const handleOpenDialog = (parent = null) => {
    if (parent) {
      setEditMode(true);
      setSelectedParent(parent);
      setFormData({
        name: parent.name,
        email: parent.email,
        password: "",
        contact: parent.contact || "",
        studentId: parent.studentId?._id || parent.studentId || "",
      });
    } else {
      setEditMode(false);
      setSelectedParent(null);
      setFormData({
        name: "",
        email: "",
        password: "",
        contact: "",
        studentId: "",
      });
    }
    setError("");
    setSuccess("");
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedParent(null);
    setFormData({
      name: "",
      email: "",
      password: "",
      contact: "",
      studentId: "",
    });
    setError("");
    setSuccess("");
  };

  const handleSubmit = async () => {
    try {
      setError("");
      setSuccess("");

      if (!formData.name || !formData.email || !formData.contact) {
        setError("Name, email, and contact are required");
        return;
      }

      if (!editMode && !formData.password) {
        setError("Password is required for new parent");
        return;
      }

      const url = editMode
        ? `${API_URL}/api/parents/${selectedParent._id}`
        : `${API_URL}/api/parents`;

      const method = editMode ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Operation failed");
      }

      setSuccess(data.message);
      fetchParents();
      fetchAvailableStudents();

      setTimeout(() => {
        handleCloseDialog();
      }, 1500);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this parent?")) {
      return;
    }

    try {
      const response = await fetch(`${API_URL}/api/parents/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Delete failed");
      }

      setSuccess("Parent deleted successfully");
      fetchParents();
      fetchAvailableStudents();
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4">Parents Management</Typography>
        <Box sx={{ display: "flex", gap: 1 }}>
          <Button
            variant="outlined"
            startIcon={<Refresh />}
            onClick={() => {
              fetchParents();
              fetchAvailableStudents();
            }}
          >
            Refresh
          </Button>
          <Button
            variant="contained"
            startIcon={<Add />}
            onClick={() => handleOpenDialog()}
          >
            Add Parent
          </Button>
        </Box>
      </Box>

      {error && (
        <Alert severity="error" sx={{ mb: 2 }} onClose={() => setError("")}>
          {error}
        </Alert>
      )}

      {success && (
        <Alert severity="success" sx={{ mb: 2 }} onClose={() => setSuccess("")}>
          {success}
        </Alert>
      )}

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: "#1976d2" }}>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Name
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Email
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Contact
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Linked Student
                </TableCell>
                <TableCell sx={{ color: "white", fontWeight: "bold" }}>
                  Actions
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {parents.length > 0 ? (
                parents.map((parent) => (
                  <TableRow key={parent._id} hover>
                    <TableCell>{parent.name}</TableCell>
                    <TableCell>{parent.email}</TableCell>
                    <TableCell>{parent.contact}</TableCell>
                    <TableCell>
                      {parent.studentId ? (
                        <Chip
                          label={`${parent.studentId.name} (${parent.studentId.className})`}
                          color="primary"
                          size="small"
                        />
                      ) : (
                        <Chip label="Not Linked" color="default" size="small" />
                      )}
                    </TableCell>
                    <TableCell>
                      <IconButton
                        color="primary"
                        onClick={() => handleOpenDialog(parent)}
                      >
                        <Edit />
                      </IconButton>
                      <IconButton
                        color="error"
                        onClick={() => handleDelete(parent._id)}
                      >
                        <Delete />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No parents found
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Add/Edit Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>{editMode ? "Edit Parent" : "Add New Parent"}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
            <TextField
              label="Full Name"
              fullWidth
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              required
            />
            <TextField
              label="Email"
              type="email"
              fullWidth
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              required
            />
            <TextField
              label="Password"
              type="password"
              fullWidth
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder={
                editMode ? "Leave blank to keep current password" : "Required"
              }
              required={!editMode}
            />
            <TextField
              label="Contact Number"
              fullWidth
              value={formData.contact}
              onChange={(e) =>
                setFormData({ ...formData, contact: e.target.value })
              }
              required
            />
            <TextField
              label="Link Student (Optional)"
              select
              fullWidth
              value={formData.studentId}
              onChange={(e) =>
                setFormData({ ...formData, studentId: e.target.value })
              }
            >
              <MenuItem value="">-- Select Student --</MenuItem>
              {students.map((student) => (
                <MenuItem key={student._id} value={student._id}>
                  {student.name} - {student.className} ({student.seatNumber})
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          <Button onClick={handleSubmit} variant="contained">
            {editMode ? "Update" : "Create"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default ParentList;
