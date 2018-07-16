import fs from 'fs'
import { downloadArchive } from './download-archive'

const config = require(__dirname + '/../' + (process.env.name || 'dev') + '.quokky.json')

console.dir(config)

downloadArchive(config.zip)

