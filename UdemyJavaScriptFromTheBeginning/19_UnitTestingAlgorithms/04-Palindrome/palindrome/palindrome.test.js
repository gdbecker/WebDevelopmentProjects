const palindrome = require("./palindrome");

describe("Palindrome", () => {
  it("should be a function", () => {
    expect(typeof palindrome).toEqual("function");
  });

  it("should return a boolean", () => {
    expect(typeof palindrome("hello")).toEqual("boolean");
  });

  it("should return true if it is a palindrome", () => {
    expect(palindrome("kayak")).toBeTruthy();
    expect(palindrome("wow")).toBeTruthy();
    expect(palindrome("rotator")).toBeTruthy();
  });

  it("should return false if it is not a palindrome", () => {
    expect(palindrome("hello")).toBeFalsy();
    expect(palindrome("world")).toBeFalsy();
    expect(palindrome("hat")).toBeFalsy();
  });

  it("should return false if it includes spaces", () => {
    expect(palindrome(" hello")).toBeFalsy();
    expect(palindrome("wow ")).toBeFalsy();
    expect(palindrome(" hat ")).toBeFalsy();
  });
  
});
