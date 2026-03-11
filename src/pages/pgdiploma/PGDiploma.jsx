// import styles from "./PGDiploma.module.css";

// // eslint-disable-next-line react/prop-types
// const PGDiploma = ({ onClose }) => {
//     return (
//         <div className={styles.modalOverlay}>
//             <div className={styles.modalContent}>
//                 <button className={styles.closeButton} onClick={onClose}>
//                     Close
//                 </button>
//                 <h2>Certificate Courses</h2>
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
//                             <td>Material Management</td>
//                             <td>1 Year</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>English Language Teaching</td>
//                             <td>1 Year</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>International Business Teaching</td>
//                             <td>1 Year</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>Library Automation & Networking</td>
//                             <td>1 Year</td>
//                             <td>Graduation</td>
//                         </tr>
//                         <tr>
//                             <td>Sports Management</td>
//                             <td>1 Years</td>
//                             <td>Graduation</td>
//                         </tr>
                        
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default PGDiploma;


import { useState, useEffect } from "react";
import axios from "axios";
import styles from "./PGDiploma.module.css";

const PGDiploma = ({ onClose }) => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch PG Diploma programs from backend
  useEffect(() => {
    const fetchPrograms = async () => {
      try {
        const res = await axios.get("https://drushti-website-backend-1.onrender.com/pgdiploma/getprogram");
        setPrograms(res.data.programs || []);
      } catch (err) {
        console.error("Error fetching programs:", err);
        setError("Failed to fetch programs. Try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchPrograms();
  }, []);

  if (loading) return <p>Loading PG Diploma programs...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ✕
        </button>

        <h2 className={styles.title}>POST GRADUATE DIPLOMA & CERTIFICATE COURSES</h2>

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
            {programs.length === 0 ? (
              <tr>
                <td colSpan="4">No programs found.</td>
              </tr>
            ) : (
              programs.map((program) =>
                program.courses.map((course, index) => (
                  <tr key={`${program._id}-${index}`}>
                    <td>{program.programName}</td>
                    <td>{course.duration}</td>
                    <td>{course.eligibility}</td>
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
                        "N/A"
                      )}
                    </td>
                  </tr>
                ))
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PGDiploma;
