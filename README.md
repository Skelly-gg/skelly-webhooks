# skelly-app

Skelly webhooks provide real-time updates for Dota 2 and Valorant.

This library works on Node.js.

# Installation

Installing the package using npm:

```
npm install skelly-webhooks
```

# Local testing

## Download Skelly

Download Skelly for Windows from Overwolf.

https://www.overwolf.com/app/Skelly

## Create account

## Add webhoook

Adding Webhooks to your Skelly account:

## Start server

Running a test server to listen to events:

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
