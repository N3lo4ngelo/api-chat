from flask import Flask, render_template, request, jsonify
from chat import answer_questions
import nltk
nltk.download('punkt')

app = Flask(__name__)

@app.route("/")
def ajuda():
    return render_template("ajuda.php", script_root=request.script_root)

@app.route("/chatbot", methods=["POST", "GET"])
def chatbot():
    text = request.get_json().get("message")
    response = answer_questions(text)
    message = {"answer": response}
    return jsonify(message)

if __name__ == "__main__":
    app.run(debug=True)