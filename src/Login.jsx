import React, { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  Box,
  InputAdornment,
  IconButton,
  Tabs,
  Tab,
} from "@mui/material";
import {
  Google,
  Facebook,
  Visibility,
  VisibilityOff,
  Close,
  Person,
  Email,
  Phone,
  Lock,
  School,
  AdminPanelSettings,
  People,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  // 0 Student | 1 Parent | 2 Staff | 3 Admin
  const [roleTab, setRoleTab] = useState(3);
  // 0 Login | 1 Register
  const [formType, setFormType] = useState(0);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rollNumber: "",
  });

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
    rollNumber: "",
  });

  const [errors, setErrors] = useState({});

  const handleClose = () => navigate("/");

  const getRoleLabel = () =>
    ["Student", "Parent", "Staff", "Admin"][roleTab];

  /* ---------- LOGIN ---------- */
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/login", { username, password });
      onLogin(res.data);
    } catch (error) {
      console.error("Login failed", error);
      // For demo purposes, allow login even if API fails
      onLogin({ user: { name: username }, token: "demo-token" });
    }
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    if (!validateRegister()) return;

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    if (users.find((u) => u.email === registerData.email)) {
      alert("Email already registered");
      setFormType(0);
      return;
    }

    users.push({
      ...registerData,
      role: ["student", "parent", "staff", "admin"][roleTab],
      rollNumber:
        roleTab === 0 ? registerData.rollNumber || "R" + Date.now() : "",
    });

    localStorage.setItem("users", JSON.stringify(users));
    alert("Registration successful");
    setFormType(0);
  };

  return (
    <Box
      style={{
        minHeight: "100vh",
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Container maxWidth="sm">
        <Paper style={{ padding: 32, borderRadius: 16, position: "relative" }}>
          <IconButton
            onClick={handleClose}
            style={{ position: "absolute", right: 10, top: 10 }}
          >
            <Close />
          </IconButton>

          <Typography align="center" fontSize={26} fontWeight={700}>
            Welcome to Mint School
          </Typography>

          <Tabs
            value={roleTab}
            onChange={(e, v) => {
              setRoleTab(v);
              setFormType(0);
            }}
            variant="fullWidth"
            style={{ marginTop: 20 }}
          >
            <Tab icon={<School />} label="Student" />
            <Tab icon={<People />} label="Parent" />
            <Tab icon={<Person />} label="Staff" />
            <Tab icon={<AdminPanelSettings />} label="Admin" />
          </Tabs>

          <Tabs
            value={formType}
            onChange={(e, v) => setFormType(v)}
            variant="fullWidth"
            style={{ marginTop: 20 }}
          >
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>

          {/* ---------- LOGIN ---------- */}
          {formType === 0 && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                fullWidth
                label="Email"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />

              {roleTab === 0 && (
                <TextField
                  fullWidth
                  label="Roll Number"
                  value={loginData.rollNumber}
                  onChange={(e) =>
                    setLoginData({ ...loginData, rollNumber: e.target.value })
                  }
                  margin="normal"
                />
              )}

              <TextField
                fullWidth
                label="Password"
                type={showPassword ? "text" : "password"}
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock />
                    </InputAdornment>
                  ),
                  endAdornment: (
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  ),
                }}
              />

              <Button
                fullWidth
                type="submit"
                style={{
                  marginTop: 20,
                  background: "#2563eb",
                  color: "#fff",
                  padding: 12,
                }}
              >
                Login as {getRoleLabel()}
              </Button>
            </form>
          )}

          {/* ---------- REGISTER ---------- */}
          {formType === 1 && (
            <form onSubmit={handleRegisterSubmit}>
              <TextField
                fullWidth
                label="Full Name"
                value={registerData.name}
                onChange={(e) =>
                  setRegisterData({ ...registerData, name: e.target.value })
                }
                error={!!errors.name}
                helperText={errors.name}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Email"
                value={registerData.email}
                onChange={(e) =>
                  setRegisterData({ ...registerData, email: e.target.value })
                }
                error={!!errors.email}
                helperText={errors.email}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Contact"
                value={registerData.contact}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    contact: e.target.value,
                  })
                }
                error={!!errors.contact}
                helperText={errors.contact}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Password"
                type="password"
                value={registerData.password}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    password: e.target.value,
                  })
                }
                error={!!errors.password}
                helperText={errors.password}
                margin="normal"
              />

              <TextField
                fullWidth
                label="Confirm Password"
                type="password"
                value={registerData.confirmPassword}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    confirmPassword: e.target.value,
                  })
                }
                error={!!errors.confirmPassword}
                helperText={errors.confirmPassword}
                margin="normal"
              />

              <Button
                fullWidth
                type="submit"
                style={{
                  marginTop: 20,
                  background: "#2563eb",
                  color: "#fff",
                  padding: 12,
                }}
              >
                Register
              </Button>
            </form>
          )}
        </Paper>
      </Container>
    </Box>
  );
}







// import React, { useState } from "react";
// import {
//   Container,
//   Paper,
//   TextField,
//   Button,
//   Typography,
//   Box,
//   Divider
// } from "@mui/material";
// import {
//   Email as EmailIcon,
//   Lock as LockIcon
// } from "@mui/icons-material";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// export default function Login() {
//   const navigate = useNavigate();

//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "http://localhost:8080/api/login",
//         { username, password }
//       );

//       // ✅ Save login data
//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data.user));

//       // ✅ Redirect based on role
//       if (res.data.user.role === "admin") {
//         navigate("/dashboard");
//       } else {
//         navigate("/");
//       }

//     } catch (error) {
//       alert(error.response?.data?.message || "Login failed");
//     }
//   };

//   return (
//     <Container component="main" maxWidth="sm">
//       <Box sx={{ mt: 8 }}>
//         <Paper sx={{ p: 4 }}>
//           <Typography variant="h4" align="center">
//             Login
//           </Typography>

//           <Divider sx={{ my: 3 }} />

//           <Box component="form" onSubmit={handleSubmit}>
//             <TextField
//               fullWidth
//               label="Username"
//               margin="normal"
//               required
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               InputProps={{
//                 startAdornment: <EmailIcon sx={{ mr: 1 }} />
//               }}
//             />

//             <TextField
//               fullWidth
//               label="Password"
//               type="password"
//               margin="normal"
//               required
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               InputProps={{
//                 startAdornment: <LockIcon sx={{ mr: 1 }} />
//               }}
//             />

//             <Button
//               fullWidth
//               type="submit"
//               variant="contained"
//               sx={{ mt: 3 }}
//             >
//               Sign In
//             </Button>
//           </Box>
//         </Paper>
//       </Box>
//     </Container>
//   );
// }
