import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);
  const [isHover, setIsHover] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ✅ Correct style name
  const scrollTopStyle = {
    position: "fixed",
    bottom: "90px",   // ABOVE chatbot
    right: "20px",
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    border: "none",
    backgroundColor: "#333",
    color: "#fff",
    fontSize: "22px",
    cursor: "pointer",
    zIndex: 900,
    transition: "all 0.3s ease",
  };

  const hoverStyle = {
    backgroundColor: "#555",
    transform: "translateY(-3px)",
  };

  return (
    show && (
      <button
        onClick={scrollUp}
        style={{
          ...scrollTopStyle,   // ✅ FIX HERE
          ...(isHover ? hoverStyle : {}),
        }}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    )
  );
}