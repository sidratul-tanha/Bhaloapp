// src/components/MoodCheckIn.jsx
import React, { useEffect, useState } from "react";

const MOOD_KEY = "batho_moods";

export default function MoodCheckIn() {
  const [mood, setMood] = useState("");
  const [logs, setLogs] = useState(() => JSON.parse(localStorage.getItem(MOOD_KEY)) || []);
  const [message, setMessage] = useState("");

  useEffect(() => {
    localStorage.setItem(MOOD_KEY, JSON.stringify(logs));
  }, [logs]);

  const submit = (e) => {
    e.preventDefault();
    if (!mood) {
      setMessage("একটা অপশন সিলেক্ট করুন।");
      return;
    }
    const entry = { id: Date.now(), mood, note: "", date: new Date().toISOString() };
    setLogs([entry, ...logs].slice(0, 200)); // keep latest 200
    setMood("");
    setMessage("ধন্যবাদ — লগ করা হলো।");
    setTimeout(() => setMessage(""), 2000);
  };

  const remove = (id) => setLogs(logs.filter((l) => l.id !== id));

  return (
    <div className="page card">
      <h2>🧠 দৈনিক মানসিকিক চেক-ইন</h2>
      <p className="muted">আজ কেমন লাগছে? (কোনো নাম দেওয়া লাগবে না)</p>

      <form onSubmit={submit} className="form-grid">
        <select value={mood} onChange={(e) => setMood(e.target.value)} aria-label="mood">
          <option value="">-- আজ কেমন --</option>
          <option value="😊 ভালো">😊 ভালো</option>
          <option value="😐 ঠিক আছে">😐 ঠিক আছে</option>
          <option value="😔 মন খারাপ">😔 মন খারাপ</option>
          <option value="😫 চিন্তা অনেক">😫 চিন্তা অনেক</option>
        </select>
        <button className="btn primary" type="submit">Save</button>
      </form>

      {message && <div className="toast">{message}</div>}

      <h3>সম্প্রতি লগ</h3>
      <ul className="log-list">
        {logs.length === 0 && <li className="muted">কোনো লগ নেই — আজই একটি যোগ করুন।</li>}
        {logs.map((l) => (
          <li key={l.id}>
            <div>
              <strong>{l.mood}</strong>
              <div className="muted small">{new Date(l.date).toLocaleString()}</div>
            </div>
            <div>
              <button className="btn small" onClick={() => remove(l.id)}>মুছুন</button>
            </div>
          </li>
        ))}
      </ul>

      <div className="insight">
        <small>নোট: যদি ৩ দিন লম্বা সময় কোনো লগ না থাকে, অ্যাপ মৃদুভাবে স্মরণ করাবে — কিন্তু লজ্জা করবেন না।</small>
      </div>
    </div>
  );
}
