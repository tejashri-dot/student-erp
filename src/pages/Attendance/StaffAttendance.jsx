import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table, TableBody, TableCell, TableHead,
  TableRow, Button, Typography
} from "@mui/material";

export default function StaffAttendance() {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/staff").then((res) => {
      setStaff(res.data);
    });
  }, []);

  const markAttendance = (staffId, status) => {
    axios.post("http://localhost:8080/api/attendance/mark", {
      userId: staffId,
      userType: "Staff",
      date: new Date().toISOString().split("T")[0],
      status,
    });
  };

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Staff Attendance
      </Typography>

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="center">Present</TableCell>
            <TableCell align="center">Absent</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {staff.map((s) => (
            <TableRow key={s._id}>
              <TableCell>{s.name}</TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => markAttendance(s._id, "Present")}
                >
                  P
                </Button>
              </TableCell>
              <TableCell align="center">
                <Button
                  variant="contained"
                  color="error"
                  onClick={() => markAttendance(s._id, "Absent")}
                >
                  A
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}