  //validator 

  const validator = () => {
    const checkInput = () => {
        const allInput = document.querySelector('body'),
            nameForm = document.getElementById('form2-name'),
            value = nameForm.value;

        const phone = event => {
            const target = event.target;
            if (target.classList.contains('form-phone')) {
                target.value = target.value.replace(/[^0-9+]/g, '');
            }
        };

        allInput.addEventListener('input', phone);

        nameForm.addEventListener('input', (e) => {
            let newValue = e.target.value;
            if (newValue.match(/[^а-яА-Я]/g)) {
                nameForm.value = value;
                return;
            }
        });

        const name = event => {
            const target = event.target;
            if (target.classList.contains('form-name')) {
                target.value = target.value.replace(/[^а-яА-Я]/g, '');
            }
            if (target.classList.contains('mess')) {
                target.value = target.value.replace(/[^а-яА-Я]/g, '');
            }
        }
        allInput.addEventListener('input', name);

    };

    checkInput();

    const form2 = document.getElementById('form2'),
          form3 = document.getElementById('form3');

    form2.addEventListener('submit', (event) => {
        event.preventDefault();
        form2.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form2);
       

        formData.forEach((val, key) => {
            body[key] = val;
        });
        bodyPost();
        form2.reset();
    });

    form3.addEventListener('submit', (event) => {
        event.preventDefault();
        form3.appendChild(statusMessage);
        statusMessage.textContent = loadMessage;
        const formData = new FormData(form3);

        formData.forEach((val, key) => {
            body[key] = val;
        });
        bodyPost();
        form3.reset();
    });
};

export default validator;