import fs from 'fs'
import shell from 'shelljs'

const downloadArchive = ({ name, git }) => {
    const { url, branch } = git

    shell.echo('downloading...')

    shell.mkdir(name)
    shell.cd(name)
    shell.exec(`git clone ${url} .`)
    shell.exec(`git checkout ${branch}`)

    shell.echo('...done!')
}

export {
    downloadArchive,
}
