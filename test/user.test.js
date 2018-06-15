let mongoose = require("mongoose");
const User = require('../api/models/User')


let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();;

chai.use(chaiHttp);

describe('GET /api', () => {
  // create test
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

  //show test
  it('should show user', (done) => {
    chai.request(server)
      .get('/api/show')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      })
  })

  //update test
  it('should update user', (done) => {
    const result = '{"1":{"name":"Arnaud","age":30,"gender":"male"}}';
    const payload = {'name': 'Arnaud'};
    chai.request(server)
      .put('/api/update/')
      .send(payload)
      .end((err, res) => {
        //res.should.have.status(200);
        //res.text.should.be.eql(result);
        done();
      })
  })
  
  //delete test
  it('should delete user', (done) => {
    const payload = {'name': 'tutu','age': 45,'gender': 'male'};
    chai.request(server)
      .delete('/api/delete')
      .end((err, res) => {
        //res.should.have.status(200);
        done();
      })
  })

  //search test
  it('should search user', (done) => {
    chai.request(server)
      .get('/api/search')
      .end((err, res) => {
        //res.should.have.status(200);
        done();
      })
  })
})


