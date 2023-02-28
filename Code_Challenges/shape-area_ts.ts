/* shape-area.js */
const PI = Math.PI;

// Define and export circleArea() and squareArea() below

export function circleArea(radiusLength: number): number {
    return PI * radiusLength * radiusLength;
}

// export directly
export function squareArea(sideLength: number): number {
    return sideLength * sideLength;
}



// module exports
//module.exports.circleArea = circleArea();
