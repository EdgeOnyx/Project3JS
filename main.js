let header = document.querySelector('header');
let section = document.querySelector('section');

let requestURL = "https://AndrewArpin.github.io/JSONmon/coolThings.json";

let request = new XMLHttpRequest();

request.open('GET', requestURL);

request.responseType = 'json';

request.send();

function info(jsonObj) {
  let headerH1 = document.createElement('h1');
  headerH1.textContent = jsonObj['Website'];
  header.appendChild(headerH1);

//grab the company info and established date and add a new paragraph to your HTML that displays this info

  let headerPara = document.createElement('p');
  headerPara.textContent = 'Welcome to' + jsonObj['Website'] + '';
  header.appendChild(headerPara);
}
