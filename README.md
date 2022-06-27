# es-support
A library which detects if the environment code supports the wanted ES version
or ES features.

This is a very light library (~17KB) without any dependencies.

[![npm](https://img.shields.io/npm/v/es-support.svg)](https://www.npmjs.com/package/es-support)

## Purpose

This library is mainly to check that the environment (browser or NodeJs) can run
the code in the ES version which is developed.

Its main purpose is to provide a message to user that its environment is too
old (displaying that message is not part of this library) or to propose a
fallback.

It can check the compatibility of a full ES version or check only some listed
features.

## Examples

### Loading code only if it is supported

```javascript
import esSupport from 'es-support';

if (esSupport('ES2020')) {
    import(/* webpackChunkName: "app" */ './mainApp');
} else {
    console.error('Your environment does not support ES2020');
}
```
In this example, the application code will be loaded only if the
environment supports ES2020. Otherwise an error message is displayed in the
console but there is no ugly error (like syntax error).

### Doing some operations only if it is supported

```javascript
const val1 = '1234567890123450000';
const val2 = '100';
const reference = '1234567890123450050';
if (esSupport('BigInt')) {
    return BigInt(val1) + BigInt(val2) > BigInt(reference);
} else {
    return Number(val1) + Number(val2) > Number(reference);
}
```
In this example, the fallback gives a similar operation but may failed if
values are greater than Number.MAX_SAFE_INTEGER (which is the case in this
example).

### Knowing which features are not supported

```javascript
const failedFeatures = esSupport(['ES2020', 'ES2021', 'ES2022'], 'details'));
if (failedFeatures.length > 0) {
    console.log('These features are not supported: ', failedFeatures.join(', '));
}
```

## Some cool features

* Typescript is natively supported
* Easy to use and to know which features are failing
* Possibility to add your own tests or to override existing ones
* very light library without any dependencies

For information, the executed code is transpiled to run for ES5.

## What about Modernizr?

* Modernizr is much heavier (but it also does different tasks)
* It doesn't seems to be updated with latest ES features (I have not seen how
to check BigInt support)
* It cannot checks several features easily (like is the user browser supports
ES2020 features? you should explain them all explicitly (if it is possible))

The purpose of es-support is not to replace Modernizr, and so it won't
add classes in order to adapt CSS. If it is what you want you should add them
on your own.

### Why not using Babel or any other transpilers?

Transpilers rewrite code to another ES version (for example ES2018) because all
features cannot be transpiled to ES5 (for example BigInt cannot be transpiled).
But you may want to warn users with old environment which don't support these
ES versions that it won't work and explain why (even if they represent a very
small amount of your visitors).

You may also want to avoid the usage of such libraries because they are quite
heavy but you still want to inform your user that some features won't work if
they do not update their environment (browser or NodeJs).

### Why not using navigator.userAgent (browser only)?

Because this string is not reliable. And this is not a recommended solution.

Many browsers (like Vivaldi, Brave, ...) change this value in order to mimic
dominant browser, and you will probably forget to test some newly created
browsers (that you don't know yet) but they can run on your site perfectly.

Moreover this string may change on each browser version and so it is quite
annoying to maintain.

## Installation

```console
$ npm install --save es-support
```

Then you can import it in your files.
```javascript
import esSupport from 'es-support';
```
or
```javascript
const esSupport = require('es-support');
```

## How to use it?

The syntax is `esSupport(<featureName>, <returnType>)`.

### featureName

It can be the name of a feature or a list of feature names.

Some of them includes several other features like `'ES2021'` (or `ES12`) which
includes all feature tests about ES2021.

Names are case insensitive, so it can be written either `'es2022'` or `'ES2022'`.

You can read the [Features guide](./doc/features.md) to know all available values.

### returnTypes

Depending on this value the output is changed.

* `'boolean'` _(default)_: returns true if all features are supported.
    Returns false if at least one feature is not supported.

* `'details'`: returns the list of all unsupported features in details.
    If ES2020 fails due to 'BigInt' it will returns 'BigInt'.

* `'feature'`: returns the list of all unsupported features as described in argument.
    If ES2020 fails due to 'BigInt' it will returns 'ES2020'.

## Add test supports

It is possible to add your own tests or to override existing ones.

Syntax is `esSupport.add(<feature>)`

```javascript
esSupport.add({
    name: 'custom-test',
    test: () => {
        if (supported) {
            return true;
        }
        return false;
    },
});

// later it can be checked with:
esSupport('custom-text');
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

## Disabling features

It is possible to disable a feature with `disable` method.
A disabled feature won't be called and will be considered as valid.

It is possible to re-enable a feature with `enable` method.

Both methods accept as argument the feature name or a list of feature names.

```javascript
/* Disable BigInt and globalThis */
esSupport.disable(['BigInt', 'globalthis']);

esSupport('ES2020'); // will return true even if BigInt and globalThis are not supported (if other ES2020 features are supported)

esSupport('BigInt'); // will always return true because the feature is disabled

/* Re-enable BigInt */
esSupport.enable('BigInt');

esSupport('BigInt'); // will return true only if it is supported
esSupport('globalThis'); // will always return true because the feature is still disabled

```

## Known issues

If your site is using Content Security Policy (CSP) and forbid the usage of
`eval`, then some tests may fail (by throwing an error).
```error
Uncaught EvalError: Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src XXX"
```

Indeed in order to test some particular syntax that environment may not known
`eval` is used in many tests.

You can find the list of all features which are tested with `eval` in the
[Features guide](./doc/features.md) where the name are followed by
_<span style="color: yellow">*</span>_.

Possible fix:

* Change your CSP configuration, to accept `eval` for the bundle which
contains es-support.
* Do not use the features which are using `eval`.
* or, Override these features with functions which return `true` (if you find
a way to test the feature without using eval, you can send it via pool request
to improve the code 😊).

## Contribution

Please make a pool request if you have found issues or if there are some
missing test features.

https://github.com/restimel/es-support/issues
