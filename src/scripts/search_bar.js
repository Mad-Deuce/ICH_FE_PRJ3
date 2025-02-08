import {updateTaskList} from './main.js'

const searchBarElem = document.querySelector('.search-bar');
const searchInpElem = searchBarElem.querySelector('input');
const searchBtnElem = searchBarElem.querySelector('span');


searchBtnElem.addEventListener('click', () => {
    updateTaskList();
});

searchInpElem.addEventListener('input', () => {
    updateTaskList();
});

export function getSearchPredicate(){
    const searchBarElem = document.querySelector('.search-bar');
    const searchInpElem = searchBarElem.querySelector('input');
    return task => task.desc.includes(searchInpElem.value);
};