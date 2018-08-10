import extract from 'extract-zip'

const extractZip = (fileName, cb) => {
    const dir = process.cwd()

    console.log(dir)

    extract(fileName, {
        dir,
    }, cb)
}

export {
    extractZip,
}
