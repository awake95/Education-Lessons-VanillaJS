let start = document.getElementById('start'),
    btnPlus = document.getElementsByTagName('button'),
    incomePlus = btnPlus[0],
    expensesPlus = btnPlus[1],
    additionalIncomeItem = document.querySelectorAll('.additional_income-item'),
    depositCheck = document.querySelector('#deposit-check'),
    budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
    budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
    expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
    additionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
    additionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
    incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
    targetMonthValue = document.getElementsByClassName('target_month-value')[0],
    salaryAmount = document.querySelector('.salary-amount'),
    incomeTitle = document.querySelector('.income-title'),
    expensesTitle = document.querySelector('.expenses-title'),
    expensesItems = document.querySelectorAll('.expenses-items'),
    additionalIncome = document.querySelector('.additional_income'),
    additionalExpenses = document.querySelector('.additional_expenses'),
    targetAmount = document.querySelector('.target-amount'),
    periodSelect = document.querySelector('.period-select'),
    incomeItems = document.querySelectorAll('.income-items'),
    additionalExpensesItem = document.querySelector('.additional_expenses-item'),
    titlePeriodAmount = document.querySelector('input[type="range"]'),
    periodAmount = document.querySelector('.period-amount');
    allInputText = document.querySelectorAll('input[type=text]');

let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
};


let appData = {
  budget: 0,
  budgetDay: 0,
  budgetMonth: 0,
  income: {},
  incomeMonth: 0,
  addIncome: [],
  expenses: {},
  expensesMonth: 0, 
  addExpenses: [],
  deposit: false,
  percentDeposit: 0,
  moneyDeposit: 0,

  start: function () {
    
    

    start.disabled = true;

    appData.budget = +salaryAmount.value;

    this.getExpenses();
    this.getIncome();
    this.getExpensesMonth();
    this.getAddExpenses();
    this.getAddIncome();
    this.getBudget();
    this.rangeValue();
    this.incomePeriodValueRange();
    this.changeButton();
    this.reset();

    this.showResult();

    let allItem = allInputText.forEach(function(){
      allInputText.disabled = true;
  });
  },

  showResult: function () {
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = this.budgetDay;
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriod();
    targetAmount.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriod();

  },

  addExpensesBlock: function () {
    let cloneExpensesItem = expensesItems[0].cloneNode(true);
    expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesPlus);
    expensesItems = document.querySelectorAll('.expenses-items');
    if (expensesItems.length === 3) {
      expensesPlus.style.display = 'none';
    }
  },

  addIncomeBlock: function () {
    let cloneIncomeItem = incomeItems[0].cloneNode(true);
    incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomePlus);
    incomeItems = document.querySelectorAll('.income-items');
    if (incomeItems.length === 3) {
      incomePlus.style.display = 'none';
    }
  },

  getExpenses: function () {
    expensesItems.forEach(function(item) {
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if (itemExpenses !== '' && cashExpenses !== '') {
        appData.expenses[itemExpenses] = cashExpenses;
      }
    });
  },
 
  getIncome: function () {
    incomeItems.forEach(function (item) {
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
      if (itemIncome !== '' && cashIncome !== '') {
        this.income[itemIncome] = +cashIncome;
        this.incomeMonth = +cashIncome;
      }
    });

    for(let key in this.income) {
      this.incomeMonth += +this.income[key];
    }
  },

   getAddExpenses: function () {
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item) {
      item = item.trim();
      if (item !== '') {
        this.addExpenses.push(item);
      }
    })
   },

   getAddIncome: function () {
    additionalIncomeItem.forEach(function (item) {
      let itemValue = item.value.trim();
      if (itemValue !== '') {
        this.addIncome.push(itemValue);
      }
    });
  },
  
  rangeValue: function (){
    let newValue = titlePeriodAmount.value;
    let target = document.querySelector('.period-amount');
    target.innerHTML = newValue;
  },

  incomePeriodValueRange: function(){
    titlePeriodAmount.textContent = periodSelect.value;
    incomePeriodValue.value = appData.calcPeriod();
  },
  changeButton: function () {
    start.style.display = 'none';
    cancel.style.display = 'block';
    allInputText.forEach(function (item) {
        item.disabled = true;
    });
},
  reset: function () {
    cancel.style.display = 'none';
    start.style.display = 'block';
    allInputText.forEach(function (item) {
        item.value = '';
        item.disabled = false;
        start.disabled = true;
    });

},

  asking: function () {

    if (confirm('Есть ли у вас дополнительный заработок?')) {

      let itemIncome, cacheIncome

      do {
        itemIncome = prompt('Какой у вас дополнительный доход', 'Разработка сайтов');
      }
      while (isNumber(itemIncome));

      do {
        cacheIncome = prompt('Сколько зарабатываете на этом?', 10000);
      }
      while (!isNumber(cacheIncome));
      this.income[itemIncome] = cacheIncome;
    }

    const checkQuestion = function () {
      let addExpenses;
      do {
        addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую?');
      }

      while (isNumber(addExpenses) || addExpenses === '' || addExpenses === null)
      console.log(addExpenses.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' '));

    }

    checkQuestion();


    this.deposit = confirm('Есть ли у вас депозит в банке?');

  },


  getExpensesMonth: function () {

    for (let key in this.expenses) {
      this.expensesMonth += +this.expenses[key];
    }

  },

  getBudget: function () {
    this.budgetDay = Math.ceil(this.budget / 30);
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
  },

 
  getTargetMonth: function () {
    return targetAmount.value / this.budgetMonth;
  },

  getStatusIncome: function () {
    switch (true) {
      case this.budgetDay >= 1200:
        return ('У вас высокий уровень дохода');
        break;
      case this.budgetDay >= 600 && this.budgetDay < 1200:
        return ('У вас средний уровень дохода');
        break;
      case this.budgetDay < 600:
        return ('К сожалению у вас уровень дохода ниже среднего');
        break;
      default:
        alert('Таких значений нет')
    }
  },

  getInfoDeposit: function () {
    if (this.deposit) {
      do {
        this.percentDeposit = prompt('Какой годовой процент?', '10');
      } while (!isNumber(this.percentDeposit));

      do {
        this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
      } while (!isNumber(this.moneyDeposit));

    }
  },

  calcPeriod: function () {
    return this.budgetMonth * periodSelect.value;
  }
};

start.disabled = true;

salaryAmount.addEventListener('input', function () {
    if (salaryAmount.value === '') {
        start.disabled = true;
    } else {
        start.disabled = false;
    }

});

start.addEventListener('click', appData.start.bind(appData));
start.addEventListener('click', appData.changeButton);
cancel.addEventListener('click', appData.reset);
expensesPlus.addEventListener('click', appData.addExpensesBlock);
incomePlus.addEventListener('click', appData.addIncomeBlock);
titlePeriodAmount.addEventListener('input', appData.rangeValue);
periodSelect.addEventListener('input', appData.incomePeriodValueRange);
