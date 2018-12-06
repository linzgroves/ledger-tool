#!/usr/bin/env node

const inquirer = require('inquirer');
const program = require('commander');
const makeUser = require('./lib/makeUser');

// Kicks off session where user can create an account
program
  .command('startSession')
  .description('Starts session to create user account')
  .action(function () {
    makeUser();
  });

program.parse(process.argv)
