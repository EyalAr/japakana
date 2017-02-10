export const ACTION_NAME = "UPDATE_ANSWER"

export const run = (data, action) => {
  return data.setIn(["practice", "answer"], action.answer)
}
