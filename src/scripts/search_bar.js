import { readTasks } from './storage.js';
import { fillTaskList } from './task_list.js';

const searchBarElem = document.querySelector('.search-bar');
const searchInpElem = searchBarElem.querySelector('input');
const searchBtnElem = searchBarElem.querySelector('span');


searchBtnElem.addEventListener('click', () => {
    let taskList = readTasks();
    taskList = taskList.filter(item => item.desc.includes(searchInpElem.value));
    fillTaskList(taskList);
});

searchInpElem.addEventListener('input', () => {
    let taskList = readTasks();
    taskList = taskList.filter(item => item.desc.includes(searchInpElem.value));
    fillTaskList(taskList);
});