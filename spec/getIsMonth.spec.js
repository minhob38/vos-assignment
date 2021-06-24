const { expect } = require("chai");
const getIsMonth = require("../src/utils/getIsMonth");

describe("it should return boolean whether the input is month(MM) format or not", () => {
  it("it should return true on the proper input", () => {
    expect(getIsMonth("01")).to.equal(true);
    expect(getIsMonth("02")).to.equal(true);
    expect(getIsMonth("10")).to.equal(true);
    expect(getIsMonth("12")).to.equal(true);
  });

  it("it should return false on the improper input", () => {
    expect(getIsMonth("1")).to.equal(false);
    expect(getIsMonth("2")).to.equal(false);
    expect(getIsMonth("13")).to.equal(false);
    expect(getIsMonth("001")).to.equal(false);
    expect(getIsMonth("0")).to.equal(false);
  });
});
