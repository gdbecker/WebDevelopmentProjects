## 08 - Property Flags and Descriptors

### Topics Covered

- getOwnPropertyDescriptor() & getOwnPropertyDescriptors() for objects
- How to set the flags for these and view

| Flag         | Description                                                                                |
| ------------ | ------------------------------------------------------------------------------------------ |
| Configurable | if `true`, the property can be deleted and these attributes can be modified, otherwise not |
| Enumerable   | if `true`, the property will be returned in a `for...in` loop, otherwise not               |
| Writable     | if `true`, the value of the property can be changed, otherwise not                         |
| Value        | the value of the property                                                                  |
