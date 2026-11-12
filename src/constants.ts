export const MODIFIERS = ['+2', '+4', '+6', '+8', '+10', 'x2'] as const;
export const ACTION_CARDS = ['Freeze', 'Flip Three', 'Second Chance'] as const;
export const NUMBER_OF_ACTION_CARD_COPIES = 3 as const;
export const FLIP_7_BONUS_POINTS = 15 as const;
export const FLIP_7_NUM_OF_CARDS = 7 as const;
export const PLAYER_STATUS = ['PLAYING', 'STAYED', 'BUSTED'] as const;
export const GAME_PHASES = ['LOBBY', 'ROUND_ACTIVE', 'ROUND_ENDED', 'GAME_ENDED'] as const;
export const MAX_NUMBER_OF_CARDS = 94;
export const MAX_TOTAL_POINTS = 200;
export const NUMBER_CARD_COUNTS = {
  0: 1,
  1: 1,
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  11: 11,
  12: 12,
} as const;
