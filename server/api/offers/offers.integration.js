'use strict';

var app = require('../..');
import request from 'supertest';

var newOffers;

describe('Offers API:', function() {

  describe('GET /api/offers', function() {
    var offerss;

    beforeEach(function(done) {
      request(app)
        .get('/api/offers')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          offerss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      offerss.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/offers', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/offers')
        .send({
          name: 'New Offers',
          info: 'This is the brand new offers!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newOffers = res.body;
          done();
        });
    });

    it('should respond with the newly created offers', function() {
      newOffers.name.should.equal('New Offers');
      newOffers.info.should.equal('This is the brand new offers!!!');
    });

  });

  describe('GET /api/offers/:id', function() {
    var offers;

    beforeEach(function(done) {
      request(app)
        .get('/api/offers/' + newOffers._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          offers = res.body;
          done();
        });
    });

    afterEach(function() {
      offers = {};
    });

    it('should respond with the requested offers', function() {
      offers.name.should.equal('New Offers');
      offers.info.should.equal('This is the brand new offers!!!');
    });

  });

  describe('PUT /api/offers/:id', function() {
    var updatedOffers;

    beforeEach(function(done) {
      request(app)
        .put('/api/offers/' + newOffers._id)
        .send({
          name: 'Updated Offers',
          info: 'This is the updated offers!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedOffers = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedOffers = {};
    });

    it('should respond with the updated offers', function() {
      updatedOffers.name.should.equal('Updated Offers');
      updatedOffers.info.should.equal('This is the updated offers!!!');
    });

  });

  describe('DELETE /api/offers/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/offers/' + newOffers._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when offers does not exist', function(done) {
      request(app)
        .delete('/api/offers/' + newOffers._id)
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
