from flask import Flask, jsonify, render_template

app = Flask(__name__, static_folder='../static', template_folder='../')

# Sample tour data
tours = [
    {"id": 1, "name": "Dubai City Tour", "description": "A tour of the most famous landmarks in Dubai."},
    {"id": 2, "name": "Desert Safari", "description": "An adventurous trip to the desert with dune bashing and dinner."},
    {"id": 3, "name": "Abu Dhabi City Tour", "description": "A full-day tour of the capital of the UAE."}
]

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/tours')
def get_tours():
    return jsonify(tours)

@app.route('/api/ask', methods=['POST'])
def ask_question():
    # Placeholder for AI question-answering logic
    return jsonify({"answer": "This feature is coming soon!"})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
