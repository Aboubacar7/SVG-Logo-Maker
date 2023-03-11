
const Triangle =require('../lib/Triangle');

describe('Triangle', () => {
    test('Should render a triangle shape', () => {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual('<polygon class="shape" x="10" y="10" points="150,30 244,182 56,182" style="fill:blue; stroke:#000"/>');
    })
    test('Should render text in the center of the triangle', () => {
        const shape = new Triangle('Hello World', 'white', 'blue');
        const expectedOutput = '<text class="text" x="150" y="131.33" font-size="40" text-anchor="middle" style="fill:white">Hello World</text>';
        expect(shape.renderText()).toEqual(expectedOutput);
      });
      
  })
  
  