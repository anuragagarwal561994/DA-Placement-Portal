'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var processStudentCtrlStub = {
  index: 'processStudentCtrl.index',
  show: 'processStudentCtrl.show',
  create: 'processStudentCtrl.create',
  update: 'processStudentCtrl.update',
  destroy: 'processStudentCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var processStudentIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './process_student.controller': processStudentCtrlStub
});

describe('ProcessStudent API Router:', function() {

  it('should return an express router instance', function() {
    processStudentIndex.should.equal(routerStub);
  });

  describe('GET /api/process_students', function() {

    it('should route to processStudent.controller.index', function() {
      routerStub.get
        .withArgs('/', 'processStudentCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/process_students/:id', function() {

    it('should route to processStudent.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'processStudentCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/process_students', function() {

    it('should route to processStudent.controller.create', function() {
      routerStub.post
        .withArgs('/', 'processStudentCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/process_students/:id', function() {

    it('should route to processStudent.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'processStudentCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/process_students/:id', function() {

    it('should route to processStudent.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'processStudentCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/process_students/:id', function() {

    it('should route to processStudent.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'processStudentCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
