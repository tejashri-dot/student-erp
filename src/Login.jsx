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

//   const [roleTab, setRoleTab] = useState(0);
//   const [formType, setFormType] = useState(0);
//   const [showPassword, setShowPassword] = useState(false);

//   const [loginData, setLoginData] = useState({
//   email: "",
//   password: "",
//   rollNumber: "",
//   className: ""
// });

//   const [registerData, setRegisterData] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const role = ["student", "parent", "staff", "admin"][roleTab];

//   /* LOGIN */
//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();

//     try {
//      const res = await axios.post(
//   "http://localhost:8080/api/auth/login",
//   {
//     email: loginData.email,
//     password: loginData.password,
//     rollNumber: loginData.rollNumber,
//     className: loginData.className,
//     role
//   }
// );

//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data.user));

//       if (res.data.user.role === "parent") {
//         navigate("/parent");
//       } else {
//         navigate("/dashboard");
//       }
//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   /* REGISTER */
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
//            School Portal
//           </Typography>

//              {/* LOGIN / REGISTER */}
//           <Tabs value={formType} onChange={(e, v) => setFormType(v)} fullWidth>
//             <Tab label="Login" />
//             <Tab label="Register" />
//           </Tabs>

//           {/* ROLE TABS */}
//           <Tabs value={roleTab} onChange={(e, v) => setRoleTab(v)} fullWidth>
//             <Tab icon={<School />} label="Student" />
//             <Tab icon={<People />} label="Parent" />
//             <Tab icon={<Person />} label="Staff" />
//             <Tab icon={<AdminPanelSettings />} label="Admin" />
//           </Tabs>

       

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

//            {role === "student" && (
//   <>
//     {/* CLASS DROPDOWN */}
//     <TextField
//       select
//       fullWidth
//       label="Class"
//       margin="normal"
//       value={loginData.className}
//       onChange={(e) =>
//         setLoginData({
//           ...loginData,
//           className: e.target.value,
//         })
//       }
//       SelectProps={{ native: true }}
//     >
//       <option value="">Select Class</option>
//       <option value="KG">KG</option>
//       <option value="1">Class 1</option>
//       <option value="2">Class 2</option>
//       <option value="3">Class 3</option>
//       <option value="4">Class 4</option>
//       <option value="5">Class 5</option>
//       <option value="6">Class 6</option>
//       <option value="7">Class 7</option>
//       <option value="8">Class 8</option>
//       <option value="9">Class 9</option>
//       <option value="10">Class 10</option>
//     </TextField>

//     {/* ROLL NUMBER */}
//     <TextField
//       fullWidth
//       label="Roll Number"
//       margin="normal"
//       onChange={(e) =>
//         setLoginData({
//           ...loginData,
//           rollNumber: e.target.value,
//         })
//       }
//     />
//   </>
// )}

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
//           {formType === 1 && (
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

//               {role !== "student" && (
//                 <TextField
//                   fullWidth
//                   label="Contact"
//                   margin="normal"
//                   onChange={(e) =>
//                     setRegisterData({
//                       ...registerData,
//                       contact: e.target.value,
//                     })
//                   }
//                 />
//               )}

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
//   Avatar,
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

//   const [roleTab, setRoleTab] = useState(0);
//   const [formType, setFormType] = useState(0);
//   const [showPassword, setShowPassword] = useState(false);

//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//     rollNumber: "",
//     className: "",
//   });

//   const [registerData, setRegisterData] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const role = ["student", "parent", "staff", "admin"][roleTab];

//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();

//     try {
//      const res = await axios.post(
//   "https://school-backend-6udp.onrender.com/api/auth/login",
//   {
//     email: loginData.email,
//     password: loginData.password,
//     rollNumber: loginData.rollNumber,
//     className: loginData.className,
//     role
//   }
// );

//       localStorage.setItem("token", res.data.token);
//       localStorage.setItem("user", JSON.stringify(res.data.user));

//       navigate(res.data.user.role === "parent" ? "/parent" : "/dashboard");
//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

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
//     <Box
//       sx={{
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//         background: "linear-gradient(135deg, #667eea, #764ba2)",
//       }}
//     >
//       <Container maxWidth="sm">
//         <Paper
//           sx={{
//             p: 4,
//             borderRadius: 4,
//             boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
//             position: "relative",
//           }}
//         >
//           <IconButton
//             sx={{ position: "absolute", top: 10, right: 10 }}
//             onClick={() => navigate("/")}
//           >
//             <Close />
//           </IconButton>

//           {/* Logo */}
//           <Box display="flex" justifyContent="center" mb={2}>
//             <Avatar sx={{ bgcolor: "#1976d2", width: 60, height: 60 }}>
//               <School fontSize="large" />
//             </Avatar>
//           </Box>

//           <Typography align="center" fontSize={26} fontWeight={700} mb={2}>
//             School Portal
//           </Typography>

//           {/* Tabs */}
//           <Tabs
//             value={formType}
//             onChange={(e, v) => setFormType(v)}
//             fullWidth
//             sx={{ mb: 2 }}
//           >
//             <Tab label="Login" />
//             <Tab label="Register" />
//           </Tabs>

//           {/* Role Tabs */}
//           <Tabs
//             value={roleTab}
//             onChange={(e, v) => setRoleTab(v)}
//             variant="fullWidth"
//             sx={{ mb: 2 }}
//           >
//             <Tab icon={<School />} label="Student" />
//             <Tab icon={<People />} label="Parent" />
//             <Tab icon={<Person />} label="Staff" />
//             <Tab icon={<AdminPanelSettings />} label="Admin" />
//           </Tabs>

//           {/* LOGIN */}
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

//               {role === "student" && (
//                 <>
//                   <TextField
//                     select
//                     fullWidth
//                     label="Class"
//                     margin="normal"
//                     value={loginData.className}
//                     onChange={(e) =>
//                       setLoginData({
//                         ...loginData,
//                         className: e.target.value,
//                       })
//                     }
//                     SelectProps={{ native: true }}
//                   >
//                     <option value="">Select Class</option>
//                     {[...Array(10)].map((_, i) => (
//                       <option key={i} value={i + 1}>
//                         Class {i + 1}
//                       </option>
//                     ))}
//                   </TextField>

//                   <TextField
//                     fullWidth
//                     label="Roll Number"
//                     margin="normal"
//                     onChange={(e) =>
//                       setLoginData({
//                         ...loginData,
//                         rollNumber: e.target.value,
//                       })
//                     }
//                   />
//                 </>
//               )}

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
//                     <IconButton onClick={() => setShowPassword(!showPassword)}>
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   ),
//                 }}
//               />

//               <Button
//                 variant="contained"
//                 fullWidth
//                 type="submit"
//                 sx={{ mt: 3, py: 1.2, borderRadius: 2 }}
//               >
//                 Login
//               </Button>
//             </form>
//           )}

//           {/* REGISTER */}
//           {formType === 1 && (
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

//               {role !== "student" && (
//                 <TextField
//                   fullWidth
//                   label="Contact"
//                   margin="normal"
//                   onChange={(e) =>
//                     setRegisterData({
//                       ...registerData,
//                       contact: e.target.value,
//                     })
//                   }
//                 />
//               )}

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

//               <Button
//                 variant="contained"
//                 fullWidth
//                 type="submit"
//                 sx={{ mt: 3, py: 1.2, borderRadius: 2 }}
//               >
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
//   Tabs,
//   Tab,
//   Avatar,
// } from "@mui/material";

// import { School } from "@mui/icons-material";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export default function Login() {
//   const navigate = useNavigate();

//   const [roleTab, setRoleTab] = useState(0);
//   const [formType, setFormType] = useState(0);

//   const [loginData, setLoginData] = useState({
//     email: "",
//     password: "",
//     rollNumber: "",
//     className: "",
//   });

//   const [registerData, setRegisterData] = useState({
//     name: "",
//     email: "",
//     contact: "",
//     password: "",
//     confirmPassword: "",
//     className: "",     // ✅ ADDED
//     rollNumber: "",    // ✅ ADDED
//   });

//   const role = ["student", "parent", "staff", "admin"][roleTab];

//   /* ================= LOGIN ================= */
//   const handleLoginSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await axios.post(
//         "https://school-backend-6udp.onrender.com/api/auth/login",
//         {
//           ...loginData,
//           role,
//         }
//       );

//       localStorage.setItem("token", res.data.token);
//       navigate("/dashboard");

//     } catch (err) {
//       alert(err.response?.data?.message || "Login failed");
//     }
//   };

//   /* ================= REGISTER ================= */
//   const handleRegisterSubmit = async (e) => {
//     e.preventDefault();

//     if (!registerData.name || !registerData.email || !registerData.password) {
//       return alert("Fill all required fields");
//     }

//     if (registerData.password !== registerData.confirmPassword) {
//       return alert("Passwords do not match");
//     }

//     /* ✅ STUDENT VALIDATION */
//     if (role === "student") {
//       if (!registerData.className || !registerData.rollNumber) {
//         return alert("Class and Roll Number required");
//       }
//     }

//     try {
//       const payload = {
//         name: registerData.name,
//         email: registerData.email,
//         password: registerData.password,
//         role,
//       };

//       if (role === "student") {
//         payload.className = registerData.className;
//         payload.rollNumber = registerData.rollNumber;
//       } else {
//         payload.contact = registerData.contact;
//       }

//       await axios.post(
//         "https://school-backend-6udp.onrender.com/api/auth/register",
//         payload
//       );

//       alert("Registration successful ✅");
//       setFormType(0);     

//     } catch (err) {
//       alert(err.response?.data?.message || "Registration failed");
//     }
//   };

//   return (
//     <Box sx={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
//       <Container maxWidth="sm">
//         <Paper sx={{ p: 4 }}>
//           <Box textAlign="center">
//             <Avatar sx={{ bgcolor: "#1976d2", margin: "auto" }}>
//               <School />
//             </Avatar>
//             <Typography variant="h5">School Portal</Typography>
//           </Box>

//           <Tabs value={formType} onChange={(e, v) => setFormType(v)} centered>
//             <Tab label="Login" />
//             <Tab label="Register" />
//           </Tabs>

//           <Tabs value={roleTab} onChange={(e, v) => setRoleTab(v)} centered>
//             <Tab label="Student" />
//             <Tab label="Parent" />
//             <Tab label="Staff" />
//             <Tab label="Admin" />
//           </Tabs>

//           {/* LOGIN */}
//           {formType === 0 && (
//             <form onSubmit={handleLoginSubmit}>
//               <TextField fullWidth label="Email" margin="normal"
//                 onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
//               />

//               {role === "student" && (
//                 <>
//                   <TextField fullWidth label="Class" margin="normal"
//                     onChange={(e) => setLoginData({ ...loginData, className: e.target.value })}
//                   />
//                   <TextField fullWidth label="Roll Number" margin="normal"
//                     onChange={(e) => setLoginData({ ...loginData, rollNumber: e.target.value })}
//                   />
//                 </>
//               )}

//               <TextField fullWidth label="Password" type="password" margin="normal"
//                 onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
//               />

//               <Button fullWidth type="submit" variant="contained">Login</Button>
//             </form>
//           )}

//           {/* REGISTER */}
//           {formType === 1 && (
//             <form onSubmit={handleRegisterSubmit}>
//               <TextField fullWidth label="Name" margin="normal"
//                 onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
//               />

//               <TextField fullWidth label="Email" margin="normal"
//                 onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
//               />

//               {/* ✅ STUDENT FIELDS */}
//               {role === "student" && (
//                 <>
//                   <TextField fullWidth label="Class" margin="normal"
//                     onChange={(e) => setRegisterData({ ...registerData, className: e.target.value })}
//                   />
//                   <TextField fullWidth label="Roll Number" margin="normal"
//                     onChange={(e) => setRegisterData({ ...registerData, rollNumber: e.target.value })}
//                   />
//                 </>
//               )}

//               {/* NON-STUDENT */}
//               {role !== "student" && (
//                 <TextField fullWidth label="Contact" margin="normal"
//                   onChange={(e) => setRegisterData({ ...registerData, contact: e.target.value })}
//                 />
//               )}

//               <TextField fullWidth label="Password" type="password" margin="normal"
//                 onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
//               />

//               <TextField fullWidth label="Confirm Password" type="password" margin="normal"
//                 onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
//               />

//               <Button fullWidth type="submit" variant="contained">
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
  Tabs,
  Tab,
  Avatar,
  CircularProgress,
} from "@mui/material";

import { School } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

/* ✅ AXIOS INSTANCE */
const API = axios.create({
  baseURL: "https://school-backend-6udp.onrender.com/api",
});

export default function Login() {
  const navigate = useNavigate();

  const [roleTab, setRoleTab] = useState(0);
  const [formType, setFormType] = useState(0);
  const [loading, setLoading] = useState(false);

  const role = ["student", "parent", "staff", "admin"][roleTab];

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    className: "",
    rollNumber: "",
  });

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    contact: "",
    password: "",
    confirmPassword: "",
    className: "",
    rollNumber: "",
  });

  /* ================= LOGIN ================= */
  const handleLoginSubmit = async (e) => {
    e.preventDefault();

    if (!loginData.email || !loginData.password) {
      return alert("Please fill all fields");
    }

    if (role === "student") {
      if (!loginData.className || !loginData.rollNumber) {
        return alert("Class & Roll Number required");
      }
    }

    try {
      setLoading(true);

      const res = await API.post("/auth/login", {
        email: loginData.email,
        password: loginData.password,
        role,
        className: String(loginData.className),
        rollNumber: String(loginData.rollNumber),
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login successful ✅");

      /* ✅ ROLE BASED ROUTING */
      if (res.data.user.role === "parent") {
        navigate("/parent");
      } else if (res.data.user.role === "student") {
        navigate("/student");
      } else {
        navigate("/dashboard");
      }

    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  /* ================= REGISTER ================= */
  const handleRegisterSubmit = async (e) => {
    e.preventDefault();

    if (!registerData.name || !registerData.email || !registerData.password) {
      return alert("Fill all required fields");
    }

    if (registerData.password !== registerData.confirmPassword) {
      return alert("Passwords do not match");
    }

    if (role === "student") {
      if (!registerData.className || !registerData.rollNumber) {
        return alert("Class & Roll Number required");
      }
    } else {
      if (!registerData.contact) {
        return alert("Contact required");
      }
    }

    try {
      setLoading(true);

      const payload = {
        name: registerData.name,
        email: registerData.email,
        password: registerData.password,
        role,
      };

      if (role === "student") {
        payload.className = registerData.className;
        payload.rollNumber = registerData.rollNumber;
      } else {
        payload.contact = registerData.contact;
      }

      await API.post("/auth/register", payload);

      alert("Registration successful ✅");

      setFormType(0);
      setRegisterData({
        name: "",
        email: "",
        contact: "",
        password: "",
        confirmPassword: "",
        className: "",
        rollNumber: "",
      });

    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(135deg,#667eea,#764ba2)",
      }}
    >
      <Container maxWidth="sm">
        <Paper sx={{ p: 4, borderRadius: 3 }}>
          <Box textAlign="center" mb={2}>
            <Avatar sx={{ bgcolor: "#1976d2", margin: "auto" }}>
              <School />
            </Avatar>
            <Typography variant="h5">School Portal</Typography>
          </Box>

          {/* FORM TYPE */}
          <Tabs value={formType} onChange={(e, v) => setFormType(v)} centered>
            <Tab label="Login" />
            <Tab label="Register" />
          </Tabs>

          {/* ROLE */}
          <Tabs value={roleTab} onChange={(e, v) => setRoleTab(v)} centered>
            <Tab label="Student" />
            <Tab label="Parent" />
            <Tab label="Staff" />
            <Tab label="Admin" />
          </Tabs>

          {/* ================= LOGIN ================= */}
          {formType === 0 && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                fullWidth
                label="Email"
                margin="normal"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
              />

              {role === "student" && (
                <>
                  <TextField
                    fullWidth
                    label="Class"
                    margin="normal"
                    value={loginData.className}
                    onChange={(e) =>
                      setLoginData({
                        ...loginData,
                        className: e.target.value,
                      })
                    }
                  />
                  <TextField
                    fullWidth
                    label="Roll Number"
                    margin="normal"
                    value={loginData.rollNumber}
                    onChange={(e) =>
                      setLoginData({
                        ...loginData,
                        rollNumber: e.target.value,
                      })
                    }
                  />
                </>
              )}

              <TextField
                fullWidth
                label="Password"
                type="password"
                margin="normal"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />

              <Button fullWidth type="submit" variant="contained">
                {loading ? <CircularProgress size={24} /> : "Login"}
              </Button>
            </form>
          )}

          {/* ================= REGISTER ================= */}
          {formType === 1 && (
            <form onSubmit={handleRegisterSubmit}>
              <TextField
                fullWidth
                label="Name"
                margin="normal"
                value={registerData.name}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    name: e.target.value,
                  })
                }
              />

              <TextField
                fullWidth
                label="Email"
                margin="normal"
                value={registerData.email}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    email: e.target.value,
                  })
                }
              />

              {role === "student" && (
                <>
                  <TextField
                    fullWidth
                    label="Class"
                    margin="normal"
                    value={registerData.className}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        className: e.target.value,
                      })
                    }
                  />
                  <TextField
                    fullWidth
                    label="Roll Number"
                    margin="normal"
                    value={registerData.rollNumber}
                    onChange={(e) =>
                      setRegisterData({
                        ...registerData,
                        rollNumber: e.target.value,
                      })
                    }
                  />
                </>
              )}

              {role !== "student" && (
                <TextField
                  fullWidth
                  label="Contact"
                  margin="normal"
                  value={registerData.contact}
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
                value={registerData.password}
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
                value={registerData.confirmPassword}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    confirmPassword: e.target.value,
                  })
                }
              />

              <Button fullWidth type="submit" variant="contained">
                {loading ? <CircularProgress size={24} /> : "Register"}
              </Button>
            </form>
          )}
        </Paper>
      </Container>
    </Box>
  );
}