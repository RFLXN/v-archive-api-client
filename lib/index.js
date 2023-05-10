"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
var register_1 = require("./api/register");
var scoreboard_1 = require("./api/scoreboard");
var songs_1 = require("./api/songs");
__exportStar(require("./api/register"), exports);
__exportStar(require("./api/scoreboard"), exports);
__exportStar(require("./api/songs"), exports);
__exportStar(require("./static"), exports);
__exportStar(require("./share"), exports);
var vArchiveApi = {
    register: register_1.register,
    scoreboard: scoreboard_1.scoreboard,
    songs: songs_1.songs
};
exports.default = vArchiveApi;
//# sourceMappingURL=index.js.map