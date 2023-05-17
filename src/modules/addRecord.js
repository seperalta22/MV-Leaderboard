const error = document.getElementById('errorMsg');

const addRecord = async (user, score) => {
  const response = await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YQaZU7sBVIjS4jZ8Cmmf/scores/',
    {
      method: 'POST',
      body: JSON.stringify({
        user,
        score,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  );
  if (response.status !== 201) {
    error.innerHTML = 'Something went wrong';
    setTimeout(() => {
      error.innerHTML = '';
    }, 3000);
  }
  document.getElementById('userName').value = '';
  document.getElementById('userScore').value = '';
};

export default addRecord;
