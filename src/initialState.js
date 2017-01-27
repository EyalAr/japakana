import { Map, List } from "immutable"
import storage from "./store/storage"

const stats = JSON.parse(storage.getItem("stats") || false)
const rows = JSON.parse(storage.getItem("rows") || false)
const cols = JSON.parse(storage.getItem("cols") || false)
const timer = storage.getItem("timer")
const multichoice = storage.getItem("multichoice")
const mode = storage.getItem("mode")
const enter = storage.getItem("enter")

export default {
  data: Map({
    settings: Map({
      timer: timer || false,
      multichoice: multichoice || false,
      mode: mode || "both",
      enter: enter || false
    }),
    stats: Map(stats || {}),
    selection: Map({
      rows: List(rows || [0, 1, 2, 3, 4]),
      cols: List(cols || [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
    })
  })
}
