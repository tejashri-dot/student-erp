



// import { useState } from "react";
// import InnerPageHeader from "../Components/InnerPageHeader";
// import styles from "./Contact.module.css";
// import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

// function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     subject: "",
//     message: "",
//   });

//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       const res = await fetch("https://school-backend-6udp.onrender.com/api/contact", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (data.success) {
//         alert("Message sent successfully!");
//         setFormData({
//           name: "",
//           email: "",
//           phone: "",
//           subject: "",
//           message: "",
//         });
//       } else {
//         alert("Failed to send message");
//       }
//     } catch (error) {
//       alert("Server error");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <InnerPageHeader title="Contact" breadcrumb={[{ label: "Contact" }]} />

//      <div className={styles.form}>
//   <div className={styles.field}>
//     <input
//       type="text"
//       name="name"
//       value={formData.name}
//       onChange={handleChange}
//       required
//     />
//     <label>Name</label>
//   </div>

//   <div className={styles.row}>
//     <div className={styles.field}>
//       <input
//         type="email"
//         name="email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />
//       <label>Email</label>
//     </div>

//     <div className={styles.field}>
//       <input
//         type="text"
//         name="phone"
//         value={formData.phone}
//         onChange={handleChange}
//       />
//       <label>Phone</label>
//     </div>
//   </div>

//   <div className={styles.field}>
//     <input
//       type="text"
//       name="subject"
//       value={formData.subject}
//       onChange={handleChange}
//     />
//     <label>Subject</label>
//   </div>

//   <div className={styles.field}>
//     <textarea
//       rows="4"
//       name="message"
//       value={formData.message}
//       onChange={handleChange}
//       required
//     />
//     <label>Message</label>
//   </div>

//   <button className={styles.btn} disabled={loading}>
//     {loading ? "Sending..." : "Send Message"}
//   </button>
// </div>
//     </>
//   );
// }

// export default Contact;






import { useState } from "react";
import InnerPageHeader from "../Components/InnerPageHeader";
import styles from "./Contact.module.css";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 🔥 Basic Validation
    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all required fields");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch(
        "https://school-backend-6udp.onrender.com/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // ✅ Handle HTTP errors
      if (!res.ok) {
        throw new Error(`Server Error: ${res.status}`);
      }

      const data = await res.json();

      if (data.success) {
        alert("✅ Message sent successfully!");

        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert(data.message || "❌ Failed to send message");
      }
    } catch (error) {
      console.error("ERROR:", error);
      alert("❌ Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <InnerPageHeader title="Contact" breadcrumb={[{ label: "Contact" }]} />

      {/* ✅ FORM START */}
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.field}>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label>Name</label>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <label>Email</label>
          </div>

          <div className={styles.field}>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
            <label>Phone</label>
          </div>
        </div>

        <div className={styles.field}>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <label>Subject</label>
        </div>

        <div className={styles.field}>
          <textarea
            rows="4"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <label>Message</label>
        </div>

        <button type="submit" className={styles.btn} disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
      {/* ✅ FORM END */}
    </>
  );
}

export default Contact;  