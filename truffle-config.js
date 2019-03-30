const path = require('path');
const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = 'fatigue mouse minute fitness click action marine razor vivid give wolf ginger';

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    ganache: {
      host: "localhost",
      port: 8545,
      network_id: "*"
    },
    ropsten: {
      provider: () => new HDWalletProvider(mnemonic, 'https://ropsten.infura.io/cc50593d72164f60aba302a87a64b3c4'),
      network_id: '3',
      gas: 4500000,
      gasPrice: 10000000000,
    }
  },
  compilers: {
    solc: {
      version: "0.5.0"
    }
  },
  contracts_build_directory: path.join(__dirname, "app/src/contracts"),
};
