"use strict";
const dataToPage = () => {
  const dateElement = document.querySelector(".date");
  const dateElement2 = document.querySelector(".date2");

  const date = new Date();
  const day = date.getDay();
  const month = date.getDate();
  const year = date.getFullYear();
  const hour = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  let dataDay;
  let dateYear;
  let dateHours;
  let dateMinutes;
  let dateSeconds;

  let readyDate;
  let readyTime;
  let readyDate2;
  let readyTime2;

  const daysOfWeek = [
    "Воскресенье",
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
  ];
  const months = [
    "Январь",
    "Февраль",
    "Март",
    "Апрель",
    "Май",
    "Июнь",
    "Июль",
    "Август",
    "Сентябрь",
    "Октябрь",
    "Ноябрь",
    "Декабрь",
  ];
  const hoursForm = ["час", "часа", "часов"];
  const minutesForm = ["минута", "минуты", "минут"];
  const secondsForm = ["секунда", "секунды", "секунд"];

  const getMonthDeclension = (months) => {
    let month;
    const monthToday = new Date();
    months.forEach((value, index) => {
      if (index == monthToday.getMonth()) {
        value = value.toLowerCase();
        if (value == "март") {
          month = value.slice(0, -1) + "а";
        } else if (value == "август") {
          month = value + "а";
        } else {
          month = value.slice(0, -1) + "я";
        }
      }
    });
    return month;
  };

  const declineNumber = (number, form) => {
    const lastDigit = number % 10; // Проверяем последнюю цифру
    const secondLastDigit = Math.floor(number / 10) % 10; // Проверяем предпоследнюю цифру
    if (secondLastDigit === 1 && lastDigit >= 0 && lastDigit <= 9) {
      return form[2];
    }
    if (lastDigit === 1) {
      return form[0];
    } else if (lastDigit > 1 && lastDigit < 5) {
      return form[1];
    } else {
      return form[2];
    }
  };
  const addZero = (element) => {
    if (element.toString().length === 1) {
      return "0" + element;
    }
    return element;
  };

  dataDay = daysOfWeek[date.getDay()] + ", ";
  dateYear = month + " " + getMonthDeclension(months) + " " + year + " года ";
  dateHours = hour + " " + declineNumber(hour, hoursForm) + " ";
  dateMinutes = minutes + " " + declineNumber(minutes, minutesForm) + " ";
  dateSeconds = seconds + " " + declineNumber(seconds, secondsForm) + " ";

  readyDate = dataDay + dateYear;
  readyTime = dateHours + dateMinutes + dateSeconds;

  readyDate2 = addZero(day) + "." + addZero(month) + "." + year;
  readyTime2 = addZero(hour) + ":" + addZero(minutes) + ":" + addZero(seconds) + " ";

  dateElement.textContent = "Сегодня " + readyDate + readyTime;
  dateElement2.textContent = readyTime2 + readyDate2;
};

setInterval(() => {
  dataToPage();
}, 1000);
