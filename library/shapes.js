class shape {
    constructor() {
        this.color = '';
    }

    setcolor(color) {
        this.color = color;
    }
}

class triangle extends shape {
    render() {
        return `<polygon points="150,50 50,150 250,150" style="fill:${this.color}"/>`;
    }
}

class circle extends shape {
    render() {
        return `<circle cx="25" cy="75" r="20" style="fill:${this.color}"/>`;
    }
}

class square extends shape {
    render() {
        return `<rect x="10" y="10" width="30" height="30" style="fill:${this.color}"/>`;
    }
}

module.exports = {
    shape,
    triangle,
    circle,
    square,
};