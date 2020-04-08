from flask import Flask, render_template, jsonify, request
import cv2
import numpy
import os.path
import base64
import json

app = Flask(__name__)

def GetImageFromRequest(request, flag):
    #Get data from request
    data = json.loads(request.data)

    #read image file from base64 format
    preImg = base64.b64decode(data)
    npimg = numpy.frombuffer(preImg, dtype=numpy.uint8)
    img = cv2.imdecode(npimg, flag)

    return img

def GetImageForResponse(image):
    binaryFileData = cv2.imencode('.png', image)[1]
    base64EncodedData = base64.b64encode(binaryFileData)
    base64MessageResponse = base64EncodedData.decode('utf-8')

    return base64MessageResponse

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/test")
def test():
    return "Test data for ajax"    

@app.route("/negative", methods = ['POST'])
def negative():
    #get base64 from json
    img = GetImageFromRequest(request, 1)
    
    #image as negative
    img_not = cv2.bitwise_not(img)

    #parse image to base64 format
    respone = GetImageForResponse(img_not)

    return jsonify(respone)

@app.route("/grayscale", methods = ['POST'])
def grayscale():
    img = GetImageFromRequest(request, 1)

    img_grayscale = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    respone = GetImageForResponse(img_grayscale)

    return jsonify(respone)

@app.route("/histogram", methods = ['POST'])
def histogram():
    img = GetImageFromRequest(request, 0)

    res_img = cv2.equalizeHist(img)

    respone = GetImageForResponse(res_img)

    return jsonify(respone)

if __name__ == "__main__":
    app.run(debug=True)    