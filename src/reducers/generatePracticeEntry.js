import tables from "./helpers/tables"
import getRandomElement from "./helpers/getRandomElement"

export const ACTION_NAME = "GENERATE_PRACTICE_ENTRY"

export const run = (data, action) => {
  const selectedMain = data.getIn(["selection", "main"]).toJS().map(i => tables.main.getByIndex(i))
  const selectedDakuten = data.getIn(["selection", "dakuten"]).toJS().map(i => tables.dakuten.getByIndex(i))
  const selectedHandakuten = data.getIn(["selection", "handakuten"]).toJS().map(i => tables.handakuten.getByIndex(i))
  const candidates = selectedMain.concat(selectedDakuten, selectedHandakuten)
  const current = data.getIn(["practice", "entry"])
  var next = current;
  if (candidates.length < 2) {
    next = candidates[0] || null
  } else {
    while (next === current) {
      next = getRandomElement(candidates)
    }
  }
  return data
    .setIn(["practice", "timeUp"], false)
    .setIn(["practice", "entry"], next)
    .setIn(["practice", "showSuccess"], false)
    .setIn(["practice", "showFailure"], false)
    .setIn(["practice", "showAnswer"], false)
    .setIn(["practice", "pending"], true)
    .setIn(["practice", "answer"], "")
}
