window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // Timer
    function countTimer(deadline) {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function getTimeRemaining() {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = ((dateStop - dateNow) / 1000),
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60) % 24;
            return {
                timeRemaining,
                hours,
                minutes,
                seconds
            };
        }

        function updateClock() {

            let timer = getTimeRemaining();

            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;

            if (timer.timeRemaining > 0) {

                let idInterval = setInterval(updateClock, 1000);
                setTimeout(() => {
                    clearInterval(idInterval);
                }, 10000);
            }
            
        }


        const timeEdit = (timeElement) => {
            if (timeElement < 10) {
                timeElement = '0' + timeElement;
            }else {
                return timeElement;
        } }
        
        timeEdit();

        function timeLine(){ 
            timerHours.textContent = timeEdit(timer.hours);
            timerMinutes.textContent = timeEdit(timer.minutes);
            timerSeconds.textContent = timeEdit(timer.seconds);

        }
        timeLine();

        // function updateClock() {
        //     let timer = getTimeRemaining();

        //     timerHours.textContent = timer.hours;
        //     timerMinutes.textContent = timer.minutes;    
        //     timerSeconds.textContent = timer.seconds;

        //     if (timer.timeRemaining > 0) {

        //         let idInterval = setInterval(updateClock, 1000);
        //         count = 0;
        //         clearInterval(idInterval);
        //     }

        // }


        updateClock();

    }


    countTimer('25 february 2019');


});