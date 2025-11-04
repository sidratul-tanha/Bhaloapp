// src/App.jsx
import React, { useState } from "react";
import MoodCheckIn from "./components/MoodCheckIn";
import CommunityMap from "./components/CommunityMap";
import AnonymousHelp from "./components/AnonymousHelp";
import SeasonalTips from "./components/SeasonalTips";
import MaternalChildTracker from "./components/MaternalChildTracker";
import SymptomGuide from "./components/SymptomGuide";
import HealthEvents from "./components/HealthEvents";
import VolunteerDirectory from "./components/VolunteerDirectory";
import DataExport from "./components/DataExport";
import VoiceAssistant from "./components/VoiceAssistant";


const pages = [
  { id: "home", label: "🏠 Home" },
  { id: "mood", label: "1️⃣ Mood Check-In" },
  { id: "map", label: "2️⃣ Community Map" },
  { id: "help", label: "3️⃣ Anonymous Help" },
  { id: "tips", label: "4️⃣ Seasonal Tips" },
  { id: "maternal", label: "5️⃣ Maternal Tracker" },
  { id: "symptom", label: "6️⃣ Symptom Guide" },
  { id: "events", label: "7️⃣ Health Events" },
  { id: "volunteer", label: "8️⃣ Volunteers" },
  { id: "export", label: "9️⃣ Data Export" },
  { id: "voice", label: "🔊 Voice Assistant" },
];

export default function App() {
  const [page, setPage] = useState("home");
  return (
    <div className="app-root">
      <div id="parallax-bg" className="parallax-bg" />
      <header className="topbar">
        <div className="brand">
          <div className="logo">💚</div>
          <div>
            <h1>BhaloAchoTo</h1>
            <p className="tag">Community Health Navigator — মনবন্ধু</p>
          </div>
        </div>

        <nav className="nav">
          {pages.map((p) => (
            <button
              key={p.id}
              className={`nav-btn ${page === p.id ? "active" : ""}`}
              onClick={() => setPage(p.id)}
            >
              {p.label}
            </button>
          ))}
        </nav>
      </header>

      <main className="main">
        {page === "home" && (
          <section className="hero-card">
            <h2>স্বাগত — BhaloAchoTo</h2>
            <p>
              একটি সাহসী, সহজ, এবং গ্রামীণ সাংস্কৃতিক ভাবে সংবেদনশীল স্বাস্থ্য অ্যাপ। মোবাইল-প্রথম, অফলাইন-সহায়ক।
            </p>
            <div className="grid-preview">
              <div className="preview-card" onClick={() => setPage("mood")}>🧠 Mood Check</div>
              <div className="preview-card" onClick={() => setPage("map")}>📍 Map</div>
              <div className="preview-card" onClick={() => setPage("help")}>🕊️ Help</div>
              <div className="preview-card" onClick={() => setPage("maternal")}>👶 Maternal</div>
            </div>
            <small className="hint">Tip: move your mouse or touch to shift the background ✨</small>
          </section>
        )}

        {page === "mood" && <MoodCheckIn />}
        {page === "map" && <CommunityMap />}
        {page === "help" && <AnonymousHelp />}
        {page === "tips" && <SeasonalTips />}
        {page === "maternal" && <MaternalChildTracker />}
        {page === "symptom" && <SymptomGuide />}
        {page === "events" && <HealthEvents />}
        {page === "volunteer" && <VolunteerDirectory />}
        {page === "export" && <DataExport />}
        {page === "voice" && <VoiceAssistant />}
      </main>

      <footer className="footer">
        <p>Built with ❤️ for rural Bangladesh • Privacy-first • Offline-friendly</p>
        <small>© BhaloAchoTo</small>
      </footer>
    </div>
  );
}
