import { useState } from "react";
import InnerPageHeader from "../Components/InnerPageHeader";
import styles from "./Gallery.module.css";

const galleryData = [
  {
    id: 1,
    title: "Investiture Ceremony",
    date: "January 9, 2026",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    shortDesc:
      "Investiture ceremony conducted with discipline and pride.",
    fullDesc: `
      The Investiture Ceremony at Mint School marked a proud moment for students.
      School leaders were officially appointed and given responsibilities.

      The ceremony instilled leadership qualities and discipline among students.
    `,
  },
  {
    id: 2,
    title: "Annual Event",
    date: "January 9, 2026",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18",
    shortDesc:
      "A vibrant annual event filled with performances and joy.",
    fullDesc: `
      The Annual Event showcased cultural performances by students.
      Dance, drama, and music performances were applauded by parents.

      The event reflected creativity and confidence among students.
    `,
  },
  {
    id: 3,
    title: "Graduation Ceremony",
    date: "January 9, 2026",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
    shortDesc:
      "Celebrating the success of graduating students.",
    fullDesc: `
      Graduation Ceremony honored students completing their academic journey.
      Teachers encouraged students to pursue higher goals with confidence.

      It was an emotional and proud moment for everyone.
    `,
  },
];

function Gallery() {
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <>
      <InnerPageHeader
        title="Gallery"
        breadcrumb={[{ label: "Gallery" }]}
      />

      <div className="container" style={{ padding: "60px 0" }}>
        <h2 className={styles.pageTitle}>Gallery</h2>
        <p className={styles.subtitle}>
          Explore our gallery of events and activities at Mint School.
        </p>

        <div className={styles.grid}>
          {galleryData.map((item) => (
            <div
              key={item.id}
              className={styles.card}
              onClick={() => setSelectedItem(item)}
              style={{ cursor: "pointer" }}
            >
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.title} />
              </div>

              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p className={styles.date}>{item.date}</p>
                <p className={styles.desc}>{item.shortDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= MODAL ================= */}
      {selectedItem && (
        <div style={overlayStyle}>
          <div style={modalStyle}>
            <button
              onClick={() => setSelectedItem(null)}
              style={closeBtnStyle}
            >
              ✕
            </button>

            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              style={modalImage}
            />

            <h2>{selectedItem.title}</h2>
            <p style={{ color: "#777", marginBottom: "15px" }}>
              {selectedItem.date}
            </p>

            {selectedItem.fullDesc.split("\n").map((para, i) => (
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

export default Gallery;