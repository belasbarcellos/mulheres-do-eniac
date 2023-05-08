const projectName = 'tribute-page';

const quizForm = document.getElementById('quiz-form');
const quizResult = document.getElementById('quiz-result');

quizForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const answers = ['b', 'b', 'b', 'b', 'a'];
  let score = 0;

  for (let i = 1; i <= 5; i++) {
    const answer = quizForm[`question${i}`].value;
    if (answer === answers[i - 1]) {
      score++;
    }
  }

  const percentage = (score / 5) * 100;

  quizResult.innerHTML = `
    <h2>Você acertou ${score} de 5 perguntas.</h2>
    <p>Porcentagem de acertos: ${percentage}%</p>
    `;
    });
