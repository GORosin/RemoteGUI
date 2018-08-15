import zmq
import time
import sys
#import matplotlib.pyplot as plt

port = "5555"
if len(sys.argv) > 1:
    port =  sys.argv[1]
    int(port)

context = zmq.Context()
socket = context.socket(zmq.REP)
socket.bind("tcp://*:%s" % port)

def function():
    time.sleep(10)
    
while True:
    #  Wait for next request from client
    message = socket.recv()
    print("Received request: ", message)
    if "plot" in str(message).lower():
        socket.send("receiving plot, have a good day".encode())
        plot=socket.recv_pyobj()
        print(type(plot))
#        plt.show()
        socket.send("recieved plot".encode())
    elif("run" in str(message).lower()):
        #function()
        
        reply="finished function"
        socket.send(reply.encode())
    else:
        time.sleep(1)
        reply="good to go"
        socket.send(reply.encode())
