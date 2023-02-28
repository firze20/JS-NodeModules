/* shape-area.js */
const PI = Math.PI;

// Define and export circleArea() and squareArea() below

function circleArea(radiusLength) {
    return PI * radiusLength * radiusLength;
}

// export directly
function squareArea(sideLength) {
    return sideLength * sideLength;
}

// module exports
module.exports.circleArea = circleArea;
module.exports.squareArea = squareArea;
