const storage = localStorage;

const KEY = 'todo_list';
const TASKS_KEY = 'tasks';
const LAST_TASK_KEY = 'last_task';

function readAll() {
    return JSON.parse(storage.getItem(KEY)) ?? {};
};
function readTasks() {
    let res = JSON.parse(storage.getItem(KEY)[TASKS_KEY]);
    return Array.isArray(res) ? res : [];
};
export function readLastTask() {
    return readAll()[LAST_TASK_KEY] ?? {};
};

function writeAll(v) {
    storage.setItem(KEY, JSON.stringify(v));
};
export function writeTask(task) {
    let todoList = readAll();
    let tasks = Array.isArray(todoList[TASKS_KEY]) ? todoList[TASKS_KEY] : [];
    tasks.push(task);
    todoList[TASKS_KEY] = tasks;
    writeAll(todoList);
};
export function writeLastTask(lastTask) {
    let todoList = readAll();
    todoList[LAST_TASK_KEY] = lastTask;
    writeAll(todoList);
};


