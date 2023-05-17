import './styles.css';
import addRecord from './modules/addRecord.js';
import showRecords from './modules/showRecords.js';

const user = document.getElementById('userName');
const score = document.getElementById('userScore');
const submit = document.getElementById('submit');
const refresh = document.getElementById('refresh');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  addRecord(user.value, score.value);
});

refresh.addEventListener('click', () => {
  showRecords();
  refresh.innerHTML = 'Refresh';
});
