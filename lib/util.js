"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.omitProperties = exports.omitProperty = void 0;
var omitProperty = function (obj, property) {
    var copied = obj;
    delete copied[property];
    return copied;
};
exports.omitProperty = omitProperty;
var omitProperties = function (obj, keys) {
    var copied = obj;
    keys.map(function (key) {
        delete copied[key];
    });
    return copied;
};
exports.omitProperties = omitProperties;
//# sourceMappingURL=util.js.map