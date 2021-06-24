const request = require("supertest");
const { expect } = require("chai");
const { server, db } = require("../server");

describe("land value router - endpoint test", () => {
  it("GET: /api/land-value/query", () => {
    request(server)
      .get("/api/land-value?area-code=11680&base-year=2020&base-month=01")
      .expect(200)
      .expect("Content-Type", /json/)
      .end((err, res) => {
      });
   });
});
