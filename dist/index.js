'use strict';

var _downloadArchive = require('./download-archive');

var _build = require('./build');

var config = require(__dirname + '/../' + (process.env.name || 'dev') + '.quokky.json');

console.dir(config);

(0, _downloadArchive.downloadArchive)(config);
(0, _build.build)(config);