export interface IDota2Post {
  classId?: number;
  steamId?: string;
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
