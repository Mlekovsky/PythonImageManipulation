from flask import Flask, render_template, jsonify, request
import cv2
import numpy
import os.path
import base64
import json

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/test")
def test():
    return "Test data for ajax"    

@app.route("/negative", methods = ['POST'])
def negative():
    #get base64 from json
    data = json.loads(request.data)

    #read image file from base64 format
    preImg = base64.b64decode(data)
    npimg = numpy.fromstring(preImg, dtype=numpy.uint8)
    img = cv2.imdecode(npimg, 1)
    
    #image as negative
    img_not = cv2.bitwise_not(img)

    #For tests - save img locally
    #my_path = os.path.abspath(os.path.dirname(__file__))
    #path = os.path.join(my_path, "test.png")
    
    #cv2.imwrite("test.png",img_not)

    #parse image to base64 format
    binaryFileData = cv2.imencode('.png', img_not)[1]
    base64EncodedData = base64.b64encode(binaryFileData)
    base64MessageResponse = base64EncodedData.decode('utf-8')

    return jsonify(base64MessageResponse)

if __name__ == "__main__":
    app.run(debug=True)    