import { AnyHeader, DjmaxPattern, NumberBoolean } from "../static";
import { createUrl, fetch, setPathParam } from "../share";
import { omitProperties } from "../util";

const PATH = "/client/open/{userNo}/score";
const METHOD = "post";

interface RegisterBody {
    name: string;
    dlc?: string;
    composer?: string;
    button: number;
    pattern: DjmaxPattern;
    score: number;
    maxCombo: NumberBoolean;
}

interface RegisterParams extends RegisterBody {
    userNo: string;
    token: string;
}

interface RegisterHeader extends AnyHeader {
    Authorization: string;
}

interface RegisterResponse {
    success: boolean;
    update: boolean;
}

const register = async (params: RegisterParams) =>
    fetch<RegisterResponse, RegisterHeader>(
        createUrl(setPathParam(PATH, "userNo", params.userNo)),
        METHOD,
        omitProperties<RegisterParams, RegisterBody>(params, ["userNo", "token"]),
        {
            Authorization: params.token
        }
    );

export {
    register, RegisterHeader, RegisterBody, RegisterResponse, RegisterParams
};
