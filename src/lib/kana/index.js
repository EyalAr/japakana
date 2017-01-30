import Table from "../Table"
import transform from "./transform"

const ROWS = 5
const COLS = 11

const table = new Table(transform([
  ["n", "ん", "ン"], ["wa", "わ", "ワ"]       , ["ra", "ら", "ラ"], ["ya", "や", "ヤ"], ["ma", "ま", "マ"], ["ha", "は", "ハ"]        , ["na", "な", "ナ"], ["ta", "た", "タ"]         , ["sa", "さ", "サ"]         , ["ka", "か", "カ"], ["a", "あ", "ア"],
  null             , null                     , ["ri", "り", "リ"], null              , ["mi", "み", "ミ"], ["hi", "ひ", "ヒ"]        , ["ni", "に", "ニ"], [["chi", "ti"], "ち", "チ"], [["shi", "si"], "し", "シ"], ["ki", "き", "キ"], ["i", "い", "イ"],
  null             , null                     , ["ru", "る", "ル"], ["yu", "ゆ", "ユ"], ["mu", "む", "ム"], [["fu", "hu"], "ふ", "フ"], ["nu", "ぬ", "ヌ"], [["tsu", "tu"], "つ", "ツ"], ["su", "す", "ス"]         , ["ku", "く", "ク"], ["u", "う", "ウ"],
  null             , null                     , ["re", "れ", "レ"], null              , ["me", "め", "メ"], ["he", "へ", "ヘ"]        , ["ne", "ね", "ネ"], ["te", "て", "テ"]         , ["se", "せ", "セ"]         , ["ke", "け", "ケ"], ["e", "え", "エ"],
  null             , [["o", "wo"], "を", "ヲ"], ["ro", "ろ", "ロ"], ["yo", "よ", "ヨ"], ["mo", "も", "モ"], ["ho", "ほ", "ホ"]        , ["no", "の", "ノ"], ["to", "と", "ト"]         , ["so", "そ", "ソ"]         , ["ko", "こ", "コ"], ["o", "お", "オ"]
]), ROWS, COLS)

const COORDS = table.coords

export default table
export { ROWS, COLS, COORDS }
