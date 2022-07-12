export type GridProps = {
  cellIndex?: number;
  cellValue?: string;
};

export type CellProps = {
  value: Player;
  onClick: () => void;
};

export enum Player {
  None = 0,
  Player1 = 1,
  Player2 = 2,
}
