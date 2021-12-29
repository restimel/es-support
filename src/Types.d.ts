export type CheckFeature = (details?: boolean) => boolean | string[];

export type MapFeature = Record<string, CheckFeature | string[]>;
