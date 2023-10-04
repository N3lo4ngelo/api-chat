import nltk
from nltk.tokenize import word_tokenize
import json
import random
nltk.download('punkt')
with open('data.json', 'r', encoding="utf-8") as data:
    data = json.load(data)


def answer_questions(question:str):    
    result = ""

    for intent in data["intents"]:
        for quest in  intent["pattern"]:
            if verify_words(question.lower(), quest):
                rand_answer = random.randint(0, len(intent["answer"])-1)
                result = intent["answer"][rand_answer]
                return result
    result = "Desculpe não consegui entender sua pergunta"
    return result    

def verify_words(question:str, tokens):
    tokens = word_tokenize(tokens)

    for token in tokens:
        if token not in question:
            return False
    return True

print(answer_questions("como logar"))
    