class Square {
    constructor(text, textColor, shapeColor) {
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }

    render() {
        return `<rect class="shape" height="100" width= "100" x="90" y="60"  style="fill:${this.shapeColor}; stroke:#000"/>`
    }

    renderText() {
        return `<text class="text" x="150" y="125" font-size="35" text-anchor="middle" style="fill:${this.textColor}">${this.text}</text>`
    }
}

module.exports = Square