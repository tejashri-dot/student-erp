// import styles from "./PostGraduate.module.css";

// // eslint-disable-next-line react/prop-types
// const UnderGraduate = ({ onClose }) => {
//   return (
//     <div className={styles.modalOverlay}>
//       <div className={styles.modalContent}>
//         <button className={styles.closeButton} onClick={onClose}>
//           Close
//         </button>
//         <h2>Post Graduate Courses</h2>
//         <table className={styles.table}>
//           <thead>
//             <tr>
//               <th>Program</th>
//               <th>Duration</th>
//               <th>Eligibility</th>
            
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td>Master Of Arts (MA)</td>
//               <td>2 Years</td>
//               <td>Graduation</td>
//             </tr>
//             <tr>
//               <td>MA - Social Work</td>
//               <td>2 Years</td>
//               <td>Any Degrees</td>
//             </tr>
//             <tr>
//               <td>Master Of Commerce (M.Com)</td>
//               <td>2 Years</td>
//               <td>B.Com</td>
//             </tr>
//             <tr>
//               <td>Master Of Science (M.sc.), Maths, Physics, Chemistry</td>
//               <td>2 Years</td>
//               <td>Graduation in Relevant Subject</td>
//             </tr>
//             <tr>
//               <td>M. Sc. - Library information Science</td>
//               <td>2 Years</td>
//               <td>B. Lib</td>
//             </tr>
//             <tr>
//               <td>Master of Business Administration (MBA)Marketing, Finance & Banking Systems, Human Resource,
//                 International Business, E- Commerce, Applied Management, Telecom Production Management,
//                 Retail Management, IT & System, Industrial Engineering, Logistic & Supply Chain Management,
//                 Material Management, Construction Management, Pharmaceutical Management, Operation Management</td>
//               <td>2 Years</td>
//               <td>Graduation</td>
//             </tr>
//             <tr>
//               <td>MBA (Lateral/ Executive) Program*HR, Marketing, Finance & Banking, Hospital Management, International Business,
//                 Production Management, Retail Management, It & System, Industrial, Engineering, Logistic & Supply Chain Management,
//                 Material Management, Construction Management, Hospitality & Tourisment</td>
//               <td>1 Year</td>
//               <td>Special Eligibility: Direct entry to second year for PG Dip HRM/PG DMM2 Years Experience as manager after degree!5
//                 Years Experience as manager after Diploma</td>
//             </tr>
//             <tr>
//               <td>Master of Social Works (M.S.W.)*</td>
//               <td>2 Years</td>
//               <td>Any Degree</td>
//             </tr>
//             <tr>
//               <td>Master of Computer Application (M.C.A.)</td>
//               <td>3 Years</td>
//               <td>Any degree with Maths / IT / CS</td>
//             </tr>
            
//           </tbody>
//         </table>
//       </div>
      
//     </div>
//   );
// };

// export default UnderGraduate;




// import styles from "./PostGraduate.module.css";

// const PostGraduate = ({ onClose }) => {
//   return (
//     <div className={styles.modalOverlay}>
//       <div className={styles.modalContent}>
//         <button className={styles.closeButton} onClick={onClose}>
//           ✕
//         </button>

//         <h2 className={styles.heading}>Post Graduate Courses</h2>

//         <table className={styles.table}>
//           <thead>
//             <tr>
//               <th>Program</th>
//               <th>Duration</th>
//               <th>Eligibility</th>
//               <th>Syllabus</th>
//             </tr>
//           </thead>

//           <tbody>
//             <tr>
//               <td>Master of Arts (M.A.) – English</td>
//               <td>2 Years</td>
//               <td>Graduation</td>
//               <td>
//                 <a
//                   href="https://www.unipune.ac.in/dept/fine_arts/english/english_webfiles/pdf/M.%20A.%20English%20Syllabus%202023-2024,%20Department%20of%20English,%20SPPU_20102023.pdf"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={styles.downloadButton}
//                 >
//                   View PDF
//                 </a>
//               </td>
//             </tr>

//             <tr>
//               <td>Master of Business Administration (MBA)</td>
//               <td>2 Years</td>
//               <td>Graduation</td>
//               <td>
//                 <a
//                   href="https://collegecirculars.unipune.ac.in/sites/documents/Syllabus2024/FINAL%20MBA_Syllabus_2024_Pattern_NEP_2020_21082024.pdf"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={styles.downloadButton}
//                 >
//                   View PDF
//                 </a>
//               </td>
//             </tr>

//             <tr>
//               <td>Master of Commerce (M.Com)</td>
//               <td>2 Years</td>
//               <td>B.Com</td>
//               <td>
//                 <a
//                   href="https://www.unipune.ac.in/dept/commerce/commerce/pdf/M.Com%20Syllabus-%20NEP%202024_24052024.pdf"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={styles.downloadButton}
//                 >
//                   View PDF
//                 </a>
//               </td>
//             </tr>

//             <tr>
//               <td>Master of Science (M.Sc.) – Physics / Chemistry / Maths</td>
//               <td>2 Years</td>
//               <td>Graduation in relevant subject</td>
//               <td>
//                 <a
//                   href="https://collegecirculars.unipune.ac.in/sites/documents/Syllabus2023/M.Sc.%20Physics%20(NEP%202023)_22052024.pdf"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={styles.downloadButton}
//                 >
//                   View PDF
//                 </a>
//               </td>
//             </tr>

//             <tr>
//               <td>Master of Library & Information Science (M.Lib./M.L.I.S.)</td>
//               <td>2 Years</td>
//               <td>B.Lib / Equivalent</td>
//               <td>
//                 <a
//                   href="https://collegecirculars.unipune.ac.in/sites/documents/Syllabus2023/M.%20Lib.%20%26%20I.%20Sc.%20Syllabus%202023-24_15092023.pdf"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={styles.downloadButton}
//                 >
//                   View PDF
//                 </a>
//               </td>
//             </tr>

//             <tr>
//               <td>Master of Social Work (M.S.W.)</td>
//               <td>2 Years</td>
//               <td>Any Degree</td>
//               <td>
//                 <a
//                   href="https://collegecirculars.unipune.ac.in/sites/documents/Syllabus2024/Master%20of%20Social%20Work%20(MSW)%20(Rev.%202023)%20Pattern_09082024.pdf"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={styles.downloadButton}
//                 >
//                   View PDF
//                 </a>
//               </td>
//             </tr>

//             <tr>
//               <td>Master of Computer Application (M.C.A.)</td>
//               <td>3 Years</td>
//               <td>Any Degree with Maths / IT / CS</td>
//               <td>
//                 <a
//                   href="https://collegecirculars.unipune.ac.in/sites/documents/Syllabus2024/Master%20of%20Computer%20Application%20(M.C.A.)%20(Dept.)_01082024.pdf"
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className={styles.downloadButton}
//                 >
//                   View PDF
//                 </a>
//               </td>
//             </tr>

//           </tbody>
//         </table>

//       </div>
//     </div>
//   );
// };

// export default PostGraduate;




import { useState, useEffect } from "react";
import styles from "./PostGraduate.module.css";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const PostGraduate = ({ onClose }) => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 🔹 Fetch postgraduate programs from backend
  const fetchPrograms = async () => {
    try {
      const res = await axios.get("https://drushti-website-backend-1.onrender.com/postprogram-api/getprogram");
      setPrograms(res.data.programs || []);
      setLoading(false);
    } catch (err) {
      console.error("Fetch error:", err);
      setError("Failed to fetch postgraduate programs");
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

        <h2 className={styles.heading}>Post Graduate Courses</h2>

        {loading ? (
          <p className={styles.loading}>Loading programs...</p>
        ) : error ? (
          <p className={styles.error}>{error}</p>
        ) : programs.length === 0 ? (
          <p className={styles.noData}>No postgraduate programs found.</p>
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
                  <tr key={`${program._id}-${index}`}>
                    <td>{program.programName}</td>
                    <td>{course.courseName}</td>
                    <td>{course.duration}</td>
                    <td>{course.semester || "—"}</td>
                    <td>{course.eligibility || "—"}</td>
                    <td>
                      {course.hasSyllabusPdf && course.syllabusPdf ? (
                        <a
                          href={`https://drushti-website-backend-1.onrender.com/${course.syllabusPdf.replace(/\\/g, "/")}`}
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

export default PostGraduate;
