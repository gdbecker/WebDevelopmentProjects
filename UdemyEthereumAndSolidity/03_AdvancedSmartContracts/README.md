## Section 03 - Advanced Smart Contracts

### Basic Types in Solidity
|Name|Notes|Examples|
|-|-|-|
|string|Sequence of characters|"Hi there", "Chocolate"|
|bool|Boolean value|true, false|
|int|Integer, positive or negative; has no decimal|0, -300, 568398|
|uint|"Unsigned" integer, positive number; has no decimal|0, 300, 568398|
|fixed/ufixed|"Fixed" point number; number with a decimal after it|20.01, -42.65, 3.14|
|address|Has methods tied to it for sending money|0x18284j45847394n5h4kl373|

- The larger the type of int/unit you use, you have to pay for it so keep that in mind
- int == int256 (largest range)

### The 'msg' Global Variable
|Property Name|Description|
|-|-|
|msg.data|'Data' field from the call or transaction that invoked the current function|
|msg.gas|Amount of gas the current function invocation has available|
|msg.sender|Address of the account that started the current function invocation|
|msg.value|Amount of ether (in wei) that was sent along with the function invocation|

### Reference Types in Solidity
|Name|Notes|Examples|
|-|-|-|
|fixed array|Array that contains a single type of element. Has an unchanging length|int[3] --> [1,2,3]|
|dynamic array|Array that contains a single type of element. Can change in size over time|int[] --> [1,2,3]|
|mapping|Collection of key value pairs. Think of JavaScript objects, Ruby hashes or Python dictionary. All keys must be of the same type, and the values must be of the same type|mapping(string => string)|
|struct|Collection of key value pairs that can have different types|struct Car {string make; string model; unit value; }|

### Solidity General Notes
- Solidity does not have a random number generator built-in, so we have to make one ourselves (which means it's not quite as random as it would be in another language)

### [Etherscan Unit Converter](https://etherscan.io/unitconverter)