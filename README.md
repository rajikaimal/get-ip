# get-ip [![Build Status](https://travis-ci.org/rajikaimal/get-ip.svg?branch=master)](https://travis-ci.org/rajikaimal/get-ip)

Get IP address of a HTTP request object

## Install

```
npm install --save get-ip
```

## Usage

```js
const app = require('express')();
const getIp = require('get-ip');

app.get('/', function(req, res) {
  const ip = getIp(req);
});
```

## API

### getIp(requestObject)

Return IP address of request

#### requestObject

Type: `object`

Request object

## License

MIT © [Rajika Imal](https://rajikaimal.github.io)
