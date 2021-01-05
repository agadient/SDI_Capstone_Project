'use strict';

const app = require('../bin/www.js');
const chai = require('chai');
const request = require('supertest');

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

      describe('GET /api/data', () => {
        it('should get all data', (done) => {
            request(app) .get('/api/data') .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.be.an('array');
                expect(res.body).to.be.empty;
                
                done();
            });
        });
    });

    describe("GET /asdf", () => {
        it("should return 400 error", (done) => {
          request(app)
            .get("/asdf")
            .send(badTask)
            .end((err, res) => {
              expect(res.statusCode).to.equal(404);
              done();
            });
        });
      });      
    describe("POST /api/data", () => {
      it("should create data entry", (done) => {
        request(app)
          .post("/api/data")
          .send(task)
          .end((err, res) => {
            expect(res.statusCode).to.equal(201);
            expect(res.body.title).to.equal("new data");
            task = res.body;
            done();
          });
      });
    });

});