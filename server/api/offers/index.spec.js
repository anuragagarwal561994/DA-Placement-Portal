'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var offersCtrlStub = {
  index: 'offersCtrl.index',
  show: 'offersCtrl.show',
  create: 'offersCtrl.create',
  update: 'offersCtrl.update',
  destroy: 'offersCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var offersIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './offers.controller': offersCtrlStub
});

describe('Offers API Router:', function() {

  it('should return an express router instance', function() {
    offersIndex.should.equal(routerStub);
  });

  describe('GET /api/offers', function() {

    it('should route to offers.controller.index', function() {
      routerStub.get
        .withArgs('/', 'offersCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/offers/:id', function() {

    it('should route to offers.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'offersCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/offers', function() {

    it('should route to offers.controller.create', function() {
      routerStub.post
        .withArgs('/', 'offersCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/offers/:id', function() {

    it('should route to offers.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'offersCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/offers/:id', function() {

    it('should route to offers.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'offersCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/offers/:id', function() {

    it('should route to offers.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'offersCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
