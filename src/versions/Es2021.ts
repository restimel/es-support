import { buildDict } from '@/common';
import { CheckFeature } from '@/Types';

declare var WeakRef: any;
declare var FinalizationRegistry: any;

const list: Map<string, CheckFeature> = new Map([
    ['logicalAssignmentOr', function(): boolean {
        try {
            eval('var test = 0; test ||= 1;');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['logicalAssignmentAnd', function(): boolean {
        try {
            eval('var test = 0; test &&= 1;');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['logicalAssignmentNullish', function(): boolean {
        try {
            eval('var test = 0; test ??= 1;');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['numericSeparator', function(): boolean {
        try {
            eval('1_000_000.123_456');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['stringReplaceAll', function(): boolean {
        return typeof ('' as any).replaceAll === 'function';
    }],

    ['weakRef', function(): boolean {
        return typeof WeakRef === 'function';
    }],

    ['finalizer', function(): boolean {
        return typeof FinalizationRegistry === 'function';
    }],

    ['promiseAny', function(): boolean {
        return typeof (Promise && (Promise as any).any) === 'function';
    }],

    ['intlListFormat', function(): boolean {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return typeof (Intl && (Intl as any).ListFormat) === 'function';
    }],

    /* Intl.DateTimeFormat properties: dateStyle and timeStyle */

]);

export default buildDict(list, ['ES2021', 'ES12'], {
    'logicalAssignment': ['logicalAssignmentOr', 'logicalAssignmentAnd', 'logicalAssignmentNullish'],
});
