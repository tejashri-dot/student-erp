
// import styles from "./UnderGraduate.module.css";

// const UnderGraduate = ({ onClose }) => {
//     return (
//         <div className={styles.modalOverlay}>
//             <div className={styles.modalContent}>
//                 <button className={styles.closeButton} onClick={onClose}>
//                     Close
//                 </button>
//                 <h2>Under Graduate Courses</h2>
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
//                             <td>Bachelor of Arts (BA)</td>
//                             <td>3 Years</td>
//                             <td>10 + 2 Passed</td>
//                         </tr>
//                         <tr>
//                             <td>Bachelor of Commerce (B.Com)</td>
//                             <td>3 Years</td>
//                             <td>10 + 2 Passed</td>
//                         </tr>
//                         <tr>
//                             <td>Bachelor Of Science Maths, Physics, Chemistry, Biology</td>
//                             <td>3 Years</td>
//                             <td>10 + 2 Passed</td>
//                         </tr>
//                         <tr>
//                             <td>B. Sc (MLT)</td>
//                             <td>3 Years</td>
//                             <td>10 + 2 Passed</td>
//                         </tr>
//                         <tr>
//                             <td>B. Sc (Hotel Management)</td>
//                             <td>3 Years</td>
//                             <td>10 + 2 Passed</td>
//                         </tr>
//                         <tr>
//                             <td>Bachelor of IT</td>
//                             <td>3 Years</td>
//                             <td>10 + 2 Passed</td>
//                         </tr>
//                         <tr>
//                             <td>B. Sc (Library Science)</td>
//                             <td>1 Year</td>
//                             <td>Degree</td>
//                         </tr>
//                         <tr>
//                             <td>Entrance Exam + BA</td>
//                             <td>4 Years</td>
//                             <td>Above 18 Years</td>
//                         </tr>
//                         <tr>
//                             <td>Entrance Exam + B. Com</td>
//                             <td>4 Years</td>
//                             <td>Above 18 Years</td>
//                         </tr>
//                         <tr>
//                             <td>Bachelor of Computer Application (BCA)</td>
//                             <td>3 Years</td>
//                             <td>10 + 2 Passed with Computer</td>
//                         </tr>
//                         <tr>
//                             <td>BCA Lateral</td>
//                             <td>2 Years</td>
//                             <td>12th with 3 years Diploma in Computer</td>
//                         </tr>
//                         <tr>
//                             <td>Bachelor Of Business Administration (BBA)</td>
//                             <td>3 Years</td>
//                             <td>10 + 2 Passed</td>
//                         </tr>
//                         <tr>
//                             <td>Bachelor Of Social Work (BSW)</td>
//                             <td>3 Years</td>
//                             <td>10 + 2 Passed</td>
//                         </tr>
//                     </tbody>
//                 </table>
//             </div>
//         </div>
//     );
// };

// export default UnderGraduate;




// import styles from "./UnderGraduate.module.css";

// const programs = [
//   {
//     name: "Bachelor of Arts (BA)",
//     duration: "3 Years",
//     eligibility: "10 + 2 Passed",
//     pdf: "https://unipune.ac.in/Syllabi_PDF/old_sylabus/ba/fyba.pdf",
//   },
//   {
//     name: "Bachelor of Commerce (B.Com)",
//     duration: "3 Years",
//     eligibility: "10 + 2 Passed",
//     pdf: "https://www.unipune.ac.in/Syllabi_PDF/revised/commerce/1.F.Y.B.ComSyllabus.pdf",
//   },
//   {
//     name: "B.Sc (Mathematics)",
//     duration: "3 Years",
//     eligibility: "10 + 2 Passed",
//     pdf: "https://collegecirculars.unipune.ac.in/sites/documents/Syllabus2022/S.Y.B.Sc.Mathematics.pdf",
//   },
//   {
//     name: "B.Sc (Physics)",
//     duration: "3 Years",
//     eligibility: "10 + 2 Passed",
//     pdf: "https://collegecirculars.unipune.ac.in/sites/documents/Syllabus2022/F.Y.B.Sc.Physics.pdf",
//   },
//   {
//     name: "B.Sc (Chemistry)",
//     duration: "3 Years",
//     eligibility: "10 + 2 Passed",
//     pdf: "https://collegecirculars.unipune.ac.in/sites/documents/Syllabus2022/F.Y.B.Sc.Chemistry.pdf",
//   },
//   {
//     name: "B.Sc (Zoology / Biology)",
//     duration: "3 Years",
//     eligibility: "10 + 2 Passed",
//     pdf: "https://collegecirculars.unipune.ac.in/sites/documents/Syllabus2022/F.Y.B.Sc.Zoology.pdf",
//   },
//   {
//     name: "B.Sc (Medical Laboratory Technology - MLT)",
//     duration: "3 Years",
//     eligibility: "10 + 2 Passed",
//     pdf: "https://www.iphhparamedic.in/syllabus/BMLT‑SYLLABUS.pdf", // mirror link, please verify
//   },
//   {
//     name: "B.Sc (Hospitality Studies) / BHMCT",
//     duration: "3 Years",
//     eligibility: "10 + 2 Passed",
//     pdf: "https://collegecirculars.unipune.ac.in/sites/documents/Syllabus2025/BHMCT‑NEP‑2025.pdf",
//   },
//   {
//     name: "Bachelor of IT (B.Sc Information Technology)",
//     duration: "3 Years",
//     eligibility: "10 + 2 Passed",
//     pdf: "https://collegecirculars.unipune.ac.in/sites/documents/Syllabus2022/F.Y.B.Sc.IT.pdf",
//   },
//   {
//     name: "B. Sc (Library Science) – One Year",
//     duration: "1 Year",
//     eligibility: "Degree",
//     pdf: "https://collegecirculars.unipune.ac.in/sites/documents/Syllabus2020/B.Lib.I.Sc.pdf",
//   },
//   {
//     name: "Entrance Exam + BA (Liberal Arts)",
//     duration: "4 Years",
//     eligibility: "Above 18 Years",
//     pdf: "https://www.unipune.ac.in/snc/interdisciplinary_school_science/BA‑Liberal‑Arts‑Entrance‑Syllabus.pdf",
//   },
//   {
//     name: "Entrance Exam + B.Com",
//     duration: "4 Years",
//     eligibility: "Above 18 Years",
//     pdf: "https://ascc.kkwagh.edu.in/uploads/department_syllabus/2024‑06‑11‑1718103708FY B.Com Syllabus NEP 2020.pdf", // mirror link, please verify
//   },
//   {
//     name: "Bachelor of Computer Applications (BCA)",
//     duration: "3 Years",
//     eligibility: "10 + 2 Passed with Computer",
//     pdf: "https://collegecirculars.unipune.ac.in/sites/documents/Syllabus2022/F.Y.B.C.A.pdf",
//   },
//   {
//     name: "BCA Lateral",
//     duration: "2 Years",
//     eligibility: "12th + 3 Year Diploma",
//     pdf: "https://collegecirculars.unipune.ac.in/sites/documents/Syllabus2022/S.Y.B.C.A.Lateral.pdf",
//   },
//   {
//     name: "Bachelor Of Business Administration (BBA)",
//     duration: "3 Years",
//     eligibility: "10 + 2 Passed",
//     pdf: "https://www.unipune.ac.in/Syllabi_PDF/Faculty%20of%20Commerce/BBA.pdf",
//   },
//   {
//     name: "Bachelor Of Social Work (BSW)",
//     duration: "3 Years",
//     eligibility: "10 + 2 Passed",
//     pdf: "https://collegecirculars.unipune.ac.in/sites/documents/Syllabus2025/S.Y.B.A.Social.Work.Syllabus.pdf",
//   },
// ];

// const UnderGraduate = ({ onClose }) => {
//   return (
//     <div className={styles.modalOverlay}>
//       <div className={styles.modalContent}>
//         <div className={styles.headerRow}>
//           <h2>Under Graduate Courses</h2>
//           <button className={styles.closeButton} onClick={onClose}>
//             Close
//           </button>
//         </div>

//         <div className={styles.tableWrapper}>
//           <table className={styles.table}>
//             <thead>
//               <tr>
//                 <th>Program</th>
//                 <th>Duration</th>
//                 <th>Eligibility</th>
//                 <th>Download Syllabus</th>
//               </tr>
//             </thead>
//             <tbody>
//               {programs.map((prog, idx) => (
//                 <tr key={idx}>
//                   <td>{prog.name}</td>
//                   <td>{prog.duration}</td>
//                   <td>{prog.eligibility}</td>
//                   <td>
//                     <a
//                       href={prog.pdf}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={styles.downloadButton}
//                       download
//                     >
//                       Download PDF
//                     </a>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UnderGraduate;




import { useState, useEffect } from "react";
import styles from "./UnderGraduate.module.css";
import axios from "axios";

const UnderGraduate = ({ onClose }) => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchPrograms = async () => {
    try {
      const res = await axios.get("https://drushti-website-backend-1.onrender.com/program-api/getprograms");

      console.log("API Response:", res.data);

      // ✅ Your backend sends: { success, message, program: [...] }
      if (Array.isArray(res.data.program)) {
        setPrograms(res.data.program);
      } else {
        throw new Error("Unexpected response format");
      }

      setLoading(false);
    } catch (err) {
      console.error("Error fetching programs:", err);
      setError("Failed to load programs. Please try again later.");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPrograms();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <div className={styles.headerRow}>
          <h2>Under Graduate Programs</h2>
          <button className={styles.closeButton} onClick={onClose}>
            Close
          </button>
        </div>

        <div className={styles.tableWrapper}>
          {programs.length === 0 ? (
            <p>No programs found.</p>
          ) : (
            programs.map((prog, idx) => (
              <div key={idx} className={styles.programSection}>
                <h3 className={styles.programTitle}>{prog.programName}</h3>

                {prog.courses && prog.courses.length > 0 ? (
                  <table className={styles.table}>
                    <thead>
                      <tr>
                        <th>Course Name</th>
                        <th>Duration</th>
                        <th>Semester</th>
                        <th>Eligibility</th>
                        <th>Syllabus</th>
                      </tr>
                    </thead>
                    <tbody>
                      {prog.courses.map((course, cidx) => (
                        <tr key={cidx}>
                          <td>{course.courseName}</td>
                          <td>{course.duration}</td>
                          <td>{course.semester || "-"}</td>
                          <td>{course.eligibility || "-"}</td>
                          <td>
                            {course.hasSyllabusPdf && course.syllabusPdf ? (
                              <a
                                href={course.syllabusPdf}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.downloadButton}
                              >
                                Download PDF
                              </a>
                            ) : (
                              <span className={styles.noPdf}>N/A</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                ) : (
                  <p className={styles.noCourses}>No courses found for this program.</p>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default UnderGraduate;
