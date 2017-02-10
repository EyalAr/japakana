import submitAnswer from "../../actions/submitAnswer"

const waitForFurthenInput = (possibleAnswers, partialAnswer) => {
  const maxLength = Math.max.apply(Math, possibleAnswers.map(a => a.length))
  if (partialAnswer.length === maxLength) return false
  if (possibleAnswers.indexOf(partialAnswer) !== -1) return false
  return true
}

export default store => next => action => {
  next(action)
  const data = store.getState().data
  const waitForEnter = data.getIn(["settings", "waitForEnter"])
  const entry = data.getIn(["practice", "entry"])
  if (
    action.type === "UPDATE_ANSWER" &&
    !waitForEnter &&
    !waitForFurthenInput(entry.alts, action.answer.toLowerCase())
  ) {
    store.dispatch(submitAnswer(action.answer))
  }
}
