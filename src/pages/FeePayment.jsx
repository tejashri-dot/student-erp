function FeePayment() {
  const styles = {
    container: {
      padding: "60px 20px",
      display: "flex",
      justifyContent: "center",
      background: "linear-gradient(135deg, #ecfdf5, #f0fdf4)",
      minHeight: "80vh",
      fontFamily: "Poppins, sans-serif",
    },
    card: {
      width: "100%",
      maxWidth: "420px",
      backgroundColor: "#ffffff",
      padding: "35px 30px",
      borderRadius: "14px",
      boxShadow: "0 20px 40px rgba(0,0,0,0.08)",
      textAlign: "center",
    },
    title: {
      fontSize: "26px",
      fontWeight: "700",
      marginBottom: "10px",
      color: "#064e3b",
    },
    subtitle: {
      fontSize: "14px",
      color: "#475569",
      marginBottom: "30px",
      lineHeight: "1.6",
    },
    input: {
      width: "100%",
      padding: "14px",
      marginBottom: "18px",
      borderRadius: "8px",
      border: "1px solid #d1fae5",
      fontSize: "14px",
      outline: "none",
      transition: "0.3s",
    },
    button: {
      width: "100%",
      padding: "14px",
      background: "linear-gradient(135deg, #22c55e, #16a34a)",
      color: "#ffffff",
      border: "none",
      borderRadius: "8px",
      fontSize: "15px",
      fontWeight: "600",
      cursor: "pointer",
      transition: "0.3s",
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Online Fee Payment</h2>
        <p style={styles.subtitle}>
          Please enter student details to proceed with payment.
        </p>

        <input
          type="text"
          placeholder="Admission Number"
          style={styles.input}
        />

        <input type="date" style={styles.input} />

        <button
          style={styles.button}
          onMouseEnter={(e) =>
            (e.target.style.boxShadow =
              "0 10px 25px rgba(34,197,94,0.4)")
          }
          onMouseLeave={(e) =>
            (e.target.style.boxShadow = "none")
          }
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}

export default FeePayment;