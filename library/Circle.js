const Shape = require("./shapes");

class Circle extends Shape {
    render() {
        return `<svg height="500" width="500">
            <circle cx="250" cy="250" r="250" fill="${this.color}"/>
            <text fill="${this.textColor}" font-size="75" x="172" y="250">${this.text}</text>
        </svg>`;
    }
}

module.exports = Circle;