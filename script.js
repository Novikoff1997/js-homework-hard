"use strict";
const week = ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"];
const today = new Date();

week.forEach((value, index) => {
  if (today.getDay() === index + 1) {
    document.write("<b>" + value + "</b>");
    document.write("<br><hr>");
  } else {
    if (index + 1 === 6 || index + 1 === 7) {
      document.write("<i>" + value + "</i>");
      document.write("<br><hr>");
    } else {
      document.write(value);
      document.write("<br><hr>");
    }
  }
});
