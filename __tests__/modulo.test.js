const { modulo } = require("../math")

describe("modulo", () => {
    test("17%3", () => {
      expect(modulo(17,3)).toBe(2);
    });
  
    test("49%7", () => {
      expect(modulo(49,7)).toBe(0);
    });
  
    test("13%0", () => {
      expect(modulo(13,0)).toBe(0);
    });
});