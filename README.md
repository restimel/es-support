# es-support
A library which detects if the environment code supports the wanted ES version or ES features.

This is a very light library (~16KB) without any dependencies.

## Purpose

This library is mainly to check that the environment (browser or node) can run
the code in the ES version which is developed.

Its main purpose is to provide a message to user that its environment is too
old (displaying that message is not part of this library) or to propose a
fallback.

It can check the compatibility of a full ES version or only some feature part.

## Example

### Loading code only if it is supported

```javascript
import esSupport from 'es-support';

if (esSupport('ES2020')) {
    import(/* webpackChunkName: "app" */ './mainApp');
} else {
    console.error('Your environment does not support ES2020')
}
```
In this example, the application code will be loaded only if the
environment supports ES2020. Otherwise an error message is displayed in the
console but there is no ugly error (like syntax error).

### Doing some operations only if it is supported

```javascript
const val1 = '1234567890123450000';
const val2 = '100';
const reference = '1234567890123450050'
if (esSupport(['bigInt'])) {
    return BigInt(val1) + BigInt(val2) > BigInt(reference);
} else {
    return Number(val1) + Number(val2) > Number(reference);
}
```
In this example, the fallback gives a similar operation but may failed if
values are greater than Number.MAX_SAFE_INTEGER (which is the case in this
example).

### Knowing which feature are not supported

```javascript
const failed = esSupport.check(['ES2020', 'ES2021', 'ES2022'], 'details'));
if (failed.length) {
    console.log('These features are not supported: ', failed.join(', '));
}
```

## What about Modernizr?



## Installation

```console
$ npm install --save es-lint
```

Then you can import it in your files.
```javascript
import esSupport from 'es-support';
```
or
```javascript
const esSupport = require('es-support');
```

## Some cool features

* Typescript is natively supported
* Easy to use and to know which feature are failing
* Possibility to add your own tests or to override existing ones

## Options

The syntax is `esSupport(feature, returnType)`.

### feature

It can be the name of a feature or a list of feature.

Some of them includes several other features (like `'ES2021'` or `ES12` which
includes all feature tests about ES2021).

Names are case insensitive, so it can be written either `'es2022'` or `'ES2022'`.

### returnTypes

Depending of this value the output is changed.

* `'boolean'` _(default)_: returns true if all features are supported.
    Returns false if at least one feature is not supported.

* `'details'`: returns the list of all unsupported features in details.
    If ES2020 fails due to 'BigInt' it will returns 'BigInt'.

* `'feature'`: returns the list of all unsupported features as described in argument.
    If ES2020 fails due to 'BigInt' it will returns 'ES2020'.

## Add test supports

It is possible to add your own tests or to override existing ones.

```javascript
esSupport.add({
    name: 'custom-test',
    test: () => { return true; },
})
```

The argument can be a Feature object or an array of Feature objects (to add
several tests at once).

### Feature object

* `name` _{string}_: Name of the feature. If this name already exists it
overrides previous test.

* `test` _{Function}_: A function which is called to check if the feature is
supported. It should return either a boolean (`true` when the feature is
supported) or a string list which contains all unsupported features.
A boolean argument is provided, which means that we asked for details (and so
a list is expected as result, but it may return a boolean if there is no
sub-features tested).

## Contribution

Please make a pool request if you have found issues or if there are some
missing features.

https://github.com/restimel/es-support/issues
