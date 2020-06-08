const assert = require('assert');
const Rectangle = require('../Rectangle');

describe('Rectangle', () => {
  it("C'est un carré", () => {
    const rectangle = new Rectangle(10, 10);
    assert.strictEqual(rectangle.isSquare(), true);
  });
  it("C'e n'est pas un carré", () => {
    const rectangle = new Rectangle(10, 5);
    assert.strictEqual(rectangle.isSquare(), false);
  });
  it("Le calcul de l'aire est bon", () => {
    const rectangle = new Rectangle(10, 5);
    assert.strictEqual(rectangle.getArea(), 50);
  });
  it('Le calcul du périmètre est bon', () => {
    const rectangle = new Rectangle(10, 5);
    assert.strictEqual(rectangle.getPerimeter(), 30);
  });
});
