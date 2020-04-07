
function ChangeColors() {

    doClear();

    ColorNoise(myContext2, myContext1.getImageData(0, 0, myWidth, myHeight), 0, 0);

    ColorWhite(myContext3, myContext1.getImageData(0, 0, myWidth, myHeight), 0, 0);

    ColorBlackAndWhite(myContext4, myContext1.getImageData(0, 0, myWidth, myHeight), 0, 0);

    ColorYellow(myContext5, myContext1.getImageData(0, 0, myWidth, myHeight), 0, 0);

    ColorBlue(myContext6, myContext1.getImageData(0, 0, myWidth, myHeight), 0, 0);
}

function ColorWhite(context, imageData, x, y) {
    var pixels = imageData.data;
    var bias = 1;
    for (var i = 0; i < pixels.length; i += 3) {
        var value = pixels[i] * 2 + pixels[i + 1] * 0.5 + pixels[i + 2] * 0.5;
        if (value + 2 * bias > 255) {
            pixels[i + 0] = 255;
        }
        else {
            pixels[i + 0] = value + 2 * bias;
        }

        if (value + bias > 255) {
            pixels[i + 1] = 255;
        }
        else {
            pixels[i + 1] = value + bias;
        }
    }
    context.putImageData(imageData, x, y);
}

function ColorNoise(context, imageData, x, y) {
    var pixels = imageData.data;
    var bias = 10;
    for (var i = 0; i < pixels.length; i += 10) {
        var value = pixels[i] * 0.01 + pixels[i + 1] * 0.5 + pixels[i + 2] * 1.2;
        if (value + 2 * bias > 255) {
            pixels[i + 0] = 255;
        }
        else {
            pixels[i + 0] = value + 2 * bias;
        }
        if (value + bias > 255) {
            pixels[i + 2] = 255;
        }
        else {
            pixels[i + 1] = value + bias;
        }
    }
    context.putImageData(imageData, x, y);
}

function ColorBlackAndWhite(context, imageData, x, y) {
    var pixels = imageData.data;
    for (var i = 0, n = pixels.length; i < n; i += 4) {
        var grayscale = pixels[i] * .3 + pixels[i + 1] * .59 + pixels[i + 2] * .11;
        pixels[i] = grayscale;
        pixels[i + 1] = grayscale;
        pixels[i + 2] = grayscale;
    }
    context.putImageData(imageData, x, y);
}

function ColorBlue(context, imageData, x, y) {
    var pixels = imageData.data;
    for (var i = 0; i < pixels.length; i += 4) { pixels[i + 8] = 0; }
    context.putImageData(imageData, x, y);
}

function ColorYellow(context, imageData, x, y) {
    var pixels = imageData.data;
    for (var i = 0; i < pixels.length; i += 4) { pixels[i + 1] = 0; }
    context.putImageData(imageData, x, y);
}

function Stripes() {
    doClear();

    Stripe1(myContext2, myContext1.getImageData(0, 0, myWidth, myHeight), 0, 0);

    Stripe2(myContext3, myContext1.getImageData(0, 0, myWidth, myHeight), 0, 0);

    Stripe3(myContext4, myContext1.getImageData(0, 0, myWidth, myHeight), 0, 0);

    Stripe4(myContext5, myContext1.getImageData(0, 0, myWidth, myHeight), 0, 0);

    Stripe5(myContext6, myContext1.getImageData(0, 0, myWidth, myHeight), 0, 0);
}

function Stripe1(context, imageData, x, y) {
    var pixels = imageData.data;
    for (var i = 0; i < pixels.length; i += 6) {
        pixels[i + 1] = 0;
        pixels[i + 2] = 0;
    }
    context.putImageData(imageData, x, y);
}

function Stripe2(context, imageData, x, y) {
    pixels = imageData.data;
    for (var i = 0; i < pixels.length; i += 10) {
        pixels[i + 1] = 0;
        pixels[i + 2] = 0;
    }
    context.putImageData(imageData, x, y);
}

function Stripe3(context, imageData, x, y) {
    pixels = imageData.data;
    for (var i = 0; i < pixels.length; i += 15) {
        pixels[i + 1] = 0;
        pixels[i + 2] = 0;
    }
    for (var i = 0; i < pixels.length; i += 10) {
        pixels[i + 1] = 0;
        pixels[i + 2] = 0;
    }
    for (var i = 0; i < pixels.length; i += 20) {
        pixels[i + 1] = 0;
        pixels[i + 2] = 0;
    }
    context.putImageData(imageData, x, y);
}

function Stripe4(context, imageData, x, y) {
    pixels = imageData.data;
    for (var i = 0; i < pixels.length; i += 25) {
        pixels[i] = 0;
        pixels[i + 1] = 1;
        pixels[i + 2] = 0;
    }
    context.putImageData(imageData, x, y);
}

function Stripe5(context, imageData, x, y) {
    pixels = imageData.data;
    for (var i = 0; i < pixels.length; i += 160) {
        pixels[i] = 1;
        pixels[i + 1] = 0;
        pixels[i + 2] = 0.5;
    }
    for (var i = 0; i < pixels.length; i += 130) {
        pixels[i] = 1;
        pixels[i + 1] = 0;
        pixels[i + 2] = 0.5;
    }
    for (var i = 0; i < pixels.length; i += 100) {
        pixels[i] = 1;
        pixels[i + 1] = 0;
        pixels[i + 2] = 0.5;
    }
    context.putImageData(imageData, x, y);
}

function SliceImagesIntoTiles(useEffects) {

    doClear();
    //obrazek jest wymiarow 256x256, tak wiec mozna go podzielic na kafelki w ustawieniu N x N (2 na 2, 3 na 3 itp)
    SliceImage(myContext2, 2, useEffects);

    SliceImage(myContext3, 3, useEffects);

    SliceImage(myContext4, 4, useEffects);

    SliceImage(myContext5, 5, useEffects);

    SliceImage(myContext6, 8, useEffects);
}

function SliceImage(context, tileInRowCount, useEffects) {
    imgData = myContext1.getImageData(0, 0, myWidth, myHeight);
    pixels = imgData.data;

    var tileDim = ~~((myWidth / tileInRowCount)); //myWidth == myHeight (256x256)

    tileCountX = ~~(myWidth / tileDim); //szybsza wersja Math.Floor 
    tileCountY = ~~(myHeight / tileDim);

    var tiles = getTiles(tileCountX, tileCountY, tileDim, pixels);

    if (useEffects) {

        var allUsedFunctions = [
            ColorNoise,
            ColorWhite,
            ColorBlackAndWhite,
            ColorYellow,
            ColorBlue,
            Stripe1,
            Stripe2,
            Stripe3,
            Stripe4,
            Stripe5
        ];
        drawTilesWithEffects(tiles, context, allUsedFunctions);
    }
    else {
        drawTiles(tiles, context);
    }
}

function indexX(x, pixels) {
    var i = x * 4;
    if (i > pixels.length) console.warn("X out of bounds");
    return i;
}

function indexY(y, pixels) {
    var i = myWidth * 4 * y;
    if (i > pixels.length) console.warn("Y out of bounds");
    return i;
}

function getIndex(x, y, pixels) {
    var i = indexX(x, pixels) + indexY(y, pixels);
    if (i > pixels.length) console.warn("XY out of bounds");
    return i;
}

function getTile(x, y, pixels, tileDim) {
    var tile = [];

    for (var i = 0; i < tileDim; i++) {
        tile.push(...pixels.slice(getIndex(x, y + i, pixels), getIndex(x + tileDim, y + i, pixels)));
    }

    tile = new ImageData(new Uint8ClampedArray(tile), tileDim, tileDim);
    tile.x = x;
    tile.y = y;

    return tile;
}

function getTiles(tileCountX, tileCountY, tileDim, pixels) {
    var tiles = [];
    for (var yi = 0; yi < tileCountY; yi++) {
        for (var xi = 0; xi < tileCountX; xi++) {
            tiles.push(getTile(xi * tileDim, yi * tileDim, pixels, tileDim));
        }
    }
    return tiles;
}

function drawTiles(tiles, context) {
    var offset = 1.05;
    tiles.forEach((d, i) => (context.putImageData(d, d.x * offset, d.y * offset)));
}

//Odpowiednik extensionMethod w .Net - możemy napisać własną metodę, która będzie działać w ramach danej klasy/struktury zdefiniowanej w innym źrodle
Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)];
}

function drawTilesWithEffects(tiles, context, functions) {
    var offset = 1.05;
    tiles.forEach((d, i) => (functions.sample()(context, d, d.x * offset, d.y * offset)));
}

