let fixedResult = Math.random() < 0.5 ? 'Big' : 'Small';
let canShowResult = true;
let periodNumber = null;

function validatePeriod() {
  const periodInput = document.getElementById('period');
  if (periodInput.value.length > 3) {
    periodInput.value = periodInput.value.slice(0, 3);
  }
}

function connect() {
  const uid = document.getElementById('uid').value;
  const period = document.getElementById('period').value;

  if (!uid || !period || period.length !== 3) {
    alert('Please enter a valid UID and a 3-digit Period Number.');
    return;
  }

  periodNumber = parseInt(period);

  document.getElementById('mainContainer').style.display = 'none';
  document.getElementById('resultContainer').style.display = 'block';
  document.getElementById('periodDisplay').innerText = `Period Number: ${periodNumber}`;
  document.getElementById('aiStatus').innerText = 'AI is connected';
  document.getElementById('resultBox').style.display = 'none';

  setInterval(() => {
    periodNumber++;
    const formattedPeriod = periodNumber.toString().padStart(3, '0');
    document.getElementById('periodDisplay').innerText = `Period Number: ${formattedPeriod}`;
    fixedResult = Math.random() < 0.5 ? 'Big' : 'Small';
    canShowResult = true;
    document.getElementById('resultBox').style.display = 'none';
  }, 15000);
}

function getResult() {
  const resultBox = document.getElementById('resultBox');

  if (!canShowResult) {
    resultBox.innerText = `Result: ${fixedResult}`;
    resultBox.classList.add('animate');
    resultBox.style.display = 'block';
    return;
  }

  resultBox.innerText = `Result: ${fixedResult}`;
  resultBox.classList.add('animate');
  resultBox.style.display = 'block';
  canShowResult = false;
}

document.querySelector('.result-btn').addEventListener('click', getResult);
