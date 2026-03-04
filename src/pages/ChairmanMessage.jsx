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

      <div
        className="container"
        style={{
          padding: "60px 0",
          maxWidth: "1140px",
          margin: "0 auto",
        }}
      >
        {/* Page Title */}
        <h1
          style={{
            fontSize: "32px",
            fontWeight: "700",
            marginBottom: "10px",
          }}
        >
          Message from Chairman
        </h1>

        <p
          style={{
            fontSize: "16px",
            color: "#666",
            marginBottom: "30px",
          }}
        >
          A Message from Chairman
        </p>

        {/* Message Content */}
        <p
          style={{
            fontSize: "15px",
            lineHeight: "1.8",
            color: "#444",
            marginBottom: "15px",
          }}
        >
          Welcome to Mint International School, a place where dreams are nurtured
          and excellence is a way of life. We believe education goes beyond
          academics and focuses on developing values, creativity, and lifelong
          learning.
        </p>

        <p
          style={{
            fontSize: "15px",
            lineHeight: "1.8",
            color: "#444",
            marginBottom: "30px",
          }}
        >
          Our goal is to provide a holistic education that empowers students to
          think critically, act responsibly, and achieve their aspirations in a
          rapidly changing world.
        </p>

        {/* IMAGE CARD SECTION */}
        <div
          style={{
            backgroundColor: "#fff",
            borderRadius: "12px",
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            padding: "15px",
            textAlign: "center",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1200&q=80"
            alt="Nurturing Global Citizens"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "10px",
            }}
          />

          <h3
            style={{
              marginTop: "20px",
              fontSize: "22px",
              fontWeight: "600",
              color: "#222",
            }}
          >
            Nurturing Global Citizens
          </h3>

          <p
            style={{
              fontSize: "15px",
              color: "#555",
              lineHeight: "1.7",
              maxWidth: "850px",
              margin: "10px auto 0",
            }}
          >
            At Mint International School, we instill values that go beyond
            academics. Our focus on empathy, respect, and environmental
            responsibility prepares students to make meaningful contributions
            to society and thrive as responsible global citizens.
          </p>
        </div>
      </div>
    </>
  );
}

export default ChairmanMessage;