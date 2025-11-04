// src/components/MaternalChildTracker.jsx
import React, { useState } from "react";

const VACCINES = [
  { name: "BCG", weeks: 0 },
  { name: "Penta-1", weeks: 6 },
  { name: "Penta-2", weeks: 10 },
  { name: "Penta-3", weeks: 14 },
  { name: "MR", weeks: 36 },
];

export default function MaternalChildTracker() {
  const [date, setDate] = useState("");
  const [schedule, setSchedule] = useState([]);

  const submit = (e) => {
    e.preventDefault();
    if (!date) return alert("তারিখ লিখুন।");
    const birth = new Date(date);
    const upcoming = VACCINES.map((v) => {
      const due = new Date(birth.getTime() + v.weeks * 7 * 24 * 60 * 60 * 1000);
      return { name: v.name, due: due.toLocaleDateString() };
    });
    setSchedule(upcoming);
  };

  return (
    <div className="page card">
      <h2>👶 মাতৃ ও শিশু ট্র্যাকার</h2>
      <p className="muted">শিশুর জন্ম তারিখ দিন অথবা সম্ভাব্য ডেলিভারি দিন দিন।</p>

      <form onSubmit={submit} className="form-inline">
        <label>জন্ম/ডেলিভারি: <input type="date" value={date} onChange={(e) => setDate(e.target.value)} /></label>
        <button className="btn primary" type="submit">শিডিউল দেখাও</button>
      </form>

      <ul className="info-list">
        {schedule.length === 0 && <li className="muted">কোনো শিডিউল নেই — একটি দিন নির্বাচন করুন।</li>}
        {schedule.map((s, i) => (
          <li key={i}><strong>{s.name}</strong> — নির্ধারিত: {s.due}</li>
        ))}
      </ul>

      <div className="hint small muted">নোট: ডেটা ডিভাইসে সেভ থাকে; শেয়ার করতে চাইলে সাহায্য চেয়ে নিন।</div>
    </div>
  );
}
