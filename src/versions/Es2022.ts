import { buildDict } from '@/common';
import { CheckFeature } from '@/Types';

const list: Map<string, CheckFeature> = new Map([
    ['class-private-field', function(): boolean {
        try {
            eval(`
class Test {
    #val = 1;
    inc() {
        return this.#val++;
    }
}
new Test();`);
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['class-static-field', function(): boolean {
        try {
            return eval(`
class Test {
    static val = 1;
}
Test.val === 1;`);
        } catch(err) {
            return false;
        }
    }],

    ['class-static-block', function(): boolean {
        try {
            return eval(`
class Test {
    static #val = 1;

    static {
        twiceVal = this.#val * 2;
    }
}
Test.twiceVal === 2;`);
        } catch(err) {
            return false;
        }
    }],

    ['regexp-indices-flag', function(): boolean {
        try {
            eval('/test/d');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['array-at', function(): boolean {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return typeof ([] as any).at === 'function';
    }],

    ['object-hasown', function(): boolean {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return typeof (Object as any).hasOwn === 'function';
    }],

    /* Top level await (for import) */
]);

export default buildDict(list, ['es-2022', 'es-13']);
