function FeePayment() {
  return (
    <div className="container" style={{ padding: "60px 0" }}>
      <h2>Online Fee Payment</h2>
      <p>Please enter student details to proceed with payment.</p>

      {/* Example Form UI */}
      <div className="payment-card">
        <input type="text" placeholder="Admission Number" />
        <input type="date" />
        <button className="proceed-btn">Proceed to Payment</button>
      </div>
    </div>
  );
}

export default FeePayment;
