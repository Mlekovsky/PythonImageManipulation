var myWidth = 256;
var myHeight = 256;
var myImage;
var myCanvas1, myCanvas2, myCanvas3, myCanvas4, myCanvas5, myCanvas6;
var myContext1, myContext2, myContext3, myContext4, myContext5, myContext6;

//Python images
var imgBase, imgTarget;
var baseContext, targetContext;
var baseCanvas, targetCanvas;

function doClear( ) {
    myContext2.fillStyle = "lightgray";
    myContext2.fillRect( 0, 0, myCanvas1.width, myCanvas1.height );
    myContext3.fillStyle = "lightgray";
    myContext3.fillRect( 0, 0, myCanvas1.width, myCanvas1.height );
    myContext4.fillStyle = "lightgray";
    myContext4.fillRect( 0, 0, myCanvas1.width, myCanvas1.height );
    myContext5.fillStyle = "lightgray";
    myContext5.fillRect( 0, 0, myCanvas1.width, myCanvas1.height );
    myContext6.fillStyle = "lightgray";
    myContext6.fillRect( 0, 0, myCanvas1.width, myCanvas1.height );
}

function updateJsCanvas( ) {
    myCanvas1 = document.getElementById( 'myCanvas1' );
    myContext1 = myCanvas1.getContext( '2d' );

    myCanvas2 = document.getElementById( 'myCanvas2' );
    myContext2 = myCanvas2.getContext( '2d' );

    myCanvas3 = document.getElementById( 'myCanvas3' );
    myContext3 = myCanvas3.getContext( '2d' );

    myCanvas4 = document.getElementById( 'myCanvas4' );
    myContext4 = myCanvas4.getContext( '2d' );

    myCanvas5 = document.getElementById( 'myCanvas5' );
    myContext5 = myCanvas5.getContext( '2d' );

    myCanvas6 = document.getElementById( 'myCanvas6' );
    myContext6 = myCanvas6.getContext( '2d' );

    myImage = new Image( );

    myCanvas1.style.margin = '4px'
    myCanvas2.style.margin = '4px'
    myCanvas3.style.margin = '4px'
    myCanvas4.style.margin = '4px'
    myCanvas5.style.margin = '4px'
    myCanvas6.style.margin = '4px'
}

function updatePythonCanvas( ) {
    baseCanvas = document.getElementById( 'baseCanvas' );
    baseContext = baseCanvas.getContext( '2d' );

    targetCanvas = document.getElementById( 'targetCanvas' );
    targetContext = targetCanvas.getContext( '2d' );

    imgBase = new Image();
    imgTarget = new Image();
}

function setBitmap( fileName, canvas, context, image) {
    image.src = fileName;
    image.onload = function ( ) {
        canvas.width = myImage.width;
        canvas.height = myImage.height;
        context.drawImage( image, 0, 0, image.width, image.height );
    }
}

function setPictureFromResponse(canvas, context, image, data){
    image.src = data;
    image.onload = function(){
        canvas.width = myImage.width;
        canvas.height = myImage.height;
        context.drawImage( image, 0, 0, image.width, image.height );
    }
}

function setPictures(filename){
    setBitmap(filename, myCanvas1, myContext1, myImage);
    setBitmap(filename, baseCanvas, baseContext, imgBase);
}

$(document).ready(function() {
    updateJsCanvas();
    updatePythonCanvas();
    setPictures('static/img/lena256.png');
});