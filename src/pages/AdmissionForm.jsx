import InnerPageHeader from "../Components/InnerPageHeader";

function AdmissionForm() {
  return (
    <>
      <InnerPageHeader
        title="Admission Form"
        breadcrumb={[
          { label: "Admission", link: "/admission/procedure" },
          { label: "Admission Form" },
        ]}
      />

      <div className="container" style={{ padding: "60px 0" }}>
        <h2>Admission Form</h2>
        <p>Please fill out the admission form carefully.</p>
      </div>
    </>
  );
}

export default AdmissionForm;
