'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var officerCtrlStub = {
  index: 'officerCtrl.index',
  show: 'officerCtrl.show',
  create: 'officerCtrl.create',
  update: 'officerCtrl.update',
  destroy: 'officerCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var officerIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './officer.controller': officerCtrlStub
});

describe('Officer API Router:', function() {

  it('should return an express router instance', function() {
    officerIndex.should.equal(routerStub);
  });

  describe('GET /api/officer', function() {

    it('should route to officer.controller.index', function() {
      routerStub.get
        .withArgs('/', 'officerCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/officer/:id', function() {

    it('should route to officer.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'officerCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/officer', function() {

    it('should route to officer.controller.create', function() {
      routerStub.post
        .withArgs('/', 'officerCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/officer/:id', function() {

    it('should route to officer.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'officerCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/officer/:id', function() {

    it('should route to officer.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'officerCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/officer/:id', function() {

    it('should route to officer.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'officerCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
