import { useEffect, useState } from "react";

export default function AnimatedCounter({
  end,
  duration = 1000,
  suffix = "",
}) {
  const [count, setCount] = useState(0);
  const [blink, setBlink] = useState(false);

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

  return (
    <>
      {/* INLINE BLINK ANIMATION */}
      <style>
        {`
          @keyframes blink {
            0%   { opacity: 1; }
            50%  { opacity: 0.4; }
            100% { opacity: 1; }
          }
        `}
      </style>

      <span
        style={{
          animation: blink ? "blink 0.6s infinite" : "none",
          fontWeight: "bold",
          fontSize: "32px",
          transition: "opacity 0.2s ease",
        }}
      >
        {count}
        {suffix}
      </span>
    </>
  );
}