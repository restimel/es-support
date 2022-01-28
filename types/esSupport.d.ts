export interface Feature {
    name: string;
    test: string[] | ((details?: boolean) => boolean | string[]);
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
declare function check(feature: string | string[]): boolean;
declare function check(feature: string | string[], returnType: 'boolean'): boolean;
declare function check(feature: string | string[], returnType: 'feature' | 'details'): string[];
declare namespace check {
    var add: {
        (feature: Feature): void;
        (featureList: Feature[]): void;
    };
    var disable: (features: string | string[]) => void;
    var enable: (features: string | string[]) => void;
}
export default check;
