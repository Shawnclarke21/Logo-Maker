const Shape = require("./shapes");

class Triangle extends Shape {
    render() {
        return `<svg height="500" width="500">
            <polygon points="140,0 300,200 0,200" fill="${this.color}"/>
            <text fill="${this.textColor}" font-size="75" x="85" y="130">${this.text}</text>
        </svg>`;
    }
}

module.exports = Triangle;