# skelly-webhooks

[Skelly](https://skelly.gg) webhooks provide real-time updates for [Dota 2](https://www.dota2.com/) and [Valorant](https://playvalorant.com/).

The API sends the most up-to-date information using the POST method whenever something changes. Note that all fields are optional and some may be empty at the beginning.

The npm package works with [Node.js](https://nodejs.org/).

# Installation

## npm package

Installing the package using npm:

```
npm install skelly-webhooks
```

## Download Skelly

Download [Skelly for Windows](https://www.overwolf.com/app/Skelly) from Overwolf.

## Create account

Create a personal Skelly account.

![Image: Skelly create account](https://github.com/Skelly-gg/skelly-webhooks/blob/a6810ca077fecf7bae4ecf61e0dba75cc217c371/img/SkellyLogin.png)

Confirm the verification link sent to you by e-mail. You might need to check your spam folder.

## Add webhook

You can either **manually add** a webhook to your settings or might be sent to Skelly.gg by another tool which **automatically adds** a webhook.

The process to automatically add webhooks is described futher below.

![Image: Skelly add webhook](https://github.com/Skelly-gg/skelly-webhooks/blob/a6810ca077fecf7bae4ecf61e0dba75cc217c371/img/SkellyWebhook.png)

# Local testing

## Start server

Run a test server to listen to post messsages from Skelly:

```

git clone https://github.com/Skelly-gg/skelly-webhooks.git

cd skelly-webhooks

npm install

npm run build

node .\dist\server.js
```

## Get real-time data

Launch Dota 2 and spectate or play a match.

## Sample output

You should get an output similar to this one:

```
Listening at http://127.0.0.1:3510
{
  "classId": 7314,
  "gameMode": "NONE",
  "lobbyType": "NONE",
  "messageId": "3f6fb54c-333d-43ee-8f98-ccde027c9096",
  "timestamp": 1692700863
}
{
  "classId": 7314,
  "gameMode": "GameMode_AllDraft",
  "lobbyType": "DOTA_lobby_type_name_ranked",
  "messageId": "5722c789-9260-4628-9899-6591bcac7b38",
  "timestamp": 1692700895
}
{
  "classId": 7314,
  "gameMode": "GameMode_AllDraft",
  "lobbyType": "DOTA_lobby_type_name_ranked",
  "gameState": "spectating",
  "players": [
    {
      "steamId": "76561198303934205",
      "accountId": "343668477",
      "name": "159",
      "hero": "tusk",
      "team": 3,
      "role": 0,
      "teamSlot": 1,
      "rank": 80,
      "playerIndex": 2
    },
    {
      "steamId": "76561198105816194",
      "accountId": "145550466",
      "name": "DuBu",
      ...
    }
    ...
  ],
  "messageId": "b7fe2741-b92b-4e2f-ae8c-5e8d83fb0166",
  "timestamp": 1692700895
}
```

# Adding webhooks automatically

For automation, forward the user to the following page: https://skelly.gg/webhook. And provide the query parameters described below.

## Query paramters

---

| Parameter | Requirement | Description                                                                                                                                                             |
| --------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| url       | mandatory   | Your webhook URL                                                                                                                                                        |
| secret    | optional    | String of 10 to 50 characters URL                                                                                                                                       |
| source    | mandatory   | Identify who you are (for the user to recognize you)                                                                                                                    |
| image     | optional    | Image shown on the Skelly page (for the user to recognize you)                                                                                                          |
| game      | mandatory   | The game you want to get real-time data for. To get data for multiple games, you can add this parameter multiple times. The supported games are 'dota2' and 'valorant'. |

---

## Types

```
interface QueryParams {
  url: string;
  source: string;
  image?: string;
  game: "dota2" | "valorant";
}
```

## Example

```
const baseUrl = "https://skelly.gg";

const queryParams: WebhookQueryParams = {
  url: "https://skelly.dotabod.com",
  source: "dotabod",
  image: "https://avatars.githubusercontent.com/u/117842146",
  game: "dota2",
};

const urlParams = new URLSearchParams(queryParams);

const url = `${baseUrl}?${urlParams.toString()}`;

console.log(url);

// https://skelly.gg?url=https%3A%2F%2Fskelly.dotabod.com&source=dotabod&image=https%3A%2F%2Favatars.githubusercontent.com%2Fu%2F117842146&game=dota2
```

# Message authentication

Skelly provides message authentication, which allows you to get signed messages from Skelly. This feature is optional.

If you want messages to be signed, you can add a secret key to your webhook. The secret key should be between 10 and 50 characters long. Skelly then uses this secret to sign massages using HMAC-SHA256 (hash-based message authentication code). The signature is passed in the POST request's header "skelly-signature".

To create secret keys you should consider using a random byte generator meant for cryptography, e.g. crypto.randomBytes(16) to create 16 random bytes. The 16 random bytes could then be converted to a Base64 string and be used as secret key.

# Dota 2

## Post format

Message format for Dota 2 posts:

```
export interface IDota2Post {
  classId: 7314;
  steamId?: string;
  mmr?: number;
  confidence?: number;
  gameMode?: "NONE" | "GameMode_AllPick" | "GameMode_Turbo";
  lobbyType?: string;
  gameState?: "playing" | "idle" | "spectating";
  players?: {
    steamId: string;
    accountId: string;
    name: string;
    hero: string;
    team: 2 | 3;
    role: 0 | 1 | 2 | 4 | 8 | 16 | "other";
    team_slot: 0 | 1 | 2 | 3 | 4;
    player_index: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
  }[];
}
```

## Description of fields

---

| Field      | Type   | Description                                                                |
| ---------- | ------ | -------------------------------------------------------------------------- |
| classId    | number | Game the post refers to (Dota2: 7314, Valorant: 21640)                     |
| steamId    | string | 64-bit Steam ID                                                            |
| mmr        | number | Player's current mmr                                                       |
| confidence | number | Player's mmr confidence level                                              |
| gameMode   | string | The game mode played, e.g. "NONE", "GameMode_AllPick", or "GameMode_Turbo" |
| lobbyType  | string | The lobby type, e.g. "DOTA_lobby_type_name_custom_lobby"                   |
| gameState  | string | Either "playing", "idle" or "spectating"                                   |
| players    | array  | An array of player objects                                                 |

---

## Description of player object

---

| Field       | Type   | Description                                                               |
| ----------- | ------ | ------------------------------------------------------------------------- |
| steamId     | string | 64-bit Steam ID                                                           |
| accountId   | string | 32-bit account ID, also known as friend ID                                |
| name        | string | The player's name                                                         |
| hero        | string | The NPC short name of the player, e.g. legion_commander                   |
| team        | number | The player's team, i.e. 2 for radiant and 3 for dire                      |
| role        | number | Role defined for the player. Possible values: 0, 1, 2, 4, 8, 16, or other |
| teamSlot    | number | A value between 0 and 4                                                   |
| playerIndex | number | A value between 0 and 9 in standard games                                 |

---
