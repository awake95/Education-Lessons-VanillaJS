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

let showTypeOf = function(data){
  console.log(typeof(data));
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit); 

money = prompt('Ваш месячный доход?');
console.log(money);

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?');

deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);

let expenses1 = prompt('Введите обязательную статью расходов?');
let amount1 = + prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount2 = + prompt('Во сколько это обойдется?');


function getExpensesMonth () {
  return amount1 + amount2;
};
getExpensesMonth();

function getAccumulatedMonth () {
  return money - (amount1 + amount2);
};
console.log('Бюджет на месяц: ' + getAccumulatedMonth());

let accumulatedMonth = getAccumulatedMonth();
console.log(accumulatedMonth);

function getTargetMonth () {
  return mission / accumulatedMonth;
};
getTargetMonth();


let budgetDay = accumulatedMonth / 30;

let getStatusIncome = function(){
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
