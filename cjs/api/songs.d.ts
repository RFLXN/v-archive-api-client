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
    };
}
type SongsResponse = Song[];
declare const songs: () => Promise<SongsResponse>;
export { Song, SongsResponse, PatternFloor, PatternLevel, songs };
//# sourceMappingURL=songs.d.ts.map