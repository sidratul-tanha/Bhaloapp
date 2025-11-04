// src/components/VoiceAssistant.jsx
import React, { useState } from "react";

export default function VoiceAssistant() {
  const [output, setOutput] = useState("");

  const speak = (text) => {
    try {
      const u = new SpeechSynthesisUtterance(text);
      u.lang = "bn-BD";
      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(u);
      setOutput(text);
    } catch (e) {
      setOutput("আপনার ব্রাউজার TTS সমর্থন করে না।");
    }
  };

  const listen = async () => {
    if (!("webkitSpeechRecognition" in window) && !("SpeechRecognition" in window)) {
      setOutput("ASR সমর্থন পাওয়া যায়নি — Chrome ব্যবহার করুন।");
      return;
    }
    const Rec = window.SpeechRecognition || window.webkitSpeechRecognition;
    const r = new Rec();
    r.lang = "bn-BD";
    r.interimResults = false;
    r.maxAlternatives = 1;
    r.onresult = (ev) => {
      const command = ev.results[0][0].transcript || "";
      if (command.includes("স্বাস্থ্য") || command.includes("টিপ")) speak("আজকের টিপ — পরিষ্কার পানি পান করুন এবং মশারতেল ব্যবহার করুন।");
      else if (command.includes("হাসপাতাল")) speak("নিকটস্থ হাসপাতাল: ভোলা সদর হাসপাতালে যান।");
      else if (command.includes("আমি কেমন")) speak("আপনার সাম্প্রতিক লগ বলছে আপনি ঠিক আছেন। প্রয়োজনে কাউকে জানান।");
      else speak("দুঃখিত, বুঝতে পারিনি — আবার বলুন।");
    };
    r.onerror = () => setOutput("শুনতে সমস্যা হয়েছে—পুনরায় চেষ্টা করুন।");
    r.start();
  };

  return (
    <div className="page card">
      <h2>🔊 ভয়েস সহকারী (বাংলা)</h2>
      <p className="muted">উদাহরণ: "স্বাস্থ্য টিপস দেখাও", "হাসপাতাল কোথায়?"</p>

      <div className="row">
        <button className="btn primary" onClick={() => speak("হ্যালো! কিভাবে সাহায্য করতে পারি?")}>TTS: নমস্কার</button>
        <button className="btn" onClick={listen}>🎤 Start Listening</button>
      </div>

      <div className="voice-output card muted small">
        <strong>আউটপুট:</strong>
        <div>{output}</div>
      </div>
    </div>
  );
}
