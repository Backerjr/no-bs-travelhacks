from flask import Flask, jsonify, render_template, request

app = Flask(__name__, static_folder='../static', template_folder='../')

# Sample tour data with a few quick metrics we can show on the site
tours = [
    {
        "id": 1,
        "name": "Dubai City Tour",
        "description": "A half-day sprint through Old Dubai, souks and the Burj Khalifa.",
        "duration": "6 hours",
        "price": 120,
        "best_time": "November - March",
    },
    {
        "id": 2,
        "name": "Desert Safari",
        "description": "Dune bashing, camel rides and a barbecue dinner under the stars.",
        "duration": "8 hours",
        "price": 150,
        "best_time": "October - April",
    },
    {
        "id": 3,
        "name": "Abu Dhabi City Tour",
        "description": "Sheikh Zayed Mosque, Louvre Abu Dhabi and the Corniche in a single day.",
        "duration": "10 hours",
        "price": 180,
        "best_time": "November - March",
    },
]

tour_insights = [
    {
        "title": "Average Savings",
        "stat": "22%",
        "description": "Travellers who bundle city and desert experiences save on average 22% on transport costs.",
    },
    {
        "title": "Packing Wins",
        "stat": "7kg",
        "description": "Our one-bag packing template keeps luggage under 7kg—no checked bag fees, ever.",
    },
    {
        "title": "Peak Booking Window",
        "stat": "37 days",
        "description": "Booking flights five weeks out consistently beats last-minute fares for Gulf routes.",
    },
]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/tours')
def get_tours():
    return jsonify(tours)


@app.route('/api/insights')
def get_insights():
    return jsonify(tour_insights)


@app.route('/api/ask', methods=['POST'])
def ask_question():
    payload = request.get_json(silent=True) or {}
    question = (payload.get("question") or "").lower()

    if not question:
        answer = "Ask me anything about Dubai travel and I'll share a data-backed hack."
    elif "budget" in question or "cheap" in question:
        answer = (
            "Skip the taxis—use the Dubai Metro from DXB into the city and grab a Nol card. "
            "Pair it with a combo tour ticket and you usually shave 20% off the total spend."
        )
    elif "desert" in question:
        answer = (
            "Head out for a sunset safari in winter. Book 30+ days ahead and you can lock "
            "in premium camps for the same price as basic ones."
        )
    elif "packing" in question or "luggage" in question:
        answer = (
            "Use a 35L backpack, pack cubes and quick-dry layers. Keep it under 7kg and you "
            "avoid checked bag fees on most regional carriers."
        )
    else:
        answer = (
            "I'm your on-call travel hacker. Ask about budgets, desert safaris, packing, or "
            "flights and I'll drop a practical tip."
        )

    return jsonify({"answer": answer})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
