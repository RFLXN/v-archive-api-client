import { createUrl, fetch } from "../share";

const PATH = "/db/songs.json";
const METHOD = "get";

interface PatternFloor {
    level: number;
    floor: number;
}

interface PatternLevel {
    NM: PatternFloor;
    HD: PatternFloor;
    MX: PatternFloor;
    SC: PatternFloor;
}

interface Song {
    title: number;
    name: string;
    composer: string;
    dlcCode: string;
    dlc: string;
    patterns: {
        "4B": PatternLevel;
        "5B": PatternLevel;
        "6B": PatternLevel;
        "8B": PatternLevel;
    }
}

type SongsResponse = Song[];

const songs = async () => fetch<SongsResponse>(createUrl(PATH), METHOD);

export {
    Song, SongsResponse, PatternFloor, PatternLevel, songs
};
