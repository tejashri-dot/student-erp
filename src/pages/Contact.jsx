// import InnerPageHeader from "../Components/InnerPageHeader";
// import styles from "./Contact.module.css";

// function Contact() {
//   return (
//     <>
//       <InnerPageHeader
//         title="Contact"
//         breadcrumb={[{ label: "Contact" }]}
//       />

//       <div className={styles.wrapper}>
//         <div className="container">
//           <h2 className={styles.title}>Contact</h2>
//           <p className={styles.subtitle}>
//             Get in touch with us for more information.
//           </p>
//           <p className={styles.desc}>
//             We'd love to hear from you! Whether you have questions, need
//             assistance, or want to know more about Mint International School,
//             our team is here to help.
//           </p>

//           {/* Contact Form */}
//           <form className={styles.form}>
//             <div className={styles.field}>
//               <label>Name</label>
//               <input type="text" placeholder="Your Name" />
//             </div>

//             <div className={styles.row}>
//               <div className={styles.field}>
//                 <label>Email</label>
//                 <input type="email" placeholder="Your Email" />
//               </div>

//               <div className={styles.field}>
//                 <label>Phone</label>
//                 <input type="text" placeholder="Your Phone" />
//               </div>
//             </div>

//             <div className={styles.field}>
//               <label>Subject</label>
//               <input type="text" placeholder="Your Subject" />
//             </div>

//             <div className={styles.field}>
//               <label>Message</label>
//               <textarea rows="4" placeholder="Type Your Message..." />
//             </div>

//             <button type="submit" className={styles.btn}>
//               Send ✈
//             </button>
//           </form>

//           {/* Contact Info */}
//           <div className={styles.infoGrid}>
//             <div className={styles.infoCard}>
//               <span className={styles.icon}>✉</span>
//               <h4>Email</h4>
//               <p>mint.school@example.com</p>
//             </div>

//             <div className={styles.infoCard}>
//               <span className={styles.icon}>📞</span>
//               <h4>Phone</h4>
//               <p>+91 1234567890</p>
//             </div>

//             <div className={styles.infoCard}>
//               <span className={styles.icon}>📍</span>
//               <h4>Address</h4>
//               <p>
//                 Mint Internation City, Yerwala, Near ABC Square,
//                 Pune, Maharastra, India, 411001
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert("Failed to send message");
      }
    } catch (error) {
      alert("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <InnerPageHeader title="Contact" breadcrumb={[{ label: "Contact" }]} />

      <div className={styles.wrapper}>
        <div className="container">
          <h2 className={styles.title}>Contact</h2>
          <p className={styles.subtitle}>
            Get in touch with us for more information.
          </p>

          {/* FORM */}
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className={styles.field}>
                <label>Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.field}>
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              />
            </div>

            <div className={styles.field}>
              <label>Message</label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button className={styles.btn} disabled={loading}>
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* INFO */}
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <FaEnvelope className={styles.icon} />
              <h4>Email</h4>
              <p>mint.school@example.com</p>
            </div>

            <div className={styles.infoCard}>
              <FaPhoneAlt className={styles.icon} />
              <h4>Phone</h4>
              <p>+91 1234567890</p>
            </div>

            <div className={styles.infoCard}>
              <FaMapMarkerAlt className={styles.icon} />
              <h4>Address</h4>
              <p>Pune, Maharashtra, India</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;