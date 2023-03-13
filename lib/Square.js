class Square {
    constructor(text, textColor, shapeColor) {
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor
    }
    setColor(color) {
        this.shapeColor = color;
      }
    render() {
        return `<rect class="shape" height="110" width= "110" x="90" y="40"  fill= "${this.shapeColor}" stroke="#000"/>`
    }

    renderText() {
        return `<text class="text" x="140" y="110" font-size="35" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

module.exports = Square