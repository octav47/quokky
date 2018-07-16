'use strict';

var fs = require('fs');

var createConfig = function createConfig() {};

var createEmptyConfig = function createEmptyConfig(name) {
    if (!name) {
        throw 'name is not defined';
    }

    var config = {
        name: name,
        zip: '',
        ftp: {
            host: '',
            port: '',
            user: '',
            password: '',
            dist: ''
        }
    };

    fs.writeFile('./' + name + '.quokky.json', JSON.stringify(config, null, 4), function (error) {
        if (error) {
            throw error;
        }

        console.log('config has been created: ' + name + '.quokky.json');
    });
};

createEmptyConfig(process.env.name);