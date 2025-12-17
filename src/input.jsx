import React, { useState } from "react";

function MessageTemplates() {
 const templates = [
  <span style={{ color: "blue" }}>שלום, האם המוצר עדיין זמין?</span>,
  <span style={{ color: "yellow" }}>שלום, האם המוצר עדיין זמין?</span>,
  <span style={{ color: "green" }}>שלום, האם המוצר עדיין זמין?</span>,
  <span style={{ color: "green" }}>שלום, האם המוצר עדיין זמין?</span>,
  "מה המחיר הסופי שאתה מבקש?"
];
// בזמן הרינדור:
{templates.map((text, index) => (
  <div
    key={index}
    style={{ color: index === 0 ? "blue" : "black" }}
  >
    {text}
  </div>
))}

  const [selectedMessage, setSelectedMessage] = useState("");
  const [sentMessages, setSentMessages] = useState([]);

  const handleSend = (msg) => {
    setSentMessages([...sentMessages, msg]);
    setSelectedMessage(msg);
  };
  return (
    <div style={{ fontFamily: "Arial", maxWidth: "400px", margin: "auto" }}>
      <h2>בחר הודעה מוכנה</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {templates.map((msg, index) => (
          <li key={index} style={{ marginBottom: "10px" }}>
            <button
              onClick={() => handleSend(msg)}
              style={{
                padding: "8px 12px",
                borderRadius: "5px",
                border: "1px solid #ccc",
                cursor: "pointer",
                width: "100%"
              }}
            >
              {msg}
            </button>
          </li>
        ))}
      </ul>

      <h3>הודעה אחרונה שנבחרה:</h3>
      <p style={{ background: "#f0f0f0", padding: "10px" }}>
        {selectedMessage || "לא נבחרה הודעה"}
      </p>

      <h3>הודעות שנשלחו:</h3>
      <ul>
        {sentMessages.map((msg, i) => (
          <li key={i}>{msg}</li>
        ))}
      </ul>
    </div>
  );
}

export default MessageTemplates;