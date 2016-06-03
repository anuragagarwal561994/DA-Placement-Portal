'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var studentOffersCtrlStub = {
  index: 'studentOffersCtrl.index',
  show: 'studentOffersCtrl.show',
  create: 'studentOffersCtrl.create',
  update: 'studentOffersCtrl.update',
  destroy: 'studentOffersCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var studentOffersIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './studentOffers.controller': studentOffersCtrlStub
});

describe('StudentOffers API Router:', function() {

  it('should return an express router instance', function() {
    studentOffersIndex.should.equal(routerStub);
  });

  describe('GET /api/studentOffers', function() {

    it('should route to studentOffers.controller.index', function() {
      routerStub.get
        .withArgs('/', 'studentOffersCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/studentOffers/:id', function() {

    it('should route to studentOffers.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'studentOffersCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/studentOffers', function() {

    it('should route to studentOffers.controller.create', function() {
      routerStub.post
        .withArgs('/', 'studentOffersCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/studentOffers/:id', function() {

    it('should route to studentOffers.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'studentOffersCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/studentOffers/:id', function() {

    it('should route to studentOffers.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'studentOffersCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/studentOffers/:id', function() {

    it('should route to studentOffers.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'studentOffersCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
