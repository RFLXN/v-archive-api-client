const omitProperty = (obj, property) => {
    const copied = obj;
    delete copied[property];
    return copied;
};
const omitProperties = (obj, keys) => {
    const copied = obj;
    keys.map((key) => {
        delete copied[key];
    });
    return copied;
};
export { omitProperty, omitProperties };
//# sourceMappingURL=util.js.map