import { removeTaskById, setActiveTaskById } from './storage';
import { updateTaskList } from './main';
import moment from 'moment';

const taskListElem = document.querySelector('#task-list');
taskListElem.addEventListener('click', event => taskListEventHandler(event));

export function fillTaskList(tasks) {
    taskListElem.innerHTML = '';

    tasks.forEach(item => {
        if (item.id) {
            let taskCard = document.createElement('div');
            taskCard.innerHTML = `
                <div class="card ${item.active ? '' : 'finished'}" >
                    <div>
                        <md-checkbox class="card-cbx" touch-target="wrapper" ${item.active ? '' : 'checked'} task-id="${item.id}"></md-checkbox>
                        <div>
                            <p>${moment(item.date).format("MMM D, HH:mm")}</p>
                            <p class="desc">${item.desc}</p>
                        </div>
                    </div>
                    <span class="material-symbols-outlined card-remove" task-id="${item.id}"> delete </span>
                </div>
            `;
            taskListElem.appendChild(taskCard);
        };
    });
};

export function taskListEventHandler(event) {

    let targetElem = event.target;
    if (!targetElem.getAttribute('task-id')) return;

    let taskId = targetElem.getAttribute('task-id');
    let cl = Array.from(targetElem.classList);

    if (cl.some(i => i === 'card-remove')) {
        removeTaskById(taskId);
    };

    if (cl.some(i => i === 'card-cbx')) {
        setActiveTaskById(taskId, targetElem.checked);
    };
    updateTaskList();
};

