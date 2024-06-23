'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

function getCountryData(country) {
  const request = fetch(
    // 'https://restcountries.com/v3.1/all?fields=name,population'
    `https://restcountries.com/v3.1/name/${country}`
  )
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      console.log(data);
    });
}

getCountryData('canada');
