import { List, Map } from "immutable"

export const ACTION_NAME = "SUBMIT_ANSWER"

export const run = (data, action) => {
  const clearAnswerAfterFailure = data.getIn(["settings", "clearAnswerAfterFailure"])
  const retryAfterFailure = data.getIn(["settings", "retryAfterFailure"])
  const entry = data.getIn(["practice", "entry"])
  const entryTable = data.getIn(["practice", "entryTable"])
  const entryIndex = data.getIn(["practice", "entryIndex"])
  const historyKey = [entryTable, entryIndex].join(":")
  const success = action.answer === null ? false : entry.alts.indexOf(action.answer.toLowerCase()) !== -1
  return data
    .setIn(["practice", "showSuccess"], success)
    .setIn(["practice", "showFailure"], !success)
    .setIn(["practice", "pending"], !success && retryAfterFailure && action.answer !== null)
    .setIn(["practice", "answer"], !success && clearAnswerAfterFailure ? "" : action.answer)
    .setIn(["history", "successCount"], data.getIn(["history", "successCount"]) + (success ? 1 : 0))
    .setIn(["history", "attemptsCount"], data.getIn(["history", "attemptsCount"]) + 1)
    .updateIn(["history", "entries", historyKey], Map({
      attempts: List(),
      successCount: 0,
      attemptsCount: 0
    }), history => {
      return history
        .update("attempts", attempts => attempts.push(action.answer))
        .set("successCount", history.get("successCount") + (success ? 1 : 0))
        .set("attemptsCount", history.get("attemptsCount") + 1)
    })
}
