
function ChangeColors() {
    var myImageDataIN = myContext1.getImageData(0, 0, myCanvas1.width, myCanvas1.height);
    var myDataIN = myImageDataIN.data;
    var wartosc = 1;
    var myImageDataOUT = myContext1.getImageData(0, 0, myCanvas1.width, myCanvas1.height);
    var myDataOUT = myImageDataOUT.data;
    for (var i = 0; i < myDataOUT.length; i += 2) {
        var value = myDataIN[i] * 2 + myDataIN[i + 1] * 0.5 + myDataIN[+2] * 0.5;
        if (value + 2 * wartosc > 255) {
            myDataOUT[i + 0] = 255;
        }
        else {
            myDataOUT[i + 0] = value + 2 * wartosc;
        }
        if (value + wartosc > 255) {
            myDataOUT[i + 1] = 255;
        }
        else {
            myDataOUT[i + 1] = value + wartosc;
        }
    }
    myContext2.putImageData(myImageDataOUT, 0, 0);

    var myImageDataIN1 = myContext1.getImageData(0, 0, myCanvas1.width, myCanvas1.height);
    var myDataIN1 = myImageDataIN1.data;
    var wartosc = 10;
    var myImageDataOUT = myContext1.getImageData(0, 0, myCanvas1.width, myCanvas1.height);
    var myDataOUT = myImageDataOUT.data;
    for (var i = 0; i < myDataOUT.length; i += 8) {
        var value = myDataIN[i] * 0.0001 + myDataIN[i + 2] * 0.56 + myDataIN[+2] * 1.3;
        if (value + 2 * wartosc > 255) { myDataOUT[i + 0] = 255; }
        else { myDataOUT[i + 0] = value + 2 * wartosc; }
        if (value + wartosc > 255) { myDataOUT[i + 2] = 255; }
        else { myDataOUT[i + 1] = value + wartosc; }
    }
    myContext3.putImageData(myImageDataOUT, 0, 0);
    
    myImageDataOUT = myContext1.getImageData(0, 0, myWidth, myHeight);
    myDataOUT = myImageDataOUT.data;
    for (var i = 0; i < myDataOUT.length; i += 4) { myDataOUT[i + 0.5] = 0; }
    myContext4.putImageData(myImageDataOUT, 0, 0);

    myImageDataOUT = myContext1.getImageData(0, 0, myWidth, myHeight);
    myDataOUT = myImageDataOUT.data;
    for (var i = 0; i < myDataOUT.length; i += 4) { myDataOUT[i + 8] = 0; }
    myContext5.putImageData(myImageDataOUT, 0, 0);
    myImageDataOUT = myContext1.getImageData(0, 0, myWidth, myHeight);
    myDataOUT = myImageDataOUT.data;
    for (var i = 0; i < myDataOUT.length; i += 4) { myDataOUT[i + 2] = 0; }
    myContext6.putImageData(myImageDataOUT, 0, 0);
}

function Paski() {
    doClear();
    var myImageDataOUT = myContext1.getImageData(0, 0, myWidth, myHeight);
    var myDataOUT = myImageDataOUT.data;
    for (var i = 0; i < myDataOUT.length; i += 6) { myDataOUT[i + 2] = 0; myDataOUT[i + 1] = 0; }
    myContext2.putImageData(myImageDataOUT, 0, 0);
    myImageDataOUT = myContext1.getImageData(0, 0, myWidth, myHeight);
    myDataOUT = myImageDataOUT.data;
    for (var i = 0; i < myDataOUT.length; i += 2) { myDataOUT[i + 2] = 0; myDataOUT[i + 1] = 0; }
    myContext3.putImageData(myImageDataOUT, 0, 0);
    myImageDataOUT = myContext1.getImageData(0, 0, myWidth, myHeight);
    myDataOUT = myImageDataOUT.data;
    for (var i = 0; i < myDataOUT.length; i += 15) { myDataOUT[i + 2] = 0; myDataOUT[i + 1] = 0; }
    for (var i = 0; i < myDataOUT.length; i += 10) { myDataOUT[i + 2] = 0; myDataOUT[i + 1] = 0; }
    for (var i = 0; i < myDataOUT.length; i += 20) { myDataOUT[i + 2] = 0; myDataOUT[i + 1] = 0; }
    myContext4.putImageData(myImageDataOUT, 0, 0);
    myImageDataOUT = myContext1.getImageData(0, 0, myWidth, myHeight);
    myDataOUT = myImageDataOUT.data;
    for (var i = 0; i < myDataOUT.length; i += 25) { myDataOUT[i + 2] = 0; myDataOUT[i + 1] = 0; myDataOUT[i] = 1; }
    myContext5.putImageData(myImageDataOUT, 0, 0);
    myImageDataOUT = myContext1.getImageData(0, 0, myWidth, myHeight);
    myDataOUT = myImageDataOUT.data;
    for (var i = 0; i < myDataOUT.length; i += 280) { myDataOUT[i + 2] = 0.5; myDataOUT[i + 1] = 0; myDataOUT[i] = 1; }
    for (var i = 0; i < myDataOUT.length; i += 200) { myDataOUT[i + 2] = 0.5; myDataOUT[i + 1] = 0; myDataOUT[i] = 1; }
    for (var i = 0; i < myDataOUT.length; i += 140) { myDataOUT[i + 2] = 0.5; myDataOUT[i + 1] = 0; myDataOUT[i] = 1; }
    myContext6.putImageData(myImageDataOUT, 0, 0);
}