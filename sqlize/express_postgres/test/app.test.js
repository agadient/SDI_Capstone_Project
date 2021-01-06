const app = require('../bin/www.js');
const chai = require('chai');
const request = require('supertest');

const expect = chai.expect;

describe('App Auth Test', () => {
    describe("GET /", () => {
      it("Return welcome to the beginning", (done) => {
        request(app)
          .get("/")
          .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body.message).to.equal("Welcome to the beginning of nothingness.");
            done();
          });
      });
    });
     describe("GET /", () => {
      it("Return Hi once user is authenticated", (done) => {
        request(app)
          .get("/auth")
          .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body.message).to.equal("Hi!");
            done();
          });
      });
    });
});
