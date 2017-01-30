import Table from "../Table"
import transform from "./transform"

const ROWS = 5
const COLS = 1

const table = new Table(transform([
  ["pa", "ぱ", "パ"],
  ["pi", "ぴ", "ピ"],
  ["pu", "ぷ", "プ"],
  ["pe", "ぺ", "ペ"],
  ["po", "ぽ", "ポ"]
]), ROWS, COLS)

const COORDS = table.coords

export default table
export { ROWS, COLS, COORDS }
