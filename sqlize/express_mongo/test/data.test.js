'use strict';

const app = require('../app.js');
const chai = require('chai');
const request = require('supertest');

const expect = chai.expect;

describe('Data API Integration Test', async () => {

    let task = {
        name: 'new data',
        price: 4,
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

      describe('GET /products/', () => {
        it('should get all data', (done) => {
            request(app) .get('/products') .end((err, res) => {
                expect(res.statusCode).to.equal(200);
                expect(res.body).to.be.an('array').to.not.be.empty;
                //expect(res.body).to.be.empty;
                
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
    describe("POST /products/create", () => {
      it("should create data entry", (done) => {
        request(app)
          .post("/products/create")
          .send(task)
          .end((err, res) => {
            expect(res.statusCode).to.equal(200);
            done();
          });
      });
    });

});