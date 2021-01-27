const fs = require('fs');

let toDoList = [];

const saveDB = () => {
    let data = JSON.stringify(toDoList)
    fs.writeFile(`bd/data.json`, data, (err) => {
        if (err) throw new Error('File could not be saved', err);
        // else resolve(`file data.json was created`)
    });
}

const loadDB = () => {
    try {
        toDoList = require('../bd/data.json')
    }
    catch (err) {
        toDoList = [];
    }
}


const create = (description) => {
    loadDB();
    const toDo = {
        description,
        completed: false
    };
    toDoList.push(toDo);
    saveDB();
    return toDo
}

const getList = () => {
    loadDB();
    return toDoList
}

const updateTask = (description, completed) => {
    loadDB();
    const index = toDoList.findIndex(task => task.description === description);
    if (index >= 0) {
        toDoList[index].completed = completed;
        saveDB();
        return true
    } else {
        return false
    }
}

const deleteTask = (description) => {
    loadDB();
    const index = toDoList.findIndex(task => task.description === description);
    if (index >= 0) {
        toDoList.splice(index, 1);
        saveDB();
        return true
    } else {
        return false
    }
}

module.exports = {
    create,
    getList,
    updateTask,
    deleteTask
}