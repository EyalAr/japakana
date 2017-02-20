export const ACTION_NAME = "TOGGLE_ANSWER"

export const run = (data, action) => {
  const allowRevealAnswer = data.getIn(["settings", "allowRevealAnswer"])
  return data.setIn(
    ["practice", "showAnswer"], allowRevealAnswer && action.show
  )
}
