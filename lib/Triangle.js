class Triangle {
    constructor(text, textColor, shapeColor) {
        this.text = text
        this.textColor = textColor
        this.shapeColor = shapeColor   
    }
    setColor(color) {
        this.shapeColor = color;
      }
    render() {
        return `<polygon class="shape" x="10" y="10" points="150,30 244,182 56,182" fill="${this.shapeColor}" stroke="#000"/>`
    }

    renderText() {
        return `<text class="text" x="150" y="131.33" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

module.exports = Triangle