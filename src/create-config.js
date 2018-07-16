const fs = require('fs')

const createConfig = () => {

}

const createEmptyConfig = name => {
    if (!name) {
        throw 'name is not defined'
    }

    const config = {
        name,
        zip: '',
        ftp: {
            host: '',
            port: '',
            user: '',
            password: '',
            dist: '',
        },
    }

    fs.writeFile('./' + name + '.quokky.json', JSON.stringify(config, null, 4), error => {
        if (error) {
            throw error
        }

        console.log('config has been created: ' + name + '.quokky.json')
    })
}

createEmptyConfig(process.env.name)
