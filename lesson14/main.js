'use strict';

let start = document.getElementById('start'),
	btnPlus = document.getElementsByTagName('button'),
	incomeAdd = btnPlus[0],
	expensesAdd = btnPlus[1],
	checkDeposit = document.querySelector('#deposit-check'),
	incomeItem = document.querySelectorAll('.additional_income-item'),
	budgetMonthValue = document.getElementsByClassName('budget_month-value')[0],
	budgetDayValue = document.getElementsByClassName('budget_day-value')[0],
	expensesMonthValue = document.getElementsByClassName('expenses_month-value')[0],
	addictionalIncomeValue = document.getElementsByClassName('additional_income-value')[0],
	addictionalExpensesValue = document.getElementsByClassName('additional_expenses-value')[0],
	incomePeriodValue = document.getElementsByClassName('income_period-value')[0],
	targetMonthValue = document.getElementsByClassName('target_month-value')[0],
	salaryAmount = document.querySelector('.salary-amount'),
	incomeTitle = document.querySelector('.income-title'),
	expensesTitle = document.querySelector('.expenses-title'),
	expensesItems = document.querySelectorAll('.expenses-items'),
	expensesItem = document.querySelector('.additional_expenses-item'),
	depositAmount = document.querySelector('.deposit-amount'),
	depositPercent = document.querySelector('.deposit-percent'),
	targetAmount = document.querySelector('.target-amount'),
	periodSelect = document.querySelector('.period-select'),
	periodAmount = document.querySelector('.period-amount'),
	cancel = document.querySelector('#cancel'),
	incomeItems = document.querySelectorAll('.income-items');

const AppData = function () {

  this.income = {};
	this.addIncome = [];
	this.incomeMonth = 0;
	this.expenses = {};
	this.addExpenses = [];
	this.deposit = false;
	this.percentDeposit = 0;
	this.moneyDeposit = 0;
	this.budget = 0;
	this.budgetDay = 0;
	this.budgetMonth = 0;
  this.expensesMonth = 0;
  
};

AppData.prototype.check = function() {
  if (salaryAmount.value === '') {
    alert('Ошибка, поле Месячный доход должно быть заполнено!');
    return;
  }
};

AppData.prototype.start = function () {


  if (salaryAmount.value === '') {
    alert('Ошибка, поле Месячный доход должно быть заполнено!');
    return;
  }
  this.budget = salaryAmount.value;

  this.getExpenses();
  this.getIncome();
  this.getExpensesMonth();
  this.getAddExpenses();
  this.getAddIncome();
  this.getBudget();
  this.calcSavedMoney();
  this.showResult();

};
AppData.prototype.showResult = function () {
  budgetMonthValue.value = this.budgetMonth;
  budgetDayValue.value = this.budgetDay;
  expensesMonthValue.value = this.expensesMonth;
  addictionalExpensesValue.value = this.addExpenses.join(', ');
  addictionalIncomeValue.value = this.addIncome.join(', ');
  targetMonthValue.value = this.getTargetMonth();
  incomePeriodValue.value = this.calcSavedMoney();
};
AppData.prototype.changePeriod = function () {
  periodAmount.innerHTML = periodSelect.value;
};
AppData.prototype.addExpensesBlock = function () {
  console.log(expensesItems.parentNode);
  let cloneExpensesItem = expensesItems[0].cloneNode(true);
  expensesItems[0].parentNode.insertBefore(cloneExpensesItem, expensesAdd);
  expensesItems = document.querySelectorAll('.expenses-items');

  if (expensesItems.length === 3) {
    expensesAdd.style.display = 'none';
  }
};
AppData.prototype.addIncomeBlock = function () {
  let cloneIncomeItem = incomeItems[0].cloneNode(true);
  incomeItems[0].parentNode.insertBefore(cloneIncomeItem, incomeAdd);
  incomeItems = document.querySelectorAll('.income-items');

  if (incomeItems.length === 3) {
    incomeAdd.style.display = 'none';
  }
};
AppData.prototype.getExpenses = function () {
  expensesItems.forEach(function (item) {
    let itemExpenses = item.querySelector('.expenses-title').value;
    let cashExpenses = item.querySelector('.expenses-amount').value;
    if (itemExpenses !== '' && cashExpenses !== '') {
      this.expenses[itemExpenses] = cashExpenses;
    }
  }, this);
};
AppData.prototype.getIncome = function () {

  incomeItems.forEach(function (item) {
    let itemIncome = item.querySelector('.income-title').value;
    let cashIncome = item.querySelector('.income-amount').value;
    if (itemIncome !== '' && cashIncome !== '') {
      this.income[itemIncome] = +cashIncome;
      this.incomeMonth = +cashIncome;
    }
  }, this);
};

AppData.prototype.getAddExpenses = function () {
  let addExpenses = expensesItem.value.split(',');
  addExpenses.forEach(function (item) {
    item = item.trim();
    if (item !== '') {
      this.addExpenses.push(item);
    }
  }, this);
};

AppData.prototype.getAddIncome = function () {
  incomeItem.forEach(function (item) {
    let itemValue = item.value.trim();
    if (itemValue !== '') {
      this.addIncome.push(itemValue);
    }
  }, this);
};
AppData.prototype.getExpensesMonth = function () {
  for (let key in this.expenses) {
    this.expensesMonth = +this.expensesMonth + +this.expenses[key];
  }
  return this.expensesMonth;
};
AppData.prototype.getBudget = function () {
  this.budgetMonth = +this.budget + +this.incomeMonth - +this.expensesMonth;
  this.budgetDay = parseInt(this.budgetMonth / 30);

};

AppData.prototype.getTargetMonth = function () {
  let sum = Math.round(targetAmount.value / this.budgetMonth);
  return sum;

};

AppData.prototype.getStatusIncome = function () {
  if (this.budgetDay > 1200) {
    return ('У вас высокий уровень дохода');
  } else if (this.budgetDay >= 600 && this.budgetDay <= 1200) {
    return ('У вас средний уровень дохода');
  } else if (this.budgetDay < 600 && this.budgetDay > 0) {
    return ('К сожалению, у вас уровень дохода меньше среднего');
  } else if (this.budgetDay <= 0) {
    return ('Что-то пошло не так');
  }
};

AppData.prototype.getInfoDeposit = function () {
  if (this.deposit) {
    do {
      this.percentDeposit = prompt('Какой у вас годовой процент?', 10);
    } while (!isNumber(this.percentDeposit));
    do {
      this.moneyDeposit = prompt('Какая сумма заложена?', 20000);
    } while (!isNumber(this.moneyDeposit));
  }
};

AppData.prototype.calcSavedMoney = function () {
  return this.budgetMonth * periodSelect.value;
}; 

AppData.prototype.freezeMenu = function () {
  start.style.display = 'none';
  cancel.style.display = 'block';
  incomeAdd.disabled = true;
  expensesAdd.disabled = true;

  let allInput = document.querySelectorAll('input[type=text]');
  allInput.forEach(function (item) {
    item.disabled = true;
  });
};

AppData.prototype.resetMenu = function () {
  cancel.style.display = 'none';
  start.style.display = 'block';
  incomeAdd.disabled = false;
  expensesAdd.disabled = false;
  let allInput = document.querySelectorAll('input[type=text]');
  allInput.forEach(function (item) {
    item.value = '';
    item.disabled = false;
    start.disabled = true;
  });

};


// AppData.getInfoDeposit();

AppData.prototype.eventListeners = function () {

  start.addEventListener('click', this.start.bind(appData));
  expensesAdd.addEventListener('click', this.addExpensesBlock);
  incomeAdd.addEventListener('click', this.addIncomeBlock);
  periodSelect.addEventListener('input', this.changePeriod);
  
  start.disabled = true;
  
  salaryAmount.addEventListener('input', function () {
    if (salaryAmount.value === '') {
      start.disabled = true;
    } else {
      start.disabled = false;
    }
  
  });
  
    start.addEventListener('click', this.freezeMenu);
    cancel.addEventListener('click', this.resetMenu);

};

const appData = new AppData;

appData.eventListeners();


function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

DomElement.prototype.createElem = function () {
  let elem;

  if (this.selector[0] === '.') {
    elem = document.createElement('div');
    elem.classList.add(this.selector.slice(1));
  }

  if (this.selector[0] === '#') {
    elem = document.createElement('p');
    elem.setAttribute('id', this.selector.slice(1));
  }

  this.styling(elem);
  this.writeText(elem);
  this.addElem(elem);
};

DomElement.prototype.styling = function (elem) {
  elem.style.cssText = `height: ${this.height}; width: ${this.width}; background-color: ${this.bg}; font-size: ${this.fontSize}`;
};

DomElement.prototype.writeText = function (elem) {
  elem.textContent = 'Lorem ipsum dolor sit amet!';
};

DomElement.prototype.addElem = function (elem) {
  document.body.prepend(elem);
};



