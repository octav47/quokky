import fs from 'fs'
import http from 'https'
import { extractZip } from './extract-zip'

const downloadArchive = url => {
    fs.mkdtemp('./', (err, tempFolder) => {
        if (err) {
            throw err
        }

        console.log('Temp folder: ' + tempFolder)

        const fileName = tempFolder + '/archive.zip'

        fs.writeFile(fileName, '', err => {
            if (err) {
                throw err
            }

            const file = fs.createWriteStream(fileName)
            const request = http.get(url, response => {
                response.pipe(file)

                extractZip(fileName, error => {
                    if (error) {
                        throw error
                    }
                })

                // fs.rmdir(tempFolder, err => {
                //     if (err) {
                //         throw err
                //     }
                //
                //     console.log('done!')
                // })
            })
        })
    })
}

export {
    downloadArchive,
}
