export const ACTION_NAME = "TOGGLE_COL"

export const run = (data, action) => {
  return data.setIn(
    ["selection", action.table, "cols"],
    data.getIn(["selection", action.table, "cols"]).add(col)
  )
}
