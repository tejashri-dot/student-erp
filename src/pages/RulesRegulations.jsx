import InnerPageHeader from "../Components/InnerPageHeader";

function RulesRegulations() {
  return (
    <>
      <InnerPageHeader
        title="Rules & Regulations"
        breadcrumb={[
          { label: "Academic", link: "/academic/programs" },
          { label: "Rules & Regulations" },
        ]}
      />

      <div className="container" style={{ padding: "60px 0" }}>
        <h2>Rules & Regulations</h2>
        <p>
          Our rules ensure discipline, safety, and academic excellence.
        </p>
      </div>
    </>
  );
}

export default RulesRegulations;
