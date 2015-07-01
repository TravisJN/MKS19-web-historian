var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = headers = {
  "access-control-allow-origin": "*",
  "access-control-allow-methods": "GET, POST, PUT, DELETE, OPTIONS",
  "access-control-allow-headers": "content-type, accept",
  "access-control-max-age": 10, // Seconds.
  'Content-Type': "text/html"
};

exports.serveAssets = function(res, asset, callback) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)
  fs.readFile(__dirname + '/archives/sites' + asset, function (err,data) {
    if (err) {
      console.log('error', err);
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    console.log('no error!');

    callback(data);
  });
};

exports.serveIndex = function(res, callback) {
  fs.readFile(__dirname + '/public' + '/index.html', function (err,data) {
    if (err) {
      console.log('error', err);
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    callback(data);
  });
};


// As you progress, keep thinking about what helper functions you can put here!
