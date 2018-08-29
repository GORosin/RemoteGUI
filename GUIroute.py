from flask import Flask, render_template, request, jsonify, session, flash, abort
import time
import  hashlib
app = Flask(__name__)
from zmq_client import Client
import os

@app.route('/login', methods=['POST'])
def do_admin_login():
    pswd = request.form['password'].encode('utf-8')
    password = hashlib.sha256(pswd).hexdigest()
    with open('password.txt', 'r') as myfile:
        hash = myfile.read().replace('\n', '')
    if password == hash:
        session['logged_in'] = True
    else:
        flash('wrong password!')
    return my_form()

@app.route("/logout", methods=['GET','POST'])
def logout():
    session['logged_in'] = False
    return my_form()

@app.route('/')
def my_form():
    if not session.get('logged_in'):
        return render_template('login.html')
    else:
        return render_template('my-form.html')

@app.route('/channel1', methods=['GET','POST'])
def set_channel1():
    volts = request.form['channel1']
    #print(volts)
    data = []
    try:
        reply = ColdJig.SendServerMessage("lowV,voltage,set,voltage to "+volts+" 1")
        data = [1]
    except IOError:
        data = [0]
    return jsonify(array = data)

@app.route('/readchannel1', methods=['GET','POST'])
def read_channel1():
    data = []
    try:
        volt = ColdJig.SendServerMessage("lowv,voltage,get, channel 1")
        print(volt)
        current = ColdJig.SendServerMessage("lowv,current,get, channel 1")
        data = [1,volt, current,1]
    except IOError:
        data = [0]
    print(data)
    return jsonify(array = data)

@app.route('/channel2', methods=['GET','POST'])
def set_channel2():
    volts = request.form['channel2']
    #print(volts)
    data = []
    try:
        reply = ColdJig.SendServerMessage("lowV,voltage,set,voltage to "+volts+" 2")
        data = [1]
    except IOError:
        data = [0]
    return jsonify(array = data)

@app.route('/readchannel2', methods=['GET','POST'])
def read_channel2():
    data = []
    try:
        volt = ColdJig.SendServerMessage("lowv,voltage,get, channel 2")
        current = ColdJig.SendServerMessage("lowv,current,get, channel 2")
        data = [1,volt, current,2]
    except IOError:
        data = [0]
    print(data)
    return jsonify(array = data)

@app.route('/channel3', methods=['GET','POST'])
def set_channel3():
    volts = request.form['channel3']
    print(volts)
    data = []
    try:
        reply = ColdJig.SendServerMessage("lowV,voltage,set,voltage to "+volts+" 3")
        data = [1]
    except IOError:
        data = [0]
    return jsonify(array=data)

@app.route('/readchannel3', methods=['GET','POST'])
def read_channel3():
    data = []
    try:
        volt = ColdJig.SendServerMessage("lowv,voltage,get, channel 3")
        current = ColdJig.SendServerMessage("lowv,current,get, channel 3")
        data = [1,volt, current,3]
    except IOError:
        data = [0]
    print(data)
    return jsonify(array = data)

@app.route('/channel4', methods=['GET','POST'])
def set_channel4():
    volts = request.form['channel4']
    print(volts)
    data = []
    try:
        reply = ColdJig.SendServerMessage("lowV,voltage,set,voltage to "+volts+" 4")
        data = [1]
    except IOError:
        data = [0]
    return jsonify(array=data)

@app.route('/readchannel4', methods=['GET','POST'])
def read_channel4():
    data = []
    try:
        volt = ColdJig.SendServerMessage("lowv,voltage,get,channel 4")
        current = ColdJig.SendServerMessage("lowv,current,get,channel 4")
        data = [1,volt, current,4]
    except IOError:
        data = [0]
    print(data)
    return jsonify(array = data)

@app.route('/channel5', methods=['GET','POST'])
def set_channel5():
    volts = request.form['channel5']
    print(volts)
    data = []
    try:
        reply = ColdJig.SendServerMessage("lowV,voltage,set,voltage to "+volts+" 5")
        data = [1]
    except IOError:
        data = [0]
    return jsonify(array=data)

@app.route('/readchannel5', methods=['GET','POST'])
def read_channel5():
    data = []
    try:
        volt = ColdJig.SendServerMessage("lowv,voltage,get,channel 5")
        current = ColdJig.SendServerMessage("lowv,current,get,channel 5")
        data = [1,volt, current,5]
    except IOError:
        data = [0]
    print(data)
    return jsonify(array = data)

@app.route('/channel6', methods=['GET','POST'])
def set_channel6():
    volts = request.form['channel6']
    print(volts)
    data = []
    try:
        reply = ColdJig.SendServerMessage("highV, voltage, "+volts)
        data = [1]
    except IOError:
        data = [0]
    return jsonify(array=data)

@app.route('/readchannel6', methods=['GET','POST'])
def read_channel6():
    data = []
    try:
        volt = ColdJig.SendServerMessage("highv,voltage,get")
        current = ColdJig.SendServerMessage("highv,current,get")
        data = [1,volt, current,1]
    except IOError:
        data = [0]
    print(data)
    return jsonify(array = data)

@app.route('/channel7', methods=['GET','POST'])
def set_channel7():
    volts = request.form['channel7']
    print(volts)
    data = []
    try:
        reply = ColdJig.SendServerMessage("highV, voltage,"+volts)
        data = [1]
    except IOError:
        data = [0]
    return jsonify(array=data)

@app.route('/readchannel7', methods=['GET','POST'])
def read_channel7():
    data = []
    try:
        volt = ColdJig.SendServerMessage("highv,voltage,get channel 2")
        current = ColdJig.SendServerMessage("highv,current,get,channel 2")
        data = [1,volt, current,2]
    except IOError:
        data = [0]
    print(data)
    return jsonify(array = data)

@app.route('/channel8', methods=['GET','POST'])
def set_channel8():
    volts = request.form['channel8']
    print(volts)
    data = []
    try:
        reply = ColdJig.SendServerMessage("highV, voltage,set "+volts)
        data = [1]
    except IOError:
        data = [0]
    return jsonify(array=data)

@app.route('/readchannel8', methods=['GET','POST'])
def read_channel8():
    data = []
    try:
        volt = ColdJig.SendServerMessage("highv,voltage,get channel 3")
        current = ColdJig.SendServerMessage("highv,current,get,channel 3")
        data = [1,volt, current,3]
    except IOError:
        data = [0]
    print(data)
    return jsonify(array = data)

@app.route('/channel9', methods=['GET','POST'])
def set_channel9():
    volts = request.form['channel9']
    print(volts)
    data = []
    try:
        reply = ColdJig.SendServerMessage("highV, voltage,set "+volts+" 4")
        data = [1]
    except IOError:
        data = [0]
    return jsonify(array=data)

@app.route('/readchannel9', methods=['GET','POST'])
def read_channel9():
    data = []
    try:
        volt = ColdJig.SendServerMessage("highv,voltage,get channel 4")
        current = ColdJig.SendServerMessage("highv,current,get,channel 4")
        data = [1,volt, current,4]
    except IOError:
        data = [0]
    print(data)
    return jsonify(array = data)

@app.route('/channel10', methods=['GET','POST'])
def set_channel10():
    volts = request.form['channel10']
    print(volts)
    data = []
    try:
        reply = ColdJig.SendServerMessage("highV, voltage, "+volts+" 5")
        data = [1]
    except IOError:
        data = [0]
    return jsonify(array=data)

@app.route('/readchannel10', methods=['GET','POST'])
def read_channel10():
    data = []
    try:
        volt = ColdJig.SendServerMessage("highv,voltage,get channel 5")
        current = ColdJig.SendServerMessage("highv,current,get,channel 5")
        data = [1,volt, current,5]
    except IOError:
        data = [0]
    print(data)
    return jsonify(array = data)

@app.route('/low', methods=['GET','POST'])
def low_voltage():
    if request.method == 'POST':
        result = request.form['power']
        reply = ""
        data = []
        try:
            if result == "On":
                reply = ColdJig.SendServerMessage("lowV,turn,on")
            elif result == "Off":
                reply = ColdJig.SendServerMessage("lowV,turn,off")
            data = [1]
        except IOError:
            data = [0]
        return jsonify(array = data)

@app.route('/high', methods=['GET','POST'])
def high_voltage():
    if request.method == 'POST':
        result = request.form['power2']
        reply = ""
        data = []
        try:
            if result == "On":
                reply = ColdJig.SendServerMessage("highV,turn,on")
            elif result == "Off":
                reply = ColdJig.SendServerMessage("highV,turn,off")
            data = [1]
        except IOError:
            data = [0]
        return jsonify(array=data)

@app.route('/IVscan', methods=['GET','POST'])
def iv_scan():
    data = []
    try:
        ColdJig.SendServerMessage("do iv curve")
        data = [1]
    except IOError:
        data = [0]
    return jsonify(array = data)

@app.route('/temp', methods=['GET','POST'])
def temperature():
    if request.method == 'POST':
        temp = request.form['temperature']
        message = "chiller,set,temperature at " + temp
        data = []
        try:
            reply = ColdJig.SendServerMessage(message)
            data = [1]
        except IOError:
            data = [0]
        return jsonify(array=data)

@app.route('/readtemp', methods=['GET','POST'])
def read_temp():
    if request.method == 'POST':
        message = "chiller, get"
        data = []
        try:
            reply = ColdJig.SendServerMessage(message)
            data = [1,reply]
        except IOError:
            data = [0]
        return jsonify(array=data)

@app.route('/ping', methods=['GET','POST'])
def ping():
    if request.method == 'POST':
        ping = request.form['IP']
        data = []
        try:
            ColdJig.Ping()
            data = [1]
        except IOError:
            data = [0]
        print(ping)
        return jsonify(array = data)

@app.route('/sensor', methods=['GET','POST'])
def sensor_data():
    if request.method == 'POST':
        sensor = request.form['power3']
        reply = ""
        data = []
        try:
            if sensor == "On":
                reply = ColdJig.SendServerMessage("sensors on")
            elif sensor == "Off":
                reply = ColdJig.SendServerMessage("sensors off")
            data = [1]
        except IOError:
            data = [0]
        return jsonify(array = data)

@app.route('/modulesensor', methods=['GET','POST'])
def module_sensor_data():
    if request.method == 'POST':
        sensor = request.form['power4']
        reply = ""
        data = []
        try:
            if sensor == "On":
                reply = ITSDAQ.SendServerMessage("module sensors on")
            elif sensor == "Off":
                reply = ITSDAQ.SendServerMessage("module sensors off")
            data = [1]
        except IOError:
            data = [0]
        return jsonify(array = data)

@app.route('/powersensor', methods=['GET','POST'])
def power_sensor_data():
    if request.method == 'POST':
        sensor = request.form['power5']
        reply = ""
        data = []
        try:
            if sensor == "On":
                reply = ITSDAQ.SendServerMessage("power on")
            elif sensor == "Off":
                reply = ITSDAQ.SendServerMessage("power off")
            data = [1]
        except IOError:
            data = [0]
        return jsonify(array = data)

@app.route('/break', methods=['GET','POST'])
def break_connection():
    data = []
    try:
        reply = ColdJig.SendServerMessage("break")
        data = [1]
    except IOError:
        data = [0]
    return jsonify(array = data)

@app.route('/confirmtest', methods=['GET','POST'])
def confirmation_test():
    if request.method == 'POST':
        result = request.form['test']
        data = []
        try:
            Master.SendServerMessage("start test at: "+result)
            data = [1]
        except IOError:
            data = [0]
        print(result)
        return jsonify(array = data)

@app.route('/standardtest', methods=['GET','POST'])
def standard_test():
    if request.method == 'POST':
        result = request.form['standard']
        data = []
        try:
            ITSDAQ.SendServerMessage("start test")
            data = [1]
        except IOError:
            data = [0]
        print(result)
        return jsonify(array = data)

@app.route('/runtests', methods=['GET','POST'])
def run_test():
    if request.method == 'POST':
        tests = request.form.getlist("tests")
        print(tests)
        data = []
        try:
            ITSDAQ.SendServerMessage(tests)
            data = [1]
        except IOError:
            data = [0]
        return jsonify(array = data)

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
        data = []
        try:
            reply1 = ColdJig.SendServerMessage(
                "interlock,sht,temp,range of " + temp_before + " to" + temp_after)
            reply2 = ColdJig.SendServerMessage(
                "interlock,sht,humidity,range of " + humidity_before + " to" + humidity_after)
            reply3 = ColdJig.SendServerMessage(
                "interlock,user ntc,range of " + hybrid_before + " to" + hybrid_after)
            reply4 = ColdJig.SendServerMessage(
                "interlock,hybrid ntc,range of " + user_before + " to" + user_after)
            result = reply1+"\n"+reply2+"\n"+reply3+"\n"+reply4
            data = [1]
            print(result)
        except IOError:
            data = [0]
        return jsonify(array = data)

if __name__ == "__main__":
    app.secret_key = os.urandom(12)
    ColdJig = Client("127.0.0.1", "5556")
    ITSDAQ = Client("127.0.0.1", "5555")
    #Master = Client("127.0.0.1", "5556")
    app.run(host='127.0.0.1', port=5000, debug=True)

