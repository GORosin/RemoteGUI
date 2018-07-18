from flask import Flask, render_template, redirect, url_for,request
from flask import make_response
app = Flask(__name__)
import zmq
from zmq_client import Client

@app.route('/')
def my_form():
    return render_template('my-form.html')


@app.route('/low', methods=['GET','POST'])
def low_voltage():
    if request.method == 'POST':
        result = request.form['low']
        print(result)
        return render_template('my-form.html')

@app.route('/high', methods=['GET','POST'])
def high_voltage():
    if request.method == 'POST':
        result = request.form['high']
        print(result)
        return render_template('my-form.html')

@app.route('/IVscan', methods=['GET','POST'])
def iv_scan():
    ColdJig.SendServerMessage("do iv curve")
    return render_template('my-form.html')

@app.route('/temp', methods=['GET','POST'])
def temp():
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

@app.route('/sensor', methods=['GET','POST'])
def sensor_data():
    if request.method == 'POST':
        sensor = request.form['sensor']
        print(sensor)
        return render_template('my-form.html')


@app.route('/break', methods=['GET','POST'])
def break_connection():
    ColdJig.SendServerMessage("break")
    ITSDAQ.SendServerMessage("break")
    return render_template('my-form.html')

@app.route('/confirmtest', methods=['GET','POST'])
def confirmation_test():
    if request.method == 'POST':
        result = request.form['test']
        print(result)
        return render_template('my-form.html')

@app.route('/interlock', methods=['GET','POST'])
def set_interlock():
    if request.method == 'POST':
        temp_before = request.form['temp before']
        temp_after = request.form['temp after']
        humidity_before = request.form['humidity before']
        humidity_after = request.form['humidity after']
        hybrid_before = request.form['hybrid before']
        hybrid_after = request.form['hybrid after']
        user_before = request.form['user before']
        user_after = request.form['user after']

        result = temp_before,temp_after,humidity_before,humidity_after,hybrid_before,hybrid_after,user_before,user_after
        print(result)
        return render_template('my-form.html')


if __name__ == "__main__":
    ColdJig = Client("127.0.0.1", "5556")
    ITSDAQ = Client("127.0.0.1", "5555")
    Master = Client("127.0.0.1", "5554")
    app.run(host = '127.0.0.1',port = 8080,debug=True)