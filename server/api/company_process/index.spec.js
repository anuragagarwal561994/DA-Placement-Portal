'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var companyProcessCtrlStub = {
  index: 'companyProcessCtrl.index',
  show: 'companyProcessCtrl.show',
  create: 'companyProcessCtrl.create',
  update: 'companyProcessCtrl.update',
  destroy: 'companyProcessCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var companyProcessIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './company_process.controller': companyProcessCtrlStub
});

describe('CompanyProcess API Router:', function() {

  it('should return an express router instance', function() {
    companyProcessIndex.should.equal(routerStub);
  });

  describe('GET /api/company_processs', function() {

    it('should route to companyProcess.controller.index', function() {
      routerStub.get
        .withArgs('/', 'companyProcessCtrl.index')
        .should.have.been.calledOnce;
    });

  });

  describe('GET /api/company_processs/:id', function() {

    it('should route to companyProcess.controller.show', function() {
      routerStub.get
        .withArgs('/:id', 'companyProcessCtrl.show')
        .should.have.been.calledOnce;
    });

  });

  describe('POST /api/company_processs', function() {

    it('should route to companyProcess.controller.create', function() {
      routerStub.post
        .withArgs('/', 'companyProcessCtrl.create')
        .should.have.been.calledOnce;
    });

  });

  describe('PUT /api/company_processs/:id', function() {

    it('should route to companyProcess.controller.update', function() {
      routerStub.put
        .withArgs('/:id', 'companyProcessCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('PATCH /api/company_processs/:id', function() {

    it('should route to companyProcess.controller.update', function() {
      routerStub.patch
        .withArgs('/:id', 'companyProcessCtrl.update')
        .should.have.been.calledOnce;
    });

  });

  describe('DELETE /api/company_processs/:id', function() {

    it('should route to companyProcess.controller.destroy', function() {
      routerStub.delete
        .withArgs('/:id', 'companyProcessCtrl.destroy')
        .should.have.been.calledOnce;
    });

  });

});
