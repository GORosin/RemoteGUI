from flask import Flask, render_template, redirect, url_for,request
from flask import make_response
app = Flask(__name__)

@app.route('/')
def my_form():
    return render_template('my-form.html')

@app.route('/temp', methods=['GET','POST'])
def test_post():
    if request.method == 'POST':
        result = request.form['temperature']
        print(result)
        return render_template('my-form.html')

@app.route('/ping', methods=['GET','POST'])
def ping():
    if request.method == 'POST':
        ping = request.form['IP']
        print(ping)
        return render_template('my-form.html')

@app.route('/break', methods=['GET','POST'])
def breakConnection():
    pass



if __name__ == "__main__":
    app.run(host = '127.0.0.1',port = 8080,debug=True)