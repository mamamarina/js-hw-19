/* eslint-disable no-unused-vars */
/* eslint-disable func-style */
/* eslint-disable require-jsdoc */
let container;
let prevIndicator = null;

function createContainer() {
  let element = document.createElement('div');
  element.setAttribute('id', 'carousel');
  element.setAttribute('class', 'carousel');
  document.querySelector('body').appendChild(element);
  container = document.querySelector('#carousel');
}

function createSlides(n) {
  let slidesContainer = document.createElement('ul');
  slidesContainer.setAttribute('class', 'slides');

  for(i=0; i < n; i++){
    let slidesItem = document.createElement('li');
    let slidesLink = document.createElement('a');

    if(i === 0) slidesItem.setAttribute('class', 'slides__item active')
    else slidesItem.setAttribute('class', 'slides__item');
  
    slidesLink.setAttribute('href', '#');
    slidesItem.appendChild(slidesLink);
    slidesContainer.appendChild(slidesItem);
  }
  container.appendChild(slidesContainer);
}

function createIndicators(n) {
  let indicatorsContainer = document.createElement('div');
  indicatorsContainer.setAttribute('class', 'indicators');

  for(i=0; i < n; i++){
    let indicatorsItem = document.createElement('span');
    if(i === 0) indicatorsItem.setAttribute('class','indicators__item active')
    else indicatorsItem.setAttribute('class','indicators__item');

    indicatorsItem.setAttribute('data-slide-to', i);
    indicatorsContainer.appendChild(indicatorsItem);
  };
  container.appendChild(indicatorsContainer);
}

function createControls() {
  let controlsContainer = document.createElement('div');
  controlsContainer.setAttribute('class', 'controls');

  for(i=0; i < 3; i++){
    let controlsItem = document.createElement('div');
    let controlsIcon = document.createElement('i');
    if(i === 0){ controlsItem.classList.add('controls__item', 'controls__prev');
      controlsIcon.classList.add('fas', 'fa-chevron-left')}
    else if(i === 1) {controlsItem.classList.add('controls__item', 'controls__next');
      controlsIcon.classList.add('fas', 'fa-chevron-right')}
    else {controlsItem.classList.add('controls__item', 'controls__pause');
      controlsIcon.classList.add('fas', 'fa-play')
    }
    controlsItem.appendChild(controlsIcon);
    controlsContainer.appendChild(controlsItem);
  }
  container.appendChild(controlsContainer);
}

function createStyle() {
  let styleContainer = document.createElement('style');
  let css = `
  .controls,
  .slides {
    position: relative;
  }
  .indicators {
    display: flex;
  }
  .indicators__item {
    display: block;
    width: 70px;
    height: 3px;
    background-color: linear-gradient(to left, #333 10%, #333 40%);
    margin: 15px;
  }`;

  styleContainer.innerHTML = css;
  container.appendChild(styleContainer)
}

function indicatorsBgd (event) {
  let target = event.target;

  if(target.classList.contains('indicators__item')) {
    target.style.backgroundColor = 'red' ;

  if (prevIndicator !== null) prevIndicator.removeAttribute('style');
  prevIndicator = target;
  }
}

function setListener() {
  let indicatorsContainer = document.querySelector('div.indicators');

  indicatorsContainer.addEventListener('click', indicatorsBgd);
}

function createCarousel(slidesCount = 5) {
  container = document.querySelector('#carousel');
  createSlides(slidesCount);
  createIndicators(slidesCount);
  createControls();
  createStyle();
  setListener()
}

createCarousel();



