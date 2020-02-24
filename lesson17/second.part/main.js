window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    let date = new Date(),
        hour = date.getHours();

    function whatHours() {
        let greeting;

        if (hour >= 5 && hour < 12) {
            greeting = "Доброе утро";
        } else if (hour >= 12 && hour < 18) {
            greeting = "Добрый день";
        } else if (hour >= 18 && hour < 24) {
            greeting = "Добрый вечер";
        } else if (hour >= 0 && hour < 5) {
            greeting = "Доброй ночи";
        }

        let text = document.createElement('div');
        document.body.append(text);
        text.textContent = greeting;
    }
    whatHours();

    function whatDay() {
        let days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
            daysOfWeek = date.getDay(),
            daysDiv = document.createElement('div');
        document.body.append(daysDiv);
        daysDiv.textContent = 'Сегодня: ' + days[daysOfWeek];
    }
    whatDay();

    function time() {
        let daysTime = hour >= 12 ? 'PM' : 'AM',
            timeIs = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds() + ' ' + daysTime,
            daysTimeDiv = document.createElement('div');
        document.body.append(daysTimeDiv);
        daysTimeDiv.textContent = 'Текущее время: ' + timeIs;
    }
    time();

    function year() {
        let newYear = new Date('December 31, 2020'),
            msPerDay = 24 * 60 * 60 * 1000,
            daysLeft = Math.round((newYear.getTime() - date.getTime()) / msPerDay),
            dayName = '',
            ds = '' + daysLeft,
            dd = parseInt(ds.substr(ds.length - 1));
        if (dd == 1) {
            dayName = ' день'
        } else if (dd == 2 || dd == 3 || dd == 4) {
            dayName = " дня"
        } else {
            dayName = ' дней'
        }
        let dayLeftDiv = document.createElement('div');
        document.body.append(dayLeftDiv);
        dayLeftDiv.textContent = 'До нового года осталось: ' + daysLeft + dayName;

    }
    year();
});
