'use strict'

var vardocumentsController = require('./documentsControllerService');

module.exports.addDocument = function addDocument(req, res, next) {
  vardocumentsController.addDocument(req.swagger.params, res, next);
};