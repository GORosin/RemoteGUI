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
        ColdJig.SendServerMessage("lowV,turn,"+result)
        ServerReply.setText(reply)
        return render_template('my-form.html')

@app.route('/channel1', methods=['GET','POST'])
def set_channel1():
    volts = request.form['channel1']
    print(volts)
    return render_template('my-form.html')

@app.route('/channel2', methods=['GET','POST'])
def set_channel2():
    volts = request.form['channel2']
    print(volts)
    return render_template('my-form.html')

@app.route('/channel3', methods=['GET','POST'])
def set_channel3():
    volts = request.form['channel3']
    print(volts)
    return render_template('my-form.html')

@app.route('/channel4', methods=['GET','POST'])
def set_channel4():
    volts = request.form['channel4']
    print(volts)
    return render_template('my-form.html')

@app.route('/channel5', methods=['GET','POST'])
def set_channel5():
    volts = request.form['channel5']
    print(volts)
    return render_template('my-form.html')

@app.route('/channel6', methods=['GET','POST'])
def set_channel6():
    volts = request.form['channel6']
    print(volts)
    return render_template('my-form.html')

@app.route('/channel7', methods=['GET','POST'])
def set_channel7():
    volts = request.form['channel7']
    print(volts)
    return render_template('my-form.html')

@app.route('/channel8', methods=['GET','POST'])
def set_channel8():
    volts = request.form['channel8']
    print(volts)
    return render_template('my-form.html')

@app.route('/channel9', methods=['GET','POST'])
def set_channel9():
    volts = request.form['channel9']
    print(volts)
    return render_template('my-form.html')

@app.route('/channel10', methods=['GET','POST'])
def set_channel10():
    volts = request.form['channel10']
    print(volts)
    return render_template('my-form.html')

@app.route('/high', methods=['GET','POST'])
def high_voltage():
    if request.method == 'POST':
        result = request.form['high']
        print(result)
        ColdJig.SendServerMessage("highV,turn,"+result)
        ServerReply.setText(reply)
        return render_template('my-form.html')

@app.route('/IVscan', methods=['GET','POST'])
def iv_scan():
    ColdJig.SendServerMessage("do iv curve")
    return render_template('my-form.html')

@app.route('/temp', methods=['GET','POST'])
def temperature():
    if request.method == 'POST':
        temp = request.form['temperature']
        print(temp)
        message = "chiller,set,temperature at " + temp #there was a typo here: temprature
        #print("sending message: " + message)
        reply = ColdJig.SendServerMessage(message)
        #print(reply)
        ServerReply.setText(reply)
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
    app.run(host = '127.0.0.1',port = 5000,debug=True)