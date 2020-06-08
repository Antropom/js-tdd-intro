assert.strictEqual(typeof capitalizeFirstLetter, 'function');
assert.strictEqual(
  capitalizeFirstLetter("C'est grace a Geoffroy que je fais des memes cools"),
  "C'est Grace A Geoffroy Que Je Fais Des Memes Cools"
);
assert.strictEqual(capitalizeFirstLetter('g'), 'G');
assert.strictEqual(capitalizeFirstLetter(''), '');
