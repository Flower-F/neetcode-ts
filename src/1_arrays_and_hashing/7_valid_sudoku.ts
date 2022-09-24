// https://leetcode.cn/problems/valid-sudoku/

export function isValidSudoku(board: string[][]): boolean {
  const rows = new Array(9).fill(0).map(() => new Array<number>(9).fill(0));
  const columns = new Array(9).fill(0).map(() => new Array<number>(9).fill(0));
  const subboxes = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array<number>(9).fill(0)));

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      const c = board[i][j];
      if (c !== '.') {
        const index = c.charCodeAt(0) - '0'.charCodeAt(0) - 1;
        // 该行出现次数加一
        rows[i][index]++;
        // 该列出现次数加一
        columns[j][index]++;
        // 九宫格内出现次数加一
        subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index]++;
        // 判断是否出现超过一次
        if (rows[i][index] > 1 || columns[j][index] > 1 || subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1) {
          return false;
        }
      }
    }
  }

  return true;
}
