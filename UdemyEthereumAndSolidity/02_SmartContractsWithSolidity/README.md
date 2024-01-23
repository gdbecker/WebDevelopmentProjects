## Section 02 - Smart Contracts with Solidity

### [Request Ether from Ethereum Sepolia Faucet](https://sepoliafaucet.com/)

### Truffle

- Undergoing rapid development
- Some things don't work well
- Some things don't work at all
- Stuff breaks - patience is required
- This is true of all current Ethereum tech
  - Constant state of flux as things get figured out

### Project 1: Inbox -> Boilerplate Design

| Issue                                                                                             | Solution                                                              |
| ------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Need to be able to write Solidity code in a JavaScript project                                    | Set up the Solidity compiler to buld our contracts                    |
| Need some way to rapidly test contracts without doing the manual testing we were doing with Remix | Set up a custom Mocha test runner that can somehow test Solidity code |
| Need some way to deploy our contract to public networks                                           | Set up a deploy script to compile + deploy our contract               |

### Web3 Versioning FYI

- v0.x.x
  - "Primitive" interface - only callbacks for async code
- v1.x.x (the one we're using)
  - Support for promises + async/await
  - every function we call will be asynchronous in nature

### Mocha testing Functions

| Function   | Purpose                          |
| ---------- | -------------------------------- |
| it         | Run a test and make an assertion |
| describe   | Groups together 'it' functions   |
| beforeEach | Execute some general setup code  |

### External Account to Create Contract Transaction

| Term              | Definition                                                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| nonce             | How many times the sender has sent the transaction                                                                              |
| to                | [BLANK] for smart contract deployments                                                                                          |
| data              | Compiled bytecode of the contract                                                                                               |
| value             | Amount of ether to send to the target address                                                                                   |
| gasPrice          | Amount of ether the sender is willing to pay per unit gas to get this transaction processed                                     |
| startGas/gasLimit | Units of gas that this transaction can consume                                                                                  |
| v & r & s         | Cryptographic pieces of data that can be used to generate the sender's account address. Generated from the sender's private key |

### Web3 with Contracts

| Goal                            | ABI | Bytecode | Address of deployed contract |
| ------------------------------- | --- | -------- | ---------------------------- |
| Interact with deployed contract | Yes | No       | Yes                          |
| Create a contract               | Yes | Yes      | No                           |

### [Infuria: get API keys to connect to Ethereum networks](https://app.infura.io/)

### Contract deployed!!

- Address: 0xd45eBc82dA236936506C94b15a8c73296744b4dA
- On [Etherscan](https://etherscan.io/address/0xd45eBc82dA236936506C94b15a8c73296744b4dA)
