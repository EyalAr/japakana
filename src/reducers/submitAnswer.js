export const ACTION_NAME = "SUBMIT_ANSWER"

export const run = (data, action) => {
  const clearAnswerAfterFailure = data.getIn(["settings", "clearAnswerAfterFailure"])
  const retryAfterFailure = data.getIn(["settings", "retryAfterFailure"])
  const entry = data.getIn(["practice", "entry"])
  const success = entry.alts.indexOf(action.answer.toLowerCase()) !== -1
  return data
    .setIn(["practice", "showSuccess"], success)
    .setIn(["practice", "showFailure"], !success)
    .setIn(["practice", "pending"], !success && retryAfterFailure)
}
