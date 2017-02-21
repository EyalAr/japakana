import tables from "./helpers/tables"
import getRandomElement from "./helpers/getRandomElement"

export const ACTION_NAME = "GENERATE_PRACTICE_ENTRY"

export const run = (data, action) => {
  const alwaysShowAnswer = data.getIn(["settings", "alwaysShowAnswer"])
  const selectedMain = data.getIn(["selection", "main"]).toJS().map(i => ({
    entry: tables.main.getByIndex(i),
    table: "main",
    index: i
  }))
  const selectedDakuten = data.getIn(["selection", "dakuten"]).toJS().map(i => ({
    entry: tables.dakuten.getByIndex(i),
    table: "dakuten",
    index: i
  }))
  const selectedHandakuten = data.getIn(["selection", "handakuten"]).toJS().map(i => ({
    entry: tables.handakuten.getByIndex(i),
    table: "handakuten",
    index: i
  }))
  const candidates = selectedMain.concat(selectedDakuten, selectedHandakuten)
  const current = data.getIn(["practice", "entry"])
  var next = current;
  if (candidates.length < 2) {
    next = candidates[0] || null
  } else {
    while (!next || (current && next.entry === current.entry)) {
      next = getRandomElement(candidates)
    }
  }
  return data
    .setIn(["practice", "timeUp"], false)
    .setIn(["practice", "entry"], next.entry)
    .setIn(["practice", "entryTable"], next.table)
    .setIn(["practice", "entryIndex"], next.index)
    .setIn(["practice", "showSuccess"], false)
    .setIn(["practice", "showFailure"], false)
    .setIn(["practice", "showAnswer"], alwaysShowAnswer)
    .setIn(["practice", "pending"], true)
    .setIn(["practice", "answer"], "")
}
