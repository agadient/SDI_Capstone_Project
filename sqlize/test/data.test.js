'use strict';

const app = require('../bin/www.js');
const chai = require('chai');
const request = require('supertest');

const expect = chai.expect;

describe('Data API Integration Test', () => {
    let task = {
        title: 'new data'
    };
    let badTask = {
        name: 'new data'
    };
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
    describe("POST /api/data", () => {
      it("should return 400 error", (done) => {
        request(app)
          .post("/api/data")
          .send(badTask)
          .end((err, res) => {
            expect(res.statusCode).to.equal(400);
            done();
          });
      });
    });
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
    
});