import { writeTask, writeLastTask, readLastTask, setActiveTaskById } from './storage.js';
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

    let lastTask = readLastTask();
    descInp.value = lastTask.desc ?? "";
    dataInp.value = lastTask.date;
});

cancelBtn.addEventListener('click', () => {
    modal.classList.add('hidden');
    editBtn.classList.remove('hidden');
});


addBtn.addEventListener('click', () => {
    let task = {
        "date": dataInp.value ? dataInp.value : new Date(),
        "desc": descInp.value ? descInp.value : "do something",
        "active": true
    };
    writeTask(task);
    if (rememberCbx.selected) {
        writeLastTask(task);
    }
    updateTaskList();
});



export function checkTask() {
    let i = 0;
    let intId = setInterval(() => {
        let task = readLastTask();
        if (task.active) {
            if (new Date() > new Date(task.date)) {
                const n = new Notification(`Time to do task - ${task.desc} - ${moment(task.date).format("MMM D, HH:mm")} - ${i}`);

                if (i > 3) {
                    clearInterval(intId);
                };
                i++;

            };

        };



    }, 3000);

};


