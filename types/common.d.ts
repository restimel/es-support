import { CheckFeature, MapFeature } from '@/Types';
export declare function checkFeature(featureName: string, feature: CheckFeature, details: false): boolean;
export declare function checkFeature(featureName: string, feature: CheckFeature, details: true): string[];
export declare function checkFeature(featureName: string, feature: CheckFeature, details: boolean): boolean | string[];
export declare function checkList(list: Map<string, CheckFeature>, details?: boolean): boolean | string[];
export declare function buildDict(list: Map<string, CheckFeature>, names: string[], additional?: MapFeature): MapFeature;
