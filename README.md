# skelly-webhooks

[Skelly](https://skelly.gg) webhooks provide real-time updates for [Dota 2](https://www.dota2.com/) and [Valorant](https://playvalorant.com/).

The API sends the most up-to-date information using the POST method whenever something changes. Note that all fields are optional and some may be empty at the beginning.

This library works with [Node.js](https://nodejs.org/).

# Installation

Installing the package using npm:

```
npm install skelly-webhooks
```

# Dota 2

## Types

Post data for Dota 2:

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

## Fields

---

| Field       | Type   | Description                                                                |
| ----------- | ------ | -------------------------------------------------------------------------- |
| mmr         | number | Player's current mmr                                                       |
| confidence  | number | Player's mmr confidence level                                              |
| gameMode    | string | The game mode played, e.g. "NONE", "GameMode_AllPick", or "GameMode_Turbo" |
| lobbyType   | string | The lobby type, e.g. "DOTA_lobby_type_name_custom_lobby"                   |
| gameState   | string | Either "playing", "idle" or "spectating"                                   |
| players     | array  | An array of player objects                                                 |
| steamId     | string | 64-bit Steam ID                                                            |
| accountId   | string | 32-bit account ID, also known as friend ID                                 |
| name        | string | The player's name                                                          |
| hero        | string | The NPC short name of the player, e.g. legion_commander                    |
| team        | number | The player's team, i.e. 2 for radiant and 3 for dire                       |
| role        | number | Role defined for the player. Possible values: 0, 1, 2, 4, 8, 16, or other  |
| teamSlot    | number | A value between 0 and 4                                                    |
| playerIndex | number | A value between 0 and 9 in standard games                                  |

---

# Adding webhooks

The user can either **manually add** a webhook to their settings or you can forward them to a Skelly page to **automatically add** a webhook.

For automation, forward the user to the following page: https://skelly.gg/webhook

## Query paramters

---

| Parameter | Requirement | Description                                                                                                                                                             |
| --------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| url       | mandatory   | Your webhook URL                                                                                                                                                        |
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

# Local testing

## Download Skelly

Download Skelly for Windows from Overwolf.

https://www.overwolf.com/app/Skelly

## Create account

## Add webhoook

Adding Webhooks to your Skelly account:

## Start server

Running a test server to listen to posts from Skelly:

```
git clone https://github.com/Skelly-gg/skelly-webhooks.git

cd skelly-webhooks

npm install

npm run build

node .\dist\server.js
```

## Get real-time data

Launch Dota 2
Start a match

## Sample output

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
      "hero": "dazzle",
      "team": 3,
      "role": 0,
      "teamSlot": 3,
      "rank": 80,
      "playerIndex": 6
    },
    {
      "steamId": "76561198352830965",
      "accountId": "392565237",
      "name": "TOM.Shelby",
      "hero": "skeleton_king",
      "team": 2,
      "role": 0,
      "teamSlot": 0,
      "rank": 80,
      "playerIndex": 0
    },
    {
      "steamId": "76561198062190283",
      "accountId": "101924555",
      "name": "Wonyoung`",
      "hero": "storm_spirit",
      "team": 3,
      "role": 0,
      "teamSlot": 0,
      "rank": 80,
      "playerIndex": 1
    },
    {
      "steamId": "76561198078842587",
      "accountId": "118576859",
      "name": "alone (без побед челлендж)",
      "hero": "skywrath_mage",
      "team": 3,
      "role": 0,
      "teamSlot": 2,
      "rank": 80,
      "playerIndex": 5
    },
    {
      "steamId": "76561198045038168",
      "accountId": "84772440",
      "name": "idiota",
      "hero": "naga_siren",
      "team": 2,
      "role": 0,
      "teamSlot": 3,
      "rank": 80,
      "playerIndex": 7
    },
    {
      "steamId": "76561198818372174",
      "accountId": "858106446",
      "name": "pill user",
      "hero": "leshrac",
      "team": 2,
      "role": 0,
      "teamSlot": 4,
      "rank": 80,
      "playerIndex": 8
    },
    {
      "steamId": "76561199062890579",
      "accountId": "1102624851",
      "name": "skinny",
      "hero": "rubick",
      "team": 2,
      "role": 0,
      "teamSlot": 1,
      "rank": 80,
      "playerIndex": 3
    },
    {
      "steamId": "76561198377501213",
      "accountId": "417235485",
      "name": "smoking on your top 5 tonight",
      "hero": "phoenix",
      "team": 2,
      "role": 0,
      "teamSlot": 2,
      "rank": 80,
      "playerIndex": 4
    },
    {
      "steamId": "76561198125228597",
      "accountId": "164962869",
      "name": "thief",
      "hero": "gyrocopter",
      "team": 3,
      "role": 0,
      "teamSlot": 4,
      "rank": 80,
      "playerIndex": 9
    }
  ],
  "messageId": "b7fe2741-b92b-4e2f-ae8c-5e8d83fb0166",
  "timestamp": 1692700895
}
```

# Types

etc.

# OLD

# skelly-webhooks

Skelly webhooks for real-time updates on Dota 2 and Valorant.

Description
The Skelly webhooks provide real-time updates for Dota 2 and Valorant.

The API sends the most up-to-date information using the POST method whenever something changes. Note that all fields are optional and may be empty at the beginning.
