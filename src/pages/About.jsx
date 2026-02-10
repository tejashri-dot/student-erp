import React, { useState } from "react";
import {
  Typography,
  Container,
  Grid,
  Card,
  CardContent,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Button,
} from "@mui/material";

const About = () => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const scrollToSection = (id) => {
    handleClose();
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 100);
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {/* PAGE HEADER */}
      <Typography variant="h3" gutterBottom textAlign="center">
        About Our School
      </Typography>

      <Typography variant="body1" textAlign="center" sx={{ mb: 4 }}>
        Welcome to our esteemed institution, where we nurture young minds and
        foster a love for learning.
      </Typography>

      {/* DROPDOWN MENU (LIKE SCREENSHOT) */}
      <Box textAlign="center" sx={{ mb: 6 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpen}
          sx={{ textTransform: "none", fontSize: 16 }}
        >
          About Sections
        </Button>

        <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
          <MenuItem onClick={() => scrollToSection("chairman")}>
            Message from Chairman
          </MenuItem>
          <MenuItem onClick={() => scrollToSection("principal")}>
            Message from Principal
          </MenuItem>
          <MenuItem onClick={() => scrollToSection("vision")}>
            Vision & Mission
          </MenuItem>
        </Menu>
      </Box>

      {/* SCROLL TARGET SECTIONS */}
      <Box id="chairman" sx={{ mb: 8 }}>
        <Typography variant="h5" gutterBottom>
          Message from Chairman
        </Typography>
        <Typography color="text.secondary">
          Education is the most powerful tool to shape the future. Our goal is to
          nurture responsible global citizens through value-based education.
        </Typography>
      </Box>

      <Box id="principal" sx={{ mb: 8 }}>
        <Typography variant="h5" gutterBottom>
          Message from Principal
        </Typography>
        <Typography color="text.secondary">
          We focus on academic excellence, discipline, and holistic development
          to prepare students for real-world challenges.
        </Typography>
      </Box>

      <Box id="vision" sx={{ mb: 8 }}>
        <Typography variant="h5" gutterBottom>
          Vision & Mission
        </Typography>
        <Typography color="text.secondary">
          Our vision is to inspire lifelong learners. Our mission is to deliver
          quality education through innovation, integrity, and dedication.
        </Typography>
      </Box>

      {/* LEADERSHIP */}
      <Typography variant="h4" gutterBottom textAlign="center">
        Leadership
      </Typography>

      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <Avatar
                sx={{ width: 120, height: 120, mx: "auto", mb: 2 }}
                src="https://via.placeholder.com/120"
              />
              <Typography variant="h6">Chairman</Typography>
              <Typography color="text.secondary">
                Providing visionary leadership and strategic direction.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent sx={{ textAlign: "center" }}>
              <Avatar
                sx={{ width: 120, height: 120, mx: "auto", mb: 2 }}
                src="https://via.placeholder.com/120"
              />
              <Typography variant="h6">Principal</Typography>
              <Typography color="text.secondary">
                Ensuring academic excellence and student well-being.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
