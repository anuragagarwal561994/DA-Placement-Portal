'use strict';

var app = require('../..');
import request from 'supertest';

var newCompanyProcess;

describe('CompanyProcess API:', function() {

  describe('GET /api/company_processs', function() {
    var companyProcesss;

    beforeEach(function(done) {
      request(app)
        .get('/api/company_processs')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          companyProcesss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      companyProcesss.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/company_processs', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/company_processs')
        .send({
          name: 'New CompanyProcess',
          info: 'This is the brand new companyProcess!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newCompanyProcess = res.body;
          done();
        });
    });

    it('should respond with the newly created companyProcess', function() {
      newCompanyProcess.name.should.equal('New CompanyProcess');
      newCompanyProcess.info.should.equal('This is the brand new companyProcess!!!');
    });

  });

  describe('GET /api/company_processs/:id', function() {
    var companyProcess;

    beforeEach(function(done) {
      request(app)
        .get('/api/company_processs/' + newCompanyProcess._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          companyProcess = res.body;
          done();
        });
    });

    afterEach(function() {
      companyProcess = {};
    });

    it('should respond with the requested companyProcess', function() {
      companyProcess.name.should.equal('New CompanyProcess');
      companyProcess.info.should.equal('This is the brand new companyProcess!!!');
    });

  });

  describe('PUT /api/company_processs/:id', function() {
    var updatedCompanyProcess;

    beforeEach(function(done) {
      request(app)
        .put('/api/company_processs/' + newCompanyProcess._id)
        .send({
          name: 'Updated CompanyProcess',
          info: 'This is the updated companyProcess!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedCompanyProcess = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedCompanyProcess = {};
    });

    it('should respond with the updated companyProcess', function() {
      updatedCompanyProcess.name.should.equal('Updated CompanyProcess');
      updatedCompanyProcess.info.should.equal('This is the updated companyProcess!!!');
    });

  });

  describe('DELETE /api/company_processs/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/company_processs/' + newCompanyProcess._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when companyProcess does not exist', function(done) {
      request(app)
        .delete('/api/company_processs/' + newCompanyProcess._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
