 codex/add-data-and-images-to-project-nmy6ae

 codex/add-data-and-images-to-project-h2royc

 codex/add-data-and-images-to-project-vu2r5u

 codex/add-data-and-images-to-project-kepdua
 main
 main
 main
import json
from datetime import datetime
from urllib.error import HTTPError, URLError
from urllib.parse import urlencode
from urllib.request import urlopen

 codex/add-data-and-images-to-project-nmy6ae

 codex/add-data-and-images-to-project-h2royc
 main
from flask import Flask, jsonify, render_template, request

from app.content import (
    ESSENTIALS_KIT,
    EXPERIENCE_HIGHLIGHTS,
    GALLERY_IMAGES,
    HERO_CONTENT,
    JOURNAL_FEATURES,
    KNOW_BEFORE_ENTRIES,
    MAP_CONTENT,
    PHOTOGRAPHY_MOMENTS,
    SIGNATURE_TAGLINE,
)
 codex/add-data-and-images-to-project-nmy6ae


 codex/add-data-and-images-to-project-vu2r5u


 main
 main
from flask import Flask, jsonify, render_template, request
 main
 main

app = Flask(__name__, static_folder='../static', template_folder='../')

# Sample tour data with a few quick metrics we can show on the site
tours = [
    {
        "id": 1,
 codex/add-data-and-images-to-project-nmy6ae

 codex/add-data-and-images-to-project-h2royc

 codex/add-data-and-images-to-project-vu2r5u

 codex/add-data-and-images-to-project-kepdua
 main
 main
 main
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
 codex/add-data-and-images-to-project-nmy6ae

 codex/add-data-and-images-to-project-h2royc

 codex/add-data-and-images-to-project-vu2r5u


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
 main
 main
 main
 main
    },
]

tour_insights = [
    {
 codex/add-data-and-images-to-project-nmy6ae

 codex/add-data-and-images-to-project-h2royc

 codex/add-data-and-images-to-project-vu2r5u

 codex/add-data-and-images-to-project-kepdua
 main
 main
 main
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
 codex/add-data-and-images-to-project-nmy6ae

 codex/add-data-and-images-to-project-h2royc

 codex/add-data-and-images-to-project-vu2r5u


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
 main
 main
 main
 main
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

 codex/add-data-and-images-to-project-nmy6ae

 codex/add-data-and-images-to-project-h2royc
 main
FALLBACK_WEATHER = {
    "dubai": {
        "temperature": 32.0,
        "windspeed": 14.0,
        "winddirection": 325,
        "weathercode": 2,
        "is_day": 1,
        "humidity": 48,
    },
    "abu-dhabi": {
        "temperature": 31.0,
        "windspeed": 18.0,
        "winddirection": 300,
        "weathercode": 1,
        "is_day": 1,
        "humidity": 52,
    },
}


def build_weather_payload(city_key, data, *, updated_at, source, notice):
    city = CITY_COORDINATES[city_key]
    return {
        "temperature": data.get("temperature"),
        "windspeed": data.get("windspeed"),
        "winddirection": data.get("winddirection"),
        "weathercode": data.get("weathercode"),
        "is_day": data.get("is_day"),
        "humidity": data.get("humidity"),
        "updated_at": updated_at,
        "city": city["label"],
        "city_key": city_key,
        "source": source,
        "notice": notice,
    }


def fallback_weather(city_key):
    now = datetime.now().strftime("%d %b %Y %H:%M")
    base = FALLBACK_WEATHER.get(city_key, FALLBACK_WEATHER["dubai"]).copy()
    return build_weather_payload(
        city_key,
        base,
        updated_at=now,
        source="curated",
        notice="Live feed paused—serving our last on-ground sensor sweep.",
    )

 codex/add-data-and-images-to-project-nmy6ae


 main
 main
@app.route('/')
def index():
    return render_template(
        'index.html',
        signature_tagline=SIGNATURE_TAGLINE,
        hero=HERO_CONTENT,
        experience_highlights=EXPERIENCE_HIGHLIGHTS,
        know_before=KNOW_BEFORE_ENTRIES,
        photography_moments=PHOTOGRAPHY_MOMENTS,
        essentials=ESSENTIALS_KIT,
        gallery_images=GALLERY_IMAGES,
        map_content=MAP_CONTENT,
        journal_features=JOURNAL_FEATURES,
    )

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
 codex/add-data-and-images-to-project-nmy6ae

 codex/add-data-and-images-to-project-h2royc

 codex/add-data-and-images-to-project-vu2r5u

 codex/add-data-and-images-to-project-kepdua
 main
 main
 main
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
 codex/add-data-and-images-to-project-nmy6ae

 codex/add-data-and-images-to-project-h2royc

 codex/add-data-and-images-to-project-vu2r5u
 main
 main
    """Fetch a live weather snapshot for supported Gulf cities using the Open-Meteo API."""

    city_key = (request.args.get('city') or 'dubai').lower()
    city = CITY_COORDINATES.get(city_key)

    if not city:
        return jsonify({"error": "Unsupported city. Try Dubai or Abu Dhabi."}), 400

    params = {
        "latitude": city["latitude"],
        "longitude": city["longitude"],
 codex/add-data-and-images-to-project-nmy6ae

 codex/add-data-and-images-to-project-h2royc


    """Fetch a live weather snapshot for Dubai using the Open-Meteo API."""

    params = {
        "latitude": 25.2048,
        "longitude": 55.2708,
 main
 main
 main
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
 codex/add-data-and-images-to-project-nmy6ae

 codex/add-data-and-images-to-project-h2royc
 main
        return jsonify(fallback_weather(city_key))
    current = data.get("current_weather", {})
    if not current:
        return jsonify(fallback_weather(city_key))
 codex/add-data-and-images-to-project-nmy6ae


        return (
            jsonify(
                {
                    "error": "Weather service is temporarily unavailable. Pack for warmth indoors and heat outdoors—light layers win.",
                }
            ),
            503,
        )
    current = data.get("current_weather", {})
 main
 main
    updated_iso = current.get("time")
    updated_at = None
    if updated_iso:
        try:
            updated_at = datetime.fromisoformat(updated_iso).strftime("%d %b %Y %H:%M")
        except ValueError:
            updated_at = updated_iso

 codex/add-data-and-images-to-project-nmy6ae

 codex/add-data-and-images-to-project-h2royc

 codex/add-data-and-images-to-project-vu2r5u
 main
 main
    humidity = None
    hourly = data.get("hourly", {})
    hourly_times = hourly.get("time", [])
    humidity_values = hourly.get("relativehumidity_2m", [])
    if updated_iso and updated_iso in hourly_times:
        idx = hourly_times.index(updated_iso)
        if idx < len(humidity_values):
            humidity = humidity_values[idx]

 codex/add-data-and-images-to-project-nmy6ae

 codex/add-data-and-images-to-project-h2royc
 main
    payload = build_weather_payload(
        city_key,
        {
            "temperature": current.get("temperature"),
            "windspeed": current.get("windspeed"),
            "winddirection": current.get("winddirection"),
            "weathercode": current.get("weathercode"),
            "is_day": current.get("is_day"),
            "humidity": humidity,
        },
        updated_at=updated_at,
        source="live",
        notice="Live feed courtesy of Open-Meteo (refreshed every 15 minutes).",
    )

    return jsonify(payload)
 codex/add-data-and-images-to-project-nmy6ae



 main
    payload = {
        "temperature": current.get("temperature"),
        "windspeed": current.get("windspeed"),
        "winddirection": current.get("winddirection"),
        "weathercode": current.get("weathercode"),
        "is_day": current.get("is_day"),
        "updated_at": updated_at,
 codex/add-data-and-images-to-project-vu2r5u
        "humidity": humidity,
        "city": city["label"],
        "city_key": city_key,
    }

    return jsonify(payload)

    }

    return jsonify(payload)

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
 main
 main
 main
 main

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
