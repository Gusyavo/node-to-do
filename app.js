const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');

const command = argv._[0];

switch (command) {

    case 'create':
        const task = toDo.create(argv.description)
        console.log(task);
        break;

    case 'list':
        const taskList = toDo.getList();
        for (let task of taskList) {
            console.log('=======================');
            console.log(task.description);
            console.log('Status :', task.completed);
            console.log('=======================');
        }
        break;

    case 'update':
        const updated = toDo.updateTask(argv.description, argv.completed);
        console.log(updated);
        break;

    case 'delete':
        const deleted = toDo.deleteTask(argv.description);
        console.log(deleted);
        break;

    default:
        console.log('Command not recognized');
}