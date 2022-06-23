import './styles/index.css';

const scoreList = document.getElementById('scores');
const form = document.getElementById('myForm');
const userInput = document.getElementById('name');
const scoreInput = document.getElementById('score');
const refresh = document.getElementById('refresh');
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/kwEoBSUFJYDsJlAiGdaN/scores/';

// input new user and score
const addScoreToApi = () => {
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      user: `${userInput.value}`,
      score: `${scoreInput.value}`,
    }),
  });
};
// get the latest 10 scores
const getScore = () => {
  fetch(url).then(async (res) => {
    const data = await res.json();
    const resultArray = data.result;
    return resultArray;
  })
    .then((resultArray) => {
      for (let i = 0; i < resultArray.length; i += 1) {
        const newScore = document.createElement('li');
        newScore.textContent = `${resultArray[i].user}:       ${resultArray[i].score}`;
        scoreList.appendChild(newScore);
      }
    });
};

// get scores from api on page load
getScore();

// Adding new score event
form.addEventListener('submit', (e) => {
  e.preventDefault();
  addScoreToApi();
  userInput.value = '';
  scoreInput.value = '';
});

// get the scores from api when click on refresh
refresh.addEventListener('click', () => {
  scoreList.innerHTML = '';
  getScore();
});