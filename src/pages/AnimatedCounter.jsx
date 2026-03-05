import { useEffect, useState, useRef } from "react";

export default function AnimatedCounter({ end, duration = 1000, suffix = "" }) {
  const [count, setCount] = useState(0);
  const [blink, setBlink] = useState(false);
  const spanRef = useRef(null);

  useEffect(() => {
    let start = 0;
    const increment = Math.ceil(end / (duration / 30));

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        start = end;
        clearInterval(timer);
        setBlink(false);
      } else {
        setBlink(true);
      }

      setCount(start);
    }, 30);

    return () => clearInterval(timer);
  }, [end, duration]);

  // Apply animation via ref instead of inline style tag
  useEffect(() => {
    if (spanRef.current) {
      if (blink) {
        spanRef.current.style.animation = "blink 0.6s infinite";
      } else {
        spanRef.current.style.animation = "none";
      }
    }
  }, [blink]);

  return (
    <span
      ref={spanRef}
      style={{
        fontWeight: "bold",
        fontSize: "32px",
        transition: "opacity 0.2s ease",
      }}
    >
      <style>
        {`
          @keyframes blink {
            0%   { opacity: 1; }
            50%  { opacity: 0.4; }
            100% { opacity: 1; }
          }
        `}
      </style>
      {count}
      {suffix}
    </span>
  );
}
