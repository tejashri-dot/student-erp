import { Link } from "react-router-dom";
import styles from "./InnerPageHeader.module.css";

function InnerPageHeader({ title, breadcrumb }) {
  return (
    <>
      {/* Banner */}
      <div className={styles.banner}>
        <img
          src="https://demo.instikit.com/storage/site/block/slider-image/slider1.webp"
          alt={title}
        />
        <h1 className={styles.title}>{title}</h1>
      </div>

      {/* Breadcrumb */}
      <div className={styles.breadcrumb}>
        <div className="container">
          <Link to="/">Home</Link>
          {breadcrumb.map((item, index) => (
            <span key={index}>
              {" > "}
              {item.link ? (
                <Link to={item.link}>{item.label}</Link>
              ) : (
                item.label
              )}
            </span>
          ))}
        </div>
      </div>
    </>
  );
}

export default InnerPageHeader;
