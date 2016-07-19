# goldquote

### Get Current Spot price of gold.

A Node.js module gets the current price of Gold

### Support

If you're using this module, feel free to contact me on twitter if you have any questions! :) [@litzenberger](http://twitter.com/litzenberger)

Current Version: 0.2.0

Tested on: node 0.10.26


### What it Does

This module uses web scraping to get the latest price of Gold.  


### Quick example

```JavaScript
var goldquote = require('goldquote')

// log the current price of gold
goldquote(function(price){console.log(price)});


```


## Install

```sh
npm install goldquote
```


## Options

There are no options.

### Examples:

```JavaScript
var goldquote = require('goldquote')

goldquote(function(price){console.log(price)});


## How it Works

The module will scrape a gold website for current price and send that back.
