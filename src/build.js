import shell from 'shelljs'

const build = () => {
    shell.echo('building...')

    shell.exec('npm install')
    shell.exec('npm run build')

    shell.echo('...done!')
}

export {
    build,
}
