import InnerPageHeader from "../Components/InnerPageHeader";

function AcademicProgram() {
  return (
    <>
      <InnerPageHeader
        title="Academic Programs"
        breadcrumb={[
          { label: "Academic", link: "/academic/programs" },
          { label: "Programs" },
        ]}
      />

      <div className="container" style={{ padding: "60px 0" }}>
        <h2>Academic Programs</h2>
        <p>
          Explore our comprehensive range of academic programs designed to
          advance your career and knowledge.
        </p>

        {/* Program Sections */}
        <div style={{ marginTop: "40px" }}>
          <h3>K–12 Programs</h3>
          <p>Kindergarten to Grade 12 education.</p>

          <h3>Undergraduate Programs</h3>
          <p>Industry-focused undergraduate courses.</p>

          <h3>Postgraduate Programs</h3>
          <p>Advanced learning for future leaders.</p>
        </div>
      </div>
    </>
  );
}

export default AcademicProgram;
