# backbone.namedconstructor

[![Build Status](https://travis-ci.org/tanem/backbone.namedconstructor.png?branch=master)](https://travis-ci.org/tanem/backbone.namedconstructor)
[![NPM version](https://badge.fury.io/js/backbone.namedconstructor.svg)](http://badge.fury.io/js/backbone.namedconstructor)

Give your Backbone object a named constructor, so you can make sense of it in the dev tools console.

## Installation

```
$ npm install backbone.namedconstructor
```

## Example

```js
var Backbone = require('backbone');
require('backbone.namedconstructor');

var Model = Backbone.Model.extend({ constructorName: 'Foo' });
console.log(new Model().constructor.name);
// 'Foo'
```

So, instead of:

![](https://raw.github.com/tanem/backbone.namedconstructor/master/no-named-constructor.png)

You'll see:

![](https://raw.github.com/tanem/backbone.namedconstructor/master/named-constructor.png)

## Tests

```
$ npm test
```

## Credit

The basis for this module was [this great Stack Overflow answer](http://stackoverflow.com/a/15034014) given by [Dan Malcolm](http://stackoverflow.com/users/146280/dan-malcolm). Cheers!
