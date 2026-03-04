import { useState } from "react";
import InnerPageHeader from "../Components/InnerPageHeader";
import styles from "./News.module.css";

const newsData = [
  {
    id: 1,
    title: "School Annual Day Celebrated with Great Enthusiasm",
    date: "January 19, 2026 • 8:05 PM",
    category: "General",
    image: "https://images.unsplash.com/photo-1588072432836-e10032774350",
    shortDesc:
      "The much-awaited Annual Day program was held in the school auditorium.",
    fullDesc: `
      The Annual Day celebration at Mint International School was a grand success.
      Students showcased cultural programs including dance, music, and drama.

      Parents and teachers applauded the creativity and confidence of students.
      Awards and certificates were distributed by the chief guest.
    `,
    tags: ["#Future"],
  },
  {
    id: 2,
    title: "Our School Wins District-Level Science Quiz Competition",
    date: "January 7, 2026 • 12:56 AM",
    category: "General",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    shortDesc:
      "Students from Class 9 represented our school at district level.",
    fullDesc: `
      Mint School proudly secured first place in the district-level science quiz.
      The competition tested students in physics, chemistry, and biology.

      This achievement highlights the school's academic excellence.
    `,
    tags: ["#Technology", "#Success"],
  },
  {
    id: 3,
    title: "School Organizes Tree Plantation Drive on Campus",
    date: "December 4, 2025 • 2:52 PM",
    category: "General",
    image: "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
    shortDesc:
      "Tree plantation drive conducted to promote environmental awareness.",
    fullDesc: `
      Students and teachers actively participated in the tree plantation drive.
      The initiative aimed to promote sustainability and environmental care.

      Such activities build responsibility and awareness among students.
    `,
    tags: ["#Education", "#Future"],
  },
];

function News() {
  const [selectedNews, setSelectedNews] = useState(null);

  return (
    <>
      <InnerPageHeader title="News" breadcrumb={[{ label: "News" }]} />

      <div className="container" style={{ padding: "60px 0" }}>
        <h2 className={styles.pageTitle}>News</h2>
        <p className={styles.subtitle}>
          Stay updated with the latest news and events from Mint School.
        </p>

        <div className={styles.grid}>
          {newsData.map((item) => (
            <div
              key={item.id}
              className={styles.card}
              onClick={() => setSelectedNews(item)}
              style={{ cursor: "pointer" }}
            >
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.title} />
                <span className={styles.badge}>{item.category}</span>
              </div>

              <div className={styles.content}>
                <p className={styles.date}>{item.date}</p>
                <h3>{item.title}</h3>
                <p className={styles.desc}>{item.shortDesc}</p>

                <div className={styles.tags}>
                  {item.tags.map((tag, index) => (
                    <span key={index}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {selectedNews && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <button
              onClick={() => setSelectedNews(null)}
              style={closeBtnStyle}
            >
              ✕
            </button>

            <img
              src={selectedNews.image}
              alt={selectedNews.title}
              style={modalImage}
            />

            <h2>{selectedNews.title}</h2>
            <p style={{ color: "#777", marginBottom: "15px" }}>
              {selectedNews.date}
            </p>

            {selectedNews.fullDesc.split("\n").map((para, i) => (
              <p key={i} style={{ lineHeight: "1.8" }}>
                {para}
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

/* ================= INLINE STYLES ================= */

const overlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle = {
  backgroundColor: "#fff",
  width: "90%",
  maxWidth: "800px",
  maxHeight: "90vh",
  overflowY: "auto",
  borderRadius: "12px",
  padding: "30px",
  position: "relative",
};

const modalImage = {
  width: "100%",
  height: "350px",
  objectFit: "cover",
  borderRadius: "10px",
  marginBottom: "20px",
};

const closeBtnStyle = {
  position: "absolute",
  top: "15px",
  right: "15px",
  border: "none",
  background: "#ef4444",
  color: "#fff",
  fontSize: "18px",
  width: "35px",
  height: "35px",
  borderRadius: "50%",
  cursor: "pointer",
};

export default News;