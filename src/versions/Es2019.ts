import { buildDict } from '@/common';
import { CheckFeature } from '@/Types';

const list: Map<string, CheckFeature> = new Map([
    ['string-trimStart', function(): boolean {
        return typeof ''.trimStart === 'function';
    }],

    ['string-trimEnd', function(): boolean {
        return typeof ''.trimEnd === 'function';
    }],

    ['object-fromentries', function(): boolean {
        return typeof Object.fromEntries === 'function';
    }],

    ['array-flat', function(): boolean {
        return typeof [].flat === 'function';
    }],

    ['array-flatmap', function(): boolean {
        return typeof [].flatMap === 'function';
    }],

    ['symbol-description', function(): boolean {
        return Symbol && Symbol('e').description === 'e';
    }],

    ['string-line-separator', function(): boolean {
        try {
            /* \u2028 → line separator
            * \u2029 → paragraph separator */
            eval('"\u2028\u2029"');
            return true;
        } catch (err) {
            return false;
        }
    }],

    ['optional-catch', function(): boolean {
        try {
            eval('try { "" } catch { "" }');
            return true;
        } catch (err) {
            return false;
        }
    }],

    ['json-utf8', function(): boolean {
        return JSON.stringify('\uD83D') === '"\\ud83d"';
    }],

    ['function-tostring-revision', function(): boolean {
        const str = 'function /* a comment */ foo() { "" }';
        return eval(`${str} foo.toString() === '${str}'`);
    }],

    /* array-sort-revision: Correct Array sort is not checkable */

]);

export default buildDict(list, ['es-2019', 'es-10']);
