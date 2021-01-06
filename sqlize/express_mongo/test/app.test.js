const app = require('../app.js');
const chai = require('chai');
const request = require('supertest');

const expect = chai.expect;

// describe('App Auth Test', () => {
//     describe("GET /", () => {
//       it("Returns All Products from database", (done) => {
//         request(app)
//           .get("/products")
//           .end((err, res) => {
//             expect(res.statusCode).to.equal(200);
//             expect(res.body.message).to.equal("Welcome to the beginning of nothingness.");
//             done();
//           });
//       });
//     });
//      describe("GET /", () => {
//       it("Return Hi once user is authenticated", (done) => {
//         request(app)
//           .get("/auth")
//           .end((err, res) => {
//             expect(res.statusCode).to.equal(200);
//             expect(res.body.message).to.equal("Hi!");
//             done();
//           });
//       });
//     });
// });
