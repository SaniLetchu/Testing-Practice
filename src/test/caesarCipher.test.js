import caesarCipher from '../caesarCipher';

test('Test caesarCipher', () => {
  const word = caesarCipher("I'm called Sani!", 6);
  expect(word).toBe("O's igrrkj Ygto!");
  const sameword = caesarCipher("Hello World!", 0);
  expect(sameword).toBe("Hello World!");
  const char = caesarCipher("z", 1);
  expect(char).toBe("a");
  const word1 = caesarCipher("I'm called Sani!", 18);
  expect(word1).toBe("A'e usddwv Ksfa!");
});
