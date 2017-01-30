import Table from "../Table"

const ROWS = 5
const COLS = 1

const table = [
  ["pa", "ぱ", "パ"],
  ["pi", "ぴ", "ピ"],
  ["pu", "ぷ", "プ"],
  ["pe", "ぺ", "ペ"],
  ["po", "ぽ", "ポ"]
]

export default new Table(table, ROWS, COLS)
export ROWS;
export COLS;
