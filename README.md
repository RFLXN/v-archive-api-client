# V-ARCHIVE API CLIENT for Node.js

[V-ARCHIVE API](https://github.com/djmax-in/openapi)

## Example

Run `yarn run build` before use API client.

```typescript
import vArchiveApi from "./index";

const res = await vArchiveApi.scoreboard({
    nickname: "PLAYER_NICKNAME",
    button: 6,
    board: "SC10"
});

// res will be object of interface ScoreboardResponse in /api/scoreboard.ts

```
