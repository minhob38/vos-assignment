const request = require("supertest");
const { expect } = require("chai");
const { server } = require("../server");

describe("GET: /invalid uri  - endpoint test", () => {
  it("api server should respond 404 status (Not Found) for /", (done) => {
    request(server)
      .get("/")
      .expect(404)
      .expect("Content-Type", /json/)
      .end((err, res) => {
        const data = res.body;

        expect(data).to.eql({
          status: 404,
          error: "Not Found",
        });

        done();
      });
  });

  it("api server should respond 404 status (Not Found) for /api", (done) => {
    request(server)
      .get("/api")
      .expect(404)
      .expect("Content-Type", /json/)
      .end((err, res) => {
        const data = res.body;

        expect(data).to.eql({
          status: 404,
          error: "Not Found",
        });

        done();
      });
  });
});
