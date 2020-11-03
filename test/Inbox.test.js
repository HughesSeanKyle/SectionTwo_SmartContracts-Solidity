//assert - another standard module built into node runtime
const assert = require('assert');
//ganache - local ethereum test network.
const ganache = require('ganache-cli');
//Capital W in Web3 refers to a constructor function
//Constructor used to create instances of web3 lib
  //instance of Web3 will be a lowercase w - convention.
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
  //Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  //use one of these accounts to deploy contract
  inbox = new web3.eth.Contract(JSON.parse(interface))
  .deploy({ data: bytecode, arguments: ['Hi there!'] })
  .send({ from: accounts[0], gas: '1000000' })
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    console.log(inbox);
  });
});
















/*
1. One instance of web3 connects to the particular test or main network you wich to connect to. 
2. Provider - Communitation layer between Web3 lib and some specific ethereum network.
3. The assert module provides a way of testing expressions. If the expression evaluates to 0, or false, an assertion failure is being caused, and the program is terminated. This module was built to be used internally by Node.
4. Almost every function that is called with web3 is asynchronous which means it will return a promise.  
*/
