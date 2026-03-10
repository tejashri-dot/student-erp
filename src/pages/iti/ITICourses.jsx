import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./ITICourses.module.css";

// eslint-disable-next-line react/prop-types
const ITICourses = ({ onClose }) => {
  const [programs, setPrograms] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch ITI Programs from backend
  const fetchITIPrograms = async () => {
    try {
      const res = await axios.get("https://drushti-website-backend-1.onrender.com/iti-api/getprogram");
      setPrograms(res.data.programs || []);
    } catch (error) {
      console.error("Error fetching ITI programs:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchITIPrograms();
  }, []);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button className={styles.closeButton} onClick={onClose}>
          Close
        </button>

        <h2>ITI Courses</h2>

        {loading ? (
          <p>Loading...</p>
        ) : programs.length === 0 ? (
          <p>No ITI programs found</p>
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Program Name</th>
                <th>Course Name</th>
                <th>Duration</th>
                <th>Eligibility</th>
                <th>Syllabus</th>
              </tr>
            </thead>

            <tbody>
              {programs.map((program) =>
                program.courses.map((course, index) => (
                  <tr key={course._id || index}>
                    {index === 0 ? (
                      <td rowSpan={program.courses.length}>
                        {program.programName}
                      </td>
                    ) : null}

                    <td>{course.courseName}</td>
                    <td>{course.duration}</td>
                    <td>{course.eligibility}</td>

                    <td>
                      {course.hasSyllabusPdf ? (
                        <a
                          href={course.syllabusPdf}
                          target="_blank"
                          rel="noreferrer"
                        >
                          View
                        </a>
                      ) : (
                        "No File"
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

export default ITICourses;
