import React, { useState } from "react";

const VoiceAssistant = () => {
  const [output, setOutput] = useState("");

  const startListening = () => {
    const recognition = new window.webkitSpeechRecognition();
    recognition.lang = "bn-BD";
    recognition.onresult = (e) => {
      const command = e.results[0][0].transcript;
      if (command.includes("স্বাস্থ্য")) setOutput("আজকের টিপস: পর্যাপ্ত পানি পান করুন 💧");
      else if (command.includes("হাসপাতাল")) setOutput("নিকটস্থ হাসপাতাল: ভোলা সদর হাসপাতাল");
      else setOutput("দুঃখিত, বুঝতে পারিনি। আবার বলুন।");
      speak(output);
    };
    recognition.start();
  };

  const speak = (text) => {
    const synth = window.speechSynthesis;
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = "bn-BD";
    synth.speak(utter);
  };

  return (
    <div className="page">
      <h2>🔊 Voice Assistant</h2>
      <button onClick={startListening}>🎤 Start Speaking</button>
      <p>{output}</p>
    </div>
  );
};

export default VoiceAssistant;
