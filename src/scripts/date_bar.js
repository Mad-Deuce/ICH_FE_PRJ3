import moment from 'moment';


const dayBarElem = document.querySelector('.date-bar');
const weekDayElem = dayBarElem.querySelector('h3');
const dateElem = dayBarElem.querySelector('p');


weekDayElem.innerHTML = moment().format('dddd');
dateElem.innerHTML = moment().format("MMMM Do"); 