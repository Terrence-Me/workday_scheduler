const cDate = document.getElementById('currentDay');
const cTime = document.getElementById('currentTime');
const saveBtns = document.querySelectorAll('.saveBtn');

cDate.innerText = moment().format('ddd MMM Do, YYYY');
cTime.innerText = moment().format('LT');

function displayTime() {
  cTime.innerText = moment().format('LT');
}

const userInput = function (e) {
  e.preventDefault();
  input = e.currentTarget.previousElementSibling.value.trim();
  // enteredInput = input.value.trim(); // this gets me the value
  prepend =
    this.parentNode.firstChild.nextElementSibling.firstElementChild.innerText;
  console.log(prepend);
  console.log(input);
  localStorage.setItem(prepend, JSON.stringify(input));
};

const loadInputs = function () {
  // console.log(document.getElementById('9AM'));
  document.getElementById('9AM').value = localStorage.getItem('09:00AM');
  document.getElementById('10AM').value = localStorage.getItem('10:00AM');
  document.getElementById('11AM').value = localStorage.getItem('11:00AM');
  document.getElementById('12PM').value = localStorage.getItem('12:00PM');
  document.getElementById('13PM').value = localStorage.getItem('01:00PM');
  document.getElementById('14PM').value = localStorage.getItem('02:00PM');
  document.getElementById('15PM').value = localStorage.getItem('03:00PM');
  document.getElementById('16PM').value = localStorage.getItem('04:00PM');
  document.getElementById('17PM').value = localStorage.getItem('05:00PM');
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
