from flask import Flask, send_from_directory

app = Flask(__name__)

@app.route('/page1')
def page1():
    return send_from_directory('.', 'index.html')

if __name__ == '__main__':
    app.run(debug=True)
