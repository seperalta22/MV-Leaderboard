const scores = document.getElementById('scores');

const showRecords = async () => {
	const response = await fetch(
		'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YQaZU7sBVIjS4jZ8Cmmf/scores/'
	);
	const data = await response.json();
	const sortedData = data.result.sort((a, b) => b.score - a.score);
	scores.innerHTML = '';
	sortedData.forEach((record) => {
		const li = document.createElement('li');
		li.classList.add('score');
		li.innerHTML = `<span class="name">${record.user}</span>: <span class="userScore">${record.score}</span>`;
		scores.appendChild(li);
	});
};

export default showRecords;
