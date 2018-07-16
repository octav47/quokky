import extract from 'extract-zip'

const extractZip = (fileName, cb) => {
    extract(fileName, {
        dir: process.cwd(),
    }, cb)
}

export {
    extractZip,
}
