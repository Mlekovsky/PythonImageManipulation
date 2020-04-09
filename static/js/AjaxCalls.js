$("#TestButton").click(function() {
    $.ajax({
        type: 'GET',
        url: '/test',
        success: function(response) {
            $("#testContainer").text(response);
        }
    });
});

//function that sends image data via ajax to specified adress, and then saves image data from response to canvas
function PostImage(url){
    var img = baseCanvas.toDataURL(); //convert img to base64 format    
    var imgBase64 = img.replace(/^data:image\/(png|jpg);base64,/, ""); //replace URL format data with empty string

    $.ajax({
        type: 'POST',
        url: url,
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify(imgBase64),
        success: function(response) {
            let responseWithType = "data:image/jpeg;charset=utf-8;base64," + response; //add URL format data to properly display image from base64 format
            setPictureFromResponse(targetCanvas, targetContext, imgTarget, responseWithType);
        }
    });
}

$("#Negative").click(function() {
    PostImage('/negative');
});

$("#Grayscale").click(function() {    
    PostImage('/grayscale');
});

$("#Histogram").click(function() {    
    PostImage('/histogram');
});

$("#ScalingShrink").click(function() {    
    PostImage('/scaling_shrink');
});

$("#ScalingExpand").click(function() {    
    PostImage('/scaling_expand');
});

$("#ThresholdBinary64").click(function() {    
    PostImage('/thresholding_binary_64');
});

$("#ThresholdBinary128").click(function() {    
    PostImage('/thresholding_binary_128');
});

$("#ThresholdBinary192").click(function() {    
    PostImage('/thresholding_binary_192');
});

$("#ThresholdBinary64_inv").click(function() {    
    PostImage('/thresholding_binary_64_inv');
});

$("#ThresholdBinary128_inv").click(function() {    
    PostImage('/thresholding_binary_128_inv');
});

$("#ThresholdBinary192_inv").click(function() {    
    PostImage('/thresholding_binary_192_inv');
});

$("#FilterBlur").click(function() {    
    PostImage('/filters_blur');
});

$("#FilterMean").click(function() {    
    PostImage('/filters_meanRemoval');
});

$("#FilterMedian").click(function() {    
    PostImage('/filters_median');
});

$("#HSV").click(function() {    
    PostImage('/rgb_to_hsv');
});

$("#HLS").click(function() {    
    PostImage('/rgb_to_hls');
});

$("#Gray").click(function() {    
    PostImage('/gray');
});

$("#Rotate90").click(function() {    
    PostImage('/rotate90');
});

$("#Rotate180").click(function() {    
    PostImage('/rotate180');
});

$("#Rotate270").click(function() {    
    PostImage('/rotate270');
});

$("#IncreaseBright").click(function() {    
    PostImage('/increase_bright');
});

$("#DecreaseBright").click(function() {    
    PostImage('/decrease_bright');
});

$("#Border").click(function() {    
    PostImage('/border');
});

$("#Erode").click(function() {    
    PostImage('/erosion');
});

$("#Dilate").click(function() {    
    PostImage('/dilatation');
});
