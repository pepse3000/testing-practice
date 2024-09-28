export function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

export function reverseString(str) {
  return str.split("").reverse().join("");
}

export const calculator = (function () {
  const add = (a, b) => {
    return a + b;
  }

  const substract = (a, b) => {
    return a - b;
  }

  const divide = (a, b) => {
    return a / b;
  }

  const multiply = (a, b) => {
    return a * b;
  }

  return { add, substract, divide, multiply }
})();

export function caesarCipher(str, shift) {
  let charCodeArr = [];

  for (let i = 0; i < str.length; i++) {
    if (str.charCodeAt(i) < 64) {
      charCodeArr.push(str.charCodeAt(i));
      continue;
    };

    if (str.charCodeAt(i) + shift > 122) {
      charCodeArr.push(96 + str.charCodeAt(i) + shift - 122);
      continue;
    }
    charCodeArr.push(str.charCodeAt(i) + shift);
  }

  let stringified = charCodeArr.map(el => el = String.fromCharCode(el));

  return stringified.join("");
};

export function analyzeArray(arr) {
  let average = arr.reduce((prev, cur) => prev + cur) / arr.length;
  let sortedArray = arr.sort((a, b) => a - b);
  let min = sortedArray[0];
  let max = sortedArray[sortedArray.length - 1];
  let length = arr.length;

  return { average, min, max, length }
};
