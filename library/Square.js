const Shape = require("./shapes");

class Square extends Shape {
    render() {
        return `<svg height="400" width="180">
            <rect x="50" y="20" width="150" height="150" fill="${this.color}"/>
            <text fill="${this.textColor}" font-size="75" x="172" y="250">${this.text}</text>
        </svg>`;
    }
}

module.exports = Square;