import InnerPageHeader from "../Components/InnerPageHeader";
import styles from "./Gallery.module.css";

const galleryData = [
  {
    id: 1,
    title: "Investiture Ceremony",
    date: "January 9, 2026",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    description:
      "Odit quae corporis et rem doloremque sit corporis consequuntur.",
  },
  {
    id: 2,
    title: "Annual Event",
    date: "January 9, 2026",
    image:
      "https://images.unsplash.com/photo-1511632765486-a01980e01a18",
    description:
      "Sed laborum ut nihil qui pariatur omnis neque quisquam et.",
  },
  {
    id: 3,
    title: "Graduation Ceremony",
    date: "January 9, 2026",
    image:
      "https://images.unsplash.com/photo-1523580846011-d3a5bc25702b",
    description: "Sunt qui id corrupti non iure ipsam.",
  },
];

function Gallery() {
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
            <div key={item.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.title} />
              </div>

              <div className={styles.content}>
                <h3>{item.title}</h3>
                <p className={styles.date}>{item.date}</p>
                <p className={styles.desc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Gallery;
