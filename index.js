const countries = [];
//DOM elements
const showCountries = document.getElementById('render-countries');
const btnShow = document.getElementById('show');
const btnDisable = document.getElementById('disable');
const addCountry = document.getElementById('add-country');
const btnAdd = document.getElementById('add');
const numCountries = document.getElementById('number-countries');

numCountries.innerHTML = `<h5>Have a: ${countries.length} Countries</h5>`;

btnShow.addEventListener('click', () => {
  showCountries.style.display = 'block';
});

btnDisable.addEventListener('click', () => {
  showCountries.style.display = 'none';
});

btnAdd.addEventListener('click', () => {
  countries.push(addCountry.value);
  showCountries.innerHTML += `<div>${
    countries[countries.length - 1]
  }</div> <br/>`;
  numCountries.innerHTML = `<h5>Have a: ${countries.length} Countries</h5>`;
});