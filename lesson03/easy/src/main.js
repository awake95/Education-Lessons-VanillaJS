let money = 45000;
console.log(typeof money);

let income = 'freelance';
console.log(typeof income);

let addExpenses = 'Интернет, Такси, Коммуналка';
console.log(addExpenses.length);

let deposit = true;
console.log(typeof deposit);

let mission = 10000000;

let period = 10;
console.log('Период равен', period, 'месяцев');
console.log('Цель заработать', mission, 'рублей');

console.log(addExpenses.toLowerCase());
console.log(addExpenses.split(', '));

money = prompt('Ваш месячный доход?');
console.log(money);

addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?');

deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit);

let expenses1 = prompt('Введите обязательную статью расходов?');
let expenses2 = prompt('Введите обязательную статью расходов?');
let amount1 = prompt('Во сколько это обойдется?');
let amount2 = prompt('Во сколько это обойдется?');

let budgetMonth = (money - amount1 - amount2);
console.log('Бюджет на месяц:' + ' ' + budgetMonth );

let missionComplete = (Math.ceil(mission / budgetMonth));
console.log('Цель будет достигнута за:'+ ' ' + missionComplete + ' ' + 'месяцев');

let budgetDay = (Math.floor(budgetMonth / 30));
console.log('Бюджет на день:'+ ' ' + budgetDay);

switch (true){ 
  case budgetDay >= 1200:
    'У вас высокий уровень дохода';
    break;
  case budgetDay >= 600 && budgetDay < 1200:
    'У вас средний уровень дохода';
    break;
  case budgetDay < 600:
    console.log('К сожалению у вас уровень дохода ниже среднего');
    break;
  default:
    alert('Таких значений нет');
}