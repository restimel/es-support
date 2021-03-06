const esSupport = require('../dist/esSupport').default;

test('esSupport should be defined', () => {
    expect(typeof esSupport).toBe('function');
    expect(esSupport.length).toBe(2);
});

test('esSupport.add should be defined', () => {
    expect(typeof esSupport.add).toBe('function');
    expect(esSupport.add .length).toBe(1);
});

test('should read added tests', () => {
    const cb1 = jest.fn(() => true);
    const cb2 = jest.fn(() => false);
    const cb3 = jest.fn(() => true);
    const cb4 = jest.fn(() => false);
    esSupport.add({
        name: 'test1',
        test: cb1,
    });
    esSupport.add({
        name: 'test2',
        test: cb2,
    });

    esSupport.add([{
        name: 'test3',
        test: cb3,
    }, {
        name: 'test4',
        test: cb4,
    }]);

    esSupport('test1');
    expect(cb1.mock.calls.length).toBe(1);
    expect(cb2.mock.calls.length).toBe(0);
    expect(cb3.mock.calls.length).toBe(0);
    expect(cb4.mock.calls.length).toBe(0);

    esSupport(['test1', 'test3']);
    expect(cb1.mock.calls.length).toBe(2);
    expect(cb2.mock.calls.length).toBe(0);
    expect(cb3.mock.calls.length).toBe(1);
    expect(cb4.mock.calls.length).toBe(0);
});

test('should override existing tests', () => {
    const cb1 = jest.fn(() => true);
    const cb2 = jest.fn(() => false);
    esSupport.add({
        name: 'test1',
        test: cb1,
    });
    esSupport.add({
        name: 'test1',
        test: cb2,
    });

    esSupport('test1');
    expect(cb1.mock.calls.length).toBe(0);
    expect(cb2.mock.calls.length).toBe(1);
});

test('should read added array feature', () => {
    const cb1 = jest.fn(() => true);
    const cb2 = jest.fn(() => false);
    const cb3 = jest.fn(() => true);
    esSupport.add([{
        name: 'test1',
        test: cb1,
    }, {
        name: 'test2',
        test: cb2,
    }, {
        name: 'test3',
        test: cb3,
    }, {
        name: 'test4',
        test: ['test1', 'test2'],
    }]);

    esSupport('test4');
    expect(cb1.mock.calls.length).toBe(1);
    expect(cb2.mock.calls.length).toBe(1);
    expect(cb3.mock.calls.length).toBe(0);
});

test('should return boolean', () => {
    const cb1 = jest.fn(() => true);
    const cb2 = jest.fn(() => false);
    const cb3 = jest.fn(() => []);
    const cb4 = jest.fn(() => ['hello']);
    esSupport.add([{
        name: 'test1',
        test: cb1,
    }, {
        name: 'test2',
        test: cb2,
    }, {
        name: 'test3',
        test: cb3,
    }, {
        name: 'test4',
        test: cb4,
    }, {
        name: 'listTrue',
        test: ['test1', 'test3'],
    }, {
        name: 'listFalse',
        test: ['test2', 'test4'],
    }]);

    const simple1 = esSupport('test1');
    const simple2 = esSupport('test2');
    const simple3 = esSupport('test3');
    const simple4 = esSupport('test4');
    const list1 = esSupport('listTrue');
    const list2 = esSupport('listFalse');

    expect(simple1).toBe(true);
    expect(simple2).toBe(false);
    expect(simple3).toBe(true);
    expect(simple4).toBe(false);
    expect(list1).toBe(true);
    expect(list2).toBe(false);

    const boolean1 = esSupport('test1', 'boolean');
    const boolean2 = esSupport('test2', 'boolean');
    const boolean3 = esSupport('test3', 'boolean');
    const boolean4 = esSupport('test4', 'boolean');
    const boolList1 = esSupport('listTrue', 'boolean');
    const boolList2 = esSupport('listFalse', 'boolean');

    expect(boolean1).toBe(true);
    expect(boolean2).toBe(false);
    expect(boolean3).toBe(true);
    expect(boolean4).toBe(false);
    expect(boolList1).toBe(true);
    expect(boolList2).toBe(false);

    const complex1 = esSupport(['test1', 'test3']);
    const complex2 = esSupport(['test2', 'test4']);
    const complex3 = esSupport(['test1', 'test4']);
    const complex4 = esSupport(['test2', 'test3']);
    const complexBool1 = esSupport(['test1', 'test3'], 'boolean');
    const complexBool2 = esSupport(['test2', 'test4'], 'boolean');
    const complexBool3 = esSupport(['test1', 'test4'], 'boolean');
    const complexBool4 = esSupport(['test2', 'test3'], 'boolean');

    expect(complex1).toBe(true);
    expect(complex2).toBe(false);
    expect(complex3).toBe(false);
    expect(complex4).toBe(false);
    expect(complexBool1).toBe(true);
    expect(complexBool2).toBe(false);
    expect(complexBool3).toBe(false);
    expect(complexBool4).toBe(false);
});

test('should return feature list', () => {
    const cb1 = jest.fn(() => true);
    const cb2 = jest.fn(() => false);
    const cb3 = jest.fn(() => []);
    const cb4 = jest.fn(() => ['hello']);
    esSupport.add([{
        name: 'test1',
        test: cb1,
    }, {
        name: 'test2',
        test: cb2,
    }, {
        name: 'test3',
        test: cb3,
    }, {
        name: 'test4',
        test: cb4,
    }, {
        name: 'listTrue',
        test: ['test1', 'test3'],
    }, {
        name: 'listFalse',
        test: ['test2', 'test4'],
    }]);

    const feature1 = esSupport('test1', 'feature');
    const feature2 = esSupport('test2', 'feature');
    const feature3 = esSupport('test3', 'feature');
    const feature4 = esSupport('test4', 'feature');
    const featureList1 = esSupport('listTrue', 'feature');
    const featureList2 = esSupport('listFalse', 'feature');

    expect(feature1).toEqual([]);
    expect(feature2).toEqual(['test2']);
    expect(feature3).toEqual([]);
    expect(feature4).toEqual(['test4']);
    expect(featureList1).toEqual([]);
    expect(featureList2).toEqual(['listFalse']);

    const complex1 = esSupport(['test1', 'test3'], 'feature');
    const complex2 = esSupport(['test2', 'test4'], 'feature');
    const complex3 = esSupport(['test1', 'test4'], 'feature');
    const complex4 = esSupport(['test2', 'test3'], 'feature');

    expect(complex1).toEqual([]);
    expect(complex2).toEqual(['test2', 'test4']);
    expect(complex3).toEqual(['test4']);
    expect(complex4).toEqual(['test2']);
});

test('should return details list', () => {
    const cb1 = jest.fn(() => true);
    const cb2 = jest.fn(() => false);
    const cb3 = jest.fn(() => []);
    const cb4 = jest.fn(() => ['hello']);
    esSupport.add([{
        name: 'test1',
        test: cb1,
    }, {
        name: 'test2',
        test: cb2,
    }, {
        name: 'test3',
        test: cb3,
    }, {
        name: 'test4',
        test: cb4,
    }, {
        name: 'listTrue',
        test: ['test1', 'test3'],
    }, {
        name: 'listFalse',
        test: ['test2', 'test4'],
    }]);

    const feature1 = esSupport('test1', 'details');
    const feature2 = esSupport('test2', 'details');
    const feature3 = esSupport('test3', 'details');
    const feature4 = esSupport('test4', 'details');
    const featureList1 = esSupport('listTrue', 'details');
    const featureList2 = esSupport('listFalse', 'details');

    expect(feature1).toEqual([]);
    expect(feature2).toEqual(['test2']);
    expect(feature3).toEqual([]);
    expect(feature4).toEqual(['hello']);
    expect(featureList1).toEqual([]);
    expect(featureList2).toEqual(['test2', 'hello']);

    const complex1 = esSupport(['test1', 'test3'], 'details');
    const complex2 = esSupport(['test2', 'test4'], 'details');
    const complex3 = esSupport(['test1', 'test4'], 'details');
    const complex4 = esSupport(['test2', 'test3'], 'details');

    expect(complex1).toEqual([]);
    expect(complex2).toEqual(['test2', 'hello']);
    expect(complex3).toEqual(['hello']);
    expect(complex4).toEqual(['test2']);
});

test('should consider as false a missing feature', () => {
    const defaultRst = esSupport('doNotExist');
    const bool = esSupport('doNotExist', 'boolean');
    const feature = esSupport('doNotExist', 'feature');
    const details = esSupport('doNotExist', 'details');

    expect(defaultRst).toBe(false);
    expect(bool).toBe(false);
    expect(feature).toEqual(['doNotExist']);
    expect(details).toEqual(['doNotExist']);
});

test('should normalize feature name', () => {
    const cb1 = jest.fn(() => true);
    const cb2 = jest.fn(() => false);
    esSupport.add([{
        name: 'es1',
        test: cb1,
    }, {
        name: 'test-withUppercase',
        test: cb2,
    }, {
        name: 'listUpper',
        test: ['ES1', 'TEST-WITHUPPERCASE'],
    }, {
        name: 'listspace',
        test: ['es 1', 'test_withuppercase'],
    }]);

    esSupport(['ES1', 'TEST-WITHUPPERCASE']);
    expect(cb1.mock.calls.length).toBe(1);
    expect(cb2.mock.calls.length).toBe(1);

    esSupport(['Es_1', 'Test withUpperCase']);
    expect(cb1.mock.calls.length).toBe(2);
    expect(cb2.mock.calls.length).toBe(2);

    esSupport(['eS-1', 'tEst_wiThupPercAse']);
    expect(cb1.mock.calls.length).toBe(3);
    expect(cb2.mock.calls.length).toBe(3);

    esSupport(['es\t1', 'TEST_ - withuppercase']);
    expect(cb1.mock.calls.length).toBe(4);
    expect(cb2.mock.calls.length).toBe(4);
});

test('should run existing ES tests', () => {
    expect(() => esSupport([
        'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020',
        'ES2021', 'ES2022',
    ])).not.toThrow();
});

test('should allow to change default feature', () => {
    const featureRef = 'exponentiation-operator';
    let called = false;
    const previousResult = esSupport(featureRef);
    const previousResultGlobal = esSupport(['ES2016']);
    esSupport.add([{
        name: featureRef,
        test: () => {
            called = true;
            return !previousResult;
        },
    }]);

    const result1 = esSupport(featureRef);
    expect(called).toBe(true);
    expect(result1).toBe(!previousResult);

    called = false;
    const result2 = esSupport(['ES2016']);
    expect(called).toBe(true);
    expect(result2).toBe(previousResultGlobal && !previousResult);
});

test('should disable features', () => {
    let called1 = false;
    let called2 = false;
    let called3 = false;
    esSupport.add([{
        name: 'test-1',
        test: () => {
            called1 = true;
            return true;
        },
    }, {
        name: 'test-2',
        test: () => {
            called2 = true;
            return true;
        },
    }, {
        name: 'test-3',
        test: () => {
            called3 = true;
            return true;
        },
    }]);

    esSupport.disable(['test-1', 'TEST 3']);
    const result1 = esSupport(['test-1', 'test-2', 'test-3']);
    // add test normalize

    expect(called1).toBe(false);
    expect(called2).toBe(true);
    expect(called3).toBe(false);
    expect(result1).toBe(true);

    called1 = false;
    called2 = false;
    called3 = false;

    esSupport.enable(['teSt 1', 'test-2']);
    const result2 = esSupport(['test-1', 'test-2', 'test-3']);

    expect(called1).toBe(true);
    expect(called2).toBe(true);
    expect(called3).toBe(false);
    expect(result2).toBe(true);
});
