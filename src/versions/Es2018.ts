import { buildDict } from '@/common';
import { CheckFeature } from '@/Types';

const list: Map<string, CheckFeature> = new Map([
    ['regexp-single-line-flag', function(): boolean {
        try {
            eval('/test/s');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['regexp-named-group', function(): boolean {
        try {
            eval('/(?<test>test)/');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['regexp-lookbehind', function(): boolean {
        try {
            eval('/(?<=test)test)/');
            eval('/(?<!test)test)/');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['regexp-unicode-property-escape', function(): boolean {
        try {
            eval('/\\p{Alphabetic}\\P{Script=Greek}/');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['object-spread', function(): boolean {
        try {
            eval('var o1 = {a: 1, b: 2}; var a = {...o1, c: 3};');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['object-rest-initialization', function(): boolean {
        try {
            eval('var {a, ...n} = {a: 1, b: 2, c: 3};');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['promise-finally', function(): boolean {
        const p = Promise.resolve(1);
        return typeof p.finally === 'function';
    }],

    ['asynchronous-iteration', function(): boolean {
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

    ['tag-template-literal-revision', function(): boolean {
        try {
            eval('var test = function() {}; test`\\ultimate`');
            return true;
        } catch(err) {
            return false;
        }
    }],

]);

export default buildDict(list, ['es-2018', 'es-9']);
