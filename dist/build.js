'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.build = undefined;

var _shelljs = require('shelljs');

var _shelljs2 = _interopRequireDefault(_shelljs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var build = function build() {
    _shelljs2.default.echo('building...');

    _shelljs2.default.exec('npm install');
    _shelljs2.default.exec('npm run build');

    _shelljs2.default.echo('...done!');
};

exports.build = build;