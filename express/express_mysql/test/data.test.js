'use strict';

const app = require('../src/bin/www.js');
const chai = require('chai');
const request = require('supertest');
const { token } = require('../src/data/token.js')

const expect = chai.expect;

describe('Data API Integration Test', async () => {

    let task = {
        sampleData: 'new data'
    };
    let badTask = {
        name: 'new data'
    };
    // Add dummy tests so the server can connect to the database before we test
    // the connection. Mocha chai does not wait for the database connection to
    // be established before it fires off tests, causing tests to fail or
    // succeed in a nondeterministic manner
    for (let i = 0; i < 20; i++) {
      describe("GET /asdfasdf", () => {
        it("should return 400 error", (done) => {
          request(app)
            .get("/asdfasdf")
            .end((err, res) => {
            expect(res.statusCode).to.equal(404);
            done();
            });
        });
      });
    }


    describe("POST /writeDB", () => {
      it("should fail as we are sending an invalid \"task\"", (done) => {
        request(app)
          .post("/writeDB")
          .send(badTask)
          .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            done();
          });
      });
    });

    describe("POST /writeDB", () => {
      it("should write the \"task\" object to the database", (done) => {
        request(app)
          .post("/writeDB")
          .send(task)
          .end((err, res) => {
            expect(res.statusCode).to.equal(201);
            task = res.body
            done();
          });
      });
    });

    describe("GET /readDB", () => {
      it("should get empty data array", (done) => {
        request(app)
          .get("/readDB")
          .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.be.an("array").to.be.not.empty;
            done();
          });
      });
    });

    describe("GET /parseJWT", () => {
      it("should return parsed JWT", (done) => {
        request(app)
          .get("/parseJWT")
          .set("Authorization", token)
          .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            expect(res.body).to.be.an("Object");
            done();
          });
      });
    });

});