
const Square =require('../lib/Square');

describe('Square', () => {
    test('Should render a square shape', () => {
      const shape = new Square();
      shape.setColor("yellow");
      expect(shape.render()).toEqual(`<rect class="shape" height="110" width= "110" x="90" y="40"  fill="yellow" stroke="#000"/>`);
    })
    test('Should render text in the center of the square', () => {
        const shape = new Square('Hello World', 'red', 'yellow');
        const expectedOutput =  `<text class="text" x="140" y="110" font-size="35" text-anchor="middle" fill="red">Hello World</text>`;
        expect(shape.renderText()).toEqual(expectedOutput);
      });
      
  })
  