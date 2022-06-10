const alphabet = {
  'a': 1,
  'b': 2,
  'c': 3,
  'd': 4,
  'e': 5,
  'f': 6,
  'g': 7,
  'h': 8,
  'i': 9,
  'j': 10,
  'k': 11,
  'l': 12,
  'm': 13,
  'n': 14,
  'o': 15,
  'p': 16,
  'q': 17,
  'r': 18,
  's': 19,
  't': 20,
  'u': 21,
  'v': 22,
  'w': 23,
  'x': 24,
  'y': 25,
  'z': 26
}

function caesarCipher(str, shift) {
  const stringArray = str.split("");
  const returnArray = [];
  for(let i = 0; i < stringArray.length; i+=1) {
    const currentChar = stringArray[i].toLowerCase();
    // Check if current char is alphabet
    if((/[a-z]/).test(currentChar)) {
      const currentNum = alphabet[currentChar];
      let shiftedNum = currentNum + shift;
      if(shiftedNum > 26) {
        shiftedNum = shift - (26 - currentNum);
      }
      let shiftedChar = Object.keys(alphabet).find(key => alphabet[key] === shiftedNum);
      if((/[A-Z]/).test(stringArray[i])) {
        shiftedChar = shiftedChar.toUpperCase();
      }
      returnArray.push(shiftedChar);
    }
    else {
      returnArray.push(currentChar);
    }
  }
  return returnArray.join("");
}

export default caesarCipher;