let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};

let money = 45000;

const start = function () {

  do {
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
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 1000000,
  period: 3,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,

  asking: function () {

    if (confirm('Есть ли у вас дополнительный заработок?')) {

      let itemIncome, cacheIncome

      do {
        itemIncome = prompt('Какой вас дополнитльный доход', 'Разработка сайтов');
      }
      while (isNumber(itemIncome));

      do {
        cacheIncome = prompt('Сколько зарабатываете на этом?', 10000);
      }
      while (!isNumber(cacheIncome));
      appData.income[itemIncome] = cacheIncome;
    }

    let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?');
    console.log(addExpenses.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' '));


    appData.deposit = confirm('Есть ли у вас депозит в банке?');

    let sum = 0,
      question, expense;
    for (let i = 0; i < 2; i++) {
      do {
        expense = prompt('Введите обязательную статью расходов: ');
      }
      while (isNumber(expense));

      do {
        question = prompt('Во сколько это обойдётся?');
      }
      while (!isNumber(question));
      appData.expenses[expense] = question;
    }
    return sum;
  },


  getExpensesMonth: function () {

    for (let key in appData.expenses) {
      appData.expensesMonth += +appData.expenses[key];
    }

  },


  getBudget: function () {
    return (appData.budget - appData.expensesMonth);
  },


  getTargetMonth: function () {
    let missionComplete = Math.ceil(appData.mission / appData.expensesMonth)
    let failedMission = (missionComplete < 0);
    if (failedMission) {
      console.log('Цель не будет достигнута')
    } else
      console.log('Цель будет достигнута за: ', missionComplete, ' месяцев');

    return appData.mission / appData.expensesMonth;
  },

  getStatusIncome: function () {
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

  getInfoDeposit: function () {
    if (appData.deposit) {
      do {
        appData.percentDeposit = prompt('Какой годовой процент?', '10');
      } while (!isNumber(appData.percentDeposit));

      do {
        appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
      } while (!isNumber(appData.moneyDeposit));

    }
  },

  calcSavedMoney: function () {
    return appData.budgetMonth * appData.period;
  }
};

appData.asking();
appData.getExpensesMonth();
appData.getTargetMonth();
appData.getStatusIncome();



appData.budgetDay = appData.expensesMonth / 30;
appData.budgetMonth = money - appData.expensesMonth;



console.log('Расходы за месяц: ' + appData.expensesMonth);
console.log(appData.getStatusIncome());


appData.getInfoDeposit();
console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());

for (let key in appData) {
  console.log('Наша программа включает в себя данные: ' + key + appData[key]);
}
