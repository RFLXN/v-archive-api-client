var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
import { ROOT_URL } from "./static";
class APIError extends Error {
    constructor(res, apiMessage, msg) {
        super(msg);
        this.res = res;
        this.apiMsg = apiMessage;
    }
    get response() {
        return this.res;
    }
    get apiMessage() {
        return this.apiMsg;
    }
}
const createUrl = (path) => `${ROOT_URL}${path}`;
const setPathParam = (path, key, value) => path.replace(`{${key}}`, value);
const fetch = (url, method, data, headers) => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield axios({
        url,
        method,
        data,
        headers: Object.assign({ "Content-Type": "application/json" }, headers)
    });
    if (res.status != 200) {
        let body;
        try {
            body = res.data;
        }
        catch (e) {
        }
        throw new APIError(res, body === null || body === void 0 ? void 0 : body.message);
    }
    return res.data;
});
export { APIError, createUrl, setPathParam, fetch };
//# sourceMappingURL=share.js.map