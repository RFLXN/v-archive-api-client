"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.omitProperties = exports.omitProperty = void 0;
const omitProperty = (obj, property) => {
    const copied = obj;
    delete copied[property];
    return copied;
};
exports.omitProperty = omitProperty;
const omitProperties = (obj, keys) => {
    const copied = obj;
    keys.map((key) => {
        delete copied[key];
    });
    return copied;
};
exports.omitProperties = omitProperties;
//# sourceMappingURL=util.js.map