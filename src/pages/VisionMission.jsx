import InnerPageHeader from "../Components/InnerPageHeader";

function VisionMission() {
  return (
    <>
      <InnerPageHeader
        title="Vision & Mission"
        breadcrumb={[
          { label: "About", link: "/about" },
          { label: "Vision & Mission" },
        ]}
      />

      <div className="container" style={{ padding: "60px 0" }}>
        <h2>Our Vision</h2>
        <p>
          To inspire learners to become confident, responsible, and global
          citizens.
        </p>

        <h2 style={{ marginTop: "30px" }}>Our Mission</h2>
        <p>
          To provide a safe, supportive, and innovative learning environment
          that nurtures creativity and excellence.
        </p>
      </div>
    </>
  );
}

export default VisionMission;
