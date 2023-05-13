import { DjmaxButton, DjmaxShortenPattern, NumberBoolean } from "../static";
import { createUrl, fetch, setPathParam } from "../share";

const PATH = "/api/archive/{nickname}/board/{button}/{board}";
const METHOD = "get";

type Board = "1" | "2" | "3" | "4" | "5" |
"6" | "7" | "8" | "9" | "10" | "11" |
"MX" | "SC" | "SC5" | "SC10" | "SC15";

interface ScoreboardParams {
    nickname: string;
    button: DjmaxButton;
    board: Board;
}

interface ScoreboardPattern {
    title: number;
    name: string;
    composer: string;
    pattern: DjmaxShortenPattern;
    score?: number;
    maxCombo?: NumberBoolean;
    dlc: string;
    dlcCode: string;
}

interface ScoreboardFloor {
    floorNumber: number;
    patterns: ScoreboardPattern[];
}

interface ScoreboardResponse {
    success: boolean;
    board: Board;
    button: DjmaxButton;
    totalCount: number;
    floors: ScoreboardFloor[];
}

const scoreboard = async (params: ScoreboardParams) => {
    let path = PATH;
    path = setPathParam(path, "nickname", params.nickname);
    path = setPathParam(path, "button", params.button.toString());
    path = setPathParam(path, "board", params.board);

    return fetch<ScoreboardResponse>(
        createUrl(path),
        METHOD
    );
};

export {
    scoreboard, Board, ScoreboardFloor, ScoreboardResponse, ScoreboardParams, ScoreboardPattern
};
