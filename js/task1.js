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

const stopButton = document.querySelector('[data-action="start"]');

const body = document.querySelector('body');

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const picColor = () => {
  body.style.backgroundColor = colors[randomIntegerFromInterval(0,colors.length)]
  startButton.setAttribute('disabled', true)
}

const stopPicker = () => {
  stopButton.removeAttribute('disabled')

}

startButton.addEventListener('click', picColor)

stopButton.addEventListener('click', stopPicker)

