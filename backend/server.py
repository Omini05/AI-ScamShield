from flask import Flask, request, jsonify
from services.ai_service import analyze_message

app = Flask(
    __name__,
    static_folder='../frontend',
    static_url_path=''
)


@app.route('/chat', methods=['POST'])
def chat():
    try:
        msg = request.json.get('message')
        if not msg:
            return jsonify({"reply": "⚠ No message provided."}), 400
        reply = analyze_message(msg)
        return jsonify({"reply": reply})
    except Exception as e:
        print("AI ERROR (full):", type(e).__name__, str(e))  # ← more detail
        return "⚠ AI error. Check API key or quota."


@app.route('/')
def serve_frontend():
    return app.send_static_file('index.html')


@app.route('/start-sim', methods=['POST'])
def start_sim():
    scenario = request.json.get('scenario', 'upi')
    reply = start_simulation(scenario)
    return jsonify({"reply": reply})

@app.route('/sim', methods=['POST'])
def sim():
    msg = request.json.get('message')
    scenario = request.json.get('scenario', 'upi')
    if not msg:
        return jsonify({"reply": "⚠ No message provided."}), 400
    reply = continue_simulation(scenario, msg)
    return jsonify({"reply": reply})


if __name__ == '__main__':
    app.run(debug=True)