import React, { useState } from "react";

function OnlineRegistration() {
  const [showPassword, setShowPassword] = useState(false);

  const styles = {
    page: {
      display: "flex",
      minHeight: "100vh",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      backgroundColor: "#f0f2f5",
    },

    leftPanel: {
      flex: 1,
      backgroundImage:
        "url('https://images.unsplash.com/photo-1501004318641-b39e6451bec6')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      position: "relative",
    },

    leftOverlay: {
      position: "absolute",
      inset: 0,
      backgroundColor: "rgba(44, 26, 77, 0.7)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px",
    },

    leftTitle: {
      fontSize: "42px",
      fontWeight: "700",
      color: "#fff",
      marginBottom: "16px",
      textAlign: "center",
    },

    leftSubtitle: {
      fontSize: "18px",
      color: "rgba(255,255,255,0.85)",
      textAlign: "center",
      maxWidth: "400px",
      lineHeight: "1.6",
    },

    rightPanel: {
      flex: 1,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#ffffff",
      padding: "20px",
    },

    card: {
      width: "100%",
      maxWidth: "420px",
      padding: "40px",
      borderRadius: "16px",
      boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
      backgroundColor: "#fff",
      border: "1px solid #e8e8e8",
    },

    logoContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "12px",
      marginBottom: "8px",
    },

    logoIcon: {
      width: "48px",
      height: "48px",
      backgroundColor: "#e91e63",
      borderRadius: "12px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "#fff",
      fontSize: "24px",
      fontWeight: "bold",
    },

    logo: {
      fontSize: "28px",
      fontWeight: "700",
      color: "#1a1a2e",
    },

    heading: {
      fontSize: "24px",
      fontWeight: "600",
      marginBottom: "8px",
      color: "#1a1a2e",
      textAlign: "center",
    },

    subheading: {
      fontSize: "14px",
      color: "#666",
      marginBottom: "28px",
      textAlign: "center",
    },

    inputGroup: {
      marginBottom: "20px",
    },

    label: {
      fontSize: "13px",
      fontWeight: "500",
      color: "#333",
      marginBottom: "8px",
      display: "block",
    },

    input: {
      width: "100%",
      padding: "12px 16px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      fontSize: "14px",
      outline: "none",
      transition: "border-color 0.2s, box-shadow 0.2s",
      boxSizing: "border-box",
      backgroundColor: "#fafafa",
    },

    inputFocus: {
      borderColor: "#e91e63",
      boxShadow: "0 0 0 3px rgba(233, 30, 99, 0.1)",
      backgroundColor: "#fff",
    },

    passwordWrapper: {
      position: "relative",
    },

    togglePassword: {
      position: "absolute",
      right: "14px",
      top: "50%",
      transform: "translateY(-50%)",
      cursor: "pointer",
      fontSize: "13px",
      color: "#888",
      fontWeight: "500",
      userSelect: "none",
    },

    row: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "24px",
      fontSize: "13px",
    },

    checkboxLabel: {
      display: "flex",
      alignItems: "center",
      gap: "8px",
      color: "#555",
      cursor: "pointer",
    },

    primaryBtn: {
      width: "100%",
      padding: "14px",
      backgroundColor: "#e91e63",
      color: "#fff",
      border: "none",
      borderRadius: "8px",
      fontSize: "15px",
      fontWeight: "600",
      cursor: "pointer",
      marginBottom: "20px",
      transition: "background-color 0.2s, transform 0.1s",
    },

    divider: {
      display: "flex",
      alignItems: "center",
      margin: "20px 0",
      fontSize: "12px",
      color: "#999",
    },

    dividerLine: {
      flex: 1,
      height: "1px",
      backgroundColor: "#eee",
    },

    dividerText: {
      padding: "0 16px",
    },

    roleBtn: (color, hoverColor) => ({
      width: "100%",
      padding: "12px",
      marginBottom: "10px",
      borderRadius: "8px",
      border: `1px solid ${color}`,
      fontSize: "14px",
      fontWeight: "500",
      cursor: "pointer",
      backgroundColor: "transparent",
      color: color,
      transition: "all 0.2s",
    }),

    quickLinks: {
      display: "flex",
      justifyContent: "center",
      gap: "10px",
      flexWrap: "wrap",
      marginTop: "24px",
    },

    chip: {
      fontSize: "12px",
      padding: "8px 14px",
      borderRadius: "20px",
      backgroundColor: "#f5f5f5",
      color: "#555",
      cursor: "pointer",
      border: "1px solid #eee",
      transition: "all 0.2s",
    },

    footer: {
      fontSize: "12px",
      marginTop: "24px",
      color: "#999",
      textAlign: "center",
    },

    forgotPassword: {
      color: "#e91e63",
      cursor: "pointer",
      fontWeight: "500",
      textDecoration: "none",
    },

    socialDivider: {
      display: "flex",
      alignItems: "center",
      margin: "24px 0",
    },

    socialBtn: {
      flex: 1,
      padding: "10px",
      borderRadius: "8px",
      border: "1px solid #ddd",
      backgroundColor: "#fff",
      cursor: "pointer",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "8px",
      fontSize: "13px",
      color: "#555",
    },
  };

  return (
    <div style={styles.page}>
      {/* Left Image */}
      <div style={styles.leftPanel}>
        <div style={styles.leftOverlay}>
          <div style={styles.logoContainer}>
            <div style={styles.logoIcon}>K</div>
          </div>
          <h1 style={styles.leftTitle}>Karma School</h1>
          <p style={styles.leftSubtitle}>
            Empowering students with quality education and values for a brighter
            future
          </p>
        </div>
      </div>

      {/* Right Form */}
      <div style={styles.rightPanel}>
        <div style={styles.card}>
          <div style={styles.logoContainer}>
            <div style={styles.logoIcon}>K</div>
            <span style={styles.logo}>Karma</span>
          </div>
          <h2 style={styles.heading}>Welcome Back</h2>
          <p style={styles.subheading}>Sign in to access your dashboard</p>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Email Address</label>
            <input
              type="text"
              placeholder="Enter your email"
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <div style={styles.passwordWrapper}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                style={{ ...styles.input, paddingRight: "50px" }}
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
            <label style={styles.checkboxLabel}>
              <input type="checkbox" />
              Remember me
            </label>
            <span style={styles.forgotPassword}>Forgot Password?</span>
          </div>

          <button style={styles.primaryBtn}>Sign In</button>

          <div style={styles.divider}>
            <span style={styles.dividerLine}></span>
            <span style={styles.dividerText}>OR</span>
            <span style={styles.dividerLine}></span>
          </div>

          <p
            style={{
              ...styles.subheading,
              marginBottom: "16px",
              fontSize: "13px",
            }}
          >
            Quick login as:
          </p>

          <button style={styles.roleBtn("#2c1a4d")}>Login as Admin</button>
          <button style={styles.roleBtn("#f1c40f")}>Login as Staff</button>
          <button style={styles.roleBtn("#3498db")}>Login as Student</button>
          <button style={styles.roleBtn("#e74c3c")}>Login as Guardian</button>

          <div style={styles.quickLinks}>
            <span style={styles.chip}>Latest Updates</span>
            <span style={styles.chip}>Online Payment</span>
            <span style={styles.chip}>Job Application</span>
            <span style={styles.chip}>TC Verification</span>
          </div>

          <div style={styles.footer}>
            <p>Version 5.5.0 | Designed with ❤️ by ScriptMint</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OnlineRegistration;
