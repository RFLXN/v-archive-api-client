import { DjmaxButton, DjmaxTier } from "../static";
import { createUrl, fetch, setPathParam } from "../share";

const PATH = "/api/archive/{nickname}/tier/{button}";
const METHOD = "get";

interface TierParams {
    nickname: string;
    button: DjmaxButton;
}

interface Tier {
    rating: number;
    name: DjmaxTier;
    code: string;
}

interface TierResponse {
    success: boolean;
    top50sum: number;
    tierPoint: number;
    tier: Tier;
    next: Tier;
}
const tier = async (params: TierParams) => {
    let path = PATH;
    path = setPathParam(path, "nickname", params.nickname);
    path = setPathParam(path, "button", `${params.button}`);

    return fetch<TierResponse>(
        createUrl(path),
        METHOD
    );
};

export {
    TierParams, TierResponse, Tier, tier
};
