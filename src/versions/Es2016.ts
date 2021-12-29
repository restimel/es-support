import { buildDict } from '@/common';
import { CheckFeature } from '@/Types';

const list: Map<string, CheckFeature> = new Map([
    ['arrayIncludes', function(): boolean {
        return typeof [].includes === 'function';
    }],

    ['exponentiationOperator', function(): boolean {
        try {
            eval('10 ** 2');
            return true;
        } catch (err) {
            return false;
        }
    }],

    ['exponentiationAssignation', function(): boolean {
        try {
            eval('var a = 10; a **= 2;');
            return true;
        } catch (err) {
            return false;
        }
    }],
]);

export default buildDict(list, ['ES2016', 'ES7']);
