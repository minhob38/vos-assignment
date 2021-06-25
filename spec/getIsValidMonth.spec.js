const { expect } = require("chai");
const getIsValidMonth = require("../src/utils/getIsValidMonth");

describe("it should return boolean whether the input is month(MM) format or not", () => {
  it("it should return true on the proper input", () => {
    expect(getIsValidMonth("01")).to.equal(true);
    expect(getIsValidMonth("02")).to.equal(true);
    expect(getIsValidMonth("10")).to.equal(true);
    expect(getIsValidMonth("12")).to.equal(true);
  });

  it("it should return false on the improper input", () => {
    expect(getIsValidMonth("1")).to.equal(false);
    expect(getIsValidMonth("2")).to.equal(false);
    expect(getIsValidMonth("13")).to.equal(false);
    expect(getIsValidMonth("001")).to.equal(false);
    expect(getIsValidMonth("0")).to.equal(false);
  });
});

describe("it should return boolean on the specific month", () => {
  it("it should return true on the proper input", () => {
    expect(getIsValidMonth("01", "01")).to.equal(true);
    expect(getIsValidMonth("1", "1")).to.equal(true);
    expect(getIsValidMonth("12", "12")).to.equal(true);
  });

  it("it should return false on the improper input", () => {
    expect(getIsValidMonth("1", "01")).to.equal(false);
    expect(getIsValidMonth("02", "01")).to.equal(false);
  });
});
