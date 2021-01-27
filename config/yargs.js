const argv = require('yargs')
    .command('create', 'Creates a task', {
        description: {
            alias: 'd',
            demand: true
        }
    })
    .command('update', 'Updates a task', {
        description: {
            alias: 'd'
        },
        completed: {
            alias: 'c',
            default: true
        }
    })
    .command('delete', 'Deletes a task', {
        description: {
            demand: true,
            alias: 'd'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}