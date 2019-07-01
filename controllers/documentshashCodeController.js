'use strict'

var vardocumentshashCodeController = require('./documentshashCodeControllerService');

module.exports.deleteDocument = function deleteDocument(req, res, next) {
  vardocumentshashCodeController.deleteDocument(req.swagger.params, res, next);
};

module.exports.getDocumentByHash = function getDocumentByHash(req, res, next) {
  vardocumentshashCodeController.getDocumentByHash(req.swagger.params, res, next);
};