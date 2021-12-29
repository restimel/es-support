import { buildDict } from '@/common';
import { CheckFeature } from '@/Types';

const list: Map<string, CheckFeature> = new Map([
    ['asyncAwait', function(): boolean {
        try {
            eval(`
async function test() {
    return await Promise.resolve(1);
} test();`);
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['objectEntries', function(): boolean {
        return typeof Object.entries === 'function';
    }],

    ['objectValues', function(): boolean {
        return typeof Object.values === 'function';
    }],

    ['stringPadStart', function(): boolean {
        return typeof ''.padStart === 'function';
    }],

    ['stringPadEnd', function(): boolean {
        return typeof ''.padEnd === 'function';
    }],

    ['functionTrailingComma', function(): boolean {
        try {
            eval('function test(a,b,) {}');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['objectGetOwnPropertyDescriptors', function(): boolean {
        return typeof Object.getOwnPropertyDescriptors === 'function';
    }],

    ['SharedArrayBuffer', function(): boolean {
        return typeof SharedArrayBuffer === 'function';
    }],

    ['Atomics', function(): boolean {
        return typeof Atomics === 'function';
    }],
]);

export default buildDict(list, ['ES2017', 'ES8']);
