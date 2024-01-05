const url = require('url');
const querystring = require('querystring');

// url.parse()
const myUrl = url.parse('https://www.example.com/listing?id=1000&premium=true');
console.log(myUrl);

// output
// Url {
//   protocol: 'https:',
//   slashes: true,
//   auth: null,
//   host: 'www.example.com',
//   port: null,
//   hostname: 'www.example.com',
//   hash: null,
//   search: '?id=1000&premium=true',
//   query: 'id=1000&premium=true',
//   pathname: '/listing',
//   path: '/listing?id=1000&premium=true',
//   href: 'https://www.example.com/listing?id=1000&premium=true'
// }

// url.format()
const myUrl2 = url.format({
  protocol: 'https:',
  hostname: 'www.exmaple.com',
  pathname: '/listing',
  query: {
    id: 1000,
    premium: true
  }
});

console.log(myUrl2);

// querystring.parse()
const myQuery = querystring.parse('id=1000&premium=true');
console.log(myQuery);

// querystring.stringify()
const myQuery2 = querystring.stringify({
  id: 1000,
  premium: true
});

console.log(myQuery2);