import { buildDict } from '@/common';
import { CheckFeature } from '@/Types';

const list: Map<string, CheckFeature> = new Map([
    ['const', function(): boolean {
        try {
            eval('const a = 1;');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['let', function(): boolean {
        try {
            eval('let a = 1; a = 2;');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['template-literal', function(): boolean {
        try {
            eval('`test${42}test\ntest`');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['tag-template-literal', function(): boolean {
        try {
            eval('function test() {} test`test${42}test\ntest`');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['arrow-function', function(): boolean {
        try {
            eval('var test = () => 42;');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['spread-operator', function(): boolean {
        try {
            eval('function test() {} var arr = [1, 2]; test(...arr);');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['rest-parameter', function(): boolean {
        try {
            eval('function test(...arr) {} test(1, 2);');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['destructuring-assignment', function(): boolean {
        try {
            eval('var [a, b] = [10, 20];');
            eval('var {c, d} = {c: 10, d: 20};');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['class', function(): boolean {
        try {
            eval(`
class Test {
    constructor() {
        this.value = 42;
    }
    get val() {
        return this.value;
    }
    aMethod() {
        this.value++;
    }
}
class Test2 extends Test {
    constructor() {
        super();
        this.value = 10;
    }
}
new Test2();`);
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['symbol', function(): boolean {
        return typeof Symbol === 'function';
    }],

    ['function-default-value', function(): boolean {
        try {
            return eval('function test(a = 42) {}');
        } catch(err) {
            return false;
        }
    }],

    ['generator', function(): boolean {
        try {
            return eval(`
function *test() {
    yield 1;
    return 2;
}
test() === 1;`);
        } catch(err) {
            return false;
        }
    }],

    ['iterator', function(): boolean {
        try {
            eval('for(var a of [1, 2, 3]) {}');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['promise', function(): boolean {
        return typeof Promise === 'function';
    }],

    ['proxy', function(): boolean {
        return typeof Proxy === 'function';
    }],

    ['reflect', function(): boolean {
        return typeof Reflect === 'object';
    }],

    ['map', function(): boolean {
        return typeof Map === 'function';
    }],

    ['set', function(): boolean {
        return typeof Set === 'function';
    }],

    ['weakmap', function(): boolean {
        return typeof WeakMap === 'function';
    }],

    ['weakset', function(): boolean {
        return typeof WeakSet === 'function';
    }],

    ['string-repeat', function(): boolean {
        return typeof ''.repeat === 'function';
    }],

    ['string-startswith', function(): boolean {
        return typeof ''.startsWith === 'function';
    }],

    ['string-endswith', function(): boolean {
        return typeof ''.endsWith === 'function';
    }],

    ['string-includes', function(): boolean {
        return typeof ''.includes === 'function';
    }],

    ['array-from', function(): boolean {
        return typeof Array.from === 'function';
    }],

    ['array-keys', function(): boolean {
        return typeof [].keys === 'function';
    }],

    ['array-find', function(): boolean {
        return typeof [].find === 'function';
    }],

    ['array-findindex', function(): boolean {
        return typeof [].findIndex === 'function';
    }],

    ['array-fill', function(): boolean {
        return typeof [].fill === 'function';
    }],

    ['math-sign', function(): boolean {
        return typeof Math.sign === 'function';
    }],

    ['math-trunc', function(): boolean {
        return typeof Math.trunc === 'function';
    }],

    ['math-cbrt', function(): boolean {
        return typeof Math.cbrt === 'function';
    }],

    ['math-log2', function(): boolean {
        return typeof Math.log2 === 'function';
    }],

    ['math-log10', function(): boolean {
        return typeof Math.log10 === 'function';
    }],

    ['number-epsilon', function(): boolean {
        return typeof Number.EPSILON === 'number';
    }],

    ['number-minsafeinteger', function(): boolean {
        return typeof Number.MIN_SAFE_INTEGER === 'number';
    }],

    ['number-maxsafeinteger', function(): boolean {
        return typeof Number.MAX_SAFE_INTEGER === 'number';
    }],

    ['number-maxsafeinteger', function(): boolean {
        return typeof Number.MAX_SAFE_INTEGER === 'number';
    }],

    ['number-isfinite', function(): boolean {
        return typeof Number.isFinite === 'function';
    }],

    ['number-isinteger', function(): boolean {
        return typeof Number.isInteger === 'function';
    }],

    ['number-isnan', function(): boolean {
        return typeof Number.isNaN === 'function';
    }],

    ['number-issafeinteger', function(): boolean {
        return typeof Number.isSafeInteger === 'function';
    }],

    ['arraybuffer', function(): boolean {
        return typeof ArrayBuffer === 'function';
    }],

    ['float32array', function(): boolean {
        return typeof Float32Array === 'function';
    }],

    ['float64array', function(): boolean {
        return typeof Float64Array === 'function';
    }],

    ['int8array', function(): boolean {
        return typeof Int8Array === 'function';
    }],

    ['int16array', function(): boolean {
        return typeof Int16Array === 'function';
    }],

    ['int32array', function(): boolean {
        return typeof Int32Array === 'function';
    }],

    ['uint8array', function(): boolean {
        return typeof Uint8Array === 'function';
    }],

    ['uint16array', function(): boolean {
        return typeof Uint16Array === 'function';
    }],

    ['uint32array', function(): boolean {
        return typeof Uint32Array === 'function';
    }],

    ['intl', function(): boolean {
        return typeof Intl === 'object';
    }],

    ['intl-collator', function(): boolean {
        return typeof (Intl && Intl.Collator) === 'function';
    }],

    ['intl-numberformat', function(): boolean {
        return typeof (Intl && Intl.NumberFormat) === 'function';
    }],

    ['intl-datetimeformat', function(): boolean {
        return typeof (Intl && Intl.DateTimeFormat) === 'function';
    }],

    /* Modules */
]);

export default buildDict(list, ['es-2015', 'es-6']);
