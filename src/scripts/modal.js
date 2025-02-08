import { writeTask, writeLastTask, readLastTask } from './storage.js';

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
    if (rememberCbx.selected) writeLastTask(task);
});


