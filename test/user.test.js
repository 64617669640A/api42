let mongoose = require("mongoose");
const User = require('../api/models/User')


let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();;

chai.use(chaiHttp);

describe('GET /api', () => {
  it('should create a new user', (done) => {
    const payload = {'name': 'tutu','age': 45,'gender': 'male'};
    chai.request(server)
      .post('/api/create')
      .send(payload)
      .end((err, res) => {
        res.should.have.status(200);
        done();
      })
  })
})
