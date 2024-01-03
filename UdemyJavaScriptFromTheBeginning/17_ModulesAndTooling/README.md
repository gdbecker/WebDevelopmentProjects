## Section 17: Modules and Tooling

### What are modules?

- Modules are just JavaScript files that we can import into other JavaScript files
- We can export and import things like variables, functions, and classes
- We can also import 3rd-party packages from NPM (Node Package Manager)

### Why use modules and tooling?

- Makes your code much more organized and easy to read/write by breaking it up into separate files
- Reusability
- NPM packages
- Optimization
- Customized environment

### Types of modules

- Common JS modules: commonly used by Node.js
- ES modules (ESM, ES6 modules): commonly used in the front-end
- Modules are not supported in older browsers. There is support for ES modules in newer browsers, but it is still recommended to use a module bundler

### What is Node.js?

- Node is a JavaScript runtime environment. It allows JavaScript to run on the server, much like any other language such as Python, Ruby, Java, etc.
- Node uses the V\* JS engine, which is the same engine that Chrome uses
- The inner workings are similar to the browser, since it uses the V8 engine. Obviously there is not 'Window' or 'Document' in Node

### Topics Covered in this Section

- [Common JS Modules](./01-CommonJSModules/)
- [NPM Packages](./02-NPMPackages/)
- [ES Modules](./03-ESModules/)
- [Module Bundlers](./04-ModuleBundlers/)
- [Webpack Basic Setup](./05-WebpackBasicSetup/)
