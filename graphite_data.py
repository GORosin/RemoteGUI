import requests
import json
from datetime import datetime

def help_info():
    print("use of get data: get_data(server address, metric name, start time,end time,port")
    print("returns list of all none null data in that timeframe")
    print("time formats:")
    print("s,min,h,d,w,mon,y")
    print("ten minutes ago: -10min")
    print("now: now")
    

def unix_to_date(unix_time):
    str(datetime.fromtimestamp(int(unix_time)))
    
def get_data(server_address,metric,start_time='-10min',end_time='now',port='8080'):
    request_format='http://'+server_address +":"+port+"/render?target="+metric+"&from="+start_time+"&until="+end_time+"&format=json"
    response=requests.get(request_format)
    json_data=response.json()[0]['datapoints']
    data_points=[[unix_to_date(point[1]):point[0]] for point in json_data if point[0] != None]
    return data_points

    
    
    
