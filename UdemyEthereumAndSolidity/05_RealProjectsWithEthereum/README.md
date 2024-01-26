## Section 05 - Real Projects with Ethereum

### Custom 'Request' Struct
|Name|Type|Purpose|
|-|-|-|
|description|string|Describes why the request is being created|
|value|uint|Amount of money that the manager wants to send to the vendor|
|recipient|address|Address that the money will be sent to|
|complete|bool|True is the request has already been processed (money spent)|

### Storage and Memory
- Sometimes references where our contract stores data
- Sometimes references how our solidity variables store values
- Storage
  - Holds data between function calls
  - Pretty much like a computer's hard drive
- Memory
  - Temporary place to store data
  - Like a computer's RAM

### Search Time based on Data Structure
- Array
  - Linear time search
  - Larger the array, the more expensive (in gas) it will be to loop through
- Mapping
  - Constant time search
  - Stays at a reasonable price because even if the mapping gets larger, solidity will still be able to take a short amount of time to look up

### Mappings 'gotchas'
- Keys are not stored
- Values are not iterable
  - Cannot loop through
- "All values exist"
  - If you look up a key that technically doesn't exist, it will still return a default value - even though you didn't define a value for that key