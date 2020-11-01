//assert - another standart module built into node runtime
const assert = require('assert');
//ganache - local ethereum test network.
const ganache = require('ganache-cli');
//Capital W in Web3 refers to a constructor function
//Constructor used to create instances of web3 lib
  //instance of Web3 will be a lowercase w - convention.
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());


















/*
1. One instance of web3 connects to the particular test or main network you wich to connect to. 
2. Provider - Communitation layer between Web3 lib and some specific ethereum network.
*/
