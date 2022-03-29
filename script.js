const cDate = document.getElementById('currentDay');
const cTime = document.getElementById('currentTime');
const saveBtns = document.querySelectorAll('.saveBtn');
const inputFields = document.querySelectorAll('.form-control');

cDate.innerText = moment().format('ddd MMM Do, YYYY');
cTime.innerText = moment().format('LT');
let currentHour = moment().hours();
console.log(currentHour);

function displayTime() {
  cTime.innerText = moment().format('LT');
}

const userInput = function (e) {
  e.preventDefault();
  input = e.currentTarget.previousElementSibling.value.trim();

  prepend =
    this.parentNode.firstChild.nextElementSibling.firstElementChild.innerText;
  console.log(prepend);
  console.log(input);
  // localStorage.setItem(prepend, JSON.stringify(input));
  localStorage.setItem(prepend, input);
};

const inputfieldColor = function () {
  for (inputField of inputFields) {
    let time = inputField.getAttribute('id').split('h')[1];
    console.log(time);

    if (currentHour > time) {
      inputField.classList.add('past');
    } else if (currentHour < time) {
      inputField.classList.add('future');
    } else {
      inputField.classList.add('present');
    }
  }
};
inputfieldColor();

const loadInputs = function () {
  // console.log(document.getElementById('9AM'));
  document.getElementById('h9').value = localStorage.getItem('09:00AM');
  document.getElementById('h10').value = localStorage.getItem('10:00AM');
  document.getElementById('h11').value = localStorage.getItem('11:00AM');
  document.getElementById('h12').value = localStorage.getItem('12:00PM');
  document.getElementById('h13').value = localStorage.getItem('01:00PM');
  document.getElementById('h14').value = localStorage.getItem('02:00PM');
  document.getElementById('h15').value = localStorage.getItem('03:00PM');
  document.getElementById('h16').value = localStorage.getItem('04:00PM');
  document.getElementById('h17').value = localStorage.getItem('05:00PM');
};

// const userInput = (e) => {
//   e.preventDefault();
//   input = e.currentTarget.previousElementSibling.value.trim();
//   // enteredInput = input.value.trim(); // this gets me the value
//   prepend = this;
//   console.log(prepend);
//   console.log(input);
// };

setInterval(displayTime, 30000);
for (const saveBtn of saveBtns) {
  saveBtn.addEventListener('click', userInput);
}
loadInputs();
