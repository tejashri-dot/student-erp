import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Alert, CircularProgress } from "@mui/material";

// Use production URL for backend
const API_URL = "https://school-backend-6udp.onrender.com";
// For local testing, use: const API_URL = "http://localhost:5000";

function FeePayment() {
  const [className, setClassName] = useState("");
  const [students, setStudents] = useState([]);
  const [studentId, setStudentId] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [feeData, setFeeData] = useState(null);

  /* FETCH STUDENTS */

  const handleClassChange = async (e) => {
    const value = e.target.value;
    setClassName(value);

    setStudents([]);
    setFeeData(null);
    setError("");

    if (!value) return;

    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_URL}/api/fees/students/${value}`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : undefined,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();
      setStudents(data);
    } catch (err) {
      console.error(err);
      setError(
        "Failed to load students. Make sure backend is running on port 5000.",
      );
    } finally {
      setLoading(false);
    }
  };

  /* FETCH STUDENT FEES */

  const handleStudentChange = async (e) => {
    const id = e.target.value;
    setStudentId(id);
    setError("");

    if (!id) {
      setFeeData(null);
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      const res = await fetch(`${API_URL}/api/fees/student/${id}`, {
        headers: {
          Authorization: token ? `Bearer ${token}` : undefined,
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error(`Server error: ${res.status}`);
      }

      const data = await res.json();
      setFeeData(data);
    } catch (err) {
      console.error(err);
      setError("Failed to load fee data. Make sure backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ padding: 40, textAlign: "center" }}>
      <h2>Online Fee Payment</h2>

      {error && (
        <Alert severity="error" sx={{ mb: 2, maxWidth: 500, mx: "auto" }}>
          {error}
        </Alert>
      )}

      {loading && <CircularProgress sx={{ mb: 2 }} />}

      {/* CLASS SELECT */}

      <select value={className} onChange={handleClassChange} disabled={loading}>
        <option value="">Select Standard</option>
        <option value="1">1st</option>
        <option value="2">2nd</option>
        <option value="3">3rd</option>
        <option value="10">10th</option>
      </select>

      <br />
      <br />

      {/* STUDENT SELECT */}

      {students.length > 0 && (
        <select
          value={studentId}
          onChange={handleStudentChange}
          disabled={loading}
        >
          <option value="">Select Student</option>

          {students.map((s) => (
            <option key={s._id} value={s._id}>
              {s.name}
            </option>
          ))}
        </select>
      )}

      <br />
      <br />

      {/* FEE DATA */}

      {feeData && (
        <div
          style={{
            border: "1px solid #ddd",
            padding: 20,
            borderRadius: 10,
            maxWidth: 350,
            margin: "auto",
          }}
        >
          <h3>Total Fees: ₹{feeData.totalFees}</h3>

          <h3>Paid Fees: ₹{feeData.paidFees}</h3>

          <h3 style={{ color: "red" }}>Pending Fees: ₹{feeData.pendingFees}</h3>

          {feeData.pendingFees > 0 && (
            <div style={{ marginTop: 20 }}>
              <h4>Scan QR to Pay</h4>

              <QRCodeCanvas
                value={`upi://pay?pa=school@upi&pn=SchoolFees&am=${feeData.pendingFees}`}
                size={200}
              />
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default FeePayment;
