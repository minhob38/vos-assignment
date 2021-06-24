const { expect } = require("chai");
const getIsAreaCode = require("../src/utils/getIsAreaCode");

describe("it should return boolean whether the input is area code format or not", () => {
  it("it should return true on the proper input", () => {
    expect(getIsAreaCode("11110")).to.equal(true);
    expect(getIsAreaCode("11680")).to.equal(true);
    expect(getIsAreaCode("11710")).to.equal(true);
  });

  it("it should return false on the improper input", () => {
    expect(getIsAreaCode("1a110")).to.equal(false);
    expect(getIsAreaCode("116800")).to.equal(false);
    expect(getIsAreaCode("1710")).to.equal(false);
  });
});
