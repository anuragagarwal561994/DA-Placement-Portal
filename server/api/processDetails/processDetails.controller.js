/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /api/processDetails              ->  index
 * POST    /api/processDetails              ->  create
 * GET     /api/processDetails/:id          ->  show
 * PUT     /api/processDetails/:id          ->  update
 * DELETE  /api/processDetails/:id          ->  destroy
 */

'use strict';

import _ from 'lodash';
import ProcessDetails from './processDetails.model';

function respondWithResult(res, statusCode) {
  statusCode = statusCode || 200;
  return function(entity) {
    if (entity) {
      res.status(statusCode).json(entity);
    }
  };
}

function saveUpdates(updates) {
  return function(entity) {
    var updated = _.merge(entity, updates);
    return updated.save()
      .then(updated => {
        return updated;
      });
  };
}

function removeEntity(res) {
  return function(entity) {
    if (entity) {
      return entity.remove()
        .then(() => {
          res.status(204).end();
        });
    }
  };
}

function handleEntityNotFound(res) {
  return function(entity) {
    if (!entity) {
      res.status(404).end();
      return null;
    }
    return entity;
  };
}

function handleError(res, statusCode) {
  statusCode = statusCode || 500;
  return function(err) {
    res.status(statusCode).send(err);
  };
}

// Gets a list of ProcessDetailss
export function index(req, res) {
  return ProcessDetails.find().exec()
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Gets a single ProcessDetails from the DB
export function show(req, res) {
  return ProcessDetails.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Creates a new ProcessDetails in the DB
export function create(req, res) {
  return ProcessDetails.create(req.body)
    .then(respondWithResult(res, 201))
    .catch(handleError(res));
}

// Updates an existing ProcessDetails in the DB
export function update(req, res) {
  if (req.body._id) {
    delete req.body._id;
  }
  return ProcessDetails.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(saveUpdates(req.body))
    .then(respondWithResult(res))
    .catch(handleError(res));
}

// Deletes a ProcessDetails from the DB
export function destroy(req, res) {
  return ProcessDetails.findById(req.params.id).exec()
    .then(handleEntityNotFound(res))
    .then(removeEntity(res))
    .catch(handleError(res));
}
