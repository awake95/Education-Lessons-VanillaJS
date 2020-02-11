let calcBtn = document.getElementById('start');
let addIncomeButton = document.getElementsByTagName('button')[0];
let addExpensesButton = document.getElementsByTagName('button')[1];
let checkBox = document.querySelector('.deposit-checkmark');
let inputIncomeItem = document.querySelectorAll('.additional_income-item');
let budgetDayValue = document.getElementsByClassName('budget_day-value')[0];
let budgetMonthValue = document.getElementsByClassName('budget_month-value')[0];
let expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0];
let inputAdditionalIncome = document.querySelectorAll('.result-total')[3];
let inputAdditionalExpenses = document.querySelectorAll('.result-total')[4];
let inputIncomePeriod = document.querySelectorAll('.result-total')[5];
let inputTargetMonth = document.querySelectorAll('.result-total')[6];
let salaryAmount = document.querySelector('.salary-amount');
let incomeTitle = document.querySelector('.income-title');
let incomeAmount = document.querySelector('.income-amount');
let additionalIncomeItem = document.querySelector('.additional_income-item');
let expensesTitle = document.querySelector('.expenses-title');
let expensesItems = document.querySelectorAll('.expenses-items');
let additionalExpensesItem = document.querySelector('.additional_expenses-item');
let targetAmount = document.querySelector('.target-amount');
let periodSelect = document.querySelector('.period-select');


let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};



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
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,

  start: function () {

    if(salaryAmount.value === ''){
     alert('Ошибка, поле "Месячный доход" должно быть заполнено!');
     return;
    }

    appData.budget = salaryAmount.value;

    appData.getExpenses();
    appData.getExpensesMonth();
    appData.getBudget();
    // appData.getTargetMonth();
    // appData.getStatusIncome();
    appData.showResult();
  }, 

  showResult: function(){
    budgetMonthValue.value = appData.budgetMonth;
    budgetDayValue.value = appData.budgetDay;
    expensesMonthValue.value = appData.expensesMonth;
  },

  addExpensesBlock: function(){
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, addExpensesButton);
    expensesItems = document.querySelectorAll('.expenses-items');
    if(expensesItems.length === 3){
      addExpensesButton.style.display = 'none';
    }
  },

  getExpenses: function () {
    expensesItems.forEach(function(item){
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cachExpenses = item.querySelector('.expenses-amount').value;
      if(itemExpenses !== '' && cachExpenses !== ''){
        appData.expenses[itemExpenses] = cachExpenses;
      }
    });
  },

  asking: function () {

    if (confirm('Есть ли у вас дополнительный заработок?')) {

      let itemIncome, cacheIncome

    const checkQuestion = function () {
      let addExpenses;
      do {
        addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?');
      }

      while (isNumber(addExpenses) || addExpenses === '' || addExpenses === null)
      console.log(addExpenses.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' '));

    }

    checkQuestion();


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
  }
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
addExpensesButton.addEventListener('click', appData.addExpensesBlock);

start.addEventListener('click', appData.start);

appData.budgetDay = appData.expensesMonth / 30;
appData.budgetMonth = salaryAmount.value - appData.expensesMonth;

appData.getInfoDeposit();
// console.log(appData.percentDeposit, appData.moneyDeposit, appData.calcSavedMoney());

// for (let key in appData) {
//   console.log('Наша программа включает в себя данные: ' + key + appData[key]);
// }