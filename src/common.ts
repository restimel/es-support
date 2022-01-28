import { CheckFeature, MapFeature } from '@/Types';

export function checkFeature(featureName: string, feature: CheckFeature, details: false): boolean;
export function checkFeature(featureName: string, feature: CheckFeature, details: true): string[];
export function checkFeature(featureName: string, feature: CheckFeature, details: boolean): boolean | string[];
export function checkFeature(featureName: string, feature: CheckFeature, details: boolean): boolean | string[] {
    const result = feature(details);
    if (details) {
        if (!Array.isArray(result)) {
            return result ? [] : [featureName];
        }
        return result;
    }
    if (typeof result === 'boolean') {
        return result;
    }
    return result.length === 0;
}

export function buildDict(list: Map<string, CheckFeature>, names: string[], additional: MapFeature = {}): MapFeature {
    const finalDict: MapFeature = {...additional};
    for (const [featureName, feature] of list) {
        finalDict[normalizeFeatureName(featureName)] = feature;
    }
    for (const name of names) {
        finalDict[normalizeFeatureName(name)] = Array.from(list.keys());
    }
    return finalDict;
}

export function normalizeFeatureName(name: string) {
    const kebabName = name.trim().replace(/[-\s_]+|(es)(\d)/ig, '$1-$2');
    const lowName = kebabName.toLowerCase();
    return lowName;
}
