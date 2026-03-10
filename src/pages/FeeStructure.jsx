import { useState } from "react";
import InnerPageHeader from "../Components/InnerPageHeader";

function FeeStructure() {

  const [selectedClass, setSelectedClass] = useState("Nursery");

  const feeData = {
    Nursery: {
      admission: 5000,
      tuition: 12000,
      sports: 1500,
      library: 800,
      activity: 1000,
      lab: 0,
    },
    KG: {
      admission: 6000,
      tuition: 15000,
      sports: 1500,
      library: 800,
      activity: 1200,
      lab: 0,
    },
    "Class 1-5": {
      admission: 8000,
      tuition: 22000,
      sports: 2000,
      library: 1000,
      activity: 1500,
      lab: 1200,
    },
    "Class 6-8": {
      admission: 10000,
      tuition: 28000,
      sports: 2500,
      library: 1200,
      activity: 1800,
      lab: 2000,
    },
    "Class 9-10": {
      admission: 12000,
      tuition: 35000,
      sports: 3000,
      library: 1500,
      activity: 2000,
      lab: 3000,
    },
  };

  const fee = feeData[selectedClass];

  const total =
    fee.admission +
    fee.tuition +
    fee.sports +
    fee.library +
    fee.activity +
    fee.lab;

  return (
    <>
      <InnerPageHeader
        title="Fee Structure"
        breadcrumb={[
          { label: "Admission", link: "/admission/procedure" },
          { label: "Fee Structure" },
        ]}
      />

      <div
        style={{
          maxWidth: "900px",
          margin: "60px auto",
          padding: "30px",
          background: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          fontFamily: "Arial",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Academic Fee Structure
        </h2>

        {/* CLASS DROPDOWN */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <label style={{ fontWeight: "bold", marginRight: "10px" }}>
            Select Standard:
          </label>

          <select
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
            style={{
              padding: "8px 12px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              fontSize: "15px",
            }}
          >
            {Object.keys(feeData).map((cls) => (
              <option key={cls} value={cls}>
                {cls}
              </option>
            ))}
          </select>
        </div>

        {/* FEE TABLE */}
        <table
          style={{
            width: "100%",
            borderCollapse: "collapse",
            marginBottom: "20px",
          }}
        >
          <thead>
            <tr style={{ background: "#0a7c5c", color: "white" }}>
              <th style={thStyle}>Fee Type</th>
              <th style={thStyle}>Amount (₹)</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td style={tdStyle}>Admission Fee</td>
              <td style={tdStyle}>{fee.admission}</td>
            </tr>

            <tr>
              <td style={tdStyle}>Tuition Fee (Annual)</td>
              <td style={tdStyle}>{fee.tuition}</td>
            </tr>

            <tr>
              <td style={tdStyle}>Sports Fee</td>
              <td style={tdStyle}>{fee.sports}</td>
            </tr>

            <tr>
              <td style={tdStyle}>Library Fee</td>
              <td style={tdStyle}>{fee.library}</td>
            </tr>

            <tr>
              <td style={tdStyle}>Activity Fee</td>
              <td style={tdStyle}>{fee.activity}</td>
            </tr>

            <tr>
              <td style={tdStyle}>Computer / Lab Fee</td>
              <td style={tdStyle}>{fee.lab}</td>
            </tr>

            <tr style={{ background: "#f5f5f5", fontWeight: "bold" }}>
              <td style={tdStyle}>Total Fee</td>
              <td style={tdStyle}>₹ {total}</td>
            </tr>
          </tbody>
        </table>

        {/* NOTE */}
        <div
          style={{
            background: "#f0f9f7",
            padding: "15px",
            borderRadius: "6px",
            fontSize: "14px",
          }}
        >
          <b>Note:</b>
          <ul style={{ marginTop: "8px", paddingLeft: "18px" }}>
            <li>Admission fee is non-refundable.</li>
            <li>Transport and books are charged separately.</li>
            <li>Fees must be paid before the due date.</li>
          </ul>
        </div>
      </div>
    </>
  );
}

const thStyle = {
  padding: "12px",
  border: "1px solid #ddd",
  textAlign: "left",
};

const tdStyle = {
  padding: "10px",
  border: "1px solid #ddd",
};

export default FeeStructure;