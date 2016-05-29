'use strict';

var app = require('../..');
import request from 'supertest';

var newProcessStudent;

describe('ProcessStudent API:', function() {

  describe('GET /api/process_students', function() {
    var processStudents;

    beforeEach(function(done) {
      request(app)
        .get('/api/process_students')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          processStudents = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      processStudents.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/process_students', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/process_students')
        .send({
          name: 'New ProcessStudent',
          info: 'This is the brand new processStudent!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newProcessStudent = res.body;
          done();
        });
    });

    it('should respond with the newly created processStudent', function() {
      newProcessStudent.name.should.equal('New ProcessStudent');
      newProcessStudent.info.should.equal('This is the brand new processStudent!!!');
    });

  });

  describe('GET /api/process_students/:id', function() {
    var processStudent;

    beforeEach(function(done) {
      request(app)
        .get('/api/process_students/' + newProcessStudent._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          processStudent = res.body;
          done();
        });
    });

    afterEach(function() {
      processStudent = {};
    });

    it('should respond with the requested processStudent', function() {
      processStudent.name.should.equal('New ProcessStudent');
      processStudent.info.should.equal('This is the brand new processStudent!!!');
    });

  });

  describe('PUT /api/process_students/:id', function() {
    var updatedProcessStudent;

    beforeEach(function(done) {
      request(app)
        .put('/api/process_students/' + newProcessStudent._id)
        .send({
          name: 'Updated ProcessStudent',
          info: 'This is the updated processStudent!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedProcessStudent = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedProcessStudent = {};
    });

    it('should respond with the updated processStudent', function() {
      updatedProcessStudent.name.should.equal('Updated ProcessStudent');
      updatedProcessStudent.info.should.equal('This is the updated processStudent!!!');
    });

  });

  describe('DELETE /api/process_students/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/process_students/' + newProcessStudent._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when processStudent does not exist', function(done) {
      request(app)
        .delete('/api/process_students/' + newProcessStudent._id)
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
