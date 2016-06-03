'use strict';

var app = require('../..');
import request from 'supertest';

var newCommittee;

describe('Committee API:', function() {

  describe('GET /api/committee', function() {
    var committees;

    beforeEach(function(done) {
      request(app)
        .get('/api/committee')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          committees = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      committees.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/committee', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/committee')
        .send({
          name: 'New Committee',
          info: 'This is the brand new committee!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newCommittee = res.body;
          done();
        });
    });

    it('should respond with the newly created committee', function() {
      newCommittee.name.should.equal('New Committee');
      newCommittee.info.should.equal('This is the brand new committee!!!');
    });

  });

  describe('GET /api/committee/:id', function() {
    var committee;

    beforeEach(function(done) {
      request(app)
        .get('/api/committee/' + newCommittee._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          committee = res.body;
          done();
        });
    });

    afterEach(function() {
      committee = {};
    });

    it('should respond with the requested committee', function() {
      committee.name.should.equal('New Committee');
      committee.info.should.equal('This is the brand new committee!!!');
    });

  });

  describe('PUT /api/committee/:id', function() {
    var updatedCommittee;

    beforeEach(function(done) {
      request(app)
        .put('/api/committee/' + newCommittee._id)
        .send({
          name: 'Updated Committee',
          info: 'This is the updated committee!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedCommittee = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedCommittee = {};
    });

    it('should respond with the updated committee', function() {
      updatedCommittee.name.should.equal('Updated Committee');
      updatedCommittee.info.should.equal('This is the updated committee!!!');
    });

  });

  describe('DELETE /api/committee/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/committee/' + newCommittee._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when committee does not exist', function(done) {
      request(app)
        .delete('/api/committee/' + newCommittee._id)
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
