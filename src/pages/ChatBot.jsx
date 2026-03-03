import { useEffect, useRef, useState } from "react";

const AUTO_REPLIES = [
  { key: "admission", reply: "Admissions are open. Please visit the office or apply online." },
  { key: "fees", reply: "Fee details are available in the parent portal." },
  { key: "erp", reply: "Our ERP manages attendance, exams, and communication." },
  { key: "transport", reply: "We provide GPS enabled transport facilities." },
  { key: "contact", reply: "You can contact us via email or school office." },
];

export default function VoiceChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hello 👋 You can type or speak your question." },
  ]);
  const [input, setInput] = useState("");
  const recognitionRef = useRef(null);

  /* ---------------- SPEECH RECOGNITION ---------------- */
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) return;

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false;
    recognition.interimResults = false;

    recognition.onresult = (e) => {
      const transcript = e.results[0][0].transcript;
      setInput(transcript);
      handleSend(transcript);
    };

    recognitionRef.current = recognition;
  }, []);

  /* ---------------- TEXT TO SPEECH ---------------- */
  const speak = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = "en-US";
    speech.rate = 1;
    window.speechSynthesis.speak(speech);
  };

  /* ---------------- SEND MESSAGE ---------------- */
  const handleSend = (voiceText) => {
    const text = voiceText ?? input;
    if (!text.trim()) return;

    const userMsg = { from: "user", text };
    let reply = "Thank you. Our team will assist you shortly.";

    const found = AUTO_REPLIES.find((r) =>
      text.toLowerCase().includes(r.key)
    );

    if (found) reply = found.reply;

    const botMsg = { from: "bot", text: reply };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    speak(reply);
    setInput("");
  };

  /* ---------------- MIC CLICK ---------------- */
  const startListening = () => {
    recognitionRef.current?.start();
  };

  /* ---------------- ENTER KEY ---------------- */
  const onKeyDown = (e) => {
    if (e.key === "Enter") handleSend();
  };

  return (
    <>
      {/* OPEN BUTTON */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          style={openBtn}
        >
          Chat 🎙️
        </button>
      )}

      {/* CHATBOT */}
      {open && (
        <div style={chatbot}>
          <div style={header}>
            Voice Assistant 🤖
            <button onClick={() => setOpen(false)} style={closeBtn}>✕</button>
          </div>

          <div style={body}>
            {messages.map((m, i) => (
              <div key={i} style={msg(m.from)}>
                {m.text}
              </div>
            ))}
          </div>

          <div style={inputBar}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              placeholder="Type or speak..."
              style={inputStyle}
            />

            <button onClick={startListening} style={micBtn}>🎤</button>
            <button onClick={() => handleSend()} style={sendBtn}>Send</button>
          </div>
        </div>
      )}
    </>
  );
}

/* ---------------- STYLES ---------------- */

const openBtn = {
  position: "fixed",
  bottom: "20px",
  right: "20px",
  padding: "14px 18px",
  borderRadius: "30px",
  background: "#4f46e5",
  color: "#fff",
  border: "none",
  cursor: "pointer",
  zIndex: 1000,
};

const chatbot = {
  position: "fixed",
  bottom: "80px",
  right: "20px",
  width: "340px",
  height: "460px",
  background: "#fff",
  borderRadius: "16px",
  boxShadow: "0 12px 30px rgba(0,0,0,0.3)",
  display: "flex",
  flexDirection: "column",
  zIndex: 1001,
};

const header = {
  background: "#4f46e5",
  color: "#fff",
  padding: "14px",
  display: "flex",
  justifyContent: "space-between",
  fontWeight: "bold",
};

const closeBtn = {
  background: "none",
  border: "none",
  color: "#fff",
  cursor: "pointer",
  fontSize: "18px",
};

const body = {
  flex: 1,
  padding: "12px",
  background: "#f4f6fb",
  overflowY: "auto",
};

const msg = (from) => ({
  maxWidth: "75%",
  padding: "10px",
  marginBottom: "8px",
  borderRadius: "12px",
  alignSelf: from === "user" ? "flex-end" : "flex-start",
  background: from === "user" ? "#22c55e" : "#fff",
  color: from === "user" ? "#fff" : "#333",
});

const inputBar = {
  display: "flex",
  padding: "10px",
  borderTop: "1px solid #ddd",
};

const inputStyle = {
  flex: 1,
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const micBtn = {
  marginLeft: "6px",
  padding: "10px",
  borderRadius: "8px",
  border: "none",
  cursor: "pointer",
};

const sendBtn = {
  marginLeft: "6px",
  padding: "10px 14px",
  borderRadius: "8px",
  border: "none",
  background: "#4f46e5",
  color: "#fff",
  cursor: "pointer",
};