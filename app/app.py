import json
from datetime import datetime
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode
from urllib.request import urlopen

from flask import Flask, jsonify, render_template, request

app = Flask(__name__, static_folder='../static', template_folder='../')

# Sample tour data with a few quick metrics we can show on the site
tours = [
    {
        "id": 1,
        "name": "Sheikh Zayed Grand Mosque Dawn Access",
        "description": "Private imam-led tour with Swarovski chandelier briefing and photography concierge.",
        "duration": "3 hours",
        "price": 420,
        "best_time": "Daily · 06:00",
    },
    {
        "id": 2,
        "name": "Mandir & Al Seef Cultural Stroll",
        "description": "Hindu Temple carvings at sunset, abra glide, and cardamom coffee tasting in XVA Café.",
        "duration": "5 hours",
        "price": 260,
        "best_time": "Tue–Sun · 16:00",
    },
    {
        "id": 3,
        "name": "Al Marmoom Desert Conservatory Soirée",
        "description": "Solar-cooled majlis, falconry at dusk, gourmet dinner, and astronomer-led stargazing.",
        "duration": "7 hours",
        "price": 520,
        "best_time": "Oct–Apr · 17:00",
    },
]

tour_insights = [
    {
        "title": "Luxury For Less",
        "stat": "18%",
        "description": "Couples who prebook signature mosque and desert tours together typically save 18% on chauffeured transfers.",
    },
    {
        "title": "Sunrise Sweet Spot",
        "stat": "06:14",
        "description": "That's the average winter sunrise in Abu Dhabi—ideal for those luminous Sheikh Zayed Grand Mosque frames.",
    },
    {
        "title": "Hydration Rule",
        "stat": "500ml/hr",
        "description": "Plan for half a litre of water per hour outdoors; our refill strategy keeps you cool without overpacking.",
    },
]

CITY_COORDINATES = {
    "dubai": {
        "latitude": 25.2048,
        "longitude": 55.2708,
        "label": "Dubai",
    },
    "abu-dhabi": {
        "latitude": 24.4539,
        "longitude": 54.3773,
        "label": "Abu Dhabi",
    },
}

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
            "Bundle mosque, Mandir, and desert transfers with one chauffeur to trim 18% instantly."
        )
    elif "desert" in question:
        answer = (
            "Secure Al Marmoom conservatory access 30+ days ahead. Sunset falconry and astronomer sessions "
            "are included when you request the conservationist briefing."
        )
    elif "packing" in question or "luggage" in question:
        answer = (
            "Carry a 35L backpack, quiet-sole shoes, polarised sunnies, and a silk scarf. Slip a 10k mAh "
            "power bank inside and you stay elegant and hands-free."
        )
    elif "weather" in question or "forecast" in question:
        answer = (
            "Dubai wakes early. Check our live forecast panel and plan mosque visits at dawn "
            "when temps hover around 24°C—carry that silk scarf for AC-chilled prayer halls."
        )
    else:
        answer = (
            "I'm your on-call travel hacker. Ask about the Grand Mosque, Mandir carvings, desert skies, "
            "budgets or packing—we'll line up the refined move."
        )

    return jsonify({"answer": answer})


@app.route('/api/weather')
def get_weather():
    """Fetch a live weather snapshot for supported Gulf cities using the Open-Meteo API."""

    city_key = (request.args.get('city') or 'dubai').lower()
    city = CITY_COORDINATES.get(city_key)

    if not city:
        return jsonify({"error": "Unsupported city. Try Dubai or Abu Dhabi."}), 400

    params = {
        "latitude": city["latitude"],
        "longitude": city["longitude"],
        "current_weather": True,
        "hourly": ["temperature_2m", "relativehumidity_2m", "windspeed_10m"],
        "timezone": "Asia/Dubai",
    }

    try:
        query = urlencode(params, doseq=True)
        with urlopen(
            f"https://api.open-meteo.com/v1/forecast?{query}", timeout=10
        ) as response:
            data = json.load(response)
    except (HTTPError, URLError, TimeoutError, json.JSONDecodeError):
        return (
            jsonify(
                {
                    "error": "Weather service is temporarily unavailable. Pack for warmth indoors and heat outdoors—light layers win.",
                }
            ),
            503,
        )
    current = data.get("current_weather", {})
    updated_iso = current.get("time")
    updated_at = None
    if updated_iso:
        try:
            updated_at = datetime.fromisoformat(updated_iso).strftime("%d %b %Y %H:%M")
        except ValueError:
            updated_at = updated_iso

    humidity = None
    hourly = data.get("hourly", {})
    hourly_times = hourly.get("time", [])
    humidity_values = hourly.get("relativehumidity_2m", [])
    if updated_iso and updated_iso in hourly_times:
        idx = hourly_times.index(updated_iso)
        if idx < len(humidity_values):
            humidity = humidity_values[idx]

    payload = {
        "temperature": current.get("temperature"),
        "windspeed": current.get("windspeed"),
        "winddirection": current.get("winddirection"),
        "weathercode": current.get("weathercode"),
        "is_day": current.get("is_day"),
        "updated_at": updated_at,
        "humidity": humidity,
        "city": city["label"],
        "city_key": city_key,
    }

    return jsonify(payload)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
