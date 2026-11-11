import { ACTION_CARDS, GAME_PHASES, MODIFIERS, PLAYER_STATUS } from "./constants";

export type Card = 
  | { id: string; type: 'NUMBER'; value: number }
  | { id: string; type: 'MODIFIER'; value: (typeof MODIFIERS)[number] }
  | { id: string; type: 'ACTION'; value: (typeof ACTION_CARDS)[number] };


export interface Player {
  id: string;
  name: string;
  bank: number; //total score banked across rounds
  tableCards: Card[];
  status: (typeof PLAYER_STATUS)[number];
  hasSecondChance: boolean;
}

export interface GameState {
  roomCode: string;
  hostId: string;
  gamePhase: (typeof GAME_PHASES)[number];
  players: Record<string, Player>; // mapping of player IDs to Player objects
  turnOrder: string[]; // array of player IDs in turn order
  currentTurnIndex: number; // index in turnOrder of whose turn it is
  deckCount: number;
  winnerId: string | null;
}

export type ClientMessage =
  | { type: 'JOIN'; playerName: string }
  | { type: 'START_GAME' }
  | { type: 'HIT' }
  | { type: 'STAY' };

  export type ServerMessage =
  | { type: 'STATE_UPDATE'; state: GameState; yourId: string }
  | { type: 'NOTIFICATION'; message: string };