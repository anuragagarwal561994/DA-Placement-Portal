'use strict';

var app = require('../..');
import request from 'supertest';

var newStudentOffers;

describe('StudentOffers API:', function() {

  describe('GET /api/studentOffers', function() {
    var studentOfferss;

    beforeEach(function(done) {
      request(app)
        .get('/api/studentOffers')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          studentOfferss = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      studentOfferss.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/studentOffers', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/studentOffers')
        .send({
          name: 'New StudentOffers',
          info: 'This is the brand new studentOffers!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newStudentOffers = res.body;
          done();
        });
    });

    it('should respond with the newly created studentOffers', function() {
      newStudentOffers.name.should.equal('New StudentOffers');
      newStudentOffers.info.should.equal('This is the brand new studentOffers!!!');
    });

  });

  describe('GET /api/studentOffers/:id', function() {
    var studentOffers;

    beforeEach(function(done) {
      request(app)
        .get('/api/studentOffers/' + newStudentOffers._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          studentOffers = res.body;
          done();
        });
    });

    afterEach(function() {
      studentOffers = {};
    });

    it('should respond with the requested studentOffers', function() {
      studentOffers.name.should.equal('New StudentOffers');
      studentOffers.info.should.equal('This is the brand new studentOffers!!!');
    });

  });

  describe('PUT /api/studentOffers/:id', function() {
    var updatedStudentOffers;

    beforeEach(function(done) {
      request(app)
        .put('/api/studentOffers/' + newStudentOffers._id)
        .send({
          name: 'Updated StudentOffers',
          info: 'This is the updated studentOffers!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedStudentOffers = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedStudentOffers = {};
    });

    it('should respond with the updated studentOffers', function() {
      updatedStudentOffers.name.should.equal('Updated StudentOffers');
      updatedStudentOffers.info.should.equal('This is the updated studentOffers!!!');
    });

  });

  describe('DELETE /api/studentOffers/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/studentOffers/' + newStudentOffers._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when studentOffers does not exist', function(done) {
      request(app)
        .delete('/api/studentOffers/' + newStudentOffers._id)
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
