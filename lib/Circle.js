class Circle {
    constructor(text, textColor, shapeColor) {
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
    setColor(color) {
        this.shapeColor = color;
      }
    render() {
        return `<circle  cx="150" cy="115" r="100" class="shape" style="fill:${this.shapeColor}; stroke:#000; stroke-width="5"/>`
    }

    renderText() {
        return `<text class="text" x="150" y="125" font-size="60" text-anchor="middle" style="fill:${this.textColor}">${this.text}</text>`
    }
}

module.exports = Circle