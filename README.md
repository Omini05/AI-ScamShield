# 🛡️ AI ScamShield

**AI-Powered Cyber Safety Platform for Vulnerable Digital Citizens**

---

## 🚀 Overview

AI ScamShield is a full-stack web application designed to protect users — especially **seniors and children** — from digital scams such as phishing, impersonation, and fraud.

It combines **real-time scam detection**, **interactive scam simulations**, and **personalized learning insights** to build safer digital habits.

---

## ✨ Features

### 🧠 GuardianBot (Scam Detection)

* Analyze suspicious messages, calls, or links
* AI-powered risk classification (HIGH / MEDIUM / LOW)
* Explains scam tactics and red flags
* Provides actionable safety advice

---

### 🎯 SafeSimulator (AI Roleplay Training)

* Interactive scam scenarios (UPI, Lottery, Emergency, Gaming)
* AI acts as scammer
* Users practice responding safely
* Builds real-world awareness

---

### 📊 MentorPath (Progress Tracking)

* Tracks safety score and performance
* Identifies weak areas (urgency, authority, OTP scams)
* Provides daily safety tips

---

### 🌐 Multilingual Support

* Supports **English, Hindi, and Marathi**
* Automatically detects user language
* Responds in the same language

---

## 🏗️ Tech Stack

### Frontend

* HTML, CSS, JavaScript
* Modular JS architecture

### Backend

* Python (Flask)
* REST API endpoints

### AI Integration

* OpenAI API (or Claude)
* Prompt-based scam analysis

---

## 📁 Project Structure

```
ai-scamshield/
│
├── backend/
│   ├── server.py
│   ├── services/
│   │   └── ai_service.py
│   └── .env
│
├── frontend/
│   ├── index.html
│   ├── styles/
│   │   └── main.css
│   └── js/
│       ├── app.js
│       ├── api.js
│       ├── chat.js
│       └── simulator.js
│
├── requirements.txt
└── README.md
```

---

## ⚙️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/ai-scamshield.git
cd ai-scamshield
```

---

### 2. Create virtual environment

```bash
python -m venv venv
venv\Scripts\activate
```

---

### 3. Install dependencies

```bash
pip install -r requirements.txt
```

---

### 4. Add API key

Create `.env` inside `backend/`:

```
OPENAI_API_KEY=your_api_key_here
```

---

### 5. Run backend

```bash
cd backend
python server.py
```

---

### 6. Open application

```
http://127.0.0.1:5000
```

---

## 🔐 Security Notes

* API keys are stored securely in `.env`
* `.env` is excluded via `.gitignore`
* No sensitive data exposed to frontend

---

## 🧠 Future Improvements

* Voice-based scam detection (speech-to-text)
* WhatsApp / SMS integration
* Real scam dataset training
* User authentication & profiles
* Advanced explainable AI (XAI)

---

## 🏆 Use Case

This project is ideal for:

* Cybersecurity awareness initiatives
* Digital literacy programs
* Hackathons (AI + Social Impact)
* Educational tools for vulnerable users

---

## 👨‍💻 Author

Developed by **Omini Vishwakarma**
Cyber Security Engineering Student

---

## 📜 License

This project is open-source and available under the MIT License.
