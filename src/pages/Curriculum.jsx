import InnerPageHeader from "../Components/InnerPageHeader";

function Curriculum() {
  return (
    <>
      <InnerPageHeader
        title="Curriculum"
        breadcrumb={[
          { label: "Academic", link: "/academic/programs" },
          { label: "Curriculum" },
        ]}
      />

      <div className="container" style={{ padding: "60px 0" }}>
        <h2>Our Curriculum</h2>
        <p>
          Our curriculum is designed to balance academics, creativity, and
          life skills.
        </p>
      </div>
    </>
  );
}

export default Curriculum;
