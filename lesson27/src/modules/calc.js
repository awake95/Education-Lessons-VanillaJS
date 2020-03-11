 //calc

 const calc = () => {
    const calcBlock = document.querySelector('.calc-block');

    const calcItems = event => {
        const target = event.target;
        if (target.classList.contains('calc-item') && target.tagName !== "SELECT") {
            target.value = target.value.replace(/\D/g, '');
        }
    }
    calcBlock.addEventListener('input', calcItems);
}

export default calc;