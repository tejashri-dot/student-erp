
// import React, { useState } from "react";
// import {
//   Container,
//   Paper,
//   TextField,
//   Button,
//   Typography,
//   Box,
//   InputAdornment,
//   IconButton,
//   Tabs,
//   Tab,
// } from "@mui/material";
// import {
//   Visibility,
//   VisibilityOff,
//   Close,
//   Person,
//   Email,
//   Lock,
//   School,
//   AdminPanelSettings,
//   People,
// } from "@mui/icons-material";
// import { useNavigate,useLocation } from "react-router-dom";
// import axios from 'axios';


// export default function Login() {
//   const navigate = useNavigate();
//   const location = useLocation();
  

//   const [roleTab, setRoleTab] = useState(3);
//   const [formType, setFormType] = useState(0);
//   const [showPassword, setShowPassword] = useState(false);

//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//     // rollNumber: "",
//   });

//   const [registerData, setRegisterData] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     password: "",
//     confirmPassword: "",
//     // rollNumber: "",
//   });

//   const role = ["student", "parent", "staff", "admin"][roleTab];

//   /* ---------- LOGIN ---------- */
//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("https://school-backend-6udp.onrender.com/api/auth/login", {
//         ...loginData,
//         role,
//       });

//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data.user));

//       navigate("/dashboard");
//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   /* ---------- REGISTER ---------- */
//   const handleRegisterSubmit = async (e) => {
//     e.preventDefault();
//     if (registerData.password !== registerData.confirmPassword)
//       return alert("Passwords do not match");

//     try {
//       await axios.post("https://school-backend-6udp.onrender.com/api/auth/register", {
//         ...registerData,
//         role,
//       });

//       alert("Registration successful");
//       setFormType(0);
//     } catch (err) {
//       alert(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
//       <Container maxWidth="sm">
//         <Paper sx={{ p: 4, borderRadius: 3, position: "relative" }}>
//           <IconButton
//             sx={{ position: "absolute", top: 10, right: 10 }}
//             onClick={() => navigate("/")}
//           >
//             <Close />
//           </IconButton>

//           <Typography align="center" fontSize={26} fontWeight={700}>
//             Mint School Portal
//           </Typography>

//           <Tabs value={roleTab} onChange={(e, v) => setRoleTab(v)} fullWidth>
//             <Tab icon={<School />} label="Student" />
//             <Tab icon={<People />} label="Parent" />
//             <Tab icon={<Person />} label="Staff" />
//             <Tab icon={<AdminPanelSettings />} label="Admin" />
//           </Tabs>

//           <Tabs value={formType} onChange={(e, v) => setFormType(v)} fullWidth>
//             <Tab label="Login" />
//             <Tab label="Register" />
//           </Tabs>

//           {formType === 0 ? (
//             <form onSubmit={handleLoginSubmit}>
//               <TextField fullWidth label="Email" margin="normal"
//                 onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
//                 InputProps={{ startAdornment: <InputAdornment position="start"><Email /></InputAdornment> }}
//               />

//               {role === "student" && (
//                 <TextField fullWidth label="Roll Number" margin="normal"
//                   onChange={(e) => setLoginData({ ...loginData, rollNumber: e.target.value })}
//                 />
//               )}

//               <TextField fullWidth label="Password" margin="normal"
//                 type={showPassword ? "text" : "password"}
//                 onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
//                 InputProps={{
//                   startAdornment: <InputAdornment position="start"><Lock /></InputAdornment>,
//                   endAdornment: (
//                     <IconButton onClick={() => setShowPassword(!showPassword)}>
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   ),
//                 }}
//               />

//               <Button fullWidth type="submit" sx={{ mt: 2 }}>
//                 Login
//               </Button>
//             </form>
//           ) : (
//             <form onSubmit={handleRegisterSubmit}>
//               <TextField fullWidth label="Full Name" margin="normal"
//                 onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
//               />
//               <TextField fullWidth label="Email" margin="normal"
//                 onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
//               />
//               <TextField fullWidth label="Contact" margin="normal"
//                 onChange={(e) => setRegisterData({ ...registerData, contact: e.target.value })}
//               />
//               <TextField fullWidth label="Password" type="password" margin="normal"
//                 onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
//               />
//               <TextField fullWidth label="Confirm Password" type="password" margin="normal"
//                 onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
//               />

//               <Button fullWidth type="submit" sx={{ mt: 2 }}>
//                 Register
//               </Button>
//             </form>
//           )}
//         </Paper>
//       </Container>
//     </Box>
//   );
// }









// import React, { useState } from "react";
// import {
//   Container,
//   Paper,
//   TextField,
//   Button,
//   Typography,
//   Box,
//   InputAdornment,
//   IconButton,
//   Tabs,
//   Tab,
// } from "@mui/material";

// import {
//   Visibility,
//   VisibilityOff,
//   Close,
//   Person,
//   Email,
//   Lock,
//   School,
//   AdminPanelSettings,
//   People,
// } from "@mui/icons-material";

// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Login() {
//   const navigate = useNavigate();

//   const [roleTab, setRoleTab] = useState(3);
//   const [formType, setFormType] = useState(0);
//   const [showPassword, setShowPassword] = useState(false);

//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//   });

//   const [registerData, setRegisterData] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const role = ["student", "parent", "staff", "admin"][roleTab];

//   /* ---------- LOGIN ---------- */
//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "http://localhost:8080/api/auth/login",
//         {
//           ...loginData,
//           role,
//         }
//       );

//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data.user));

//       navigate("/dashboard");
//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   /* ---------- REGISTER ---------- */
//   const handleRegisterSubmit = async (e) => {
//     e.preventDefault();

//     if (registerData.password !== registerData.confirmPassword) {
//       return alert("Passwords do not match");
//     }

//     try {
//       await axios.post(
//         "http://localhost:8080/api/auth/register",
//         {
//           ...registerData,
//           role,
//         }
//       );

//       alert("Registration successful");
//       setFormType(0);
//     } catch (err) {
//       alert(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
//       <Container maxWidth="sm">
//         <Paper sx={{ p: 4, borderRadius: 3, position: "relative" }}>
//           <IconButton
//             sx={{ position: "absolute", top: 10, right: 10 }}
//             onClick={() => navigate("/")}
//           >
//             <Close />
//           </IconButton>

//           <Typography align="center" fontSize={26} fontWeight={700}>
//             Mint School Portal
//           </Typography>

//           {/* ROLE TABS */}
//           <Tabs value={roleTab} onChange={(e, v) => setRoleTab(v)} fullWidth>
//             <Tab icon={<School />} label="Student" />
//             <Tab icon={<People />} label="Parent" />
//             <Tab icon={<Person />} label="Staff" />
//             <Tab icon={<AdminPanelSettings />} label="Admin" />
//           </Tabs>

//           {/* FORM TYPE TABS */}
//           {role !== "student" && (
//             <Tabs
//               value={formType}
//               onChange={(e, v) => setFormType(v)}
//               fullWidth
//             >
//               <Tab label="Login" />
//               <Tab label="Register" />
//             </Tabs>
//           )}

//           {role === "student" && (
//             <Tabs value={0} fullWidth>
//               <Tab label="Login" />
//             </Tabs>
//           )}

//           {/* LOGIN FORM */}
//           {formType === 0 && (
//             <form onSubmit={handleLoginSubmit}>
//               <TextField
//                 fullWidth
//                 label="Email"
//                 margin="normal"
//                 onChange={(e) =>
//                   setLoginData({ ...loginData, email: e.target.value })
//                 }
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <Email />
//                     </InputAdornment>
//                   ),
//                 }}
//               />

//               <TextField
//                 fullWidth
//                 label="Password"
//                 margin="normal"
//                 type={showPassword ? "text" : "password"}
//                 onChange={(e) =>
//                   setLoginData({ ...loginData, password: e.target.value })
//                 }
//                 InputProps={{
//                   startAdornment: (
//                     <InputAdornment position="start">
//                       <Lock />
//                     </InputAdornment>
//                   ),
//                   endAdornment: (
//                     <IconButton
//                       onClick={() => setShowPassword(!showPassword)}
//                     >
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   ),
//                 }}
//               />

//               <Button variant="contained" fullWidth type="submit" sx={{ mt: 2 }}>
//                 Login
//               </Button>
//             </form>
//           )}

//           {/* REGISTER FORM */}
//           {formType === 1 && role !== "student" && (
//             <form onSubmit={handleRegisterSubmit}>
//               <TextField
//                 fullWidth
//                 label="Full Name"
//                 margin="normal"
//                 onChange={(e) =>
//                   setRegisterData({ ...registerData, name: e.target.value })
//                 }
//               />

//               <TextField
//                 fullWidth
//                 label="Email"
//                 margin="normal"
//                 onChange={(e) =>
//                   setRegisterData({ ...registerData, email: e.target.value })
//                 }
//               />

//               <TextField
//                 fullWidth
//                 label="Contact"
//                 margin="normal"
//                 onChange={(e) =>
//                   setRegisterData({ ...registerData, contact: e.target.value })
//                 }
//               />

//               <TextField
//                 fullWidth
//                 label="Password"
//                 type="password"
//                 margin="normal"
//                 onChange={(e) =>
//                   setRegisterData({
//                     ...registerData,
//                     password: e.target.value,
//                   })
//                 }
//               />

//               <TextField
//                 fullWidth
//                 label="Confirm Password"
//                 type="password"
//                 margin="normal"
//                 onChange={(e) =>
//                   setRegisterData({
//                     ...registerData,
//                     confirmPassword: e.target.value,
//                   })
//                 }
//               />

//               <Button variant="contained" fullWidth type="submit" sx={{ mt: 2 }}>
//                 Register
//               </Button>
//             </form>
//           )}
//         </Paper>
//       </Container>
//     </Box>
//   );
// }









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
  Visibility,
  VisibilityOff,
  Close,
  Person,
  Email,
  Lock,
  School,
  AdminPanelSettings,
  People,
} from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const navigate = useNavigate();

  const [roleTab, setRoleTab] = useState(0);
  const [formType, setFormType] = useState(0);
  const [showPassword, setShowPassword] = useState(false);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
  });

  const role = ["student", "parent", "staff", "admin"][roleTab];

  /* LOGIN */
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "http://localhost:8080/api/auth/login",
        {
          ...loginData,
          role,
        }
      );

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      navigate("/dashboard");
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  /* REGISTER */
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (registerData.password !== registerData.confirmPassword) {
      return alert("Passwords do not match");
    }

    try {
      await axios.post(
        "http://localhost:8080/api/auth/register",
        {
          ...registerData,
          role,
        }
      );

      alert("Registration successful");
      setFormType(0);
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center" }}>
      <Container maxWidth="sm">
        <Paper sx={{ p: 4, borderRadius: 3, position: "relative" }}>
          <IconButton
            sx={{ position: "absolute", top: 10, right: 10 }}
            onClick={() => navigate("/")}
          >
            <Close />
          </IconButton>

          <Typography align="center" fontSize={26} fontWeight={700}>
            Mint School Portal
          </Typography>

          {/* ROLE TABS */}
          <Tabs value={roleTab} onChange={(e, v) => setRoleTab(v)} fullWidth>
            <Tab icon={<School />} label="Student" />
            <Tab icon={<People />} label="Parent" />
            <Tab icon={<Person />} label="Staff" />
            <Tab icon={<AdminPanelSettings />} label="Admin" />
          </Tabs>

          {/* LOGIN / REGISTER TABS */}
          <Tabs value={formType} onChange={(e, v) => setFormType(v)} fullWidth>
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>

          {/* LOGIN FORM */}
          {formType === 0 && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                fullWidth
                label="Email"
                margin="normal"
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Email />
                    </InputAdornment>
                  ),
                }}
              />

              <TextField
                fullWidth
                label="Password"
                margin="normal"
                type={showPassword ? "text" : "password"}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
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

              <Button variant="contained" fullWidth type="submit" sx={{ mt: 2 }}>
                Login
              </Button>
            </form>
          )}

          {/* REGISTER FORM */}
          {formType === 1 && (
            <form onSubmit={handleRegisterSubmit}>
              <TextField
                fullWidth
                label="Full Name"
                margin="normal"
                onChange={(e) =>
                  setRegisterData({ ...registerData, name: e.target.value })
                }
              />

              <TextField
                fullWidth
                label="Email"
                margin="normal"
                onChange={(e) =>
                  setRegisterData({ ...registerData, email: e.target.value })
                }
              />

              {/* Contact not required for student */}
              {role !== "student" && (
                <TextField
                  fullWidth
                  label="Contact"
                  margin="normal"
                  onChange={(e) =>
                    setRegisterData({
                      ...registerData,
                      contact: e.target.value,
                    })
                  }
                />
              )}

              <TextField
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    password: e.target.value,
                  })
                }
              />

              <TextField
                fullWidth
                label="Confirm Password"
                type="password"
                margin="normal"
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    confirmPassword: e.target.value,
                  })
                }
              />

              <Button variant="contained" fullWidth type="submit" sx={{ mt: 2 }}>
                Register
              </Button>
            </form>
          )}
        </Paper>
      </Container>
    </Box>
  );
}