window.addEventListener('DOMContentLoaded', function () {
    'use strict';

    // Timer
    function countTimer(deadline) {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        const getTimeRemaining = () => {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = ((dateStop - dateNow) / 1000),
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            return {
                timeRemaining,
                hours,
                minutes,
                seconds
            };
        };

        const timeEdit = (timeElement) => {
            if (timeElement < 10) {
                return '0' + timeElement;
            } else {
                return timeElement;
            }
        };

        let timerId;
        const updateClock = () => {

            let timer = getTimeRemaining();

            timerHours.textContent = timeEdit(timer.hours);
            timerMinutes.textContent = timeEdit(timer.minutes);
            timerSeconds.textContent = timeEdit(timer.seconds);

            if (timer.timeRemaining <= 0) {
                clearInterval(timerId);
                timerHours.textContent = "00";
                timerMinutes.textContent = "00";
                timerSeconds.textContent = "00";
            }

        }

        timerId = setInterval(updateClock, 1000);
        console.log(timerId);

        updateClock();

    }

    //меню
    const toggleMenu = () => {

        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu')
        }

        btnMenu.addEventListener('click', handlerMenu);
        menu.addEventListener('click', (event) => {

            let target = event.target;

            if (target.classList.contains('close-btn')) {
                handlerMenu();
            } else {
                target.closest('ul>li');
                handlerMenu();
            }
        });
    }

    toggleMenu();

    //popup

    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
            popupContent = document.querySelector('.popup-content'),
            popupBtn = document.querySelectorAll('.popup-btn');

        const popupLeft = () => {
            popup.style.display = 'block';
            if (screen.width > 768) {
                let start = Date.now();
                let timer = setInterval(() => {

                    let timeStop = Date.now() - start;
                    if (timeStop >= 800) {
                        clearInterval(timer);
                        return;
                    }
                    animate(timeStop);
                });

                popup.addEventListener('click', (event) => {
                    let target = event.target;

                    if (target.classList.contains('popup-close')) {
                        popup.style.display = 'none';
                    } else {
                        target = target.closest('.popup-content');

                        if (!target) {
                            popup.style.display = 'none';
                        }
                    }
                });

                let animate = (timeStop) => {
                    let widthContent = +getComputedStyle(popupContent).width.split('px')[0];
                    widthContent = -widthContent / 2 + 50 + 'px';
                    popupContent.style.left = timeStop / 16 + '%';
                    popupContent.style.marginLeft = widthContent;
                };

            }

        }
        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                popup.style.display = 'block';
                popupLeft();
            });
        });
        // popupClose.addEventListener('click', () => {
        //     popup.style.display = 'none';
        // });

    };


    togglePopUp();

    // табы

    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for (let i = 0; i < tabContent.length; i++) {
                if (index === i) {
                    tabContent[i].classList.remove('d-none');
                    tab[i].classList.add('active');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');

                }
            }
        };
        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
            target = target.closest('.service-header-tab');

            if (target) {

                tab.forEach((item, i) => {

                    if (item === target) {
                        toggleTabContent(i);
                    }
                });
            }
        });
    }
    tabs();

    //слайдер

    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            dot = document.querySelectorAll('.dot'),
            slider = document.querySelector('.portfolio-content');

        let currentSlide = 0,
            interval;

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };

        const autoPlaySlide = () => {


            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');

        };

        const startSlide = (time = 3000) => {
            interval = setInterval(autoPlaySlide, time);
        };

        const stopSlide = () => {
            clearInterval(interval);
        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();


            let target = event.target;

            if (!target.matches('.portfolio-btn, .dot')) {
                return;
            }

            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');

            if (target.matches('#arrow-right')) {
                currentSlide++;
            } else if (target.matches('#arrow-left')) {
                currentSlide--;
            } else if (target.matches('.dot')) {
                dot.forEach((elem, index) => {
                    if (elem === target) {
                        currentSlide = index;
                    }
                });
            }

            if (currentSlide >= slide.length) {
                currentSlide = 0;
            }

            if (currentSlide < 0) {
                currentSlide = slide.length - 1;
            }

            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');
        });

        slider.addEventListener('mouseover', (event) => {
            if (event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')) {
                stopSlide();
            }
        });

        slider.addEventListener('mouseout', (event) => {
            if (event.target.matches('.portfolio-btn') ||
                event.target.matches('.dot')) {
                startSlide();
            }
        });

        startSlide(1500);
    };


    slider();
    countTimer('29 february 2020');
})