import InnerPageHeader from "../Components/InnerPageHeader";

function Transport() {
  return (
    <>
      <InnerPageHeader
        title="Transport Facility"
        breadcrumb={[
          { label: "Facilities", link: "/facilities/transport" },
          { label: "Transport" },
        ]}
      />

      <div className="container" style={{ padding: "60px 0" }}>
        <h2>Transport Facility</h2>
        <p>
          Safe and reliable transport services covering all major routes.
        </p>
      </div>
    </>
  );
}

export default Transport;
