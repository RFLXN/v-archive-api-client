var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { createUrl, fetch, setPathParam } from "../share";
const PATH = "/api/archive/{nickname}/board/{button}/{board}";
const METHOD = "get";
const scoreboard = (params) => __awaiter(void 0, void 0, void 0, function* () {
    let path = PATH;
    path = setPathParam(path, "nickname", params.nickname);
    path = setPathParam(path, "button", params.button.toString());
    path = setPathParam(path, "board", params.board);
    return fetch(createUrl(path), METHOD);
});
export { scoreboard };
//# sourceMappingURL=scoreboard.js.map