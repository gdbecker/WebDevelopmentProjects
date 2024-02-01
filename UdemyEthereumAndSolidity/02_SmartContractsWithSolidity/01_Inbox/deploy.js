// updated web3 and hdwallet-provider imports added for convenience
const HDWalletProvider = require("@truffle/hdwallet-provider");
const { Web3 } = require("web3");
const { interface, bytecode } = require("./compile");

// deploy code will go here
const provider = new HDWalletProvider(
  'love calm meat review road power away enough spoil write glad medal',
  'https://sepolia.infura.io/v3/928bb3b89989403fa2c9093aec2066b3'
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['Hi there!'] })
    .send({ gas: '1000000', from: accounts[0] });

  console.log("Contract deployed to address:", result.options.address);
  provider.engine.stop();
};

deploy();