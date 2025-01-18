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
  const declineHours = (hour) => {
    if (hour == 1 || hour == 21) {
      return "час";
    } else if (hour >= 2 && hour <= 4) {
      return "часа";
    } else if (hour == 22 || hour == 23) {
      return "часа";
    } else {
      return "часов";
    }
  };
  const declineMinutes = (minutes) => {
    if (minutes > 4 && minutes < 21) {
      return "минут";
    } else if (minutes.toString().slice(-1) >= 5 || minutes.toString().slice(-1) == 0) {
      return "минут";
    } else if (minutes.toString().slice(-1) >= 2 && minutes.toString().slice(-1) <= 4) {
      return "минуты";
    } else if (minutes.toString().slice(-1) == 1) {
      return "минута";
    } else {
      return "минуты";
    }
  };
  const declineSeconds = (seconds) => {
    if (seconds > 4 && seconds < 21) {
      return "секунд";
    } else if (seconds.toString().slice(-1) >= 5 || seconds.toString().slice(-1) == 0) {
      return "секунд";
    } else if (seconds.toString().slice(-1) >= 2 && seconds.toString().slice(-1) <= 4) {
      return "секунды";
    } else if (seconds.toString().slice(-1) == 1) {
      return "секунда";
    } else {
      return "секунды";
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
  dateHours = hour + " " + declineHours(hour) + " ";
  dateMinutes = minutes + " " + declineMinutes(minutes) + " ";
  dateSeconds = seconds + " " + declineSeconds(seconds) + " ";

  readyDate = addZero(day) + "." + addZero(month) + "." + year;
  readyTime = addZero(hour) + ":" + addZero(minutes) + ":" + addZero(seconds) + " ";

  dateElement.textContent =
    "Сегодня " + dataDay + " " + dateYear + dateHours + dateMinutes + dateSeconds;
  dateElement2.textContent = readyTime + readyDate;
};

setInterval(() => {
  dataToPage();
}, 1000);
