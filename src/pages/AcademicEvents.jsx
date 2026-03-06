import InnerPageHeader from "../Components/InnerPageHeader";

function AcademicEvents() {

  const events = [
    {
      title: "Art Exhibition and Auction",
      date: "March 9, 2026 • 6:30 PM",
      location: "School Auditorium",
      image: "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=1200",
      tag: "Annual Event",
      description:
        "Join us at our Art Exhibition and Auction where students showcase paintings, sculptures and crafts."
    },
    {
      title: "Sports Day Extravaganza",
      date: "March 7, 2026 • 6:30 PM",
      location: "School Ground",
      image: "https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200",
      tag: "Annual Event",
      description:
        "Students compete in races, games and athletics. Families are invited to cheer them on."
    },
    {
      title: "School Talent Show",
      date: "March 5, 2026",
      location: "Open Air Theatre",
      image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?w=1200",
      tag: "Activities",
      description:
        "Students perform singing, dancing, music and magic performances."
    },
    {
      title: "International Cultural Day",
      date: "March 3, 2026",
      location: "School Open Ground",
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200",
      tag: "Activities",
      description:
        "Celebrate diversity with food stalls, exhibitions and performances."
    },
    {
      title: "Annual Science Fair",
      date: "February 28, 2026",
      location: "School Auditorium",
      image: "https://images.unsplash.com/photo-1581092335878-3d9ff86ca2bf?w=1200",
      tag: "Activities",
      description:
        "Students showcase innovative science experiments and projects."
    }
  ];

  return (
    <>
      <InnerPageHeader
        title="Events"
        breadcrumb={[
          { label: "Home", link: "/" },
          { label: "Academic", link: "/academic/program" },
          { label: "Events" }
        ]}
      />

      <div style={{
        padding: "70px 0",
        background: "#f4f6f9"
      }}>

        <div style={{
          width: "90%",
          maxWidth: "1200px",
          margin: "auto"
        }}>

          <h2 style={{
            textAlign: "center",
            marginBottom: "40px",
            fontSize: "28px"
          }}>
            Events at Mint School
          </h2>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
            gap: "25px"
          }}>

            {events.map((event, index) => (

              <div key={index} style={{
                background: "#fff",
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
                transition: "0.3s"
              }}>

                <img
                  src={event.image}
                  alt={event.title}
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover"
                  }}
                />

                <div style={{ padding: "18px" }}>

                  <span style={{
                    background: "#ff9800",
                    color: "#fff",
                    padding: "4px 10px",
                    fontSize: "12px",
                    borderRadius: "4px"
                  }}>
                    {event.tag}
                  </span>

                  <h3 style={{
                    marginTop: "10px",
                    fontSize: "18px"
                  }}>
                    {event.title}
                  </h3>

                  <p style={{
                    fontSize: "14px",
                    color: "#555"
                  }}>
                    {event.date}
                  </p>

                  <p style={{
                    fontSize: "13px",
                    color: "#777",
                    marginBottom: "10px"
                  }}>
                    {event.location}
                  </p>

                  <p style={{
                    fontSize: "14px",
                    color: "#444"
                  }}>
                    {event.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </div>
    </>
  );
}

export default AcademicEvents;