'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var processCtrlStub = {
  index: 'processCtrl.index',
  show: 'processCtrl.show',
  create: 'processCtrl.create',
  update: 'processCtrl.update',
  destroy: 'processCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var processIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './process.controller': processCtrlStub
});

describe('Process API Router:', function() {

  it('should return an express router instance', function() {
    processIndex.should.equal(routerStub);
  });

  describe('GET /api/process', function() {

    it('should route to process.controller.index', function() {
      routerStub.get
        .withArgs('/', 'processCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/process/:id', function() {

    it('should route to process.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'processCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/process', function() {

    it('should route to process.controller.create', function() {
      routerStub.post
        .withArgs('/', 'processCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/process/:id', function() {

    it('should route to process.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'processCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/process/:id', function() {

    it('should route to process.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'processCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/process/:id', function() {

    it('should route to process.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'processCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
