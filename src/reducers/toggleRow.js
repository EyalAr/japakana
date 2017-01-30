export const ACTION_NAME = "TOGGLE_ROW"

export const run = (data, action) => {
  return data.setIn(
    ["selection", action.table, "rows"],
    data.getIn(["selection", action.table, "rows"]).add(row)
  )
}
