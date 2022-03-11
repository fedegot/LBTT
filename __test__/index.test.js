const calculate = require("../index");

describe("caluclate all price", () => {
  it(`We need to return a total price of the house without the tax`, () => {
    expect(calculate(120000)).toBe(120000);
    console.log(`Price of the proprety is 120000£ without LBTT`);
  });
});
