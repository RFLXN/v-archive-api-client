# V-ARCHIVE API CLIENT for Node.js

[V-ARCHIVE API](https://github.com/djmax-in/openapi)

`yarn install https://github.com/RFLXN/v-archive-api-client`
for using this lib

## Example

```typescript
import vArchiveApi from "v-archive-api-client";

const res = await vArchiveApi.scoreboard({
    nickname: "PLAYER_NICKNAME",
    button: 6,
    board: "SC10"
});

// res will be object of interface ScoreboardResponse in /api/scoreboard.ts

```
