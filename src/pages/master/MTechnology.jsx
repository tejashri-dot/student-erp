// import React from "react";
// import styles from "./MTechnology.module.css";

// const MTechnology = ({ onClose }) => {
//   return (
//     <div className={styles.modalOverlay}>
//       <div className={styles.modalContent}>
//         <button className={styles.closeButton} onClick={onClose}>
//           Close
//         </button>
//         <h2>MASTER OF TECHNOLOGY (M-Tech)</h2>
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
//               <td>2 Years</td>
//               <td>4 Sem</td>
//               <td>B.E/ B-Tech</td>
//             </tr>
            
//             <tr>
//               <td>M. Tech in IT*</td>
//               <td>6 Months</td>
//               <td>1 Sem</td>
//               <td>BE/ B.tech/ AMIE in any discipline or MCA/ MSC (CS/IT), / MSC(IT) / MCM or MSC with Mathematics, as major, DOEACC ‘B’ level</td>
//             </tr>
            
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default MTechnology;

import { useState, useEffect } from "react";
import styles from "./MTechnology.module.css";
import axios from "axios";

const MTechnology = ({ onClose }) => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPrograms = async () => {
    try {
      const res = await axios.get("https://drushti-website-backend-1.onrender.com/mtech-api/getprogram");
      setPrograms(res.data.programs || []);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch M.Tech programs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>✕</button>
        <h2 className={styles.title}>MASTER OF TECHNOLOGY (M.Tech)</h2>

        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className={styles.error}>{error}</p>
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
                    <td>{course.semester}</td>
                    <td>{course.eligibility}</td>
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
                        <span>Not Available</span>
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

export default MTechnology;
