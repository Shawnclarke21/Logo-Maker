const Shape = require("./shapes");

class Square extends Shape {
    render() {
        return `<svg height="500" width="500">
            <rect x="90" y="90" width="300" height="300" fill="${this.color}"/>
            <text fill="${this.textColor}" font-size="75" x="172" y="250">${this.text}</text>
        </svg>`;
    }
}

module.exports = Square;