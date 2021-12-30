import { buildDict } from '@/common';
import { CheckFeature } from '@/Types';

const list: Map<string, CheckFeature> = new Map([
    ['bigint', function(): boolean {
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

    ['operator-nullish-coalescing', function(): boolean {
        try {
            eval('var test = null ?? 42;');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['operator-optional-chaining', function(): boolean {
        try {
            eval('var test = {}; test?.a;');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['promise-allsettled', function(): boolean {
        return typeof (Promise && Promise.allSettled) === 'function';
    }],

    ['string-matchall', function(): boolean {
        return typeof ''.matchAll === 'function';
    }],

    ['globalthis', function(): boolean {
        return typeof globalThis !== 'undefined';
    }],

    /* import-dynamic: dynamic import */
    /* import-meta: import.meta issue about how to test it because it needs to be inside module */
    /* export-namespace: module namespace export */
    /* for-in-order-revision: for-in order */

]);

export default buildDict(list, ['es-2020', 'es-11']);
