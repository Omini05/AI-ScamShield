# 🛡️ AI ScamShield

**AI-Powered Cyber Safety Platform for Vulnerable Digital Citizens**

---

## 🚀 Overview

AI ScamShield is a full-stack web application designed to protect users — especially **seniors and children** — from digital scams such as phishing, impersonation, and fraud.

It combines **real-time scam detection**, **interactive scam simulations**, and **personalized learning insights** to build safer digital habits.

---

## ✨ Features

### 🧠 GuardianBot (Scam Detection)
- Paste any suspicious message, SMS, email, or call script
- AI-powered risk classification (HIGH / MEDIUM / LOW)
- Explains scam tactics and red flags
- Provides actionable safety advice
- **Multilingual** — detects and responds in the user's language automatically (English, Hindi, Marathi, Gujarati, Hinglish, and more)

---

### 🎯 SafeSimulator (AI Roleplay Training)
- 4 interactive scam scenarios:
  - 🏦 **Fake UPI Helpdesk** (Beginner)
  - 🎰 **Lottery Prize Call** (Intermediate)
  - 👴 **Grandchild Emergency** (Intermediate)
  - 🎮 **Free Gaming Reward** (Advanced)
- AI dynamically plays the scammer role
- Users practice identifying and responding safely
- Builds real-world scam resistance

---

### 📊 MentorPath (Progress Tracking)
- Tracks safety score and simulation performance
- Identifies weak areas (urgency, authority, OTP scams)
- Provides daily safety tips

---

### 🌐 Multilingual Support
- Supports **English, Hindi, Marathi, Gujarati, Hinglish** and more
- Automatically detects user language from input
- Responds in the same language — no configuration needed

---

## 🏗️ Tech Stack

### Frontend
- HTML, CSS, JavaScript
- Modular JS architecture

### Backend
- Python + Flask
- Modular routes architecture

### AI Integration
- **Groq API** — `llama-3.3-70b-versatile` model
- Free tier: 1,000 requests/day, 30 requests/minute
- No regional restrictions

---

## 📁 Project Structure

```
AI-ScamShield/
│
├── backend/
│   ├── server.py               # Flask app entry point
│   ├── routes/                 # Modular Flask route handlers
│   ├── services/
│   │   └── ai_service.py       # Groq AI: scam detection + simulator logic
│   ├── .env                    # API keys (not committed)
│   ├── .gitignore
│   └── requirements.txt
│
├── frontend/
│   ├── index.html
│   ├── styles/
│   │   └── main.css
│   └── js/
│       ├── app.js              # App init, stats tracking
│       ├── api.js              # Backend API calls
│       ├── chat.js             # GuardianBot chat logic
│       └── simulator.js        # SafeSimulator logic
│
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/Omini05/AI-ScamShield.git
cd AI-ScamShield
```

### 2. Create and activate virtual environment
```bash
cd backend
python -m venv venv
venv\Scripts\activate        # Windows
# source venv/bin/activate   # Mac/Linux
```

### 3. Install dependencies
```bash
pip install -r requirements.txt
```

Or manually:
```bash
pip install flask python-dotenv groq
```

### 4. Get a free Groq API key
- Go to [console.groq.com](https://console.groq.com)
- Sign up → API Keys → Create API key

### 5. Create `.env` inside `backend/`
```
GROQ_API_KEY=your_groq_api_key_here
```

### 6. Run the backend
```bash
python server.py
```

### 7. Open the app
```
http://127.0.0.1:5000
```

---

## 🔑 API Endpoints

| Method | Route | Description |
|--------|-------|-------------|
| POST | `/chat` | GuardianBot scam analysis |
| POST | `/start-sim` | Start a SafeSimulator session |
| POST | `/sim` | Continue SafeSimulator conversation |
| GET | `/` | Serve frontend |

---

## 🔐 Security Notes
- API keys stored in `.env` — never committed to git
- `.env` is excluded via `.gitignore`
- No sensitive data exposed to frontend

---

## 🧠 Future Improvements
- Voice-based scam detection (speech-to-text)
- WhatsApp / SMS integration
- Real scam dataset fine-tuning
- User authentication & profiles
- Post-simulation coaching feedback
- Advanced explainable AI (XAI)

---

## 🏆 Use Case

Ideal for:
- Cybersecurity awareness initiatives
- Digital literacy programs for seniors
- Hackathons (AI + Social Impact)
- Educational tools for vulnerable users

---

## 👨‍💻 Author

Developed by **Omini Vishwakarma**  
Cyber Security Engineering Student

---

## 📜 License

This project is open-source and available under the MIT License.