//        var imageDataIN = context.getImageData( imageX, imageY, imageWidth, imageHeight );
//        var DataIN = imageDataIN.data;
//----------------------------------------------------------------
//        // iterate over all pixels
//        for( let i = 0, n = DataIN.length; i < n; i += 4 ) {
//            let   red = DataIN[ i ];
//            let green = DataIN[ i + 1 ];
//            let  blue = DataIN[ i + 2 ];
//            let alpha = DataIN[ i + 3 ];
//        }
//----------------------------------------------------------------
//        // pick out pixel DataIN from x, y coordinate
//        var x = 20;
//        var y = 20;
//        var   red = DataIN[ ( ( imageWidth * y ) + x ) * 4 ];
//        var green = DataIN[ ( ( imageWidth * y ) + x ) * 4 + 1 ];
//        var  blue = DataIN[ ( ( imageWidth * y ) + x ) * 4 + 2 ];
//        var alpha = DataIN[ ( ( imageWidth * y ) + x ) * 4 + 3 ];
//----------------------------------------------------------------
//        // iterate over all pixels based on x and y coordinates
//
//        // loop through each column
//        for( let y = 0; y < imageHeight; y++ ) {
//          // loop through each column
//            for( let x = 0; x < imageWidth; x++ ) {
//                let   red = DataIN[ ( ( imageWidth * y ) + x ) * 4 ];
//                let green = DataIN[ ( ( imageWidth * y ) + x ) * 4 + 1 ];
//                let  blue = DataIN[ ( ( imageWidth * y ) + x ) * 4 + 2 ];
//                let alpha = DataIN[ ( ( imageWidth * y ) + x ) * 4 + 3 ];
//            }
//        }
//----------------------------------------------------------------
var myWidth = 256;
var myHeight = 256;
var myImage;
var myCanvas1, myCanvas2, myCanvas3, myCanvas4, myCanvas5, myCanvas6;
var myContext1, myContext2, myContext3, myContext4, myContext5, myContext6;

var myVarFlip, myVarRotation;

function updateCanvas( ) {
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

//    myContext1.fillStyle = "red";
//    myContext1.fillRect( 0, 0, myCanvas1.width, myCanvas1.height );
    setBitmap( 'img/lena256.png' );

    myCanvas1.style.margin = '4px'
    myCanvas2.style.margin = '4px'
    myCanvas3.style.margin = '4px'
    myCanvas4.style.margin = '4px'
    myCanvas5.style.margin = '4px'
    myCanvas6.style.margin = '4px'
}

function setBitmap( fileName ) {
    myImage.src = fileName;
    myImage.onload = function ( ) {
        myCanvas1.width = myImage.width;
        myCanvas1.height = myImage.height;
        myContext1.drawImage( myImage, 0, 0, myImage.width, myImage.height );
    }
}

