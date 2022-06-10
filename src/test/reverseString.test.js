const reverseString = require('../reverseString');

test('Reverse string test', () => {
  const word = reverseString("Sani");
  expect(word).toBe("inaS");
  const word1 = reverseString("BurGir");
  expect(word1).toBe("riGruB");
});