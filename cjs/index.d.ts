export * from "./api/register";
export * from "./api/scoreboard";
export * from "./api/songs";
export * from "./static";
export * from "./share";
declare const vArchiveApi: {
    register: (params: import("./api/register").RegisterParams) => Promise<import("./api/register").RegisterResponse>;
    scoreboard: (params: import("./api/scoreboard").ScoreboardParams) => Promise<import("./api/scoreboard").ScoreboardResponse>;
    songs: () => Promise<import("./api/songs").SongsResponse>;
};
export default vArchiveApi;
//# sourceMappingURL=index.d.ts.map