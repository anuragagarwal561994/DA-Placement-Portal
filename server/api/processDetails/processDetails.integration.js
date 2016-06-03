'use strict';

var app = require('../..');
import request from 'supertest';

var newProcessDetails;

describe('ProcessDetails API:', function() {

  describe('GET /api/processDetails', function() {
    var processDetailss;

    beforeEach(function(done) {
      request(app)
        .get('/api/processDetails')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          processDetailss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      processDetailss.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/processDetails', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/processDetails')
        .send({
          name: 'New ProcessDetails',
          info: 'This is the brand new processDetails!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newProcessDetails = res.body;
          done();
        });
    });

    it('should respond with the newly created processDetails', function() {
      newProcessDetails.name.should.equal('New ProcessDetails');
      newProcessDetails.info.should.equal('This is the brand new processDetails!!!');
    });

  });

  describe('GET /api/processDetails/:id', function() {
    var processDetails;

    beforeEach(function(done) {
      request(app)
        .get('/api/processDetails/' + newProcessDetails._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          processDetails = res.body;
          done();
        });
    });

    afterEach(function() {
      processDetails = {};
    });

    it('should respond with the requested processDetails', function() {
      processDetails.name.should.equal('New ProcessDetails');
      processDetails.info.should.equal('This is the brand new processDetails!!!');
    });

  });

  describe('PUT /api/processDetails/:id', function() {
    var updatedProcessDetails;

    beforeEach(function(done) {
      request(app)
        .put('/api/processDetails/' + newProcessDetails._id)
        .send({
          name: 'Updated ProcessDetails',
          info: 'This is the updated processDetails!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedProcessDetails = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedProcessDetails = {};
    });

    it('should respond with the updated processDetails', function() {
      updatedProcessDetails.name.should.equal('Updated ProcessDetails');
      updatedProcessDetails.info.should.equal('This is the updated processDetails!!!');
    });

  });

  describe('DELETE /api/processDetails/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/processDetails/' + newProcessDetails._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when processDetails does not exist', function(done) {
      request(app)
        .delete('/api/processDetails/' + newProcessDetails._id)
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
