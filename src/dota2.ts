export interface IDota2Post {
  steamId?: string;
  classId?: number;
  mmr?: number;
  confidence?: number;
  gameMode?: string;
  lobbyType?: string;
  gameState?: string;
  players?: {
    steamId: string;
    accountId: string;
    name: string;
    hero: string; // npc short name
    team: number;
    role: number;
    teamSlot: number;
    playerIndex: number;
  }[];
}
