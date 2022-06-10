const capitalize = require('../capitalize');

test('Properly capitalizes first letter', () => {
  const word = capitalize("sani");
  expect(word).toBe("Sani");
  const word1 = capitalize("burGEr");
  expect(word1).toBe("BurGEr");
});