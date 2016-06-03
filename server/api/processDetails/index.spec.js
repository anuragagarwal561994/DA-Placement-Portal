'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var processDetailsCtrlStub = {
  index: 'processDetailsCtrl.index',
  show: 'processDetailsCtrl.show',
  create: 'processDetailsCtrl.create',
  update: 'processDetailsCtrl.update',
  destroy: 'processDetailsCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var processDetailsIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './processDetails.controller': processDetailsCtrlStub
});

describe('ProcessDetails API Router:', function() {

  it('should return an express router instance', function() {
    processDetailsIndex.should.equal(routerStub);
  });

  describe('GET /api/processDetails', function() {

    it('should route to processDetails.controller.index', function() {
      routerStub.get
        .withArgs('/', 'processDetailsCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/processDetails/:id', function() {

    it('should route to processDetails.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'processDetailsCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/processDetails', function() {

    it('should route to processDetails.controller.create', function() {
      routerStub.post
        .withArgs('/', 'processDetailsCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/processDetails/:id', function() {

    it('should route to processDetails.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'processDetailsCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/processDetails/:id', function() {

    it('should route to processDetails.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'processDetailsCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/processDetails/:id', function() {

    it('should route to processDetails.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'processDetailsCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
