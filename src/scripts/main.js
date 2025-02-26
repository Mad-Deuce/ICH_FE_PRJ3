import '@material/web/switch/switch.js';
import '@material/web/checkbox/checkbox.js';

import './modal.js';
import './date_bar.js';
import './task_list.js';
import './search_bar.js';
import './filter_bar.js';

import { getSearchPredicate } from './search_bar.js';
import { getFilterPredicate } from './filter_bar.js';
import { fillTaskList } from './task_list.js';
import { readTasksAsync } from './storage.js';
import { checkTask } from './modal.js';

updateTaskList();
checkTask();

export async function updateTaskList() {
    // let taskList = readTasks();
    let taskList = await readTasksAsync();

    let searchPredicate = getSearchPredicate();
    taskList = taskList.filter(searchPredicate);

    let filterPredicate = getFilterPredicate();
    taskList = taskList.filter(filterPredicate);

    taskList = taskList.sort((a, b) => new Date(a.date) - new Date(b.date));
    fillTaskList(taskList);
};