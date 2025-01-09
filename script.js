"use strict";
let string = prompt("Введите строку:");

const toString = (string) => {
  if (string === string.toString()) {
    string.trim();
    string.length > 30 ? console.log(string.slice(0, 30) + "...") : console.log(string);
  } else {
    console.log("Передана не строка");
  }
};

toString(string);
