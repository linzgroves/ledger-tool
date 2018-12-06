const inquirer = require('inquirer');
const makeUser = require('./makeUser');
const MainMenu = require('./mainMenu');

const userLogin = [
  {
    type: 'input',
    name: 'username',
    message: 'Enter your username:'
  },
  {
    type: 'password',
    name: 'password',
    message: 'Enter your password:'
  }
];

//Check that what was entered was correct and if not, remove it from the array so they can retry
module.exports = function login() {
  inquirer.prompt(userLogin).then(answers => {
    makeUser.user.push(answers);
      if((makeUser.user[0].username === makeUser.user[1].username) &&
          (makeUser.user[0].password === makeUser.user[1].password)) {
          console.log('Logged in. Showing main menu.');
          MainMenu()
        } else {
          makeUser.user.pop(answers);
          console.log('Login was incorrect. Try again.');
          login()
        }
  });
};
