const Square = require("../library/Square");
const Triangle = require("../library/Triangle");
const Circle = require("../library/Circle");

function generateLogo(data) {
    let shape = undefined;

    if (data.shape === 'Triangle') {
        shape = new Triangle(data.shape_color, data.text, data.text_color);
    } else if (data.shape === 'Square') {
        shape = new Square(data.shape_color, data.text, data.text_color);
    } else {
        shape = new Circle(data.shape_color, data.text, data.text_color);
    }

    return shape.render();
}

module.exports = generateLogo;