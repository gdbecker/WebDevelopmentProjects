// updated ganache and web3 imports added for convenience
const ganache = require("ganache");
const { Web3 } = require("web3");
const assert = require("assert");
const { interface, bytecode } = require("../compile");

// contract test code will go here
// Web3 provider variable changes on which network you're connecting to
const web3 = new Web3(ganache.provider());

// testing our smart contract
let accounts; 
let inbox;
const initialString = 'Hi there!';

beforeEach(async () => {
  // get a list of all accounts
  accounts = await web3.eth.getAccounts();
  
  // use one of those accounts to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: [initialString] })
    .send({ from: accounts[0], gas: "1000000" });
});

describe('Inbox', () => {
  it('deploys a contract', () => {
    // testing for a truthy value
    assert.ok(inbox.options.address);
  });

  it('has a default message', async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, initialString);
  });

  it('can change the message', async () => {
    await inbox.methods.setMessage('bye').send({ from: accounts[0] });
    const message = await inbox.methods.message().call();
    assert.equal(message, 'bye');
  });
})

// // trial run using Mocha tests
// class Car {
//   park() {
//     return "stopped";
//   }

//   drive() {
//     return "vroom";
//   }
// }

// let car;

// // runs before each test
// beforeEach(() => {
//   car = new Car();
// });

// describe("Car", () => {
//   it("can park", () => {
//     assert.equal(car.park(), "stopped");
//   });

//   it('can drive', () => {
//     assert.equal(car.drive(), "vroom");
//   });
// });
