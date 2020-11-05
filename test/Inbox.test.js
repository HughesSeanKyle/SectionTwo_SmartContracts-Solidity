//assert - another standard module built into node runtime
const assert = require('assert');
//ganache - local ethereum test network.
const ganache = require('ganache-cli');
//Capital W in Web3 refers to a constructor function
//Constructor used to create instances of web3 lib
  //instance of Web3 will be a lowercase w - convention.
const Web3 = require('web3');


const provider = ganache.provider();
const web3 = new Web3(provider);

const { interface, bytecode } = require('../compile');

let accounts;
let inbox;

beforeEach(async () => {
  //Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  //use one of these accounts to deploy contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
  .deploy({ data: bytecode, arguments: ['Hi there!'] })
  .send({ from: accounts[0], gas: '1000000' })

  inbox.setProvider(provider);
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    assert.ok(inbox.options.address);
  });

  it('has a default message', async () => {
    const message = await inbox.methods.message().call();
    //checks if initial message equal to 'Hi there!'
    assert.equal(message, 'Hi there!');
  });
});








/*
1. One instance of web3 connects to the particular test or main network you wich to connect to. 
2. Provider - Communitation layer between Web3 lib and some specific ethereum network.
3. The assert module provides a way of testing expressions. If the expression evaluates to 0, or false, an assertion failure is being caused, and the program is terminated. This module was built to be used internally by Node.
4. Almost every function that is called with web3 is asynchronous which means it will return a promise. 
5. The 'ok' method makes an assertion that whatever is passed into the function is a value that exists. If null, test fails
6. The part of Ethereum that runs the smart contract instructions is called the EVM. ... The EVM reads a low-level representation of smart contracts called the Ethereum bytecode. The Ethereum bytecode is an assembly language made up of multiple opcodes. Each opcode performs a certain action on the Ethereum blockchain.
7. Methods in this scenario refers to the methods in the contract. Inbox and setMessage.
8. arguments: ['Hi there!'] - Initial message.
*/
