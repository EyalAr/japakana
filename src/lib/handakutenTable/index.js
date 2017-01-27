import KanaTable from "../KanaTable"

const ROWS = 5
const COLS = 1

const table = [
  ["pa", "ぱ", "パ"],
  ["pi", "ぴ", "ピ"],
  ["pu", "ぷ", "プ"],
  ["pe", "ぺ", "ペ"],
  ["po", "ぽ", "ポ"]
]

export default new KanaTable(table, ROWS, COLS)
