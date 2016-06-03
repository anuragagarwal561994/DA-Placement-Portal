'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var eventRegistrationsCtrlStub = {
  index: 'eventRegistrationsCtrl.index',
  show: 'eventRegistrationsCtrl.show',
  create: 'eventRegistrationsCtrl.create',
  update: 'eventRegistrationsCtrl.update',
  destroy: 'eventRegistrationsCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var eventRegistrationsIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './eventRegistrations.controller': eventRegistrationsCtrlStub
});

describe('EventRegistrations API Router:', function() {

  it('should return an express router instance', function() {
    eventRegistrationsIndex.should.equal(routerStub);
  });

  describe('GET /api/eventRegistrations', function() {

    it('should route to eventRegistrations.controller.index', function() {
      routerStub.get
        .withArgs('/', 'eventRegistrationsCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/eventRegistrations/:id', function() {

    it('should route to eventRegistrations.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'eventRegistrationsCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/eventRegistrations', function() {

    it('should route to eventRegistrations.controller.create', function() {
      routerStub.post
        .withArgs('/', 'eventRegistrationsCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/eventRegistrations/:id', function() {

    it('should route to eventRegistrations.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'eventRegistrationsCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/eventRegistrations/:id', function() {

    it('should route to eventRegistrations.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'eventRegistrationsCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/eventRegistrations/:id', function() {

    it('should route to eventRegistrations.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'eventRegistrationsCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
