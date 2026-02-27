import { Link } from "react-router-dom";

const Programs = () => {
  const courses = [
    { name: "UNDER GRADUATE COURSES", path: "/programs/undergraduate" },
    { name: "POST GRADUATE COURSES", path: "/programs/postgraduate" },
    { name: "DIPLOMA ENGINEERING", path: "/programs/diploma" },
    { name: "BACHELOR OF TECHNOLOGY", path: "/programs/technology" },
    { name: "MASTER OF TECHNOLOGY", path: "/programs/master" },
    { name: "DIPLOMA COURSES", path: "/programs/diplomacourse" },
    { name: "CERTIFICATE COURSES", path: "/programs/certificate" },
    { name: "P. G. DIPLOMA COURSES", path: "/programs/pg-diploma" },
    { name: "SCHOOL PROGRAMS", path: "/programs/school" },
    { name: "I.T.I COURSES", path: "/programs/iti" },
  ];

  const styles = {
    programsSection: {
      padding: "40px 20px",
      backgroundColor: "#f5f7fa",
      display: "flex",
      justifyContent: "center",
    },
    programGrid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      gap: "20px",
      maxWidth: "1200px",
      width: "100%",
    },
    card: {
      textDecoration: "none",
      backgroundColor: "#ffffff",
      padding: "25px",
      borderRadius: "10px",
      textAlign: "center",
      fontWeight: "600",
      color: "#1f2937",
      boxShadow: "0 6px 15px rgba(0,0,0,0.08)",
      transition: "all 0.3s ease",
    },
  };

  return (
    <div style={styles.programsSection}>
      <div style={styles.programGrid}>
        {courses.map((course, index) => (
          <Link
            to={course.path}
            key={index}
            style={styles.card}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-5px)";
              e.target.style.backgroundColor = "#2563eb";
              e.target.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.backgroundColor = "#ffffff";
              e.target.style.color = "#1f2937";
            }}
          >
            {course.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Programs;
