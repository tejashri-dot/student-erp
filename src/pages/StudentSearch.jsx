import React, { useState } from "react";
import {
  Box,
  TextField,
  Typography,
  List,
  ListItemButton,
  ListItemText,
  Paper
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { students } from "../data/students";

function StudentSearch() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().startsWith(query.toLowerCase())
  );

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h4" gutterBottom>
        Search Student
      </Typography>

      <TextField
        label="Type student name..."
        fullWidth
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        sx={{ mb: 3 }}
      />

      <Paper>
        <List>
          {filteredStudents.map((student) => (
            <ListItemButton
              key={student.id}
              onClick={() => navigate(`/student/${student.id}`)}
            >
              <ListItemText
                primary={student.name}
                secondary={`Class ${student.className} | Roll ${student.rollNumber}`}
              />
            </ListItemButton>
          ))}
        </List>
      </Paper>
    </Box>
  );
}

export default StudentSearch;