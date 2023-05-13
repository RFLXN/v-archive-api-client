const ROOT_URL = "https://v-archive.net";

type DjmaxPattern = "NORMAL" | "HARD" | "MAXIMUM" | "SC";

type DjmaxShortenPattern = "NM" | "HD" | "MX" | "SC";

type DjmaxButton = 4 | 5 | 6 | 8;

type DjmaxTier = "Grand Master" | "Master I" | "Master II" | "Master III"
| "Diamond I" | "Diamond II" | "Diamond III" | "Diamond IV"
| "Platinum I" | "Platinum II" | "Platinum III" | "Platinum IV"
| "Gold I" | "Gold II" | "Gold III" | "Gold IV"
| "Silver I" | "Silver II" | "Silver III" | "Silver IV"
| "Bronze I" | "Bronze II" | "Bronze III" | "Bronze IV"
| "Iron I" | "Iron II" | "Iron III" | "Iron IV"
| "Amateur I" | "Amateur II" | "Amateur III" | "Amateur IV"
| "Beginner";

type NumberBoolean = 0 | 1;

type AnyHeader = Record<string, string>;

export {
    ROOT_URL,
    DjmaxPattern,
    DjmaxButton,
    NumberBoolean,
    AnyHeader,
    DjmaxTier,
    DjmaxShortenPattern
};
