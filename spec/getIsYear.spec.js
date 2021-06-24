const { expect } = require("chai");
const getIsYear = require("../src/utils/getIsYear");

describe("it should return boolean whether the input is year format (YYYY: 1900~2099) or not", () => {
  it("it should return true on the proper input", () => {
    expect(getIsYear("1900")).to.equal(true);
    expect(getIsYear("1990")).to.equal(true);
    expect(getIsYear("2000")).to.equal(true);
    expect(getIsYear("2020")).to.equal(true);
    expect(getIsYear("2099")).to.equal(true);
  });

  it("it should return false on the improper input", () => {
    expect(getIsYear("1899")).to.equal(false);
    expect(getIsYear("02020")).to.equal(false);
    expect(getIsYear("20200")).to.equal(false);
    expect(getIsYear("2100")).to.equal(false);
  });
});
