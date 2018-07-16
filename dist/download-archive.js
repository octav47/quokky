'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.downloadArchive = undefined;

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _https = require('https');

var _https2 = _interopRequireDefault(_https);

var _extractZip = require('./extract-zip');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var downloadArchive = function downloadArchive(url) {
    _fs2.default.mkdtemp('./', function (err, tempFolder) {
        if (err) {
            throw err;
        }

        console.log('Temp folder: ' + tempFolder);

        var fileName = tempFolder + '/archive.zip';

        _fs2.default.writeFile(fileName, '', function (err) {
            if (err) {
                throw err;
            }

            var file = _fs2.default.createWriteStream(fileName);
            var request = _https2.default.get(url, function (response) {
                response.pipe(file);

                (0, _extractZip.extractZip)(fileName, function (error) {
                    if (error) {
                        throw error;
                    }
                });

                // fs.rmdir(tempFolder, err => {
                //     if (err) {
                //         throw err
                //     }
                //
                //     console.log('done!')
                // })
            });
        });
    });
};

exports.downloadArchive = downloadArchive;