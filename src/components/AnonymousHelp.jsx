// src/components/AnonymousHelp.jsx
import React, { useEffect, useState } from "react";

const QUEUE_KEY = "batho_help_queue";

export default function AnonymousHelp() {
  const [message, setMessage] = useState("");
  const [queue, setQueue] = useState(() => JSON.parse(localStorage.getItem(QUEUE_KEY)) || []);
  const [status, setStatus] = useState("");

  useEffect(() => {
    localStorage.setItem(QUEUE_KEY, JSON.stringify(queue));
  }, [queue]);

  // fake "send when online" behaviour
  useEffect(() => {
    const trySend = () => {
      if (navigator.onLine && queue.length > 0) {
        // simulate sending first queued item
        const next = queue[0];
        setTimeout(() => {
          setQueue((q) => q.slice(1));
          setStatus("একটি অনুরোধ পাঠানো হয়েছে — স্থানীয় NGO/স্বেচ্ছাসেবক ৪৮ ঘণ্টার মধ্যে যোগাযোগ করবে।");
          setTimeout(() => setStatus(""), 4000);
        }, 1200);
      }
    };
    window.addEventListener("online", trySend);
    trySend();
    return () => window.removeEventListener("online", trySend);
  }, [queue]);

  const submit = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    const req = { id: Date.now(), message: message.slice(0, 1000), createdAt: new Date().toISOString(), status: "queued" };
    setQueue([req, ...queue].slice(0, 50));
    setMessage("");
    setStatus("আপনার অনুরোধ লক করা হয়েছে এবং ইন্টারনেট থাকলেই পাঠানো হবে।");
    setTimeout(() => setStatus(""), 3000);
  };

  const clearAll = () => {
    if (confirm("সবগুলো কিউ বাতিল করবেন?")) setQueue([]);
  };

  return (
    <div className="page card">
      <h2>🕊️ অননাম অনুরোধ</h2>
      <p className="muted">কোনো নাম, ফোন না দিলে পুরোপুরি গোপন — আপনি চাইলে পরে যোগাযোগ শেয়ার করতে পারবেন।</p>

      <form onSubmit={submit} className="form-vertical">
        <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="আপনার কথা লিখুন — কেউ দেখবে না।" rows={4} />
        <div className="row">
          <button className="btn primary" type="submit">গোপনে পাঠান</button>
          <button type="button" className="btn" onClick={() => setMessage("")}>রিসেট</button>
        </div>
      </form>

      {status && <div className="toast">{status}</div>}

      <h3>📦 কিউ (স্থানীয়ভাবে স্টোরড)</h3>
      <ul className="log-list">
        {queue.length === 0 && <li className="muted">কোনো কিউ নেই।</li>}
        {queue.map((q) => (
          <li key={q.id}>
            <div>
              <div className="muted small">{new Date(q.createdAt).toLocaleString()}</div>
              <div>{q.message}</div>
            </div>
            <div>
              <span className="chip small">Status: {q.status}</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="row space-between">
        <small className="muted">নোট: অনলাইন হলে অটোমেটিকভাবে প্রথম আইটেম সাবমিট হবে (সিমুলেট) ।</small>
        <button className="btn danger small" onClick={clearAll}>ক্লিয়ার</button>
      </div>
    </div>
  );
}
