import React from "react";
import { Box, Card, CardContent, Typography, Grid, Button } from "@mui/material";
import { School, People } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function AttendanceHome() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Attendance Management
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <School sx={{ fontSize: 50, color: "primary.main" }} />
              <Typography variant="h6" mt={2}>
                Student Attendance
              </Typography>
              <Button
                component={Link}
                to="/attendance/students"
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
              >
                Mark Student Attendance
              </Button>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <People sx={{ fontSize: 50, color: "secondary.main" }} />
              <Typography variant="h6" mt={2}>
                Staff Attendance
              </Typography>
              <Button
                component={Link}
                to="/attendance/staff"
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
              >
                Mark Staff Attendance
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}