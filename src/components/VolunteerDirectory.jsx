// src/components/VolunteerDirectory.jsx
import React from "react";

const workers = [
  { id: 1, name: "রফিক", skills: ["First Aid", "Maternal Health"], contact: "01712-000000", verified: "BRAC" },
  { id: 2, name: "নাসরিন", skills: ["Mental Health Support"], contact: "01819-222222", verified: "Red Crescent" },
];

export default function VolunteerDirectory() {
  return (
    <div className="page card">
      <h2>👩‍⚕️ স্বেচ্ছাসেবক ডিরেক্টরি</h2>
      <p className="muted">ট্রেইনিং প্রমাণপত্রসহ নিশ্চিতকৃত ব্যক্তিদের কন্টাক্ট দেখুন।</p>

      <ul className="info-list">
        {workers.map((w) => (
          <li key={w.id} className="info-row">
            <div>
              <strong>{w.name}</strong> <span className="muted small">({w.verified})</span>
              <div className="muted small">{w.skills.join(", ")}</div>
            </div>
            <div>
              <div className="muted small">📞 {w.contact}</div>
              <button className="btn small" onClick={() => alert(`Calling ${w.contact} ... (simulate)`) }>Call</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
