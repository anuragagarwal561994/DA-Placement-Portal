'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var committeeCtrlStub = {
  index: 'committeeCtrl.index',
  show: 'committeeCtrl.show',
  create: 'committeeCtrl.create',
  update: 'committeeCtrl.update',
  destroy: 'committeeCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var committeeIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './committee.controller': committeeCtrlStub
});

describe('Committee API Router:', function() {

  it('should return an express router instance', function() {
    committeeIndex.should.equal(routerStub);
  });

  describe('GET /api/committee', function() {

    it('should route to committee.controller.index', function() {
      routerStub.get
        .withArgs('/', 'committeeCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/committee/:id', function() {

    it('should route to committee.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'committeeCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/committee', function() {

    it('should route to committee.controller.create', function() {
      routerStub.post
        .withArgs('/', 'committeeCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/committee/:id', function() {

    it('should route to committee.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'committeeCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/committee/:id', function() {

    it('should route to committee.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'committeeCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/committee/:id', function() {

    it('should route to committee.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'committeeCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
