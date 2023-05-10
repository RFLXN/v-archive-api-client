"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scoreboard = void 0;
const share_1 = require("../share");
const PATH = "/api/archive/{nickname}/board/{button}/{board}";
const METHOD = "get";
const scoreboard = (params) => __awaiter(void 0, void 0, void 0, function* () {
    let path = PATH;
    path = (0, share_1.setPathParam)(path, "nickname", params.nickname);
    path = (0, share_1.setPathParam)(path, "button", params.button.toString());
    path = (0, share_1.setPathParam)(path, "board", params.board);
    return (0, share_1.fetch)((0, share_1.createUrl)(path), METHOD);
});
exports.scoreboard = scoreboard;
//# sourceMappingURL=scoreboard.js.map