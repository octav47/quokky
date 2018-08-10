'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.extractZip = undefined;

var _extractZip = require('extract-zip');

var _extractZip2 = _interopRequireDefault(_extractZip);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var extractZip = function extractZip(fileName, cb) {
    var dir = process.cwd();

    console.log(dir);

    (0, _extractZip2.default)(fileName, {
        dir: dir
    }, cb);
};

exports.extractZip = extractZip;