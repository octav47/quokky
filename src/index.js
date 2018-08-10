import { downloadArchive } from './download-archive'
import { build } from './build'

const config = require(__dirname + '/../' + (process.env.name || 'dev') + '.quokky.json')

console.dir(config)

downloadArchive(config)
build(config)
