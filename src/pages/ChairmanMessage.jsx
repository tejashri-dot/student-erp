import InnerPageHeader from "../Components/InnerPageHeader";

function ChairmanMessage() {
  return (
    <>
      <InnerPageHeader
        title="Message from Chairman"
        breadcrumb={[
          { label: "About", link: "/about" },
          { label: "Message from Chairman" },
        ]}
      />

      <div className="container" style={{ padding: "60px 0" }}>
        <h1>Message from Chairman</h1>
        <p>A Message from Chairman</p>

        <p>
          Welcome to Mint International School. Our vision is to create an
          environment where students grow intellectually, emotionally, and
          socially...
        </p>
      </div>
    </>
  );
}

export default ChairmanMessage;
