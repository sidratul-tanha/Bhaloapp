// src/App.jsx
import React, { useState, useEffect } from "react";
import Login from "./components/Login";
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
  { id: "home", label: "🏠 হোম" },
  { id: "mood", label: "1️⃣ মুড চেক-ইন" },
  { id: "map", label: "2️⃣ কমিউনিটি মানচিত্র" },
  { id: "help", label: "3️⃣ অ্যানোনিমাস হেল্প" },
  { id: "tips", label: "4️⃣ ঋতুভিত্তিক টিপস" },
  { id: "maternal", label: "5️⃣ মাতৃত্ব ও শিশু ট্র্যাকার" },
  { id: "symptom", label: "6️⃣ লক্ষণ নির্দেশিকা" },
  { id: "events", label: "7️⃣ স্বাস্থ্য ইভেন্টস" },
  { id: "volunteer", label: "8️⃣ স্বেচ্ছাসেবক তালিকা" },
  { id: "export", label: "9️⃣ ডেটা এক্সপোর্ট" },
  { id: "voice", label: "🔊 ভয়েস অ্যাসিস্ট্যান্ট" },
];

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Check if user is already logged in on component mount
  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    const isLogged = localStorage.getItem("isLoggedIn") === "true";
    const savedTheme = localStorage.getItem('theme');
    
    if (loggedInUser && isLogged) {
      setUser(JSON.parse(loggedInUser));
      setIsLoggedIn(true);
    }
    
    // Set theme from localStorage or default to dark mode
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Save theme preference to localStorage
  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // Track mouse position for dynamic background
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleLogin = (userInfo) => {
    setUser(userInfo);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUser(null);
    setPage("home");
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Show login page if not logged in
  if (!isLoggedIn) {
    return <Login onLogin={handleLogin} isDarkMode={isDarkMode} toggleTheme={toggleTheme} />;
  }

  return (
    <div className={`app-root ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      {/* Dynamic Background */}
      <div 
        className="dynamic-bg" 
        style={{
          background: isDarkMode 
            ? `radial-gradient(600px 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,212,255,0.15), transparent 50%),
               radial-gradient(400px 200px at ${window.innerWidth - mousePosition.x}px ${window.innerHeight - mousePosition.y}px, rgba(123,97,255,0.1), transparent 50%),
               linear-gradient(120deg, rgba(0,16,32,0.8), rgba(10,6,20,0.9))`
            : `radial-gradient(600px 300px at ${mousePosition.x}px ${mousePosition.y}px, rgba(0,212,255,0.2), transparent 50%),
               radial-gradient(400px 200px at ${window.innerWidth - mousePosition.x}px ${window.innerHeight - mousePosition.y}px, rgba(123,97,255,0.15), transparent 50%),
               linear-gradient(120deg, rgba(255,255,255,0.9), rgba(240,240,255,0.95))`
        }}
      />
      
      {/* Animated Gradient Background */}
      <div className="animated-gradient-bg" />
      
      <header className="topbar">
        <div className="brand">
          <div className="logo">💚</div>
          <div>
            <h1>ভালো আছো তো?</h1>
            <p className="tag">কমিউনিটি হেলথ নেভিগেটর — মনবন্ধু</p>
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
          <button className="nav-btn theme-toggle-btn" onClick={toggleTheme}>
            {isDarkMode ? "🌙" : "☀️"}
          </button>
          <button className="nav-btn logout-btn" onClick={handleLogout}>
            লগআউট
          </button>
        </nav>
      </header>

      <main className="main">
        {page === "home" && (
          <section className="hero-card">
            <h2>স্বাগত — ভালো আছো তো?</h2>
            <p>
              একটি সাহসী, সহজ, এবং গ্রামীণ সাংস্কৃতিকভাবে সংবেদনশীল স্বাস্থ্য অ্যাপ। মোবাইল-প্রথম, অফলাইন-সহায়ক।
            </p>
            <div className="grid-preview">
              <div className="preview-card" onClick={() => setPage("mood")}>🧠 মুড চেক</div>
              <div className="preview-card" onClick={() => setPage("map")}>📍 মানচিত্র</div>
              <div className="preview-card" onClick={() => setPage("help")}>🕊️ হেল্প</div>
              <div className="preview-card" onClick={() => setPage("maternal")}>👶 মাতৃত্ব</div>
            </div>
            <small className="hint">টিপ: মাউস বা টাচ নাড়ালে ব্যাকগ্রাউন্ড স্থানান্তরিত হবে ✨</small>
          </section>
        )}

        {page === "mood" && <MoodCheckIn isDarkMode={isDarkMode} />}
        {page === "map" && <CommunityMap isDarkMode={isDarkMode} />}
        {page === "help" && <AnonymousHelp isDarkMode={isDarkMode} />}
        {page === "tips" && <SeasonalTips isDarkMode={isDarkMode} />}
        {page === "maternal" && <MaternalChildTracker isDarkMode={isDarkMode} />}
        {page === "symptom" && <SymptomGuide isDarkMode={isDarkMode} />}
        {page === "events" && <HealthEvents isDarkMode={isDarkMode} />}
        {page === "volunteer" && <VolunteerDirectory isDarkMode={isDarkMode} />}
        {page === "export" && <DataExport isDarkMode={isDarkMode} />}
        {page === "voice" && <VoiceAssistant isDarkMode={isDarkMode} />}
      </main>

      <footer className="footer">
        <p>রুরাল বাংলাদেশের জন্য ❤️ সহ নির্মিত • প্রাইভেসি-ফার্স্ট • অফলাইন-সহাযক</p>
        <small>© ভালো আছো তো?</small>
      </footer>
    </div>
  );
}