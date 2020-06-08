const capitalizeFirstLetter = (str) => {
  return str
    ? str
        .split(' ')
        .map((word) => word[0].toUpperCase() + word.slice(1))
        .join(' ')
    : '';
};

assert.strictEqual(typeof capitalizeFirstLetter, 'function');
assert.strictEqual(
  capitalizeFirstLetter("C'est grace a Geoffroy que je fais des memes cools"),
  "C'est Grace A Geoffroy Que Je Fais Des Memes Cools"
);
assert.strictEqual(capitalizeFirstLetter('g'), 'G');
assert.strictEqual(capitalizeFirstLetter(''), '');
