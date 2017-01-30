import Table from "../Table"

const ROWS = 5
const COLS = 4

const table = [
  ["ba", "ば", "バ"], ["da", "だ", "ダ"]         , ["za", "ざ", "ザ"]          , ["ga", "が", "ガ"],
  ["bi", "び", "ビ"], [["dzi", "di"], "ぢ", "ヂ"], [["ji", "zi"], "じ", "ジ"]  , ["gi", "ぎ", "ギ"],
  ["bu", "ぶ", "ブ"], [["dzu", "du"], "づ", "ヅ"], ["zu", "ず", "ズ"]          , ["gu", "ぐ", "グ"],
  ["be", "べ", "ベ"], ["de", "で", "デ"]         , ["ze", "ぜ", "ゼ"]          , ["ge", "げ", "ゲ"],
  ["bo", "ぼ", "ボ"], ["do", "ど", "ド"]         , ["zo", "ぞ", "ゾ"]          , ["go", "ご", "ゴ"]
]

export default new Table(table, ROWS, COLS)
export ROWS;
export COLS;
