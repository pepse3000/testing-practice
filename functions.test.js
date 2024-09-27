import { capitalize } from "./functions.js";


test("capitalize", () => {
  expect(capitalize("string")).toBe("String");
});