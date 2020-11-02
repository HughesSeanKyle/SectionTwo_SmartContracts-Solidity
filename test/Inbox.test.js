//assert - another standard module built into node runtime
const assert = require('assert');
//ganache - local ethereum test network.
const ganache = require('ganache-cli');
//Capital W in Web3 refers to a constructor function
//Constructor used to create instances of web3 lib
  //instance of Web3 will be a lowercase w - convention.
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

//-------------------Example test with Mocha--------------------
class Car {
  park() {
    return 'stopped';
  }

  drive() {
    return 'vroom';
  }
}

let car;

//Logic will be executed before any logic in it stmt
  //Runs once, then it, runs again then 2nd it
beforeEach(() => {
  car = new Car();
});

//describe will group together it stmts
describe('Car', () => {
  it('can park', () => {
    assert.equal(car.park(), 'stopped');
  });

  it('can drive', () => {
    assert.equal(car.drive(), 'vroom');
  });
});
//-------------------Example test with Mocha--------------------















/*
1. One instance of web3 connects to the particular test or main network you wich to connect to. 
2. Provider - Communitation layer between Web3 lib and some specific ethereum network.
3. The assert module provides a way of testing expressions. If the expression evaluates to 0, or false, an assertion failure is being caused, and the program is terminated. This module was built to be used internally by Node.
*/
