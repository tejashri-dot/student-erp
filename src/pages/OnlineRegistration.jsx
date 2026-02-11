import React, { useState } from "react";

function OnlineRegistration() {
  const [showPassword, setShowPassword] = useState(false);

  const styles = {
    page: {
      display: "flex",
      height: "100vh",
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f5f6fa",
    },

    leftPanel: {
      flex: 1,
      backgroundImage:
        "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6')",
      backgroundSize: "cover",
      backgroundPosition: "center",
    },

    rightPanel: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ffffff",
    },

    card: {
      width: "380px",
      padding: "35px",
      borderRadius: "12px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
      textAlign: "center",
    },

    logo: {
      fontSize: "32px",
      fontWeight: "bold",
      color: "#e91e63",
      marginBottom: "10px",
    },

    heading: {
      fontSize: "22px",
      fontWeight: "600",
      marginBottom: "25px",
    },

    inputGroup: {
      textAlign: "left",
      marginBottom: "18px",
    },

    label: {
      fontSize: "13px",
      color: "#555",
      marginBottom: "6px",
      display: "block",
    },

    input: {
      width: "100%",
      padding: "10px",
      borderRadius: "6px",
      border: "1px solid #ddd",
      fontSize: "14px",
      outline: "none",
    },

    passwordWrapper: {
      position: "relative",
    },

    togglePassword: {
      position: "absolute",
      right: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
      fontSize: "12px",
      color: "#666",
    },

    row: {
      display: "flex",
      justifyContent: "space-between",
      fontSize: "12px",
      marginBottom: "18px",
    },

    primaryBtn: {
      width: "100%",
      padding: "11px",
      backgroundColor: "#2c1a4d",
      color: "#fff",
      border: "none",
      borderRadius: "6px",
      fontSize: "14px",
      cursor: "pointer",
      marginBottom: "15px",
    },

    divider: {
      margin: "10px 0",
      fontSize: "12px",
      color: "#888",
    },

    roleBtn: (color) => ({
      width: "100%",
      padding: "10px",
      marginBottom: "10px",
      borderRadius: "6px",
      border: "none",
      fontSize: "13px",
      fontWeight: "500",
      cursor: "pointer",
      backgroundColor: color,
      color: "#fff",
    }),

    quickLinks: {
      display: "flex",
      justifyContent: "center",
      gap: "8px",
      flexWrap: "wrap",
      marginTop: "10px",
    },

    chip: {
      fontSize: "11px",
      padding: "6px 10px",
      borderRadius: "20px",
      backgroundColor: "#2c1a4d",
      color: "#fff",
      cursor: "pointer",
    },

    footer: {
      fontSize: "11px",
      marginTop: "15px",
      color: "#777",
    },
  };

  return (
    <div style={styles.page}>
      {/* Left Image */}
      <div style={styles.leftPanel}></div>

      {/* Right Form */}
      <div style={styles.rightPanel}>
        <div style={styles.card}>
          <div style={styles.logo}>K</div>
          <div style={styles.heading}>Sign In</div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email or Username</label>
            <input type="text" placeholder="Enter username" style={styles.input} />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.passwordWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                style={styles.input}
              />
              <span
                style={styles.togglePassword}
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Hide" : "Show"}
              </span>
            </div>
          </div>

          <div style={styles.row}>
            <label>
              <input type="checkbox" /> Remember Me
            </label>
            <span style={{ color: "#6a1b9a", cursor: "pointer" }}>
              Forgot Password
            </span>
          </div>

          <button style={styles.primaryBtn}>Sign In</button>

          <div style={styles.divider}>— OR —</div>

          <button style={styles.roleBtn("#2ecc71")}>Login as Admin</button>
          <button style={styles.roleBtn("#f1c40f")}>Login as Staff</button>
          <button style={styles.roleBtn("#3498db")}>Login as Student</button>
          <button style={styles.roleBtn("#e74c3c")}>Login as Guardian</button>

          <div style={styles.quickLinks}>
            <div style={styles.chip}>Latest Updates</div>
            <div style={styles.chip}>Online Payment</div>
            <div style={styles.chip}>Job Application</div>
            <div style={styles.chip}>TC Verification</div>
          </div>

          <div style={styles.footer}>
            Version 5.5.0 | Designed with ❤️ by ScriptMint
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineRegistration;
