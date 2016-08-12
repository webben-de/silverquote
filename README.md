# silverquote
![build](https://travis-ci.org/geisslercom/silverquote.svg?branch=master)
### Get Current Spot price of silver.

A Node.js module to get the current price of silver

### What it Does

This module uses web scraping to get the latest price of silver.  


### Quick example

```JavaScript
var silverquote = require('silverquote')

// log the current price of silver
silverquote(function(err,price){
	console.log(price)
});


```


## Install

```sh
npm install silverquote
```


## Options

There are no options.

### Examples:

```JavaScript
var silverquote = require('silverquote')

silverquote(function(price){console.log(price)});

## Tests
```
npm install
npm test
```

## How it Works

The module will scrape a gold website for current price and send that back.
