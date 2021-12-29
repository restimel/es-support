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

    ['templateLiteral', function(): boolean {
        try {
            eval('`test${42}test\ntest`');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['tagTemplateLiteral', function(): boolean {
        try {
            eval('function test() {} test`test${42}test\ntest`');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['arrowFunction', function(): boolean {
        try {
            eval('var test = () => 42;');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['spreadOperator', function(): boolean {
        try {
            eval('function test() {} var arr = [1, 2]; test(...arr);');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['restParameter', function(): boolean {
        try {
            eval('function test(...arr) {} test(1, 2);');
            return true;
        } catch(err) {
            return false;
        }
    }],

    ['destructuringAssignment', function(): boolean {
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

    ['FunctionDefaultValue', function(): boolean {
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

    ['weakMap', function(): boolean {
        return typeof WeakMap === 'function';
    }],

    ['weakSet', function(): boolean {
        return typeof WeakSet === 'function';
    }],

    ['stringRepeat', function(): boolean {
        return typeof ''.repeat === 'function';
    }],

    ['stringStartsWith', function(): boolean {
        return typeof ''.startsWith === 'function';
    }],

    ['stringEndsWith', function(): boolean {
        return typeof ''.endsWith === 'function';
    }],

    ['stringIncludes', function(): boolean {
        return typeof ''.includes === 'function';
    }],

    ['arrayFrom', function(): boolean {
        return typeof Array.from === 'function';
    }],

    ['arrayKeys', function(): boolean {
        return typeof [].keys === 'function';
    }],

    ['arrayFind', function(): boolean {
        return typeof [].find === 'function';
    }],

    ['arrayFindIndex', function(): boolean {
        return typeof [].findIndex === 'function';
    }],

    ['arrayFill', function(): boolean {
        return typeof [].fill === 'function';
    }],

    ['mathSign', function(): boolean {
        return typeof Math.sign === 'function';
    }],

    ['mathTrunc', function(): boolean {
        return typeof Math.trunc === 'function';
    }],

    ['mathCbrt', function(): boolean {
        return typeof Math.cbrt === 'function';
    }],

    ['mathLog2', function(): boolean {
        return typeof Math.log2 === 'function';
    }],

    ['mathLog10', function(): boolean {
        return typeof Math.log10 === 'function';
    }],

    ['numberEPSILON', function(): boolean {
        return typeof Number.EPSILON === 'number';
    }],

    ['numberMINSAFEINTEGER', function(): boolean {
        return typeof Number.MIN_SAFE_INTEGER === 'number';
    }],

    ['numberMAXSAFEINTEGER', function(): boolean {
        return typeof Number.MAX_SAFE_INTEGER === 'number';
    }],

    ['numberMAXSAFEINTEGER', function(): boolean {
        return typeof Number.MAX_SAFE_INTEGER === 'number';
    }],

    ['numberIsFinite', function(): boolean {
        return typeof Number.isFinite === 'function';
    }],

    ['numberIsInteger', function(): boolean {
        return typeof Number.isInteger === 'function';
    }],

    ['numberIsNaN', function(): boolean {
        return typeof Number.isNaN === 'function';
    }],

    ['numberIsSafeInteger', function(): boolean {
        return typeof Number.isSafeInteger === 'function';
    }],

    ['ArrayBuffer', function(): boolean {
        return typeof ArrayBuffer === 'function';
    }],

    ['Float32Array', function(): boolean {
        return typeof Float32Array === 'function';
    }],

    ['Float64Array', function(): boolean {
        return typeof Float64Array === 'function';
    }],

    ['Int8Array', function(): boolean {
        return typeof Int8Array === 'function';
    }],

    ['Int16Array', function(): boolean {
        return typeof Int16Array === 'function';
    }],

    ['Int32Array', function(): boolean {
        return typeof Int32Array === 'function';
    }],

    ['Uint8Array', function(): boolean {
        return typeof Uint8Array === 'function';
    }],

    ['Uint16Array', function(): boolean {
        return typeof Uint16Array === 'function';
    }],

    ['Uint32Array', function(): boolean {
        return typeof Uint32Array === 'function';
    }],

    ['intl', function(): boolean {
        return typeof Intl === 'object';
    }],

    ['intlCollator', function(): boolean {
        return typeof (Intl && Intl.Collator) === 'function';
    }],

    ['intlNumberFormat', function(): boolean {
        return typeof (Intl && Intl.NumberFormat) === 'function';
    }],

    ['intlDateTimeFormat', function(): boolean {
        return typeof (Intl && Intl.DateTimeFormat) === 'function';
    }],

    /* Modules */
]);

export default buildDict(list, ['ES2015', 'ES6']);
