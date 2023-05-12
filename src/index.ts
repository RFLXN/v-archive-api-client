import { register } from "./api/register";
import { scoreboard } from "./api/scoreboard";
import { songs } from "./api/songs";
import { tier } from "./api/tier";

export * from "./api/register";
export * from "./api/scoreboard";
export * from "./api/songs";
export * from "./api/tier";
export * from "./static";
export * from "./share";

const vArchiveApi = {
    register,
    scoreboard,
    songs,
    tier
};

export default vArchiveApi;
