import { AxiosResponse } from "axios";
import { AnyHeader } from "./static";
declare class APIError extends Error {
    private readonly res;
    private readonly apiMsg?;
    constructor(res: AxiosResponse, apiMessage?: string, msg?: string);
    get response(): AxiosResponse<any, any>;
    get apiMessage(): string | undefined;
}
declare const createUrl: (path: string) => string;
declare const setPathParam: (path: string, key: string, value: string) => string;
declare const fetch: <Res = any, Header = AnyHeader>(url: string, method: "get" | "post", data?: any, headers?: Header | undefined) => Promise<Res>;
export { APIError, createUrl, setPathParam, fetch };
//# sourceMappingURL=share.d.ts.map