import { updateTaskList } from './main';

const filterBarElem = document.querySelector('.filter-bar');
const filterAllElem = filterBarElem.querySelector('.left');
const filterActiveElem = filterBarElem.querySelector('.middle');
const filterFinishedElem = filterBarElem.querySelector('.right');
let filterMark = 0;

filterAllElem.addEventListener('click', () => {
    filterAllElem.classList.add('filter-active');
    filterActiveElem.classList.remove('filter-active');
    filterFinishedElem.classList.remove('filter-active');
    filterMark = 0;
    updateTaskList();
});

filterActiveElem.addEventListener('click', () => {
    filterAllElem.classList.remove('filter-active');
    filterActiveElem.classList.add('filter-active');
    filterFinishedElem.classList.remove('filter-active');
    filterMark = 1;
    updateTaskList();
});

filterFinishedElem.addEventListener('click', () => {
    filterAllElem.classList.remove('filter-active');
    filterActiveElem.classList.remove('filter-active');
    filterFinishedElem.classList.add('filter-active');
    filterMark = 2;
    updateTaskList();
});

export function getFilterPredicate() {
    if (filterMark === 0) return (() => true);
    if (filterMark === 1) return (task => task.active);
    if (filterMark === 2) return (task => !task.active);
};