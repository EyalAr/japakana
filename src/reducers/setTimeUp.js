export const ACTION_NAME = "SET_TIME_UP"

export const run = (data, action) => {
  return data
    .setIn(["practice", "timeUp"], action.timeUp)
}
