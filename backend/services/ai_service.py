from dotenv import load_dotenv
from groq import Groq
import os

load_dotenv()

api_key = os.getenv("GROQ_API_KEY")
if not api_key:
    print("AI SERVICE ERROR: no GROQ_API_KEY set")
else:
    print("AI SERVICE INFO: API key loaded (redacted)")

client = Groq(api_key=api_key)

SCENARIOS = {
    "upi": "You are a scammer pretending to be a bank helpdesk employee calling about a failed UPI transaction. You want the victim's OTP or card details.",
    "lottery": "You are a scammer telling the victim they won a lottery prize of Rs 50,000 but need to pay a Rs 500 processing fee first via UPI.",
    "grandchild": "You are a scammer pretending the victim's grandchild has been in an accident and urgently needs money transferred immediately.",
    "gaming": "You are a scammer offering free in-game currency for a popular mobile game, but you need the victim's login credentials to 'transfer' the reward."
}

def analyze_message(message):
    try:
        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[{
                "role": "user",
                "content": f"""You are GuardianBot, an AI scam detection assistant for India.
You must ALWAYS respond in the same language the user wrote in.
If they write in Hindi, respond in Hindi.
If they write in Hinglish, respond in Hinglish.
If they write in English, respond in English.

Analyze this message:
"{message}"

Give:
1. Scam Risk (LOW / MEDIUM / HIGH)
2. Why it's a scam
3. What user should do

Keep it short and clear."""
            }]
        )
        return response.choices[0].message.content
    except Exception as e:
        print("AI ERROR:", type(e).__name__, str(e))
        return "⚠ AI error. Check API key or quota."


def start_simulation(scenario):
    try:
        scenario_prompt = SCENARIOS.get(scenario, SCENARIOS["upi"])
        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[{
                "role": "user",
                "content": f"""You are playing a scammer character for educational scam-awareness training.
Scenario: {scenario_prompt}
Start the conversation with your opening scam line. 
Keep it to 1-2 sentences. Be convincing but stay in character as the scammer.
Do NOT break character or add any disclaimers."""
            }]
        )
        return "🎭 " + response.choices[0].message.content
    except Exception as e:
        print("SIM START ERROR:", type(e).__name__, str(e))
        return "⚠ Could not start simulation."


def continue_simulation(scenario, user_message):
    try:
        scenario_prompt = SCENARIOS.get(scenario, SCENARIOS["upi"])
        response = client.chat.completions.create(
            model="llama-3.3-70b-versatile",
            messages=[{
                "role": "user",
                "content": f"""You are playing a scammer character for educational scam-awareness training.
Scenario: {scenario_prompt}
The victim just replied: "{user_message}"
Respond as the scammer would — try to manipulate, reassure, or pressure them to get what you want.
Keep it to 1-2 sentences. Stay in character. No disclaimers."""
            }]
        )
        return "🎭 " + response.choices[0].message.content
    except Exception as e:
        print("SIM CONTINUE ERROR:", type(e).__name__, str(e))
        return "⚠ Simulation error."