const Shape = require("./shapes");

class Triangle extends Shape {
    render() {
        return `<svg height="210" width="700">
            <polygon points="200,50 300,300 100,300" fill="${this.color}"/>
            <text fill="${this.textColor}" font-size="75" x="172" y="250">${this.text}</text>
        </svg>`;
    }
}

module.exports = Triangle;