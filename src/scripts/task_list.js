import { removeTaskById, setActiveTaskById } from './storage';
import { updateTaskList } from './main';
import moment from 'moment';
import _, { map } from 'underscore';

const taskListElem = document.querySelector('#task-list');
taskListElem.addEventListener('click', event => taskListEventHandler(event));


// Deprecate function
export function fillTaskList2(tasks) {
    taskListElem.innerHTML = '';

    tasks.forEach(item => {
        if (item.id) {
            let taskCard = document.createElement('div');
            taskCard.innerHTML = `
                <div class="card ${item.active ? '' : 'finished'}" >
                    <div>
                        <md-checkbox class="card-cbx" touch-target="wrapper" ${item.active ? '' : 'checked'} task-id="${item.id}"></md-checkbox>
                        <div>
                            <p>${moment(item.date).format("MMM D, hh:mm")}</p>
                            <p class="desc">${item.desc}</p>
                        </div>
                    </div>
                    <span class="material-symbols-outlined card-remove" task-id="${item.id}"> delete </span>
                </div>
            `;
            taskListElem.appendChild(taskCard);
        }
    });
};


export function fillTaskList(tasks) {
    tasks.map(item => item.date = moment(item.date).format("MMM D, hh:mm"));
    tasks.map(item => item.active = item.active ? 'card' : 'card finished');
    tasks.map(item => item.checked = item.active ? 'checked' : '');
    const wrap = {};
    wrap.tasks = tasks;

    console.log(wrap);
    

    const template = _.template(document.querySelector('#template-task').innerHTML);
    const structure = template(wrap);
    taskListElem.innerHTML = structure;
};



function taskListEventHandler(event) {

    let targetElem = event.target;
    console.log(targetElem.checked);
    console.log(targetElem);

    if (!targetElem.getAttribute('task-id')) return;

    let taskId = targetElem.getAttribute('task-id');
    let cl = Array.from(targetElem.classList);

    if (cl.some(i => i === 'card-remove')) {
        removeTaskById(taskId);
    };

    if (cl.some(i => i === 'card-cbx')) {
        console.log(taskId);

        setActiveTaskById(taskId, targetElem.checked);
    };
    updateTaskList();
};



