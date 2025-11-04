// src/components/CommunityMap.jsx
import React, { useEffect, useState } from "react";

const sampleClinics = [
  { id: 1, name: "Char Kolapara Clinic", type: "কমিউনিটি ক্লিনিক", upazila: "Bhola", union: "Char Kolapara", desc: "কাজের সময়: মঙ্গল-বৃহস্পতি সকাল" },
  { id: 2, name: "Bhola Upazila Health Complex", type: "উপজেলা হাসপাতাল", upazila: "Bhola", union: "Sadar", desc: "২৪/৭ জরুরি সেবা" },
  { id: 3, name: "Sujon NGO Drop-in", type: "NGO সেন্টার", upazila: "Bhola", union: "Sadar", desc: "মানসিক সহায়তা শিবির" },
];

export default function CommunityMap() {
  const [location, setLocation] = useState(null);
  const [clinics] = useState(sampleClinics);
  const [nearby, setNearby] = useState(clinics);

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocation({ lat: pos.coords.latitude, lon: pos.coords.longitude });
        },
        () => {
          setLocation(null);
        },
        { timeout: 5000 }
      );
    }
  }, []);

  // simple pseudo-distance: alphabetical fallback to ensure deterministic tie-breakers
  useEffect(() => {
    if (!location) return setNearby(clinics);
    // pseudo-rank based on lat parity (mock) — in real app calculate actual distance
    const ranked = [...clinics].map((c, i) => ({ ...c, score: Math.abs(i - (location.lat % 3)) })).sort((a, b) => a.score - b.score);
    setNearby(ranked);
  }, [location, clinics]);

  return (
    <div className="page card">
      <h2>📍 কমিউনিটি স্বাস্থ্য মানচিত্র</h2>
      <p className="muted">নির্বাচন: জিপিএস বা ইউনিয়ন-ভিত্তিক তালিকা</p>

      <div className="map-area">
        {/* Decorative simple map fallback */}
        {location ? (
          <div className="mapbox">
            <div className="map-pin">📍</div>
            <div className="map-caption">আপনি এখানেই: {location.lat.toFixed(2)}, {location.lon.toFixed(2)}</div>
          </div>
        ) : (
          <div className="map-fallback">
            <strong>GPS পাওয়া যায়নি</strong>
            <p className="muted">আরওর সহজ তালিকা দেখানো হচ্ছে — ল্যান্ডমার্ক মেনশন করতে বলুন (উদাহরণ: "বড় আম গাছের পাশে")</p>
          </div>
        )}
      </div>

      <h3>ক্লিনিক ও সেবা (নিকটতম)</h3>
      <ul className="info-list">
        {nearby.map((c) => (
          <li key={c.id} className="info-row">
            <div>
              <strong>{c.name}</strong> <span className="chip">{c.type}</span>
              <div className="muted small">{c.union}, {c.upazila}</div>
              <div className="muted small">{c.desc}</div>
            </div>
          </li>
        ))}
      </ul>

      <div className="hint">
        <small>উদাহরণ: দুই গ্রাম একই দূরত্বে থাকলে বাস/নৌ-সুবিধা বিবেচনা করুন — ক্লিনিক তালিকায় 'পরিবহন সুবিধা' ফিল্ড যোগ করতে পারেন।</small>
      </div>
    </div>
  );
}
