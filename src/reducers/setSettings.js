export const ACTION_NAME = "SET_SETTINGS"

export const run = (data, action) => {
  return data
    .mergeIn(["settings"], action.settings)
}
