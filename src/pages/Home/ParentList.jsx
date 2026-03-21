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

const API_URL =
  window.location.hostname === "localhost"
    ? "https://school-backend-6udp.onrender.com"
    : "https://school-backend-6udp.onrender.com";

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

  // FETCH PARENTS
  const fetchParents = async () => {
    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const response = await fetch(`${API_URL}/api/parents`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();

      setParents(data.parents || data || []);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch parents");
    } finally {
      setLoading(false);
    }
  };

  // FETCH STUDENTS
  const fetchAvailableStudents = async () => {
    try {
      const token = localStorage.getItem("token");

      const response = await fetch(
        `${API_URL}/api/parents/students/available`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      const data = await response.json();

      setStudents(data.students || data || []);
    } catch (err) {
      console.error("Students fetch error:", err);
    }
  };

  // OPEN DIALOG
  const handleOpenDialog = (parent = null) => {
    if (parent) {
      setEditMode(true);
      setSelectedParent(parent);

      setFormData({
        name: parent.name || "",
        email: parent.email || "",
        password: "",
        contact: parent.contact || "",
        studentId: parent.studentId?._id || "",
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

  // SUBMIT
  const handleSubmit = async () => {
    try {
      setError("");

      if (!formData.name || !formData.email || !formData.contact) {
        setError("Name, Email and Contact are required");
        return;
      }

      if (!editMode && !formData.password) {
        setError("Password required for new parent");
        return;
      }

      const token = localStorage.getItem("token");

      const url = editMode
        ? `${API_URL}/api/parents/${selectedParent._id}`
        : `${API_URL}/api/parents`;

      const method = editMode ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Operation failed");
      }

      setSuccess(data.message || "Success");

      fetchParents();
      fetchAvailableStudents();

      setTimeout(handleCloseDialog, 1200);
    } catch (err) {
      setError(err.message);
    }
  };

  // DELETE
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this parent?")) return;

    try {
      const token = localStorage.getItem("token");

      const response = await fetch(`${API_URL}/api/parents/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message);
      }

      setSuccess("Parent deleted");

      fetchParents();
      fetchAvailableStudents();
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <Box sx={{ p: 3 }}>
      {/* HEADER */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
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

      {/* ALERTS */}
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {success && (
        <Alert severity="success" sx={{ mb: 2 }}>
          {success}
        </Alert>
      )}

      {/* TABLE */}
      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", py: 6 }}>
          <CircularProgress />
        </Box>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow sx={{ bgcolor: "#1976d2" }}>
                <TableCell sx={{ color: "white" }}>Name</TableCell>
                <TableCell sx={{ color: "white" }}>Email</TableCell>
                <TableCell sx={{ color: "white" }}>Contact</TableCell>
                <TableCell sx={{ color: "white" }}>Student</TableCell>
                <TableCell sx={{ color: "white" }}>Actions</TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {parents.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} align="center">
                    No parents found
                  </TableCell>
                </TableRow>
              )}

              {parents.map((parent) => (
                <TableRow key={parent._id}>
                  <TableCell>{parent.name}</TableCell>
                  <TableCell>{parent.email}</TableCell>
                  <TableCell>{parent.contact}</TableCell>

                  <TableCell>
                    {parent.studentId ? (
                      <Chip
                        label={`${parent.studentId?.name || ""} (${parent.studentId?.className || ""})`}
                        color="primary"
                        size="small"
                      />
                    ) : (
                      <Chip label="Not Linked" size="small" />
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
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* DIALOG */}
      <Dialog open={openDialog} onClose={handleCloseDialog} fullWidth>
        <DialogTitle>
          {editMode ? "Edit Parent" : "Create Parent"}
        </DialogTitle>

        <DialogContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
            <TextField
              label="Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />

            <TextField
              label="Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />

            <TextField
              label="Password"
              type="password"
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder={editMode ? "Leave blank to keep old" : ""}
            />

            <TextField
              label="Contact"
              value={formData.contact}
              onChange={(e) =>
                setFormData({ ...formData, contact: e.target.value })
              }
            />

            <TextField
              select
              label="Student"
              value={formData.studentId}
              onChange={(e) =>
                setFormData({ ...formData, studentId: e.target.value })
              }
            >
              <MenuItem value="">None</MenuItem>

              {students.map((student) => (
                <MenuItem key={student._id} value={student._id}>
                  {student.name} - {student.className}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>

          <Button variant="contained" onClick={handleSubmit}>
            {editMode ? "Update" : "Create"}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default ParentList;