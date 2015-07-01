var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers');
var url = require('url');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  var parsedURL = url.parse(req.url);
  console.log(parsedURL);
  // console.log('siteName: ', siteName);
  if(req.url === '/'){
    httpHelpers.serveIndex(res, function(data) {
      res.writeHead(200);
      res.end(data);
    });
  } else {
    httpHelpers.serveAssets(res, parsedURL, function(data) {
      res.writeHead(200);
      res.end(data);
    });
  }
  //res.end(archive.paths.list);
};
