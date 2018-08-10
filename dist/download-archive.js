'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.downloadArchive = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var downloadArchive = function downloadArchive(_ref) {
    var name = _ref.name,
        git = _ref.git;
    var url = git.url,
        branch = git.branch;


    _shelljs2.default.echo('downloading...');

    _shelljs2.default.mkdir(name);
    _shelljs2.default.cd(name);
    _shelljs2.default.exec('git clone ' + url + ' .');
    _shelljs2.default.exec('git checkout ' + branch);

    _shelljs2.default.echo('...done!');
};

exports.downloadArchive = downloadArchive;