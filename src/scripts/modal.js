import { writeTask, readTasks, } from './storage.js';
import { updateTaskList } from './main';
import moment from 'moment';

const editBtn = document.querySelector('#btn-edit');
const modal = document.querySelector('#container-modal');
const addBtn = document.querySelector('#btn-add');
const cancelBtn = document.querySelector('#btn-cancel');
const descInp = document.querySelector('#inp-desc');
const dataInp = document.querySelector('#inp-date');
const rememberCbx = document.querySelector('#remember-cbx');


editBtn.addEventListener('click', () => {
    modal.classList.remove('hidden');
    editBtn.classList.add('hidden');
});

cancelBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    editBtn.classList.remove('hidden');
});


addBtn.addEventListener('click', () => {
    let task = {
        "date": dataInp.value ? dataInp.value : new Date(),
        "desc": descInp.value ? descInp.value : "do something",
        "active": true,
        "notificate": rememberCbx.selected
    };
    writeTask(task);
    updateTaskList();
});

export function checkTask() {
    let i = 1;
    let intId = setInterval(() => {
        let taskList = readTasks().filter(task => task.notificate && task.active && new Date() > new Date(task.date));

        if (i > 3) {
            clearInterval(intId);
            return;
        };

        if (taskList.length > 0) {
            let notificationTitle = 'Time to do tasks';
            let notificationBody = '';
            taskList.forEach(task => {
                notificationBody = notificationBody.concat(`${task.id} - ${task.desc} - ${moment(task.date).format("MMM D, HH:mm")}; \n`);
            });
            const notification = new Notification(notificationTitle + `. Reminder-${i}`, { body: notificationBody, silent: true });
            i++;
        };
    }, 3000);

};


