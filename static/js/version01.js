function doExample1() {
    doFlipAnimation();
}

function doFlipAnimation( ) {
    if ( myVarFlip === undefined ) {
        var makeAnimation = function ( ) {
            myContext2.translate( myImage.width, myImage.height );
            myContext2.rotate( Math.PI );
            myContext2.drawImage( myImage, 0, 0, myImage.width, myImage.height );
            myVarFlip = setTimeout( makeAnimation, 500 );
        }
        myVarFlip = setTimeout( makeAnimation, 500 );
    }
    else myVarFlip = clearTimeout( myVarFlip );
}

var dAngle = Math.PI / 180;

function doExample2() {
    doRotationAnimation();
}

function doRotationAnimation( ) {
    if ( myVarRotation === undefined ) {
        const makeAnimation = function ( ) {
            myContext2.fillStyle = "#CCCCCC";
            myContext2.fillRect( 0, 0, myCanvas2.width, myCanvas2.height );

            myContext2.translate( myImage.width / 2, myImage.height / 2 );
            myContext2.rotate( dAngle );
            myContext2.translate( -myImage.width / 2, -myImage.height / 2 );
            myContext2.drawImage( myImage, 0, 0, myImage.width, myImage.height );
            myVarRotation = setTimeout( makeAnimation, 200 );
        }
        myVarRotation = setTimeout( makeAnimation, 200 );
    }
    else myVarRotation = clearTimeout( myVarRotation );
}

function doExample3() {
    doRotation1();
}

function doRotation1( ) {
    doClear( );

    for ( let xe = 0; xe < myWidth; xe++ ) {   // ( x, y ) -> ( 255 - y, x )
        for ( let ye = 0; ye < myHeight; ye++ ) {
            let pixel = myContext1.getImageData( xe, ye, 1, 1 );
            let DataIN = pixel.data;
            let r = DataIN[ 0 ];
            let g = DataIN[ 1 ];
            let b = DataIN[ 2 ];
            myContext2.fillStyle = "rgba( " + r + "," + g + "," + b + "," + 1 + " )";
            myContext2.fillRect( 255 - ye, xe, 1, 1 );
        }
    }
}

function doExample4() {
    doRotation2();
}

function doRotation2( ) {
    doClear( );
    var myImageDataIN = myContext1.getImageData( 0, 0, myCanvas1.width, myCanvas1.height );
    var myImageDataOUT = myContext1.getImageData( 0, 0, myCanvas1.width, myCanvas1.height );

    var myDataIN = myImageDataIN.data;
    var myDataOUT = myImageDataOUT.data;

    for ( let i = 0; i < myDataIN.length; i += 4 ) { // ( x, y ) -> ( 255 - y, x )
        let xe = Math.floor( i / 4 ) % myWidth;
        let ye = Math.floor( Math.floor( i / 4 ) / myWidth );
        myDataOUT[ ( ( myWidth * xe ) + ( 255 - ye ) ) * 4] = myDataIN[i];
        myDataOUT[ ( ( myWidth * xe ) + ( 255 - ye ) ) * 4 + 1 ] = myDataIN[ i + 1 ];
        myDataOUT[ ( ( myWidth * xe ) + ( 255 - ye ) ) * 4 + 2 ] = myDataIN[ i + 2 ];
        myDataOUT[ ( ( myWidth * xe ) + ( 255 - ye ) ) * 4 + 3 ] = myDataIN[ i + 3 ];
    }
    myContext2.putImageData( myImageDataOUT, 0, 0 );
}
