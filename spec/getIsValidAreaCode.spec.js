const { expect } = require("chai");
const getIsValidAreaCode = require("../src/utils/getIsValidAreaCode");

describe("it should return boolean whether the input is area code format or not", () => {
  it("it should return true on the proper input", () => {
    expect(getIsValidAreaCode("11110")).to.equal(true);
    expect(getIsValidAreaCode("11680")).to.equal(true);
    expect(getIsValidAreaCode("11710")).to.equal(true);
  });

  it("it should return false on the improper input", () => {
    expect(getIsValidAreaCode("1a110")).to.equal(false);
    expect(getIsValidAreaCode("116800")).to.equal(false);
    expect(getIsValidAreaCode("1710")).to.equal(false);
  });
});
