import '@material/web/switch/switch.js';
import '@material/web/checkbox/checkbox.js';

import './modal.js';
import './date_bar.js';
import './task_list.js';
import './search_bar.js';
import './filter_bar.js';

import { getSearchPredicate } from './search_bar.js'
import { getFilterPredicate } from './filter_bar.js'
import { fillTaskList } from './task_list.js'
import { readTasks } from './storage.js'

updateTaskList();

export function updateTaskList() {
    console.log('update');

    let taskList = readTasks();

    let searchPredicate = getSearchPredicate();
    taskList = taskList.filter(searchPredicate);

    let filterPredicate = getFilterPredicate();
    taskList = taskList.filter(filterPredicate);

    fillTaskList(taskList);
};