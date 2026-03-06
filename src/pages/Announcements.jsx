import React from "react";
import InnerPageHeader from "../Components/InnerPageHeader";
import { FaCalendarAlt } from "react-icons/fa";

const Announcements = () => {

  const announcements = [
    {
      title: "Parent-Teacher Conferences Next Week",
      type: "Notice",
      date: "March 5, 2026 8:21 AM",
      text: "Parent Teacher conference will be held next week."
    },
    {
      title: "Upcoming School Fundraising Event",
      type: "Circular",
      date: "March 5, 2026 8:21 AM",
      text: "Get ready for our annual school fundraising event!"
    },
    {
      title: "New Extracurricular Clubs Available",
      type: "Notice",
      date: "March 5, 2026 8:21 AM",
      text: "We're thrilled to introduce several new extracurricular clubs for our students."
    },
    {
      title: "Important Exam Schedule Update",
      type: "Circular",
      date: "March 5, 2026 8:21 AM",
      text: "Due to unforeseen circumstances, there has been a change in the upcoming exam schedule."
    },
    {
      title: "School Library Renovation Underway",
      type: "Notice",
      date: "March 5, 2026 8:21 AM",
      text: "We're thrilled to announce that our school library renovation has begun!"
    }
  ];

  return (
    <>
      <InnerPageHeader
        title="Announcements"
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Academic", link: "/academic/program" },
          { label: "Announcements" }
        ]}
      />

      <div style={{
        background: "#f4f6fb",
        padding: "60px 0"
      }}>

        <div style={{
          width: "90%",
          maxWidth: "1100px",
          margin: "auto"
        }}>

          <h2 style={{
            fontSize: "22px",
            marginBottom: "8px"
          }}>
            Announcements
          </h2>

          <p style={{
            marginBottom: "30px",
            color: "#666"
          }}>
            Announcements from Mint School
          </p>


          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "20px"
          }}>

            {announcements.map((item, index) => (

              <div key={index} style={{
                background: "#fff",
                borderRadius: "8px",
                padding: "18px",
                boxShadow: "0 6px 14px rgba(0,0,0,0.08)"
              }}>

                <h3 style={{
                  fontSize: "16px",
                  marginBottom: "10px",
                  color: "#333"
                }}>
                  {item.title}
                </h3>


                <div style={{
                  display: "flex",
                  alignItems: "center",
                  fontSize: "13px",
                  color: "#6b4ce6",
                  marginBottom: "8px"
                }}>
                  <FaCalendarAlt style={{ marginRight: "6px" }} />
                  {item.date}
                </div>


                <span style={{
                  display: "inline-block",
                  background: item.type === "Notice" ? "#FFD54F" : "#7E57C2",
                  color: item.type === "Notice" ? "#000" : "#fff",
                  fontSize: "11px",
                  padding: "4px 10px",
                  borderRadius: "12px",
                  marginBottom: "10px"
                }}>
                  {item.type}
                </span>


                <p style={{
                  fontSize: "13px",
                  color: "#555"
                }}>
                  {item.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </div>
    </>
  );
};

export default Announcements;