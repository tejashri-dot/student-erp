import InnerPageHeader from "../Components/InnerPageHeader";

function FeeStructure() {
  return (
    <>
      <InnerPageHeader
        title="Fee Structure"
        breadcrumb={[
          { label: "Admission", link: "/admission/procedure" },
          { label: "Fee Structure" },
        ]}
      />

      <div className="container" style={{ padding: "60px 0" }}>
        <h2>Fee Structure</h2>
        <p>
          Our fee structure is transparent and designed to be affordable.
        </p>
      </div>
    </>
  );
}

export default FeeStructure;
