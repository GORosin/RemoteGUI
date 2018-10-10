import hashlib
import sys
import os

def isempty(filename):
    return os.stat(filename).st_size == 0

os.system("sudo chmod 666 password.txt")
pswd=sys.argv[1]
filename="password.txt"
pass_file=open(filename,'w')
password = hashlib.sha256(pswd.encode()).hexdigest()
pass_file.write(password)
pass_file.close()
os.system("sudo chmod 444 password.txt")

