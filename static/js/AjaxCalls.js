$("#TestButton").click(function() {
    $.ajax({
        type: 'GET',
        url: '/test',
        success: function(response) {
            $("#testContainer").text(response);
        }
    });
});

$("#Negative").click(function() {
    
    var img = baseCanvas.toDataURL(); //convert img to base64 format    
    var imgBase64 = img.replace(/^data:image\/(png|jpg);base64,/, ""); //replace URL format data with empty string

    $.ajax({
        type: 'POST',
        url: '/negative',
        contentType: 'application/json;charset=UTF-8',
        data: JSON.stringify(imgBase64),
        success: function(response) {
            let responseWithType = "data:image/jpeg;charset=utf-8;base64," + response; //add URL format data to properly display image from base64 format
            setPictureFromResponse(targetCanvas, targetContext, imgTarget, responseWithType);
        }
    });
});