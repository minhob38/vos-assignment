const request = require("supertest");
const { expect } = require("chai");
const { server } = require("../server");
const areaCode11110Top20 = require("./reference/areaCode11110Top20.json");
const areaCode11680Top20 = require("./reference/areaCode11680Top20.json");
const areaCode11710Top20 = require("./reference/areaCode11710Top20.json");

describe("GET: /api/land-value/query - endpoint test", () => {
  it("api server should send top 20's land value list for area code 11110", (done) => {
    request(server)
      .get("/api/land-value?area-code=11110&base-year=2020&base-month=01")
      .expect(200)
      .expect("Content-Type", /json/)
      .end((err, res) => {
        const data = res.body;

        expect(data.length).to.equal(20);
        expect(data).to.eql(areaCode11110Top20);

        done();
      });
  });

  it("api server should send top 20's land value list for area code 11680", (done) => {
    request(server)
      .get("/api/land-value?area-code=11680&base-year=2020&base-month=01")
      .expect(200)
      .expect("Content-Type", /json/)
      .end((err, res) => {
        const data = res.body;

        expect(data.length).to.equal(20);
        expect(data).to.eql(areaCode11680Top20);

        done();
      });
  });

  it("api server should send top 20's land value list for area code 11710", (done) => {
    request(server)
      .get("/api/land-value?area-code=11710&base-year=2020&base-month=01")
      .expect(200)
      .expect("Content-Type", /json/)
      .end((err, res) => {
        const data = res.body;

        expect(data.length).to.equal(20);
        expect(data).to.eql(areaCode11710Top20);

        done();
      });
  });

  it("api server should send http 400 status on invalid area code", (done) => {
    request(server)
      .get("/api/land-value?area-code=911710&base-year=2020&base-month=01")
      .expect(400)
      .expect("Content-Type", /json/)
      .end((err, res) => {
        const data = res.body;

        expect(data).to.eql({
          status: 400,
          error: "Invalid Request",
        });

        done();
      });
  });

  it("api server should send http 400 status on invalid year", (done) => {
    request(server)
      .get("/api/land-value?area-code=11710&base-year=92020&base-month=01")
      .expect(400)
      .expect("Content-Type", /json/)
      .end((err, res) => {
        const data = res.body;

        expect(data).to.eql({
          status: 400,
          error: "Invalid Request",
        });

        done();
      });
  });

  it("api server should send http 400 status on invalid month", (done) => {
    request(server)
      .get("/api/land-value?area-code=11710&base-year=21020&base-month=91")
      .expect(400)
      .expect("Content-Type", /json/)
      .end((err, res) => {
        const data = res.body;

        expect(data).to.eql({
          status: 400,
          error: "Invalid Request",
        });

        done();
      });
  });
});
