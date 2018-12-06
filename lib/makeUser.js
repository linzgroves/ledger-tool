const program = require('commander');
const inquirer = require('inquirer');
const loginUser = require('./loginUser');

//Create an empty array that will be used to hold the user for the session
const user = [];

const userCreation = [
  {
    type: 'input',
    name: 'username',
    message: 'Create a username:'
  },
  {
    type: 'password',
    name: 'password',
    message: 'Create a password:'
  }
];

//Export the user array to the loginUser function so a check can be performed when they login
module.exports = function () {
  inquirer.prompt(userCreation).then(answers => {
    if(answers !== '') {
      user.push(answers);
      exports.user = user;
      console.log('User created. Ready to login.');
      loginUser()
    } else {
      makeUser()
    }
  });
};
