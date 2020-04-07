function doOpenPhotos( ) {
    openImage( myContext1, 'img/lena256.png' );
    openImage( myContext2, 'img/airplane256.png' );
    openImage( myContext3, 'img/mandrill256.png' );
    openImage( myContext4, 'img/parrots256.png' );
    openImage( myContext5, 'img/cicada256.png' );
    openImage( myContext6, 'img/monkey256.png' );
}

function doOpenIndustrial( ) {
    openImage( myContext1, 'img/tire256.png' );
    openImage( myContext2, 'img/black_rectangles256.png' );
    openImage( myContext3, 'img/cross_board256.png' );
    openImage( myContext4, 'img/six_squares256.png' );
    openImage( myContext5, 'img/for_histogram256.png' );
    openImage( myContext6, 'img/grid256.png' );
}

function openImage( myContext, fileName ) {
    var myImage = new Image( );
    myImage.src = fileName;
    myImage.crossOrigin = "Anonymous";
    myImage.onload = function ( ) {
        myContext.drawImage( myImage, 0, 0 );
    }
}

function doMargins( ) {
    if ( myCanvas1.style.margin === '4px' ? myCanvas1.style.margin = '-4px' : myCanvas1.style.margin = '4px' );
    if ( myCanvas2.style.margin === '4px' ? myCanvas2.style.margin = '-4px' : myCanvas2.style.margin = '4px' );
    if ( myCanvas3.style.margin === '4px' ? myCanvas3.style.margin = '-4px' : myCanvas3.style.margin = '4px' );
    if ( myCanvas4.style.margin === '4px' ? myCanvas4.style.margin = '-4px' : myCanvas4.style.margin = '4px' );
    if ( myCanvas5.style.margin === '4px' ? myCanvas5.style.margin = '-4px' : myCanvas5.style.margin = '4px' );
    if ( myCanvas6.style.margin === '4px' ? myCanvas6.style.margin = '-4px' : myCanvas6.style.margin = '4px' );
}

function doClone( ) {
    var myImageDataIN1 = myContext1.getImageData( 0, 0, myCanvas1.width, myCanvas1.height );
    myContext2.putImageData( myImageDataIN1, 0, 0 );
    myContext3.putImageData( myImageDataIN1, 0, 0 );
    myContext4.putImageData( myImageDataIN1, 0, 0 );
    myContext5.putImageData( myImageDataIN1, 0, 0 );
    myContext6.putImageData( myImageDataIN1, 0, 0 );
}

function doMoveZ( ) {
    var myImageDataIN1 = myContext1.getImageData( 0, 0, myCanvas1.width, myCanvas1.height );
    myContext1.putImageData( myContext6.getImageData( 0, 0, myCanvas6.width, myCanvas6.height ), 0, 0 );
    myContext6.putImageData( myContext5.getImageData( 0, 0, myCanvas5.width, myCanvas5.height ), 0, 0 );
    myContext5.putImageData( myContext4.getImageData( 0, 0, myCanvas4.width, myCanvas4.height ), 0, 0 );
    myContext4.putImageData( myContext3.getImageData( 0, 0, myCanvas3.width, myCanvas3.height ), 0, 0 );
    myContext3.putImageData( myContext2.getImageData( 0, 0, myCanvas2.width, myCanvas2.height ), 0, 0 );
    myContext2.putImageData( myImageDataIN1, 0, 0 );
}

function doMoveO( ) {
    var myImageDataIN1 = myContext1.getImageData( 0, 0, myCanvas1.width, myCanvas1.height );
    myContext1.putImageData( myContext4.getImageData( 0, 0, myCanvas6.width, myCanvas6.height ), 0, 0 );
    myContext4.putImageData( myContext5.getImageData( 0, 0, myCanvas5.width, myCanvas5.height ), 0, 0 );
    myContext5.putImageData( myContext6.getImageData( 0, 0, myCanvas4.width, myCanvas4.height ), 0, 0 );
    myContext6.putImageData( myContext3.getImageData( 0, 0, myCanvas3.width, myCanvas3.height ), 0, 0 );
    myContext3.putImageData( myContext2.getImageData( 0, 0, myCanvas2.width, myCanvas2.height ), 0, 0 );
    myContext2.putImageData( myImageDataIN1, 0, 0 );
}

function doColors( ) {
    myContext1.fillStyle = "red";
    myContext1.fillRect( 0, 0, myCanvas1.width, myCanvas1.height );
    myContext2.fillStyle = "green";
    myContext2.fillRect( 0, 0, myCanvas1.width, myCanvas1.height );
    myContext3.fillStyle = "blue";
    myContext3.fillRect( 0, 0, myCanvas1.width, myCanvas1.height );
    myContext4.fillStyle = "cyan";
    myContext4.fillRect( 0, 0, myCanvas1.width, myCanvas1.height );
    myContext5.fillStyle = "magenta";
    myContext5.fillRect( 0, 0, myCanvas1.width, myCanvas1.height );
    myContext6.fillStyle = "yellow";
    myContext6.fillRect( 0, 0, myCanvas1.width, myCanvas1.height );
}


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

function doNoise( ) {
    doClear( );
    for ( let xe = 0; xe < myWidth; xe++ ) {
        for ( let ye = 0; ye < myHeight; ye++ ) {
            let r = Math.floor( Math.random( ) * 256 );
            let g = Math.floor( Math.random( ) * 256 );
            let b = Math.floor( Math.random( ) * 256 );
            let gray = Math.floor( ( r + g + b ) / 3 );
            myContext1.fillStyle = "rgba( " + r + "," + g + "," + b + "," + 1 + " )";
            myContext1.fillRect( xe, ye, 1, 1 );
            myContext2.fillStyle = "rgba( " + gray + "," + gray + "," + gray + "," + 1 + " )";
            myContext2.fillRect( xe, ye, 1, 1 );
        }
    }
}

function doGrid1( ) {
    doClear( );
    var myImageDataIN = myContext1.getImageData( 0, 0, myCanvas1.width, myCanvas1.height );
    var myDataIN = myImageDataIN.data;
    for ( let i = 0; i < myDataIN.length; i += 4 ) {
        if ( ( Math.floor( i / 4 ) % myWidth ) % 2 === 0 )  // even xe...
        {
            if ( Math.floor( Math.floor( i / 4 ) / myWidth ) % 2 === 0 )  // even ye...
            {
                myDataIN[i] = 255; // red
                myDataIN[i + 1] = 0;
                myDataIN[i + 2] = 0;
                myDataIN[i + 3] = 255;
            }
            else  // odd ye
            {
                myDataIN[i] = 0; // green
                myDataIN[i + 1] = 255;
                myDataIN[i + 2] = 0;
                myDataIN[i + 3] = 255;
            }
        }
        else  // odd xe
        {
            if ( Math.floor( Math.floor( i / 4 ) / myWidth ) % 2 === 0 )  // even ye...
            {
                myDataIN[i] = 0; // blue
                myDataIN[i + 1] = 0;
                myDataIN[i + 2] = 255;
                myDataIN[i + 3] = 255;
            }
            else  // odd ye
            {
                myDataIN[i] = 255; // yellow
                myDataIN[i + 1] = 255;
                myDataIN[i + 2] = 0;
                myDataIN[i + 3] = 255;
            }
        }
    }
    myContext1.putImageData( myImageDataIN, 0, 0 );
}

function doGrid2( ) {
    doClear( );
    for ( let xe = 0; xe < myWidth; xe++ ) {
        for ( let ye = 0; ye < myHeight; ye++ ) {
            myContext1.fillStyle = ( ye % 2 === 0 ? ( xe % 2 === 0 ? '#FF0000' : '#0000FF' ) : ( xe % 2 === 0 ? '#00FF00' : '#FFFF00' ) );
            myContext1.fillRect( xe, ye, 1, 1 );
        }
    }
}
