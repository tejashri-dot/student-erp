// import React from "react";
// import styles from "./DiplomaCourse.module.css";

// const DiplomaCourse = ({ onClose }) => {
//     return (
//         <div className={styles.modalOverlay}>
//             <div className={styles.modalContent}>
//                 <button className={styles.closeButton} onClick={onClose}>
//                     Close
//                 </button>
//                 <h2>Diploma Courses</h2>
//                 <table className={styles.table}>
//                     <thead>
//                         <tr>
//                             <th>Program</th>
//                             <th>Duration</th>
//                             <th>Eligibility</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <tr>
//                             <td>Computer Teacher Training</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>Computer Application</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>Business Management</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>Industrial Management</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>Marketing Management</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>Animation</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>House Keeping	</td>
//                             <td>6 Months</td>
//                             <td>HSC</td>
//                         </tr>
//                         <tr>
//                             <td>Financial Management</td>
//                             <td>6 Months</td>
//                             <td>HSC</td>
//                         </tr>
//                         <tr>
//                             <td>Fire Safety</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>Pre-primary Teacher Education</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>Montessori Teacher Education</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>Hotel Management & Catering Technology</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>Library Information Science</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>Food & Nutrition</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>ICT Application in Library</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>Computer Literacy Program</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>Disaster Management</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>Industrial Safety</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default DiplomaCourse;






import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./DiplomaCourse.module.css";

// eslint-disable-next-line react/prop-types
const DiplomaCourse = ({ onClose }) => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch diploma programs from backend
  const fetchPrograms = async () => {
    try {
      const res = await axios.get("https://drushti-website-backend-1.onrender.com/diplomaCourse-api/getprogram"); // update your backend URL
      if (res.data.success) {
        setPrograms(res.data.programs);
      } else {
        setError("Failed to fetch programs");
      }
    } catch (err) {
      console.error("Error fetching diploma programs:", err);
      setError("Server error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  if (loading) {
    return (
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.modalOverlay}>
        <div className={styles.modalContent}>
          <p>{error}</p>
          <button onClick={onClose} className={styles.closeButton}>
            ✕
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>
        <h2 className={styles.heading}>Diploma Courses</h2>

        <table className={styles.table}>
          <thead>
            <tr>
              <th>Program</th>
              <th>Duration</th>
              <th>Eligibility</th>
              <th>Syllabus</th>
            </tr>
          </thead>
          <tbody>
            {programs.length === 0 && (
              <tr>
                <td colSpan="4" style={{ textAlign: "center" }}>
                  No programs available
                </td>
              </tr>
            )}
            {programs.map((program) => (
              program.courses.map((course, index) => (
                <tr key={`${program._id}-${index}`}>
                  <td>{program.programName}</td>
                  <td>{course.duration || program.duration}</td>
                  <td>{course.eligibility || program.eligibility}</td>
                  <td>
                    {course.syllabusPdf ? (
                      <a
                        href={`https://drushti-website-backend-1.onrender.com/${course.syllabusPdf}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.downloadButton}
                      >
                        View PDF
                      </a>
                    ) : (
                      <span>N/A</span>
                    )}
                  </td>
                </tr>
              ))
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DiplomaCourse;
