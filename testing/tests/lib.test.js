const lib = require("../lib");

describe("absolute", () => {
  test("result is +ve if number is +ve", () => {
    const result = lib.absolute(2);
    expect(result).toBe(2);
  });

  test("result is +ve if number is -ve", () => {
    const result = lib.absolute(-2);
    expect(result).toBe(2);
  });

  test("result is 0 if number is 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

describe ('greet',()=>{
    it('should respond to string',()=>{
  const result=      lib.greet('Bons')
  expect (result).toMatch(/Bons/)
//   expect(result).toBe('Welcome Bons');

    })
})
