import { buildDict } from '@/common';
import { CheckFeature } from '@/Types';

const list: Map<string, CheckFeature> = new Map([
    ['async-await', function(): boolean {
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

    ['object-entries', function(): boolean {
        return typeof Object.entries === 'function';
    }],

    ['object-values', function(): boolean {
        return typeof Object.values === 'function';
    }],

    ['string-padstart', function(): boolean {
        return typeof ''.padStart === 'function';
    }],

    ['string-padend', function(): boolean {
        return typeof ''.padEnd === 'function';
    }],

    ['function-trailingcomma', function(): boolean {
        try {
            eval('function test(a,b,) {}');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['object-getownpropertydescriptors', function(): boolean {
        return typeof Object.getOwnPropertyDescriptors === 'function';
    }],

    ['sharedarraybuffer', function(): boolean {
        return typeof SharedArrayBuffer === 'function';
    }],

    ['atomics', function(): boolean {
        return typeof Atomics === 'object';
    }],
]);

export default buildDict(list, ['es-2017', 'es-8']);
