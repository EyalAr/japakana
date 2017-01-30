import { fromJS } from "immutable"
import storage from "./store/storage"
import { ROWS as MAIN_ROWS, COLS as MAIN_COLS } from "./lib/kana"
import { ROWS as DAKUTEN_ROWS, COLS as DAKUTEN_COLS } from "./lib/kana/dakuten"
import { ROWS as HANDAKUTEN_ROWS, COLS as HANDAKUTEN_COLS } from "./lib/handakuten"

const range = n => {
  const res = []
  for (var i = 0 ; i < n ; i++) res.push(i)
  return res
}

const data = JSON.parse(storage.getItem("data") || false)

export default {
  data: fromJS(data || {
    settings: {
      timer: false,
      multichoice: false,
      mode: "both",
      enter: false
    },
    stats: {
      main: [],
      dakuten: [],
      handakuten: []
    },
    selection: {
      main: range(MAIN_ROWS * MAIN_COLS),
      dakuten: range(DAKUTEN_ROWS * DAKUTEN_COLS),
      handakuten: range(HANDAKUTEN_ROWS * HANDAKUTEN_COLS),
    }
  }).withMutations(data => {
    // convert rows and cols lists to sets (fromJS converts arrays to lists)
    data.setIn(["selection", "main"], data.getIn(["selection", "main"]).toSet())
    data.setIn(["selection", "dakuten"], data.getIn(["selection", "dakuten"]).toSet())
    data.setIn(["selection", "handakuten"], data.getIn(["selection", "handakuten"]).toSet())
  })
}
