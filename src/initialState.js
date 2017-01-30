import { fromJS } from "immutable"
import storage from "./store/storage"
import mainKana from "./lib/kana"
import dakuten from "./lib/kana/dakuten"
import handakuten from "./lib/kana/handakuten"

const settings = JSON.parse(storage.getItem("settings") || false)
const stats = JSON.parse(storage.getItem("stats") || false)
const selection = JSON.parse(storage.getItem("selection") || false)

export default {
  data: fromJS({
    settings: settings || {
      timer: false,
      multichoice: false,
      mode: "both",
      enter: false
    },
    stats: stats || {
      main: mainKana.map(() => ({})).vals,
      dakuten: dakuten.map(() => ({})).vals,
      handakuten: handakuten.map(() => ({})).vals
    },
    selection: selection || {
      main: mainKana.map((e, row, col, i) => e.empty ? null : i).vals.filter(e => e !== null),
      dakuten: dakuten.map((e, row, col, i) => e.empty ? null : i).vals.filter(e => e !== null),
      handakuten: handakuten.map((e, row, col, i) => e.empty ? null : i).vals.filter(e => e !== null)
    }
  }).withMutations(data => {
    // convert selection lists to sets (fromJS converts arrays to lists)
    data.setIn(["selection", "main"], data.getIn(["selection", "main"]).toSet())
    data.setIn(["selection", "dakuten"], data.getIn(["selection", "dakuten"]).toSet())
    data.setIn(["selection", "handakuten"], data.getIn(["selection", "handakuten"]).toSet())
  })
}
