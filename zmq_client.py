import zmq
import sys
import subprocess

class Client:
    def __init__(self,host="127.0.0.1",port="5556"):
        self.host=host
        self.port=str(port)

    def SendServerMessage(self,message):
        port = self.port
        host = self.host
        context = zmq.Context()
        print("Connecting to server...")
        socket = context.socket(zmq.REQ)
        socket.setsockopt(zmq.LINGER, 0)
        socket.connect ("tcp://%s:%s" % (host,port))
        message=str(message)
        socket.send(message.encode())
        #  Get the reply.
        poller = zmq.Poller()
        reply=''
        poller.register(socket, zmq.POLLIN)
        if poller.poll(10*1000): # 10s timeout in milliseconds
            reply = socket.recv()
        else:
            raise IOError("Timeout, server not responding")
    

        socket.close()
        context.term()
        return str(reply)

    def SendServerObject(self,pyobj):
        port = self.port
        host = self.host
        context = zmq.Context()
        print("Connecting to server...")
        socket = context.socket(zmq.REQ)
        socket.setsockopt(zmq.LINGER, 0)
        socket.connect ("tcp://%s:%s" % (host,port))
        socket.send_pyobj(pyobj)
        #  Get the reply.
        poller = zmq.Poller()
        reply=''
        poller.register(socket, zmq.POLLIN)
        if poller.poll(10*1000): # 10s timeout in milliseconds
            reply = socket.recv()
        else:
            raise IOError("Timeout, server not responding")
    

        socket.close()
        context.term()
        return str(reply)
    
    def GetServerData(message, self):
        port = self.port

        context = zmq.Context()
        print("Connecting to server...")
        socket = context.socket(zmq.REQ)
        socket.setsockopt(zmq.LINGER, 0)
        socket.connect ("tcp://%s:%s" % (self.host,port))
        
        socket.send(message.encode())
        #  Get the reply.
        poller = zmq.Poller()
        reply=''
        poller.register(socket, zmq.POLLIN)
        if poller.poll(4*1000): # 5s timeout in milliseconds
            reply = socket.recv_pyobj()
        else:
            raise IOError("Timeout processing auth request")
    

        socket.close()
        context.term()
        return str(reply)

    def Ping(self):
        port = self.port
        context = zmq.Context()
        print("Connecting to server...")
        socket = context.socket(zmq.REQ)
        socket.setsockopt(zmq.LINGER, 0)
        socket.connect ("tcp://%s:%s" % (self.host,port))
        message="pinging.."
        socket.send(message.encode())
        #  Get the reply.
        poller = zmq.Poller()

        poller.register(socket, zmq.POLLIN)
        if poller.poll(3*1000): # 10s timeout in milliseconds
            return True
        else:
            return False
    

if __name__ =="__main__":
    cl=Client('127.0.0.1','5554')
    reply=cl.SendServerMessage("Finished Running Strobe delay")
    print("Server reply")
    print(reply)
