'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data

const account1 = {
    ower: 'Jonas Schmedtmann',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2,
    pin: 1111,
};
  
const account2 = {
    ower: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    cashBackRate: 1.5,
    pin: 2222,
  };
  
 
const account3 = {
    ower: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
};
  
const account4 = {
    ower: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
};
  


const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumCashback = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransfetTo = document.querySelector('.form__input--to');
const inputTransfetAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan--amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////


// Functions


function displayMovements(movements) {
    containerMovements.innerHTML = '';
    // Creat elements
    movements.forEach(move => {
      let type = move > 0 ? 'deposit' : 'withdrawal';
      const html = `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">
            1 ${type}
          </div>
          <div class="movements__date">24/01/2037</div>
          <div class="movements__value">${move}$</div>
        </div>
        `;
      //interAdjacenHtml
      containerMovements.insertAdjacentHTML('afterbegin', html);
    });
    
  }
    function displayBalance(movements) {
      let balance = movements.reduce((acc, element) => acc + element, 0);
      labelBalance.textContent = `${balance}$`;
    }
  
  function displaySummary(account) {
      // income
      const income = account.movements
      .filter(move => move > 0)
      .reduce((acc, val) => acc + val, 0);
      
      labelSumIn.textContent = `${income}$`;
      
      // outcome
      const outcome = account.movements
      .filter(move => move < 0)
      .reduce((acc, val) => acc + val, 0);
      
      labelSumOut.textContent = `${Math.abs(outcome)}$`;
      
      const cashBack = account.movements
      .filter(move => move > 0)
      .map(move => move * (account.cashBackRate / 100))
      .filter(cash => cash > 1)
      .reduce((acc, val) => acc + val);
      
      labelSumCashback.textContent =` ${cashBack}$`;
  }
  
  displayMovements(account1.movements);
  displayBalance(account1.movements);
  displaySummary(account1);

////////////////////////////////////////////////
//LECTURES
  const currencies = new Map([
    ['USD', 'United Statas dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pount sterling'],
  ]);
  
  const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
  
  /////////////////////////////////////////////////
  // Functions
