// src/components/HealthEvents.jsx
import React, { useState } from "react";

const SAMPLE_EVENTS = [
  { id: 1, title: "ফ্রি ডায়াবেটিস চেকআপ", date: "2025-11-10", location: "Char Kolapara Community Hall", organizer: "BRAC" },
  { id: 2, title: "টিকাদান শিবির (ভ্যাকসিন)", date: "2025-11-18", location: "Bhola Upazila Ground", organizer: "District Health Office" },
];

export default function HealthEvents() {
  const [events] = useState(SAMPLE_EVENTS);

  return (
    <div className="page card">
      <h2>📅 কমিউনিটি হেলথ ইভেন্ট</h2>
      <p className="muted">আপনার এলাকার বা পার্শ্ববর্তী ইভেন্টগুলো দেখুন — ক্যালেন্ডার অ্যাপ এ এক্সপোর্ট করুন।</p>

      <ul className="info-list">
        {events.map((e) => (
          <li key={e.id} className="event-row">
            <div>
              <strong>{e.title}</strong>
              <div className="muted small">{e.location} • {e.organizer}</div>
            </div>
            <div>
              <div className="chip">{e.date}</div>
            </div>
          </li>
        ))}
      </ul>

      <div className="row">
        <button className="btn" onClick={() => alert("RSVP সিমুলেট — আপনাকে ধন্যবাদ!")}>RSVP</button>
        <button className="btn" onClick={() => alert("ক্যালেন্ডার ইন্টার‌্যাকশ‌ন সিমুলেট")}>Add to calendar</button>
      </div>
    </div>
  );
}
