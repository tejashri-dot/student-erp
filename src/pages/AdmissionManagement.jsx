

import React, { useEffect, useState, useMemo, useCallback } from "react";
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
  CircularProgress,
  Alert,
  IconButton,
  TextField,
  InputAdornment,
  Stack,
  Chip,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Snackbar,
  Skeleton,
  Tooltip,
  useMediaQuery,
  useTheme,
  Grid,
  Card,
  CardContent,
  CardActions,
  Divider,
  Avatar,
  alpha,
  Badge,
} from "@mui/material";
import {
  Delete,
  Search,
  Refresh,
  Clear,
  People,
  Male,
  Female,
  School,
  CalendarToday,
  Email,
  Phone,
  LocationOn,
  Person,
} from "@mui/icons-material";

/* ✅ API setup (unchanged) */
const API = axios.create({
  baseURL: " https://school-backend-6udp.onrender.com/api",
  timeout: 10000,
});

API.interceptors.response.use(
  (res) => res,
  (err) => {
    console.error("AXIOS FULL ERROR:", err);
    return Promise.reject(err);
  }
);

// Debounce helper for search
const useDebounce = (value, delay) => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(handler);
  }, [value, delay]);
  return debouncedValue;
};

export default function AdmissionManagement() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Switch to cards below 960px

  // State
  const [admissions, setAdmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("all");
  const [selectedGender, setSelectedGender] = useState("all");
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedAdmissionId, setSelectedAdmissionId] = useState(null);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const debouncedSearch = useDebounce(searchTerm, 300);

  // Fetch admissions
  const fetchAdmissions = useCallback(async () => {
    try {
      setLoading(true);
      setError("");
      const res = await API.get("/admission");

      let data = [];
      if (Array.isArray(res.data)) data = res.data;
      else if (res.data.data) data = res.data.data;
      else if (res.data.admissions) data = res.data.admissions;

      setAdmissions(data);
    } catch (err) {
      console.error("FETCH ERROR:", err);
      if (err.message === "Network Error") {
        setError("❌ Cannot connect to backend (check port / server)");
      } else if (err.response) {
        setError(`❌ Server Error: ${err.response.status}`);
      } else {
        setError("❌ Unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchAdmissions();
  }, [fetchAdmissions]);

  // Delete handlers
  const handleDeleteClick = (id) => {
    setSelectedAdmissionId(id);
    setDeleteDialogOpen(true);
  };

  const confirmDelete = async () => {
    try {
      await API.delete(`/admission/${selectedAdmissionId}`);
      setSnackbar({
        open: true,
        message: "Admission deleted successfully",
        severity: "success",
      });
      fetchAdmissions();
    } catch (err) {
      console.error("DELETE ERROR:", err);
      setSnackbar({
        open: true,
        message: "Delete failed. Please try again.",
        severity: "error",
      });
    } finally {
      setDeleteDialogOpen(false);
      setSelectedAdmissionId(null);
    }
  };

  const handleSnackbarClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  // Derived data for filters & stats
  const uniqueClasses = useMemo(() => {
    const classes = admissions.map((a) => a.classApplying).filter(Boolean);
    return ["all", ...new Set(classes)];
  }, [admissions]);

  const genderCounts = useMemo(() => {
    const males = admissions.filter((a) => a.gender?.toLowerCase() === "male").length;
    const females = admissions.filter((a) => a.gender?.toLowerCase() === "female").length;
    return { males, females };
  }, [admissions]);

  // Filtered admissions based on search + class + gender
  const filteredAdmissions = useMemo(() => {
    let filtered = admissions;

    // Search
    if (debouncedSearch) {
      const lower = debouncedSearch.toLowerCase();
      filtered = filtered.filter(
        (adm) =>
          adm.studentName?.toLowerCase().includes(lower) ||
          adm.fatherName?.toLowerCase().includes(lower) ||
          adm.motherName?.toLowerCase().includes(lower) ||
          adm.email?.toLowerCase().includes(lower) ||
          adm.mobile?.includes(debouncedSearch)
      );
    }

    // Class filter
    if (selectedClass !== "all") {
      filtered = filtered.filter((adm) => adm.classApplying === selectedClass);
    }

    // Gender filter
    if (selectedGender !== "all") {
      filtered = filtered.filter((adm) => adm.gender?.toLowerCase() === selectedGender.toLowerCase());
    }

    return filtered;
  }, [admissions, debouncedSearch, selectedClass, selectedGender]);

  const totalDisplayed = filteredAdmissions.length;

  // Reset filters
  const resetFilters = () => {
    setSearchTerm("");
    setSelectedClass("all");
    setSelectedGender("all");
  };

  // Loading skeletons
  const renderTableSkeleton = () => (
    <TableBody>
      {Array.from({ length: 5 }).map((_, idx) => (
        <TableRow key={idx}>
          {Array.from({ length: 10 }).map((_, i) => (
            <TableCell key={i}>
              <Skeleton variant="text" width="100%" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );

  const renderCardSkeleton = () => (
    <Grid container spacing={2}>
      {Array.from({ length: 6 }).map((_, idx) => (
        <Grid item xs={12} sm={6} md={4} key={idx}>
          <Card>
            <CardContent>
              <Skeleton variant="text" width="60%" />
              <Skeleton variant="text" width="80%" />
              <Skeleton variant="text" width="100%" />
              <Skeleton variant="rectangular" height={40} />
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background: `linear-gradient(135deg, ${alpha(theme.palette.primary.dark, 0.05)} 0%, ${alpha(
          theme.palette.secondary.dark,
          0.05
        )} 100%)`,
        py: 4,
        px: { xs: 2, sm: 3 },
      }}
    >
      {/* Animated Header */}
      <Box
        sx={{
          position: "relative",
          mb: 5,
          p: 3,
          borderRadius: 4,
          background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, ${theme.palette.secondary.main} 100%)`,
          color: "white",
          overflow: "hidden",
          "&::after": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDQwIDQwIj48cGF0aCBmaWxsPSIjZmZmIiBmaWxsLW9wYWNpdHk9IjAuMSIgZD0iTTAgMGw0MCA0ME0wIDQwTDQwIDAiLz48L3N2Zz4=') repeat",
            opacity: 0.1,
          },
        }}
      >
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          spacing={2}
        >
          <Box>
            <Typography variant="h4" fontWeight="bold" gutterBottom>
              Admission Management
            </Typography>
            <Typography variant="body2" sx={{ opacity: 0.9 }}>
              Manage all student admission records
            </Typography>
          </Box>
          <Chip
            label={`${totalDisplayed} records`}
            sx={{ bgcolor: "rgba(255,255,255,0.2)", color: "white", fontWeight: "bold" }}
          />
        </Stack>
      </Box>

      {/* Stats Cards */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            elevation={0}
            sx={{
              borderRadius: 3,
              background: "linear-gradient(135deg, #6B73FF 0%, #000DFF 100%)",
              color: "white",
            }}
          >
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>
                    TOTAL ADMISSIONS
                  </Typography>
                  <Typography variant="h4" fontWeight="bold">
                    {admissions.length}
                  </Typography>
                </Box>
                <Avatar sx={{ bgcolor: alpha("#fff", 0.2) }}>
                  <People />
                </Avatar>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            elevation={0}
            sx={{
              borderRadius: 3,
              background: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
              color: "white",
            }}
          >
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>
                    MALE
                  </Typography>
                  <Typography variant="h4" fontWeight="bold">
                    {genderCounts.males}
                  </Typography>
                </Box>
                <Avatar sx={{ bgcolor: alpha("#fff", 0.2) }}>
                  <Male />
                </Avatar>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            elevation={0}
            sx={{
              borderRadius: 3,
              background: "linear-gradient(135deg, #ee9ca7 0%, #ffdde1 100%)",
              color: "white",
            }}
          >
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>
                    FEMALE
                  </Typography>
                  <Typography variant="h4" fontWeight="bold">
                    {genderCounts.females}
                  </Typography>
                </Box>
                <Avatar sx={{ bgcolor: alpha("#fff", 0.2) }}>
                  <Female />
                </Avatar>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card
            elevation={0}
            sx={{
              borderRadius: 3,
              background: "linear-gradient(135deg, #f2994a 0%, #f2c94c 100%)",
              color: "white",
            }}
          >
            <CardContent>
              <Stack direction="row" justifyContent="space-between" alignItems="center">
                <Box>
                  <Typography variant="caption" sx={{ opacity: 0.8 }}>
                    UNIQUE CLASSES
                  </Typography>
                  <Typography variant="h4" fontWeight="bold">
                    {uniqueClasses.length - 1}
                  </Typography>
                </Box>
                <Avatar sx={{ bgcolor: alpha("#fff", 0.2) }}>
                  <School />
                </Avatar>
              </Stack>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Search & Filters */}
      <Paper
        elevation={0}
        sx={{
          p: 2,
          mb: 4,
          borderRadius: 3,
          backgroundColor: "white",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
        }}
      >
        <Stack direction={{ xs: "column", md: "row" }} spacing={2} alignItems="center">
          <TextField
            placeholder="Search by name, father, email, mobile..."
            variant="outlined"
            size="small"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ flex: 2, width: "100%" }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search color="action" />
                </InputAdornment>
              ),
              endAdornment: searchTerm && (
                <InputAdornment position="end">
                  <IconButton size="small" onClick={() => setSearchTerm("")}>
                    <Clear fontSize="small" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Stack direction="row" spacing={1} sx={{ flexWrap: "wrap", gap: 1 }}>
            <TextField
              select
              size="small"
              label="Class"
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              sx={{ minWidth: 120 }}
              SelectProps={{ native: true }}
            >
              {uniqueClasses.map((cls) => (
                <option key={cls} value={cls}>
                  {cls === "all" ? "All Classes" : cls}
                </option>
              ))}
            </TextField>
            <TextField
              select
              size="small"
              label="Gender"
              value={selectedGender}
              onChange={(e) => setSelectedGender(e.target.value)}
              sx={{ minWidth: 120 }}
              SelectProps={{ native: true }}
            >
              <option value="all">All Genders</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </TextField>
            <Button variant="outlined" onClick={resetFilters} size="small">
              Reset
            </Button>
            <Button
              variant="contained"
              startIcon={<Refresh />}
              onClick={fetchAdmissions}
              size="small"
            >
              Refresh
            </Button>
          </Stack>
        </Stack>
      </Paper>

      {/* Error Display */}
      {error && (
        <Alert severity="error" sx={{ mb: 3 }} onClose={() => setError("")}>
          {error}
        </Alert>
      )}

      {/* Main Content - Table or Cards */}
      {loading ? (
        isMobile ? renderCardSkeleton() : (
          <TableContainer component={Paper} sx={{ borderRadius: 3, overflowX: "auto" }}>
            <Table stickyHeader>
              <TableHead>
                <TableRow>
                  <TableCell>Student Name</TableCell>
                  <TableCell>Gender</TableCell>
                  <TableCell>DOB</TableCell>
                  <TableCell>Class</TableCell>
                  <TableCell>Father</TableCell>
                  <TableCell>Mother</TableCell>
                  <TableCell>Mobile</TableCell>
                  <TableCell>Email</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell align="center">Action</TableCell>
                </TableRow>
              </TableHead>
              {renderTableSkeleton()}
            </Table>
          </TableContainer>
        )
      ) : filteredAdmissions.length === 0 ? (
        <Paper sx={{ p: 5, textAlign: "center", borderRadius: 3 }}>
          <Typography variant="body1" color="textSecondary">
            No admissions found matching your filters.
          </Typography>
          <Button variant="outlined" onClick={resetFilters} sx={{ mt: 2 }}>
            Clear Filters
          </Button>
        </Paper>
      ) : isMobile ? (
        // Card View for Mobile
        <Grid container spacing={2}>
          {filteredAdmissions.map((adm, idx) => (
            <Grid item xs={12} sm={6} key={adm._id || idx}>
              <Card
                sx={{
                  borderRadius: 3,
                  transition: "transform 0.2s, box-shadow 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                    boxShadow: 6,
                  },
                }}
              >
                <CardContent>
                  <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                    <Box>
                      <Typography variant="h6" fontWeight="bold">
                        {adm.studentName || "-"}
                      </Typography>
                      <Typography variant="body2" color="textSecondary">
                        {adm.classApplying || "Class not specified"}
                      </Typography>
                    </Box>
                    <Chip
                      label={adm.gender || "N/A"}
                      size="small"
                      color={adm.gender?.toLowerCase() === "male" ? "primary" : "secondary"}
                      variant="outlined"
                    />
                  </Stack>
                  <Divider sx={{ my: 1.5 }} />
                  <Stack spacing={1}>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Person fontSize="small" color="action" />
                      <Typography variant="body2">
                        Father: {adm.fatherName || "-"} | Mother: {adm.motherName || "-"}
                      </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <CalendarToday fontSize="small" color="action" />
                      <Typography variant="body2">
                        DOB: {adm.dob ? new Date(adm.dob).toLocaleDateString() : "-"}
                      </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Phone fontSize="small" color="action" />
                      <Typography variant="body2">{adm.mobile || "-"}</Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <Email fontSize="small" color="action" />
                      <Typography variant="body2" noWrap>
                        {adm.email || "-"}
                      </Typography>
                    </Stack>
                    <Stack direction="row" alignItems="center" spacing={1}>
                      <LocationOn fontSize="small" color="action" />
                      <Typography variant="body2" noWrap>
                        {adm.address || "-"}
                      </Typography>
                    </Stack>
                  </Stack>
                </CardContent>
                <CardActions sx={{ justifyContent: "flex-end" }}>
                  <Tooltip title="Delete">
                    <IconButton color="error" onClick={() => handleDeleteClick(adm._id)}>
                      <Delete />
                    </IconButton>
                  </Tooltip>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      ) : (
        // Table View for Desktop
        <TableContainer
          component={Paper}
          sx={{
            borderRadius: 3,
            overflowX: "auto",
            boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
          }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow sx={{ bgcolor: theme.palette.grey[50] }}>
                <TableCell>Student Name</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>DOB</TableCell>
                <TableCell>Class</TableCell>
                <TableCell>Father</TableCell>
                <TableCell>Mother</TableCell>
                <TableCell>Mobile</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Address</TableCell>
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredAdmissions.map((adm, index) => (
                <TableRow
                  key={adm._id || index}
                  sx={{
                    "&:hover": { bgcolor: alpha(theme.palette.primary.main, 0.04) },
                    transition: "0.2s",
                  }}
                >
                  <TableCell>{adm.studentName || "-"}</TableCell>
                  <TableCell>
                    <Chip
                      label={adm.gender || "-"}
                      size="small"
                      color={adm.gender?.toLowerCase() === "male" ? "primary" : "secondary"}
                      variant="outlined"
                    />
                  </TableCell>
                  <TableCell>
                    {adm.dob ? new Date(adm.dob).toLocaleDateString() : "-"}
                  </TableCell>
                  <TableCell>{adm.classApplying || "-"}</TableCell>
                  <TableCell>{adm.fatherName || "-"}</TableCell>
                  <TableCell>{adm.motherName || "-"}</TableCell>
                  <TableCell>{adm.mobile || "-"}</TableCell>
                  <TableCell>{adm.email || "-"}</TableCell>
                  <TableCell sx={{ maxWidth: 200, whiteSpace: "normal", wordBreak: "break-word" }}>
                    {adm.address || "-"}
                  </TableCell>
                  <TableCell align="center">
                    <Tooltip title="Delete Admission">
                      <IconButton color="error" onClick={() => handleDeleteClick(adm._id)} size="small">
                        <Delete />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Delete Confirmation Dialog */}
      <Dialog open={deleteDialogOpen} onClose={() => setDeleteDialogOpen(false)}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete this admission record? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDeleteDialogOpen(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={confirmDelete} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert onClose={handleSnackbarClose} severity={snackbar.severity} sx={{ width: "100%" }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}