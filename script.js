"use strict";

/* Я не стал отдельно прописывать, для if else или для switch case код, вместо этого попытался реализовать обищй подход, в котором можно использовать как if else так и switch и конечно же можно обойтись вообще без условных операторов. Остороржно, много комментариев... */

// Сделал небольшой интерфейс для выбора языка
const languageSelection = () => {
  // Объект weeks со свойствами ru и en которые содержат массивы с днями недели.
  let weeks = [
    ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскреенье"],
    ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
  ];

  // Вешаем на документ событие клик
  document.addEventListener("click", (event) => {
    // Проверяем что то по чему мы кликнули действительно кнопка, иначе будет ошибка
    if (event.target.className == "button") {
      // приставиваем переменной lang значенеи атрибута id того элемента по которому кликнули
      let lang;
      event.target.id == "ru" ? (lang = 0) : (lang = 1);
      /* Функция вывода дней недели в зависимости от выбранного языка. Получаем свойство объекта,проходимся по всем эллементам массива который он сожержит и выводим каждый элемент. */
      const weekLog = (lang) => {
        weeks[lang].forEach((weekDay) => {
          console.log(weekDay);
        });
        // Пустая строка для визуального отделения вывода в консоль.
        console.log("");
      };

      // Далее реальзация через if switch и без них (Для проверки нужное раскомментировать)

      /* Реализация через if */
      /* Тут конечно же можно написать если lang равна ru то воводим на русском, или если lang равно en то выводим на английском. */

      // if (lang) {
      //   weekLog(lang);
      // }

      /* Реализация через switch */
      /* Тут тоже для каждого значение ru или en можно прописать отдельный кейс по примеру с if else */

      // switch (lang) {
      //   case lang:
      //     weekLog(lang);
      //     break;
      // }

      /* Реализация без использования условий */
      weekLog(lang);
    }
  });
};

languageSelection();

// Думаю тут пояснять ничего не нужно. (Нажатие на "отмена" и пустая строка тоже учитываются.)

let namePerson = prompt("Как вас зовут?");

namePerson == "Артем"
  ? console.log(namePerson + " - Директор")
  : namePerson == "Александр"
  ? console.log(namePerson + " - Преподаватель")
  : namePerson == ""
  ? console.log("Вы не ввели имя :(")
  : namePerson == null
  ? console.log("Вы нажали 'Отмена'")
  : console.log(namePerson + " - Студент");
