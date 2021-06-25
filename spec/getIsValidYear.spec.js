const { expect } = require("chai");
const getIsValidYear = require("../src/utils/getIsValidYear");

describe("it should return boolean whether the input is year format (YYYY: 1900~2099) or not", () => {
  it("it should return true on the proper input", () => {
    expect(getIsValidYear("1900")).to.equal(true);
    expect(getIsValidYear("1990")).to.equal(true);
    expect(getIsValidYear("2000")).to.equal(true);
    expect(getIsValidYear("2020")).to.equal(true);
    expect(getIsValidYear("2099")).to.equal(true);
  });

  it("it should return false on the improper input", () => {
    expect(getIsValidYear("1899")).to.equal(false);
    expect(getIsValidYear("02020")).to.equal(false);
    expect(getIsValidYear("20200")).to.equal(false);
    expect(getIsValidYear("2100")).to.equal(false);
  });
});

describe("it should return boolean on the specific year", () => {
  it("it should return true on the proper input", () => {
    expect(getIsValidYear("1", "1")).to.equal(true);
    expect(getIsValidYear("0001", "0001")).to.equal(true);
    expect(getIsValidYear("1999", "1999")).to.equal(true);
    expect(getIsValidYear("2020", "2020")).to.equal(true);
  });

  it("it should return false on the improper input", () => {
    expect(getIsValidYear("2021", "2020")).to.equal(false);
    expect(getIsValidYear("02021", "2020")).to.equal(false);
  });
});
