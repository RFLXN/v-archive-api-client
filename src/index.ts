import { register } from "./api/register";
import { scoreboard } from "./api/scoreboard";
import { songs } from "./api/songs";

export * from "./api/register";
export * from "./api/scoreboard";
export * from "./api/songs";
export * from "./static";
export * from "./share";

const vArchiveApi = {
    register,
    scoreboard,
    songs
};

export default vArchiveApi;
