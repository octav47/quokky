'use strict';

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _downloadArchive = require('./download-archive');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = require(__dirname + '/../' + (process.env.name || 'dev') + '.quokky.json');

console.dir(config);

(0, _downloadArchive.downloadArchive)(config.zip);