const HDWalletProvider = require("@truffle/hdwallet-provider");
const { Web3 } = require("web3");
const compiledFactory = require("./build/CampaignFactory.json");

const provider = new HDWalletProvider(
  "love calm meat review road power away enough spoil write glad medal",
  // remember to change this to your own phrase!
  "https://sepolia.infura.io/v3/928bb3b89989403fa2c9093aec2066b3",
  // remember to change this to your own endpoint!
);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  const result = await new web3.eth.Contract(compiledFactory.abi)
    .deploy({ data: compiledFactory.evm.bytecode.object })
    .send({ gas: "1400000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};

deploy();

// deployed contract address
// old: 0x6C21F54d424592EDDd8745Fe14aA3a5B4638e29e
// old: 0x2e9B013beA544E33c05F3b46B3E4c047Af11ef6F
// Contract deployed to 0x8CDb504360199aB2A75b8229750e60A7441342f9
