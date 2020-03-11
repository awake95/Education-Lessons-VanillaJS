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


export default togglePopUp;