declare const omitProperty: <T, K extends keyof T>(obj: T, property: K) => Omit<T, K>;
declare const omitProperties: <T, R = Partial<T>>(obj: T, keys: (keyof T)[]) => R;
export { omitProperty, omitProperties };
//# sourceMappingURL=util.d.ts.map