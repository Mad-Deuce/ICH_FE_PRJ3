const storage = localStorage;

const KEY = 'todo_list';
const TASKS_KEY = 'tasks';
const SEQ_KEY = 'seq';

function readAll() {
    return JSON.parse(storage.getItem(KEY)) ?? {};
};
export function readTasks() {
    let res = JSON.parse(storage.getItem(KEY))[TASKS_KEY];
    return Array.isArray(res) ? res : [];
};
export function readTasksAsync() {

    return new Promise((resolve, reject) => {
        resolve(JSON.parse(storage.getItem(KEY))[TASKS_KEY]);
    });


    // let res = JSON.parse(storage.getItem(KEY))[TASKS_KEY];
    // return Array.isArray(res) ? res : [];
};



function writeAll(v) {
    storage.setItem(KEY, JSON.stringify(v));
};
export function writeTask(task) {
    let todoList = readAll();
    let seq = todoList[SEQ_KEY] ?? 0;
    task.id = seq + 1;
    todoList[SEQ_KEY] = seq + 1;
    let tasks = Array.isArray(todoList[TASKS_KEY]) ? todoList[TASKS_KEY] : [];
    tasks.push(task);
    todoList[TASKS_KEY] = tasks;
    writeAll(todoList);
};

export function removeTaskById(id) {
    let todoList = readAll();
    let tasks = Array.isArray(todoList[TASKS_KEY]) ? todoList[TASKS_KEY] : [];
    tasks = tasks.filter(item => item.id != id);
    todoList[TASKS_KEY] = tasks;
    writeAll(todoList);
}

export function setActiveTaskById(id, isActive) {
    let todoList = readAll();
    let tasks = Array.isArray(todoList[TASKS_KEY]) ? todoList[TASKS_KEY] : [];
    let task = tasks.find(item => item.id == id);
    task.active = isActive;
    todoList[TASKS_KEY] = tasks;
    writeAll(todoList);
}


