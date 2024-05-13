from flask import Flask

app = Flask(__name__)

@app.route('/bilyoner')
def data():
    
    return {"Data": ["Bilyoner"]}

if __name__ == '__main__':
    app.run(debug=True)
