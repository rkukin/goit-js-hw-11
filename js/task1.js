"use strict";

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const startButton = document.querySelector('[data-action="start"]');

const stopButton = document.querySelector('[data-action="stop"]');

const body = document.querySelector('body');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const changeBg = () => {
body.style.backgroundColor = colors[randomIntegerFromInterval(0,colors.length)]
}

let interval = 0;

const timer = (action) => {
  interval = setInterval(action, 1000)
}

const picColor = () => {
   startButton.setAttribute('disabled', true)
   timer(changeBg);
}

const stopPicker = () => {
  startButton.removeAttribute('disabled')
  clearInterval(interval)
}

startButton.addEventListener('click', picColor)

stopButton.addEventListener('click', stopPicker)

