'use strict';

var app = require('../..');
import request from 'supertest';

var newEventRegistrations;

describe('EventRegistrations API:', function() {

  describe('GET /api/eventRegistrations', function() {
    var eventRegistrationss;

    beforeEach(function(done) {
      request(app)
        .get('/api/eventRegistrations')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          eventRegistrationss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      eventRegistrationss.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/eventRegistrations', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/eventRegistrations')
        .send({
          name: 'New EventRegistrations',
          info: 'This is the brand new eventRegistrations!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newEventRegistrations = res.body;
          done();
        });
    });

    it('should respond with the newly created eventRegistrations', function() {
      newEventRegistrations.name.should.equal('New EventRegistrations');
      newEventRegistrations.info.should.equal('This is the brand new eventRegistrations!!!');
    });

  });

  describe('GET /api/eventRegistrations/:id', function() {
    var eventRegistrations;

    beforeEach(function(done) {
      request(app)
        .get('/api/eventRegistrations/' + newEventRegistrations._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          eventRegistrations = res.body;
          done();
        });
    });

    afterEach(function() {
      eventRegistrations = {};
    });

    it('should respond with the requested eventRegistrations', function() {
      eventRegistrations.name.should.equal('New EventRegistrations');
      eventRegistrations.info.should.equal('This is the brand new eventRegistrations!!!');
    });

  });

  describe('PUT /api/eventRegistrations/:id', function() {
    var updatedEventRegistrations;

    beforeEach(function(done) {
      request(app)
        .put('/api/eventRegistrations/' + newEventRegistrations._id)
        .send({
          name: 'Updated EventRegistrations',
          info: 'This is the updated eventRegistrations!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedEventRegistrations = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedEventRegistrations = {};
    });

    it('should respond with the updated eventRegistrations', function() {
      updatedEventRegistrations.name.should.equal('Updated EventRegistrations');
      updatedEventRegistrations.info.should.equal('This is the updated eventRegistrations!!!');
    });

  });

  describe('DELETE /api/eventRegistrations/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/eventRegistrations/' + newEventRegistrations._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when eventRegistrations does not exist', function(done) {
      request(app)
        .delete('/api/eventRegistrations/' + newEventRegistrations._id)
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
