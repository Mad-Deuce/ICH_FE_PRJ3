import { readTasks } from './storage'

let tasks = readTasks();
fillTaskList(tasks);

export function fillTaskList(tasks) {

    const taskListElem = document.querySelector('#task-list');
    taskListElem.innerHTML = '';

    tasks.forEach(item => {
        let taskCard = document.createElement('div');
        taskCard.innerHTML = `
            <div class="card ${item.active ? '' : 'finished'}">
                <div>
                    <md-checkbox touch-target="wrapper" ${item.active ? '' : 'checked'}></md-checkbox>
                    <div>
                        <p>${item.date}</p>
                        <p>${item.desc}</p>
                    </div>
                </div>
                <button>
                    <span class="material-symbols-outlined"> delete </span>
                </button>
            </div>
        `;
        taskListElem.appendChild(taskCard);
    });
}

