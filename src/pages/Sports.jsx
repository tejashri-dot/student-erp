import InnerPageHeader from "../Components/InnerPageHeader";

function Sports() {
  return (
    <>
      <InnerPageHeader
        title="Sports"
        breadcrumb={[
          { label: "Facilities", link: "/facilities/transport" },
          { label: "Sports" },
        ]}
      />

      <div className="container" style={{ padding: "60px 0" }}>
        <h2>Sports Facilities</h2>
        <p>
          Indoor and outdoor sports facilities for physical development.
        </p>
      </div>
    </>
  );
}

export default Sports;
