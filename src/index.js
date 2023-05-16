import './styles.css';
import addRecord from './modules/addRecord.js';

const user = document.getElementById('userName');
const score = document.getElementById('userScore');
const submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
  e.preventDefault();
  addRecord(user.value, score.value);
});
