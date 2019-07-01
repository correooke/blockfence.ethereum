'use strict'

module.exports.deleteDocument = function deleteDocument(req, res, next) {
  res.send({
    message: 'This is the mockup controller for deleteDocument'
  });
};

module.exports.getDocumentByHash = function getDocumentByHash(req, res, next) {
  res.send({
    message: 'This is the mockup controller for getDocumentByHash'
  });
};