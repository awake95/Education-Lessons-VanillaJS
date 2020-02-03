function getRandomNum(number) {
    return Math.floor(Math.random() * number);
}

let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};




const start = function(n) {

  const randomNum = getRandomNum(100);

  function play() {

    const num = prompt('Угадай число от 1 до 100');
  
    if (num === null) {
      alert('До свидания')
      return;
    }
  
    if(isNumber(num)) {
      const realNum = +num;
   
        if (realNum > randomNum) {
          alert('Данное число меньше');
          play();
        } else if (realNum < randomNum) {
          alert ('Данное число больше');
          play();
        } else {
          alert('Вы угадали загаданное число')
        }
    } else {
          alert('Введите число');
          play();
    }
  }
  play();
}

start();