import { DjmaxButton, DjmaxPattern, NumberBoolean } from "../static";
type Board = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "MX" | "SC" | "SC5" | "SC10" | "SC15";
interface ScoreboardParams {
    nickname: string;
    button: DjmaxButton;
    board: Board;
}
interface ScoreboardPattern {
    title: number;
    name: string;
    composer: string;
    pattern: DjmaxPattern;
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
declare const scoreboard: (params: ScoreboardParams) => Promise<ScoreboardResponse>;
export { scoreboard, Board, ScoreboardFloor, ScoreboardResponse, ScoreboardParams, ScoreboardPattern };
//# sourceMappingURL=scoreboard.d.ts.map