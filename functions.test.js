import {
  capitalize,
  reverseString,
  calculator,
  analyzeArray,
  caesarCipher
} from "./functions.js";


test("capitalize", () => {
  expect(capitalize("string")).toBe("String");
});

test("reverse", () => {
  expect(reverseString("string")).toBe("gnirts");
})

describe("calculator", () => {
  test("add", () => {
    expect(calculator.add(3, 5)).toBe(8);
  });
  test("substract", () => {
    expect(calculator.substract(5, 3)).toBe(2);
  });
  test("divide", () => {
    expect(calculator.divide(8, 2)).toBe(4);
  });
  test("multiply", () => {
    expect(calculator.multiply(8, 2)).toBe(16);
  });
})

test("caesarCipher", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
})

test("caesarCipher 2", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
})

test("analyze array", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toStrictEqual({ average: 4, min: 1, max: 8, length: 6 });
})