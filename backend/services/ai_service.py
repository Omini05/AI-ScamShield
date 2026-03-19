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