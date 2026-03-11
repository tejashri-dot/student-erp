// import React from "react";
// import styles from "./BTechnology.module.css";

// const BTechnology = ({ onClose }) => {
//   return (
//     <div className={styles.modalOverlay}>
//       <div className={styles.modalContent}>
//         <button className={styles.closeButton} onClick={onClose}>
//           Close
//         </button>
//         <h2>BACHELOR OF TECHNOLOGY (B-Tech)</h2>
//         <table className={styles.table}>
//           <thead>
//             <tr>
//               <th>Program</th>
//               <th>Duration</th>
//               <th>Semester</th>
//               <th>Eligibility</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Mechanical, Civil, Electrical, Chemical, Computer Science, Electronics & Telecommunication,</td>
//               <td>4 Years</td>
//               <td>8 Sem</td>
//               <td>	10 + 2 Passed with Physics, Chemistry & Mathematics,</td>
//             </tr>
            
//             <tr>
//               <td>Lateral Entry to 3rd Semester / 2nd Year</td>
//               <td>3 Years</td>
//               <td>6 Sem</td>
//               <td>Diploma in Engineering / BSC (PCM)
//               </td>
//             </tr>
            
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default BTechnology;





import { useState, useEffect } from "react";
import styles from "./BTechnology.module.css";
import axios from "axios";

const BTechnology = ({ onClose }) => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔹 Fetch B.Tech programs from backend
  const fetchPrograms = async () => {
    try {
      const res = await axios.get("https://drushti-website-backend-1.onrender.com/btech-api/getprogram");
      setPrograms(res.data.programs || []);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch B.Tech programs");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>

        <h2 className={styles.heading}>B.Tech Engineering Courses</h2>

        {loading ? (
          <p className={styles.loading}>Loading programs...</p>
        ) : error ? (
          <p className={styles.error}>{error}</p>
        ) : programs.length === 0 ? (
          <p className={styles.noData}>No B.Tech programs found.</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Program</th>
                <th>Course</th>
                <th>Duration</th>
                <th>Semester</th>
                <th>Eligibility</th>
                <th>Syllabus</th>
              </tr>
            </thead>
            <tbody>
              {programs.map((program) =>
                program.courses.map((course, index) => (
                  <tr key={index}>
                    <td>{program.programName}</td>
                    <td>{course.courseName}</td>
                    <td>{course.duration}</td>
                    <td>{course.semester || "—"}</td>
                    <td>{course.eligibility || "—"}</td>
                    <td>
                      {course.hasSyllabusPdf && course.syllabusPdf ? (
                        <a
                          href={`https://drushti-website-backend-1.onrender.com/${course.syllabusPdf}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.downloadButton}
                        >
                          View PDF
                        </a>
                      ) : (
                        <span className={styles.noPdf}>Not Available</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default BTechnology;
