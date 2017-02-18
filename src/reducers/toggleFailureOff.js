export const ACTION_NAME = "TOGGLE_FAILURE_OFF"

export const run = (data, action) => {
  return data.setIn(["practice", "showFailure"], false)
}
