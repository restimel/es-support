import { buildDict } from '@/common';
import { CheckFeature } from '@/Types';

declare var WeakRef: any;
declare var FinalizationRegistry: any;

const list: Map<string, CheckFeature> = new Map([
    ['logical-assignment-or', function(): boolean {
        try {
            eval('var test = 0; test ||= 1;');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['logical-assignment-and', function(): boolean {
        try {
            eval('var test = 0; test &&= 1;');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['logical-assignment-nullish', function(): boolean {
        try {
            eval('var test = 0; test ??= 1;');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['numeric-separator', function(): boolean {
        try {
            eval('1_000_000.123_456');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['string-replaceall', function(): boolean {
        return typeof ('' as any).replaceAll === 'function';
    }],

    ['weakref', function(): boolean {
        return typeof WeakRef === 'function';
    }],

    ['finalizer', function(): boolean {
        return typeof FinalizationRegistry === 'function';
    }],

    ['promise-any', function(): boolean {
        return typeof (Promise && (Promise as any).any) === 'function';
    }],

    ['intl-listformat', function(): boolean {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return typeof (Intl && (Intl as any).ListFormat) === 'function';
    }],

    /* intl-datetimeformat-dateStyle: Intl.DateTimeFormat property: dateStyle */
    /* intl-datetimeformat:timeStyle: Intl.DateTimeFormat properties: timeStyle */

]);

export default buildDict(list, ['es-2021', 'es-12'], {
    'logical-assignment': [
        'logical-assignment-or',
        'logical-assignment-and',
        'logical-assignment-nullish',
    ],
});
