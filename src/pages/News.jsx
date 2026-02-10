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
    description:
      "The much-awaited Annual Day program was held in the school auditorium with parents, teachers, and students.",
    tags: ["#Future"],
  },
  {
    id: 2,
    title: "Our School Wins District-Level Science Quiz Competition",
    date: "January 7, 2026 • 12:56 AM",
    category: "General",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    description:
      "A team of three students from Class 9 represented our school at the inter-district science quiz.",
    tags: ["#Technology", "#Future", "#Success"],
  },
  {
    id: 3,
    title: "School Organizes Tree Plantation Drive on Campus",
    date: "December 4, 2025 • 2:52 PM",
    category: "General",
    image:
      "https://images.unsplash.com/photo-1509099836639-18ba1795216d",
    description:
      "As part of its environmental awareness program, the school organized a tree plantation drive.",
    tags: ["#Education", "#Future"],
  },
];

function News() {
  return (
    <>
      <InnerPageHeader
        title="News"
        breadcrumb={[{ label: "News" }]}
      />

      <div className="container" style={{ padding: "60px 0" }}>
        <h2 className={styles.pageTitle}>News</h2>
        <p className={styles.subtitle}>
          Stay updated with the latest news and events from Mint School.
        </p>

        <div className={styles.grid}>
          {newsData.map((item) => (
            <div key={item.id} className={styles.card}>
              <div className={styles.imageWrapper}>
                <img src={item.image} alt={item.title} />
                <span className={styles.badge}>{item.category}</span>
              </div>

              <div className={styles.content}>
                <p className={styles.date}>{item.date}</p>
                <h3>{item.title}</h3>
                <p className={styles.desc}>{item.description}</p>

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
    </>
  );
}

export default News;
