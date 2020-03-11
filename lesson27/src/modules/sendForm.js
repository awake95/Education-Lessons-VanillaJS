  //send-ajax-form

  const sendForm = (id) => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        succesMesage = 'Спасибо! Мы скоро с Вами свяжемся!';

    const form = document.querySelector(id);
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem';
        if (id = 'form2') {
        statusMessage.style.cssText = 'color: white'
    }

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        form.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        
        const formData = new FormData(form);

        let body = {};

        formData.forEach((val, key) => {
            body[key] = val;
        });

        const postData = () => {

            return fetch('./server.php', {
                method: 'POST',
                mode: 'same-origin',
                cache: 'default',
                credentials: 'include',
                headers: {
                    'Content-Type': 'applicattion/json'
                },
                body: JSON.stringify(body)
            })
        };
        postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                statusMessage.textContent = succesMesage;
            })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            })
            form.reset();
    });
};


export default sendForm;