## Section 01 - What is Ethereum?

### A bit of history

- Bitcoin: a peer-to-peer electronic cash system
  - "White paper" describing a system to allow peer to peer payments without a financial intermediary (like a bank)
  - Cited transaction reversals as an issue with online commerce - the ability of customers to 'charge back' a purchase
- Ethereum: the ultimate smart contract and decentralized application platform
  - "White paper" discusses need for more programmatic control over transactions
  - Wanted to enable creation of 'decentralized autonomous corporations' (DAC)
  - Introduced the idea of 'Smart Contracts' as an entity that can send and receive currency, beyond just humans

### What is Ethereum?

- Ethereum networks are used to transfer money and store data
- There are many different Ethereum networks
- Networks are formed by one or more nodes
- Each node is a machine running an ethereum client
- Anyone can run a node
- Each node can contain a full copy of the blockchain
- The 'blockchain' is a database that stores a record of every transaction that has ever taken place

### Connecting to Ethereum networks

- for developers: web3.js
- for consumers: Metamask, Mist Browser

### [Request Ether from Ethereum Sepolia Faucet](https://sepoliafaucet.com/)

- Register/login with Google

### What is a transaction?

| Term              | Definition                                                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| nonce             | How many times the sender has sent the transaction                                                                              |
| to                | Address of account this money is going to                                                                                       |
| value             | Amount of ether to send to the target address                                                                                   |
| gasPrice          | Amount of ether the sender is willing to pay per unit gas to get this transaction processed                                     |
| startGas/gasLimit | Units of gas that this transaction can consume                                                                                  |
| v & r & s         | Cryptographic pieces of data that can be used to generate the sender's account address. Generated from the sender's private key |

### Contract Account

| Field   | Description                        |
| ------- | ---------------------------------- |
| balance | Amount of ether this account owes  |
| storage | Data storage for this contract     |
| code    | Raw machine code for this contract |

### Solidity Programming Language

- Written in .sol files
- Strongly typed
- Similar to JavaScript
- Has several huge, gigantic 'gotchas'

### [Remix Online IDE](https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.4.17+commit.bdeb9e52.js&language=Solidity)

### Solidity: Common Function Types

| Type     | Description                                                              |
| -------- | ------------------------------------------------------------------------ |
| public   | Anyone can call this function; can only use one per function             |
| private  | Only this contract can call this function; can only use one per function |
| view     | This function returns data and does not modify the contract's data       |
| constant | This function returns data and does not modify the contract's data       |
| pure     | Function will not modify or even read the contract's data                |
| payable  | When someone calls this function they might send ether along             |

- Constructor functions are run immediately on a smart contract's deployment

### Solidity's 'gotchas'

- Whenever you define a storage variable with a public keyword, then the contract will automatically have a function to grab that variable
  - So having a "getVariable()" function for a public variable ends up being redundant
-

### What happens when you deploy a contract?

- Creating and deploying a contract is very similar to usual web3 money transactions
- Still has attributes like nonce, to, gasPrice, etc. Adds in the 'data' attribute

| Term              | Definition                                                                                                                      |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| nonce             | How many times the sender has sent the transaction                                                                              |
| to                | [BLANK] for smart contract deployments                                                                                          |
| data              | Compiled bytecode of the contract                                                                                               |
| value             | Amount of ether to send to the target address                                                                                   |
| gasPrice          | Amount of ether the sender is willing to pay per unit gas to get this transaction processed                                     |
| startGas/gasLimit | Units of gas that this transaction can consume                                                                                  |
| v & r & s         | Cryptographic pieces of data that can be used to generate the sender's account address. Generated from the sender's private key |

### Running Contract Functions

- In the real world, submitting a transaction takes at least 15-30 seconds for that data to process: to write that new data to the Ethereum network
- In test/development environment, this usually happens instantly

| 'Calling a function'              | Sending a Transaction to a Function |
| --------------------------------- | ----------------------------------- |
| Cannot modify the contract's data | Can modify a contract's data        |
| Can return data                   | Takes time to execute               |
| Runs instantly                    | Returns the transaction hash        |
| Free to do!                       | Costs money!                        |

### [Ethereum Unit Converter](https://eth-converter.com/)

### Gas

- gasPrice = amount of Wei the sender is willing to pay per unit gas to get this transaction processed
- startGas / gasLimit = units of gas that this transaction can consume
- Whoever is deploying the transaction is the one who's paying the gas price

### [Mnemonic Code Converter](https://iancoleman.io/bip39/)
