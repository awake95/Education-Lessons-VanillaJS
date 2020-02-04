let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};

let money = 45000;

const start = function(){

      do{
        money = prompt('Ваш месячный доход?');
      }
      while (!isNumber(money));

  };

start();





let appData = {
  income: {},
  addIncome: [],
  expenses: {},  
  addExpenses: [],
  deposit: false,
  mission: 1000000,
  period: 3,
  budget: money,
  budgetDay: 0,
  badgetMonth: 0,
  expensesMonth: 0,

  asking: function() {
    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?');
        appData.addExpenses = addExpenses.toLowerCase().split(',');
        appData.deposit = confirm('Есть ли у вас депозит в банке?');

    let sum = 0, question, expense;
     for(let i = 0; i < 2; i++) {
    expense = prompt('Введите обязательную статью расходов: ');
    do {
      question = prompt('Во сколько это обойдётся?');
    }
    while (!isNumber(question));
    appData.expenses[expense] = question;
  }
    return sum;
      },

  
  getExpensesMonth: function() {

    for (let key in appData.expenses) {
      appData.expensesMonth += +appData.expenses[key];
      }
 
    },


 getBudget: function() {
    return (appData.budget - appData.expensesMonth);
  },
 
  
  getTargetMonth: function() {
    let missionComplete = Math.ceil(appData.mission / appData.expensesMonth) 
    let failedMission = (missionComplete < 0);
    if (failedMission) {
      console.log('Цель не будет достигнута')
    }else 
    console.log('Цель будет достигнута за: ', missionComplete, ' месяцев');
  
    return appData.mission / appData.expensesMonth;
  },

  getStatusIncome: function() {
    switch (true) { 
      case appData.budgetDay >= 1200:
        return ('У вас высокий уровень дохода');
        break;
      case appData.budgetDay >= 600 && appData.budgetDay < 1200:
        return ('У вас средний уровень дохода');
        break;
      case appData.budgetDay < 600:
        return ('К сожалению у вас уровень дохода ниже среднего');
        break;
      default:
        alert('Таких значений нет')
    } 
  }, 

};
let expensesAmount = appData.asking();
let expenses = [];
let accumulatedMonth = appData.getExpensesMonth();
let budgetDay = accumulatedMonth / 30;


appData.getTargetMonth();
appData.getStatusIncome();





console.log ('Расходы за месяц: ' + appData.expensesMonth);
console.log(appData.getStatusIncome());


