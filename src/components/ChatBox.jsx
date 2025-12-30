import React, { useState } from "react";
import ReactMarkdown from "react-markdown";

const API = import.meta.env.VITE_BACKEND_URL;

export default function ChatBox() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);

  async function send() {
    if (!input) return;

    const userMsg = { role: "user", text: input };
    setChat(prev => [...prev, userMsg]);

    const res = await fetch(`${API}/api/mentor/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });

    const data = await res.json();

    const aiMsg = { role: "ai", text: data.reply };
    setChat(prev => [...prev, aiMsg]);

    setInput("");
  }

  return(
  <div style={{ maxWidth: 700, margin: "20px auto", fontFamily: "Inter, system-ui, Arial" }}>
    <h2>AI Career Chatbot 🤖</h2>

    <div
      style={{
        border: "1px solid #ccc",
        padding: 16,
        minHeight: 300,
        borderRadius: 8,
        background: "#fafafa",
        overflowY: "auto",
        lineHeight: 1.6
      }}
    >
      {chat.map((msg, i) => (
        <div key={i} style={{ marginBottom: 16 }}>
          <strong>{msg.role === "user" ? "You" : "AI"}:</strong>
          <div style={{ marginTop: 6 }}>
            <ReactMarkdown>{msg.text}</ReactMarkdown>
          </div>
        </div>
      ))}
    </div>

    <input
      value={input}
      onChange={e => setInput(e.target.value)}
      placeholder="Ask about your career..."
      style={{
        width: "100%",
        marginTop: 12,
        padding: 10,
        borderRadius: 6,
        border: "1px solid #ccc"
      }}
    />

    <button
      onClick={send}
      style={{
        marginTop: 10,
        padding: "8px 16px",
        borderRadius: 6,
        border: "none",
        background: "#2563eb",
        color: "#fff",
        cursor: "pointer"
      }}
    >
      Send
    </button>
  </div>
);
}

