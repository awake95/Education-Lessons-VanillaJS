let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};


let money = 45000;
let income = 'freelance';
let addExpenses = 'Интернет, Такси, Коммуналка';
console.log(addExpenses.length);
let deposit = true;
let mission = 10000000;

let period = 10;
console.log('Период равен', period, 'месяцев');
console.log('Цель заработать', mission, 'рублей');

console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));

const showTypeOf = function(data){
  console.log(typeof(data));
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit); 

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?');

deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);

const start = function(){
  
  do{
    money = prompt('Ваш месячный доход?');
  }
  while (!isNumber(money));
};

start();

let expenses = [];

const getExpensesMonth = function() {
    
    let sum = 0, count;

    for (let i = 0; i < 2; i++){
      
    expenses[i] = prompt('Введите обязательную статью расходов?');
    
    do{
      count = prompt('Во сколько это обойдется?')
    }
    while (!isNumber(count));
          sum += Number(count);
    }
   
    console.log(sum);
    return sum;
};


const expensesAmount = getExpensesMonth(); 

console.log ('Расходы за месяц: ' + expensesAmount);

const getAccumulatedMonth = function(){
  return money - expensesAmount;
};
getAccumulatedMonth();

const accumulatedMonth = getAccumulatedMonth();
console.log(accumulatedMonth);

function getTargetMonth () {
  do{
    failedMission = 'Цель не будет достигнута';
    console.log(failedMission);
  }
  while (failedMission < 0);
  
  return mission / accumulatedMonth;

};
getTargetMonth();


let budgetDay = accumulatedMonth / 30;

const getStatusIncome = function(){
  switch (true){ 
    case budgetDay >= 1200:
      return ('У вас высокий уровень дохода');
      break;
    case budgetDay >= 600 && budgetDay < 1200:
      return ('У вас средний уровень дохода');
      break;
    case budgetDay < 600:
      return ('К сожалению у вас уровень дохода ниже среднего');
      break;
    default:
      alert('Таких значений нет');
  }
};
console.log(getStatusIncome());
