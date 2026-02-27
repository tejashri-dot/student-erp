import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table, TableBody, TableCell, TableHead,
  TableRow, Button, Typography
} from "@mui/material";

export default function StudentAttendance() {
  const [students, setStudents] = useState([]);

  const token = localStorage.getItem("token"); // ✅ JWT

  useEffect(() => {
    axios.get("http://localhost:8080/api/students", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      setStudents(res.data);
    });
  }, []);

  const markAttendance = async (studentId, status) => {
    try {
      await axios.post(
        "http://localhost:8080/api/attendance/mark",
        {
          userId: studentId,
          userType: "Student",
          date: new Date().toISOString().split("T")[0],
          status,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`, // ✅ REQUIRED
          },
        }
      );

      alert("Attendance marked");
    } catch (error) {
      console.error(error.response?.data || error.message);
      alert("Failed to mark attendance");
    }
  };

  return (
    <>
      <Typography variant="h5" gutterBottom>
        Student Attendance
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
          {students.map((s) => (
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