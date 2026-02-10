import InnerPageHeader from "../Components/InnerPageHeader";

function AcademicEvents() {
  return (
    <>
      <InnerPageHeader
        title="Academic Events"
        breadcrumb={[
          { label: "Academic", link: "/academic/programs" },
          { label: "Events" },
        ]}
      />

      <div className="container" style={{ padding: "60px 0" }}>
        <h2>Academic Events</h2>
        <p>Workshops, seminars, and competitions.</p>
      </div>
    </>
  );
}

export default AcademicEvents;
