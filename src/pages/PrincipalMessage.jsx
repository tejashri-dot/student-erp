import InnerPageHeader from "../Components/InnerPageHeader";

function PrincipalMessage() {
  return (
    <>
      <InnerPageHeader
        title="Message from Principal"
        breadcrumb={[
          { label: "About", link: "/about" },
          { label: "Message from Principal" },
        ]}
      />

      <div className="container" style={{ padding: "60px 0" }}>
        <h2>Message from Principal</h2>
        <p>
          At Mint International School, we believe every child is unique. Our
          focus is on holistic development through academics, sports, and values.
        </p>
      </div>
    </>
  );
}

export default PrincipalMessage;
