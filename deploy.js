// V54 - Wallet Provider Setup
const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const keys = require('./config/keys');

const provider = new HDWalletProvider(
    keys.metaMaskMnemonic,
    keys.InfuraLinkRinkeby
);
const web3 = new Web3(provider);