"use strict";


const delay = ms => {
  // Твой код
// return new Promise((resolve) => {
//   setTimeout(() => {
//     resolve(ms);
//   }, ms);
// }) 

const callback = function(resolve, reject){
  setTimeout(()=>{resolve(ms)},ms)
}

const promise = new Promise (callback);
return promise;
};

const logger = time => console.log(`Resolved after ${time}ms`);

// Вызовы функции для проверки
console.log(delay(20000));
delay(2000).then(logger); // Resolved after 2000ms
delay(1000).then(logger); // Resolved after 1000ms
delay(1500).then(logger); // Resolved after 1500ms