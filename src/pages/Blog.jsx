import { useState } from "react";
import InnerPageHeader from "../Components/InnerPageHeader";
import styles from "./News.module.css";

const newsData = [
  {
    id: 1,
    title: "School Annual Day Celebrated with Great Enthusiasm",
    date: "January 19, 2026 • 8:05 PM",
    category: "General",
    image:
      "https://images.unsplash.com/photo-1588072432836-e10032774350",
    shortDesc:
      "The much-awaited Annual Day program was held in the school auditorium.",
    fullDesc: `
      The Annual Day celebration at Mint School was a grand success.
      Parents, teachers, and students gathered to witness cultural performances.

      Students showcased their talents through dance, drama, and music.
      The Chairman and Principal appreciated the hard work of students and staff.
    `,
    tags: ["#Future"],
  },
  {
    id: 2,
    title: "Our School Wins District-Level Science Quiz Competition",
    date: "January 7, 2026 • 12:56 AM",
    category: "General",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    shortDesc:
      "Students from Class 9 secured first place at district level.",
    fullDesc: `
      Our talented students represented Mint School in the district-level
      science quiz competition and secured first place.

      The competition tested analytical thinking and scientific knowledge.
      Teachers congratulated the students for their outstanding achievement.
    `,
    tags: ["#Technology", "#Future", "#Success"],
  },
  {
    id: 3,
    title: "School Organizes Tree Plantation Drive on Campus",
    date: "December 4, 2025 • 2:52 PM",
    category: "General",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
    shortDesc:
      "Students participated in an eco-friendly initiative.",
    fullDesc: `
      Mint School organized a tree plantation drive to promote environmental awareness.
      Students and teachers planted saplings across the campus.

      The initiative emphasized the importance of protecting nature
      and encouraged students to become responsible citizens.
    `,
    tags: ["#Education", "#Future"],
  },
];

function Blog() {
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

            <span style={categoryStyle}>{selectedNews.category}</span>
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
  inset: 0,
  backgroundColor: "rgba(0,0,0,0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalStyle = {
  backgroundColor: "#fff",
  width: "90%",
  maxWidth: "900px",
  maxHeight: "90vh",
  overflowY: "auto",
  borderRadius: "12px",
  padding: "30px",
  position: "relative",
};

const modalImage = {
  width: "100%",
  height: "380px",
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

const categoryStyle = {
  display: "inline-block",
  background: "#2563eb",
  color: "#fff",
  padding: "5px 12px",
  borderRadius: "20px",
  fontSize: "13px",
  marginBottom: "10px",
};

export default Blog;