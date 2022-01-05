import { buildDict } from '@/common';
import { CheckFeature } from '@/Types';

const list: Map<string, CheckFeature> = new Map([
    ['array-includes', function(): boolean {
        return typeof [].includes === 'function';
    }],

    ['exponentiation-operator', function(): boolean {
        try {
            eval('10 ** 2');
            return true;
        } catch (err) {
            return false;
        }
    }],

    ['exponentiation-assignation', function(): boolean {
        try {
            eval('var a = 10; a **= 2;');
            return true;
        } catch (err) {
            return false;
        }
    }],
]);

export default buildDict(list, ['es-2016', 'es-7']);
