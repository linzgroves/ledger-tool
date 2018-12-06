# Ledger CLI Tool

Simple tool to run basic workflows for a bank ledger.

## Description

A Node.js tool that can be run via the command line that allows the following workflows to take place:
* Create an account
* Login to the account
* Record a deposit
* Check balance
* See transaction history
* Log out

The tool uses temporary data so an account created cannot be logged back into with the current version of this tool.

### Installing

```
npm install ledger-tool
```

### Executing program

To begin, run:
```
ledger startSession
```
The tool will guide you through the workflows, starting with creating and account and then logging in with those credentials.
Once you're logged in, you'll be taken to a menu where you can move through the workflows and eventually log out when you're done.

## Help

Currently, since there's only one command to get the app going, no --help commands were provided. However, there are a few statements printed out that should guide the user.

## Authors

Lindsay Groves

## Version History

* 0.1
    * Initial Release

## License

This project is licensed under the MIT License - see the LICENSE.md file for details

## Acknowledgments

Inspiration, code snippets, etc.
* [A helpful start](https://timber.io/blog/creating-a-real-world-cli-app-with-node/)
* [Another great resource](https://medium.freecodecamp.org/writing-command-line-applications-in-nodejs-2cf8327eee2)
