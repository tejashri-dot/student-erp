import InnerPageHeader from "../Components/InnerPageHeader";
import styles from "./Contact.module.css";

function Contact() {
  return (
    <>
      <InnerPageHeader
        title="Contact"
        breadcrumb={[{ label: "Contact" }]}
      />

      <div className={styles.wrapper}>
        <div className="container">
          <h2 className={styles.title}>Contact</h2>
          <p className={styles.subtitle}>
            Get in touch with us for more information.
          </p>
          <p className={styles.desc}>
            We'd love to hear from you! Whether you have questions, need
            assistance, or want to know more about Mint International School,
            our team is here to help.
          </p>

          {/* Contact Form */}
          <form className={styles.form}>
            <div className={styles.field}>
              <label>Name</label>
              <input type="text" placeholder="Your Name" />
            </div>

            <div className={styles.row}>
              <div className={styles.field}>
                <label>Email</label>
                <input type="email" placeholder="Your Email" />
              </div>

              <div className={styles.field}>
                <label>Phone</label>
                <input type="text" placeholder="Your Phone" />
              </div>
            </div>

            <div className={styles.field}>
              <label>Subject</label>
              <input type="text" placeholder="Your Subject" />
            </div>

            <div className={styles.field}>
              <label>Message</label>
              <textarea rows="4" placeholder="Type Your Message..." />
            </div>

            <button type="submit" className={styles.btn}>
              Send ✈
            </button>
          </form>

          {/* Contact Info */}
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <span className={styles.icon}>✉</span>
              <h4>Email</h4>
              <p>mint.school@example.com</p>
            </div>

            <div className={styles.infoCard}>
              <span className={styles.icon}>📞</span>
              <h4>Phone</h4>
              <p>+91 1234567890</p>
            </div>

            <div className={styles.infoCard}>
              <span className={styles.icon}>📍</span>
              <h4>Address</h4>
              <p>
                Mint Internation City, Yerwala, Near ABC Square,
                Pune, Maharastra, India, 411001
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
