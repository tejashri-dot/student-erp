import React from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Grid
} from "@mui/material";

import { students } from "../data/students";

function StudentProfile() {
  const { id } = useParams();

  const student = students.find((s) => s.id === parseInt(id));

  if (!student) {
    return <Typography>Student not found</Typography>;
  }

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        {student.name}
      </Typography>

      <Typography>
        Class: {student.className} | Roll: {student.rollNumber}
      </Typography>

      {/* Attendance */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        Attendance
      </Typography>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography>Total Days</Typography>
              <Typography variant="h5">
                {student.attendance.totalDays}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography>Present</Typography>
              <Typography variant="h5">
                {student.attendance.presentDays}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography>Absent</Typography>
              <Typography variant="h5">
                {student.attendance.absentDays}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={3}>
          <Card>
            <CardContent>
              <Typography>Percentage</Typography>
              <Typography variant="h5">
                {student.attendance.percentage}%
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Fees */}
      <Typography variant="h5" sx={{ mt: 4 }}>
        Fees Structure
      </Typography>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography>Total Fees</Typography>
              <Typography variant="h5">
                ₹{student.fees.totalFees}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography>Paid Fees</Typography>
              <Typography variant="h5">
                ₹{student.fees.paidFees}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Typography color="error">
                Pending Fees
              </Typography>
              <Typography variant="h5" color="error">
                ₹{student.fees.pendingFees}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default StudentProfile;