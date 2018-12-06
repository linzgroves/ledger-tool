const fs = require('fs');
const inquirer = require('inquirer');
const loginUser = require('./loginUser');
//Create a file in the tmp folder for activity to be written to
const writeStream = fs.createWriteStream("tmp/accountTransactions.txt");

//Initializing balance at 0 since each session is brand new so there's not a stored history
let balance = 0;

//Once logged in, user can navigate through the menu to the 4 options provided or log out
module.exports = MainMenu = () => {
  inquirer.prompt(
    {
      type: 'list',
      name: 'mainMenu',
      message: 'Main Menu',
      choices: [
        'Record a deposit',
        'Record a withdrawal',
        'Check balance',
        'See transaction history',
        new inquirer.Separator(),
        'Log out'
      ]
    }
  ).then((answers) => {
    if(answers.mainMenu === "Record a deposit") {
      recordDeposit()
    } else if(answers.mainMenu === "Record a withdrawal") {
      recordWithdrawal()
    } else if(answers.mainMenu === "Check balance") {
      checkBalance()
    } else if(answers.mainMenu === "See transaction history") {
      transactionHistory()
    } else {
      process.exit()
    }
  })
}

const depositDetails = [
  {
    type: 'input',
    name: 'Date',
    message: 'Enter the date of the deposit (MM/DD/YY):'
  },
  {
    type: 'input',
    name: 'Deposit',
    message: 'Enter the deposit amount (without a dollar sign):',
    filter: Number
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Enter a description to identify the deposit:'
  }
];

//Deposits and withdrawals are returned as objects so they need to be turned into
//strings so they can be written to the temp file that was created
const recordDeposit = () => {
  inquirer.prompt(depositDetails).then(answers => {
    balance += answers.Deposit;
    answers = JSON.stringify(answers);
    writeStream.write(answers);
    console.log("Deposit logged. Returning to main menu.");
    MainMenu()
  });
};

const withdrawalDetails = [
  {
    type: 'input',
    name: 'Date',
    message: 'Enter the date of the withdrawal (MM/DD/YY):'
  },
  {
    type: 'input',
    name: 'Withdrawal',
    message: 'Enter the withdrawal amount (without a dollar sign):',
    filter: Number
  },
  {
    type: 'input',
    name: 'Description',
    message: 'Enter a description to identify the withdrawal:'
  }
];

const recordWithdrawal = () => {
  inquirer.prompt(withdrawalDetails).then(answers => {
    balance -= answers.Withdrawal;
    answers = JSON.stringify(answers);
    writeStream.write(answers);
    console.log("Deposit logged. Returning to main menu.");
    MainMenu()
  });
};

const checkBalance = () => {
    console.log("Balance is: $" + balance);
    MainMenu();
};

const transactionHistory = () => {
    fs.readFile('tmp/accountTransactions.txt', 'utf8', function(err, data) {
      console.log("\n" + data);
    });
    MainMenu();
};
