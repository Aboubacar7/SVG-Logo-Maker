const Circle  =require('../lib/Circle');

describe('Circle', () => {
    test('Should render a Circle shape', () => {
      const shape = new Circle();
      shape.setColor("red");
      expect(shape.render()).toEqual(`<circle  cx="150" cy="100" r="80" class="shape" fill="red" stroke="#000" stroke-width="1"/>`);
    })
    test('Should render text in the center of the square', () => {
        const shape = new Circle('Hello World', 'green', 'red');
        const expectedOutput =  `<text class="text" x="150" y="125" font-size="60" text-anchor="middle" fill="green">Hello World</text>`;
        expect(shape.renderText()).toEqual(expectedOutput);
      });
      
  })