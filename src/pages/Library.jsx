import InnerPageHeader from "../Components/InnerPageHeader";

function Library() {
  return (
    <>
      <InnerPageHeader
        title="Library"
        breadcrumb={[
          { label: "Facilities", link: "/facilities/transport" },
          { label: "Library" },
        ]}
      />

      <div className="container" style={{ padding: "60px 0" }}>
        <h2>Library</h2>
        <p>
          A well-stocked library with digital and printed learning resources.
        </p>
      </div>
    </>
  );
}

export default Library;
