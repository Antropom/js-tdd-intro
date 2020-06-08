const assert = require('assert');
const capitalizeFirstLetters = require('../capitalizeFirstLetters');

describe('capitalizeFirstLetters', () => {
  it("C'est une fonction", () => {
    assert.strictEqual(typeof capitalizeFirstLetters, 'function');
  });
  it('Passe toutes les premières lettres de la phase en majuscule', () => {
    assert.strictEqual(
      capitalizeFirstLetters(
        "C'est grace a Geoffroy que je fais des memes cools"
      ),
      "C'est Grace A Geoffroy Que Je Fais Des Memes Cools"
    );
  });
  it('Passe seulement un caractère en majuscule', () => {
    assert.strictEqual(capitalizeFirstLetters('g'), 'G');
  });
  it("Renvoie un chaîne de caratères vide si l'argument est une chaîne de caractères vide", () => {
    assert.strictEqual(capitalizeFirstLetters(''), '');
  });
});
