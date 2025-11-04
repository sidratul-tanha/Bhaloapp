# 🌿BhaloAchoTo App (স্বাস্থ্যসেবা)  
### _From Campus Chaos to Corporate Crusade_  
**By:** Hablu @ ShasthoTech Bangladesh Ltd.  
**Tagline:** _"Because even in 2G villages, your mon (mind) deserves 4G care."_  

---

## 📖 Project Overview

Welcome to **BhaloAchoTo App** — the official portfolio app of **Hablu**, a once heartbroken campus legend turned corporate crusader at *ShasthoTech Bangladesh Limited*.

The mission? Build a culturally-aware, low-bandwidth, accessible mobile web app to support **mental and community health in rural Bangladesh** — with a pinch of satire and a lot of sincerity.

This project is part of the **MonBondhu (Mind Friend)** initiative — a digital health navigator built for communities that face stigma, limited access, and low awareness about mental and physical health.

---

## 🧭 Core Concept

Rural Bangladesh faces three big health barriers:
1. **Stigma** – "মানসিক সমস্যা? What will people say?"
2. **Access** – The nearest psychiatrist might be 80 km away.
3. **Awareness** – Many still say "মন খারাপ লাগছে" instead of “I feel anxious.”

**ShasthoSheba** tackles these with empathy, humor, and inclusive design — evolving feature-by-feature through “missions.”

---

## 🚀 Feature Missions (1️⃣–🔟)

Each mission adds one functional module to the app.  
The app evolves — not multiplies.

### 🧠 Mission 1: Mental Health Check-In
Track daily mood and stress using simple Bangla prompts.  
- Offline logging & privacy-first data storage  
- Visual mood history  
- Culturally relevant terms like “মন খারাপ” and “চিন্তা অনেক”  
- Gentle daily reminders (no guilt trips)

💡 *Riddle:* How do you nudge users who return after 3 days offline — with care, not shame?

---

### 🗺️ Mission 2: Community Health Map
Find nearby health facilities easily.  
- Clinics, hospitals, pharmacies, NGO drop-ins  
- Offline fallback: Upazila/Union-based lists  
- Shows both formal & informal support (peer helpers, teachers, CHWs)

💡 *Riddle:* When two villages are equidistant, how do you rank access fairly?

---

### 🕊️ Mission 3: Anonymous Help Request
Seek help safely — no judgment, no exposure.  
- No personal data needed  
- Offline queue → auto-submit when connected  
- Clear, empathetic consent flow  
- Requests routed to verified local NGOs

💡 *Riddle:* How do you visually *signal safety* to users afraid of being traced?

---

### 🌦️ Mission 4: Seasonal Preventive Health Tips
Receive relevant, local health info year-round.  
- Dengue (monsoon), Flu (winter), Diarrhea (summer)  
- Offline caching for low data use  
- Real tips, not pseudoscience (“Boil water for 10 min”, not “use neem magic”)

---

### 🤰 Mission 5: Maternal & Child Health Tracker
Support mothers and children through key milestones.  
- ANC reminders, vaccination tracking (EPI calendar)  
- Privacy-first (data stored locally)  
- Optional sharing with health workers

---

### 🩺 Mission 6: Symptom Awareness Guide
Learn when to seek help — without turning into WebMD Bangladesh.  
- Education, not diagnosis  
- Covers diarrhea, chest pain, mental health, etc.  
- Counteracts misinformation in local terms  

---

### 📅 Mission 7: Community Health Events
Never miss local health camps again!  
- Upcoming health camps, blood drives, awareness sessions  
- Simple event cards with time, place & organizer  
- Offline access for previously synced events  

---

### 🧑‍⚕️ Mission 8: Volunteer Health Worker Directory
Find real, local heroes.  
- Search by union/village or skill tags  
- Verified CHWs & volunteers (NGO-trained)  
- No ratings, no bias — just access  

---

### 📊 Mission 9: Health Data Export for NGOs
Empower policy without invading privacy.  
- Aggregated, anonymized statistics only  
- Trends: check-ins, help requests, facility searches  
- Data minimization compliance  

---

### 🎙️ Mission 10: Voice-First Health Assistant
Accessibility meets innovation.  
- Bangla speech recognition + text-to-speech  
- Works offline for pre-cached data  
- Perfect for low-literacy or elderly users  

💡 *Riddle:* How do you handle regional Bangla dialects when speech recognition mishears “হাসপাতাল” as “হাস পাতাল”?  

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | React + Vite |
| UI Library | TailwindCSS + Shadcn/UI |
| Voice Features | Web Speech API (SpeechRecognition + TTS) |
| Data | IndexedDB / LocalStorage for offline-first |
| Mapping | Leaflet.js + OpenStreetMap (with fallback list mode) |
| API Layer | REST/GraphQL optional mock endpoints |
| Deployment | Vercel / Netlify |
| Version Control | Git + GitHub |

---

## 🌐 SDG Alignment

| SDG Target | Mission Focus |
|-------------|----------------|
| SDG 3.4 | Mental Health and Well-Being |
| SDG 3.3 | Disease Prevention |
| SDG 3.1 / 3.2 | Maternal & Child Health |
| SDG 3.8 | Universal Health Coverage |
| SDG 3.c | Health Workforce |
| SDG 17.18 | Data for Development |

---

## 🧩 Design Philosophy

- **Offline-first**: Because rural users deserve reliability  
- **Privacy-first**: Data never leaves device unless user agrees  
- **Bangla-first**: Local language, idioms, and emotion  
- **Empathy-first**: Gentle UX for sensitive topics  
- **Humor-aware**: Because even health apps can have heart 💚  

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/S-R-Daniel-324/Health-2.git

# Navigate into the project
cd https://github.com/S-R-Daniel-324/Health-2

# Install dependencies
npm install

# Start the development server
npm run dev

# Then open your browser and visit
http://localhost:5173/
