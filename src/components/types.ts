
export type GridProps = {
  onResetClick: ()=> void;
  onCellClick : (index : number) => void;
  squares : Player[];
  result : string;
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
