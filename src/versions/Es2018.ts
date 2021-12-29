import { buildDict } from '@/common';
import { CheckFeature } from '@/Types';

const list: Map<string, CheckFeature> = new Map([
    ['regexpSingleLineFlag', function(): boolean {
        try {
            eval('/test/s');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['regexpNamedGroup', function(): boolean {
        try {
            eval('/(?<test>test)/');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['regexpLookBehind', function(): boolean {
        try {
            eval('/(?<=test)test)/');
            eval('/(?<!test)test)/');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['regexpUnicodePropertyEscape', function(): boolean {
        try {
            eval('/\\p{Alphabetic}\\P{Script=Greek}/');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['objectSpread', function(): boolean {
        try {
            eval('var o1 = {a: 1, b: 2}; var a = {...o1, c: 3};');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['objectRestInitialization', function(): boolean {
        try {
            eval('var {a, ...n} = {a: 1, b: 2, c: 3};');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['promiseFinally', function(): boolean {
        const p = Promise.resolve(1);
        return typeof p.finally === 'function';
    }],

    ['asynchronousIteration', function(): boolean {
        try {
            eval(`
function *test () {
    yield Promise.resolve(1);
    yield Promise.resolve(2);
};
(async function () {
    for await (var x of test()) {}
})();`);
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['tagTemplateLiteralRevision', function(): boolean {
        try {
            eval('var test = function() {}; test`\\ultimate`');
            return true;
        } catch(err) {
            return false;
        }
    }],

]);

export default buildDict(list, ['ES2018', 'ES9']);
