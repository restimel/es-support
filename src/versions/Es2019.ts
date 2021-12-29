import { buildDict } from '@/common';
import { CheckFeature } from '@/Types';

const list: Map<string, CheckFeature> = new Map([
    ['stringTrimStart', function(): boolean {
        return typeof ''.trimStart === 'function';
    }],

    ['stringTrimEnd', function(): boolean {
        return typeof ''.trimEnd === 'function';
    }],

    ['objectFromEntries', function(): boolean {
        return typeof Object.fromEntries === 'function';
    }],

    ['arrayFlat', function(): boolean {
        return typeof [].flat === 'function';
    }],

    ['arrayFlatMap', function(): boolean {
        return typeof [].flatMap === 'function';
    }],

    ['symbolDescription', function(): boolean {
        return Symbol && Symbol('e').description === 'e';
    }],

    ['stringLineSeparator', function(): boolean {
        try {
            /* \u2028 → line separator
            * \u2029 → paragraph separator */
            eval('"\u2028\u2029"');
            return true;
        } catch (err) {
            return false;
        }
    }],

    ['optionalCatch', function(): boolean {
        try {
            eval('try { "" } catch { "" }');
            return true;
        } catch (err) {
            return false;
        }
    }],

    ['jsonUTF8', function(): boolean {
        return JSON.stringify('\uD83D') === '"\\ud83d"';
    }],


/* Correct Array sort is not checkable */

    ['functionToString', function(): boolean {
        const str = 'function /* a comment */ foo() { "" }';
        return eval(`${str} foo.toString() === '${str}'`);
    }],
]);

export default buildDict(list, ['ES2019', 'ES10']);
