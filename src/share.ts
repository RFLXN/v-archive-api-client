import axios, { AxiosResponse } from "axios";
import { AnyHeader, ROOT_URL } from "./static";

interface APIErrorResponseData {
    success?: boolean;
    message: string;
}

class APIError extends Error {
    private readonly res: AxiosResponse;

    private readonly apiMsg?: string;

    constructor(res: AxiosResponse, apiMessage?: string, msg?: string) {
        super(msg);
        this.res = res;
        this.apiMsg = apiMessage;
    }

    public get response() {
        return this.res;
    }

    public get apiMessage() {
        return this.apiMsg;
    }
}

const createUrl = (path: string) => `${ROOT_URL}${path}`;

const setPathParam = (path: string, key: string, value: string) => path.replace(`{${key}}`, value);

const fetch = async <Res = any, Header = AnyHeader>(
    url: string, method: "get" | "post", data?: any, headers?: Header
) => {
    const res = await axios({
        url,
        method,
        data,
        headers: {
            "Content-Type": "application/json",
            ...headers
        }
    });

    if (res.status != 200) {
        let body;
        try {
            body = res.data as APIErrorResponseData;
        } catch (e) {
            // ignore
        }

        throw new APIError(res, body?.message);
    }

    return res.data as Res;
};

export {
    APIError, createUrl, setPathParam, fetch
};
