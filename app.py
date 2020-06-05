from __future__ import print_function
from flask import Flask, render_template, jsonify, request
import cv2
import numpy
import os.path
import base64
import json

#External API Imports
import cloudmersive_validate_api_client
from cloudmersive_validate_api_client.rest import ApiException

import time
import cloudmersive_ocr_api_client
from cloudmersive_ocr_api_client.rest import ApiException
from pprint import pprint

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

@app.route("/receipt", methods = ['POST'])
def receipt():    
    api_instance = cloudmersive_ocr_api_client.ImageOcrApi()

    api_instance.api_client.configuration.api_key = {}
    api_instance.api_client.configuration.api_key['Apikey'] = 'API_KEY'

    data = json.loads(request.data)
    with open("receipt.jpg", "wb") as fh:
        fh.write(base64.b64decode(data))

    my_path = os.path.abspath(os.path.dirname(__file__))
    image_file = os.path.join(my_path, "receipt.jpg")

    try:
    # Convert a photo of a document into text
        api_response = api_instance.image_ocr_post(image_file)
    except ApiException as e:
         print("Exception when calling ImageOcrApi->image_ocr_photo_to_text: %s\n" % e)

    return jsonify(api_response.text_result)

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

@app.route("/scaling_shrink", methods = ['POST'])
def scaling_shrink():
    img = GetImageFromRequest(request, 0)

    res_img = cv2.resize(img, None, fx=0.5, fy=0.5)

    response = GetImageForResponse(res_img)

    return jsonify(response)

@app.route("/scaling_expand", methods = ['POST'])
def scaling_expand():
    img = GetImageFromRequest(request, 0)

    height, width = img.shape[:2]

    res_img = cv2.resize(img, (2*width, 2*height))

    response = GetImageForResponse(res_img)

    return jsonify(response)

@app.route("/thresholding_binary_128", methods = ['POST'])
def thresholding_binary_128():
    img = GetImageFromRequest(request, 1)
    #this function returns tuple, so we must either assing first value to another variable, or call img by index
    ret, res_img = cv2.threshold(img, 128, 255, cv2.THRESH_BINARY)

    response = GetImageForResponse(res_img)

    return jsonify(response)

@app.route("/thresholding_binary_64", methods = ['POST'])
def thresholding_binary_64():
    img = GetImageFromRequest(request, 1)
    #this function returns tuple, so we must either assing first value to another variable, or call img by index
    ret, res_img = cv2.threshold(img, 64, 255, cv2.THRESH_BINARY)

    response = GetImageForResponse(res_img)

    return jsonify(response)

@app.route("/thresholding_binary_192", methods = ['POST'])
def thresholding_binary_192():
    img = GetImageFromRequest(request, 1)
    #this function returns tuple, so we must either assing first value to another variable, or call img by index
    ret, res_img = cv2.threshold(img, 192, 255, cv2.THRESH_BINARY)

    response = GetImageForResponse(res_img)

    return jsonify(response)

@app.route("/thresholding_binary_128_inv", methods = ['POST'])
def thresholding_binary_128_inv():
    img = GetImageFromRequest(request, 1)
    #this function returns tuple, so we must either assing first value to another variable, or call img by index
    ret, res_img = cv2.threshold(img, 128, 255, cv2.THRESH_BINARY_INV)

    response = GetImageForResponse(res_img)

    return jsonify(response)

@app.route("/thresholding_binary_64_inv", methods = ['POST'])
def thresholding_binary_64_inv():
    img = GetImageFromRequest(request, 1)
    #this function returns tuple, so we must either assing first value to another variable, or call img by index
    ret, res_img = cv2.threshold(img, 64, 255, cv2.THRESH_BINARY_INV)

    response = GetImageForResponse(res_img)

    return jsonify(response)

@app.route("/thresholding_binary_192_inv", methods = ['POST'])
def thresholding_binary_192_inv():
    img = GetImageFromRequest(request, 1)
    #this function returns tuple, so we must either assing first value to another variable, or call img by index
    ret, res_img = cv2.threshold(img, 192, 255, cv2.THRESH_BINARY_INV)

    response = GetImageForResponse(res_img)

    return jsonify(response)         

@app.route("/filters_blur", methods = ['POST'])
def filters_blur():
    img = GetImageFromRequest(request, 1)
    
    res_img = cv2.blur(img, (5,5))

    response = GetImageForResponse(res_img)

    return jsonify(response)

@app.route("/filters_meanRemoval", methods = ['POST'])
def filters_meanRemoval():
    img = GetImageFromRequest(request, 1)
    
    res_img = cv2.fastNlMeansDenoisingColored(img, None, 10,10,7,21)

    response = GetImageForResponse(res_img)

    return jsonify(response)

@app.route("/filters_median", methods = ['POST'])
def filters_median():
    img = GetImageFromRequest(request, 1)
    
    res_img = cv2.medianBlur(img, 5)

    response = GetImageForResponse(res_img)

    return jsonify(response)

@app.route("/rgb_to_hsv", methods = ['POST'])
def rgb_to_hsv():
    img = GetImageFromRequest(request, 1)
    
    res_img = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)

    response = GetImageForResponse(res_img)

    return jsonify(response)

@app.route("/rgb_to_hls", methods = ['POST'])
def rgb_to_hls():
    img = GetImageFromRequest(request, 1)
    
    res_img = cv2.cvtColor(img, cv2.COLOR_BGR2HLS)

    response = GetImageForResponse(res_img)

    return jsonify(response)

@app.route("/gray", methods = ['POST'])
def gray():
    img = GetImageFromRequest(request, 1)
    
    res_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    response = GetImageForResponse(res_img)

    return jsonify(response)

@app.route("/rotate90", methods = ['POST'])
def rotate90():
    img = GetImageFromRequest(request, 1)
    
    (h,w) = img.shape[:2]

    center = (w / 2, h / 2)
    #minus, because its anti-clockwise by default
    M = cv2.getRotationMatrix2D(center, -90, 1.0)

    res_img = cv2.warpAffine(img, M, (h, w))

    response = GetImageForResponse(res_img)

    return jsonify(response)

@app.route("/rotate180", methods = ['POST'])
def rotate180():
    img = GetImageFromRequest(request, 1)

    (h,w) = img.shape[:2]

    center = (w / 2, h / 2)
    
    M = cv2.getRotationMatrix2D(center, 180, 1.0)

    res_img = cv2.warpAffine(img, M, (h, w))

    response = GetImageForResponse(res_img)

    return jsonify(response)

@app.route("/rotate270", methods = ['POST'])
def rotate270():
    img = GetImageFromRequest(request, 1)
    
    (h,w) = img.shape[:2]

    center = (w / 2, h / 2)
    #minus, because its anti-clockwise by default
    M = cv2.getRotationMatrix2D(center, -270, 1.0)

    res_img = cv2.warpAffine(img, M, (h, w))

    response = GetImageForResponse(res_img)

    return jsonify(response) 


def change_brightness(img, value):
    num_channels = 1 if len(img.shape) < 3 else 1 if img.shape[-1] == 1 else 3
    img = cv2.cvtColor(img, cv2.COLOR_GRAY2BGR) if num_channels == 1 else img
    hsv = cv2.cvtColor(img, cv2.COLOR_BGR2HSV)
    h, s, v = cv2.split(hsv)

    if value >= 0:
        lim = 255 - value
        v[v > lim] = 255
        v[v <= lim] += value
    else:
        value = int(-value)
        lim = 0 + value
        v[v < lim] = 0
        v[v >= lim] -= value

    final_hsv = cv2.merge((h, s, v))

    img = cv2.cvtColor(final_hsv, cv2.COLOR_HSV2BGR)
    img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY) if num_channels == 1 else img
    return img

@app.route("/increase_bright", methods = ['POST'])
def increase_bright():
    img = GetImageFromRequest(request, 1)

    res_img = change_brightness(img, 50)

    response = GetImageForResponse(res_img)

    return jsonify(response) 


@app.route("/decrease_bright", methods = ['POST'])
def decrease_bright():
    img = GetImageFromRequest(request, 1)

    res_img = change_brightness(img, -50)
    
    response = GetImageForResponse(res_img)

    return jsonify(response) 

@app.route("/border", methods = ['POST'])
def border():
    img = GetImageFromRequest(request, 1)

    res_img = cv2.Laplacian(img, cv2.CV_64F)
    
    response = GetImageForResponse(res_img)

    return jsonify(response)

@app.route("/erosion", methods = ['POST'])
def erosion():
    img = GetImageFromRequest(request, 1)
    #we need to have picture in grayscale first
    img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    imgArray = numpy.asarray(img_gray)
    #then we should convert it to otsu threshold
    retOtsu, imgThresholdedOtsu = cv2.threshold(imgArray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)

    kernel = numpy.ones((5,5), numpy.uint8)

    res_img = cv2.erode(imgThresholdedOtsu, kernel, iterations=1)
    
    response = GetImageForResponse(res_img)

    return jsonify(response)

@app.route("/dilatation", methods = ['POST'])
def dilatation():
    img = GetImageFromRequest(request, 1)

    img_gray = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    imgArray = numpy.asarray(img_gray)

    retOtsu, imgThresholdedOtsu = cv2.threshold(imgArray, 0, 255, cv2.THRESH_BINARY + cv2.THRESH_OTSU)

    kernel = numpy.ones((5,5), numpy.uint8)

    res_img = cv2.dilate(imgThresholdedOtsu, kernel, iterations=1)
    
    response = GetImageForResponse(res_img)

    return jsonify(response)  

if __name__ == "__main__":
    app.run(debug=True, host='0.0.0.0')    