import InnerPageHeader from "../Components/InnerPageHeader";

function AdmissionProcedure() {
  return (
    <>
      <InnerPageHeader
        title="Admission Procedure"
        breadcrumb={[
          { label: "Admission", link: "/admission/procedure" },
          { label: "Procedure" },
        ]}
      />

      <div className="container" style={{ padding: "60px 0" }}>
        <h2>Admission Procedure</h2>
        <p>
          Our admission process is simple, transparent, and parent-friendly.
        </p>
      </div>
    </>
  );
}

export default AdmissionProcedure;
