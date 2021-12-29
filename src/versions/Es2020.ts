import { buildDict } from '@/common';
import { CheckFeature } from '@/Types';

const list: Map<string, CheckFeature> = new Map([
    ['bigInt', function(): boolean {
        if (typeof BigInt !== 'function') {
            return false;
        }
        try {
            eval('var test = 10n;');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['nullishCoalescing', function(): boolean {
        try {
            eval('var test = null ?? 42;');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['optionalChaining', function(): boolean {
        try {
            eval('var test = {}; test?.a;');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['promiseAllSettled', function(): boolean {
        return typeof (Promise && Promise.allSettled) === 'function';
    }],

    ['stringMatchAll', function(): boolean {
        return typeof ''.matchAll === 'function';
    }],

    ['globalThis', function(): boolean {
        return typeof globalThis !== 'undefined';
    }],

    /* dynamic import */
    /* module namespace export */
    /* for-in order */
    /* import.meta issue about how to test it because it needs to be inside module */

]);

export default buildDict(list, ['ES2020', 'ES11']);
