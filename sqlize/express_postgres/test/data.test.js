'use strict';

const app = require('../bin/www.js');
const chai = require('chai');
const request = require('supertest');
const { token }= require('../data/token.js');

const expect = chai.expect;

describe('Data API Integration Test', async () => {

    let task = {
        title: 'new data'
    };
    let badTask = {
        name: 'new data'
    };
    // Add dummy tests so the server can connect to the database before we test
    // that connection
    for (let i = 0; i < 20; i++) {
      describe("GET /asdfasdf", () => {
        it("should return 400 error", (done) => {
          request(app)
            .get("/asdfasdf")
            .send(badTask)
            .end((err, res) => {
            expect(res.statusCode).to.equal(404);
            done();
            });
        });
      });
    }

      describe("GET /public", () => {
        it("should get empty data array", (done) => {
          request(app)
            .get("/public")
            .end((err, res) => {
              expect(res.statusCode).to.equal(200);
              expect(res.body).to.be.an("array").to.be.empty;
              //expect(res.body).to.be.empty;

              done();
            });
        });
      });

      describe("GET /user", () => {
        it("should get empty data array", (done) => {
          request(app)
            .get("/user")
            .end((err, res) => {
              expect(res.statusCode).to.equal(200);
              expect(res.body).to.be.an("array").to.be.empty;
              done();
            });
        });
      });

      describe("GET /admin", () => {
        it("should get empty data array", (done) => {
          request(app)
            .get("/admin")
            .end((err, res) => {
              expect(res.statusCode).to.equal(200);
              expect(res.body).to.be.an("array").to.be.empty;
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