// import { useState } from "react";
// import { QRCodeCanvas } from "qrcode.react";
// import { Alert, CircularProgress } from "@mui/material";

// // Use production URL for backend
// const API_URL = "https://school-backend-6udp.onrender.com";
// // For local testing, use: const API_URL = "http://localhost:5000";

// function FeePayment() {
//   const [className, setClassName] = useState("");
//   const [students, setStudents] = useState([]);
//   const [studentId, setStudentId] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");

//   const [feeData, setFeeData] = useState(null);

//   /* FETCH STUDENTS */

//   const handleClassChange = async (e) => {
//     const value = e.target.value;
//     setClassName(value);

//     setStudents([]);
//     setFeeData(null);
//     setError("");

//     if (!value) return;

//     setLoading(true);

//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch(`${API_URL}/api/fees/students/${value}`, {
//         headers: {
//           Authorization: token ? `Bearer ${token}` : undefined,
//           "Content-Type": "application/json",
//         },
//       });

//       if (!res.ok) {
//         throw new Error(`Server error: ${res.status}`);
//       }

//       const data = await res.json();
//       setStudents(data);
//     } catch (err) {
//       console.error(err);
//       setError(
//         "Failed to load students. Make sure backend is running on port 5000.",
//       );
//     } finally {
//       setLoading(false);
//     }
//   };

//   /* FETCH STUDENT FEES */

//   const handleStudentChange = async (e) => {
//     const id = e.target.value;
//     setStudentId(id);
//     setError("");

//     if (!id) {
//       setFeeData(null);
//       return;
//     }

//     setLoading(true);

//     try {
//       const token = localStorage.getItem("token");
//       const res = await fetch(`${API_URL}/api/fees/student/${id}`, {
//         headers: {
//           Authorization: token ? `Bearer ${token}` : undefined,
//           "Content-Type": "application/json",
//         },
//       });
                                                  
//       if (!res.ok) {
//         throw new Error(`Server error: ${res.status}`);
//       }

//       const data = await res.json();
//       setFeeData(data);
//     } catch (err) {
//       console.error(err);
//       setError("Failed to load fee data. Make sure backend is running.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={{ padding: 40, textAlign: "center" }}>
//       <h2>Online Fee Payment</h2>

//       {error && (
//         <Alert severity="error" sx={{ mb: 2, maxWidth: 500, mx: "auto" }}>
//           {error}
//         </Alert>                              
//       )}

//       {loading && <CircularProgress sx={{ mb: 2 }} />}

//       {/* CLASS SELECT */}

//       <select value={className} onChange={handleClassChange} disabled={loading}>
//         <option value="">Select Standard</option>
//         <option value="1">1st</option>
//         <option value="2">2nd</option>
//         <option value="3">3rd</option>
//         <option value="10">10th</option>
//       </select>

//       <br />                    
//       <br />

//       {/* STUDENT SELECT */}

//       {students.length > 0 && (
//         <select
//           value={studentId}
//           onChange={handleStudentChange}
//           disabled={loading}
//         >
//           <option value="">Select Student</option>

//           {students.map((s) => (
//             <option key={s._id} value={s._id}>
//               {s.name}
//             </option>
//           ))}
//         </select>
//       )}

//       <br />
//       <br />

//       {/* FEE DATA */}

//       {feeData && (
//         <div
//           style={{
//             border: "1px solid #ddd",
//             padding: 20,
//             borderRadius: 10,
//             maxWidth: 350,
//             margin: "auto",
//           }}
//         >
//           <h3>Total Fees: ₹{feeData.totalFees}</h3>

//           <h3>Paid Fees: ₹{feeData.paidFees}</h3>

//           <h3 style={{ color: "red" }}>Pending Fees: ₹{feeData.pendingFees}</h3>

//           {feeData.pendingFees > 0 && (
//             <div style={{ marginTop: 20 }}>
//               <h4>Scan QR to Pay</h4>

//               <QRCodeCanvas
//                 value={`upi://pay?pa=school@upi&pn=SchoolFees&am=${feeData.pendingFees}`}
//                 size={200}
//               />
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }

// export default FeePayment;






import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Alert, CircularProgress } from "@mui/material";

const API_URL = "http://localhost:8080";

function FeePayment() {
  const [className, setClassName] = useState("");
  const [students, setStudents] = useState([]);
  const [studentId, setStudentId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [feeData, setFeeData] = useState(null);

  /* ================= CLASS CHANGE ================= */
  const handleClassChange = async (e) => {
    const value = e.target.value;

    setClassName(value);
    setStudents([]);
    setStudentId("");
    setFeeData(null);
    setError("");

    if (!value) return;

    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/fees/students/${value}`);

      if (!res.ok) {
        throw new Error(`Server Error: ${res.status}`);
      }

      const data = await res.json();

      console.log("Students API:", data);

      if (!Array.isArray(data)) {
        throw new Error("Invalid student data");
      }

      setStudents(data);
    } catch (err) {
      console.error(err);
      setError("❌ Unable to load students. Check backend.");
    } finally {
      setLoading(false);
    }
  };

  /* ================= STUDENT CHANGE ================= */
  const handleStudentChange = async (e) => {
    const id = e.target.value;

    setStudentId(id);
    setFeeData(null);
    setError("");

    if (!id) return;

    setLoading(true);

    try {
      const res = await fetch(`${API_URL}/api/fees/student/${id}`);

      if (!res.ok) {
        throw new Error(`Server Error: ${res.status}`);
      }

      const data = await res.json();

      console.log("Fee Data:", data);

      setFeeData(data);
    } catch (err) {
      console.error(err);
      setError("❌ Unable to load fee data.");
    } finally {
      setLoading(false);
    }
  };

  /* ================= UPI GENERATION ================= */
  const generateUPI = () => {
    if (!feeData) return "test"; // fallback for QR

    const amount = feeData.pendingFees || 1;

    return `upi://pay?pa=school@upi&pn=SchoolFees&am=${amount}&cu=INR`;
  };

  return (
    <div style={{ textAlign: "center", padding: 30 }}>
      <h2>Online Fee Payment</h2>

      {/* ERROR */}
      {error && (
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
      )}

      {/* LOADING */}
      {loading && <CircularProgress />}

      {/* CLASS SELECT */}
      <select value={className} onChange={handleClassChange}>
        <option value="">Select Class</option>
        <option value="1">1st</option>
        <option value="2">2nd</option>
        <option value="10">10th</option>
      </select>

      <br />
      <br />

      {/* STUDENT SELECT */}
      {students.length > 0 ? (
        <select value={studentId} onChange={handleStudentChange}>
          <option value="">Select Student</option>

          {students.map((s) => (
            <option key={s._id} value={s._id}>
              {s.name}
            </option>
          ))}
        </select>
      ) : className && !loading ? (
        <p style={{ color: "red" }}>No students found</p>
      ) : null}

      <br />
      <br />

      {/* FEE DATA */}
      {feeData && (
        <div
          style={{
            border: "1px solid #ccc",
            padding: 20,
            maxWidth: 350,
            margin: "auto",
            borderRadius: 10,
          }}
        >
          <h3>Total: ₹{feeData.totalFees}</h3>
          <h3>Paid: ₹{feeData.paidFees}</h3>
          <h3 style={{ color: "red" }}>
            Pending: ₹{feeData.pendingFees}
          </h3>

          {/* ✅ QR ALWAYS SHOW (DEBUG SAFE) */}
          <div style={{ marginTop: 20 }}>
            <h4>Scan & Pay</h4>

            <QRCodeCanvas value={generateUPI()} size={200} />

            <p style={{ fontSize: 12, marginTop: 10 }}>
              UPI: school@upi
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default FeePayment;