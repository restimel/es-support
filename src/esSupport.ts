import {
    checkFeature,
    normalizeFeatureName,
} from '@/common';
import es2015 from '@/versions/Es2015';
import es2016 from '@/versions/Es2016';
import es2017 from '@/versions/Es2017';
import es2018 from '@/versions/Es2018';
import es2019 from '@/versions/Es2019';
import es2020 from '@/versions/Es2020';
import es2021 from '@/versions/Es2021';
import es2022 from '@/versions/Es2022';
import {
    MapFeature,
} from '@/Types';

export interface Feature {
    name: string;
    test: string[] | ((details?: boolean) => boolean | string[]);
}

const mapFeature: MapFeature = {
    ...es2015,
    ...es2016,
    ...es2017,
    ...es2018,
    ...es2019,
    ...es2020,
    ...es2021,
    ...es2022,
};

function checkFeatureName(featureName: string, details?: false): boolean;
function checkFeatureName(featureName: string, details: true): string[];
function checkFeatureName(featureName: string, details = false): boolean | string[] {
    const normalizeName = normalizeFeatureName(featureName);
    const checker = mapFeature[normalizeName];

    if (!checker) {
        return details ? [featureName] : false;
    }

    if (Array.isArray(checker)) {
        if (details) {
            return check(checker, 'details');
        }
        return check(checker, 'boolean');
    }

    return checkFeature(featureName, checker, details);
}

/**
 * Check if features are supported
 * @param {string | string[]} feature names of feature to be tested
 * @param {'boolean' | 'feature' | 'details'} [returnType] defines the kind of output.
 *      Default: boolean
 * @returns {boolean | string[]} true if the features are all supported, false
 *      otherwise. If returnType is feature or details, it returns the list of
 *      unsupported features.
 */
function check (feature: string | string[]): boolean;
function check (feature: string | string[], returnType: 'boolean'): boolean;
function check (feature: string | string[], returnType: 'feature' | 'details'): string[];
function check (feature: string | string[], returnType: 'feature' | 'details' | 'boolean' = 'boolean'): boolean | string[] {
    const features = Array.isArray(feature) ? feature : [feature];
    const isDetails = returnType === 'details';
    const result = features.reduce((list, featureName) => {
        if (isDetails) {
            list.push(...checkFeatureName(featureName, true));
        } else if (!checkFeatureName(featureName)) {
            list.push(featureName);
        }
        return list;
    }, [] as string[]);

    if (returnType === 'boolean') {
        return result.length === 0;
    }
    return result;
}

/**
 * Add feature to the check list or override existing feature.
 * @param {Feature | Feature[]} feature describe a feature to check the support
 * @param Feature.name feature name which is used to do the test
 * @param Feature.test the test which is called to assert the feature is supported
 */
function add (feature: Feature): void;
function add (featureList: Feature[]): void;
function add (feature: Feature | Feature[]): void {
    const featureList = Array.isArray(feature) ? feature : [feature];
    for (const featureItem of featureList) {
        const name = normalizeFeatureName(featureItem.name);
        mapFeature[name] = featureItem.test;
    }
}

check.add = add;

export default check;
