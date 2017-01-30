import tables from "./helpers/tables"

export const ACTION_NAME = "TOGGLE_ENTRY"

export const run = (data, action) => {
  const i = tables[action.table].coords.toIndex(action.row, action.col)
  const current = data.getIn(["selection", action.table])
  return data.setIn(
    ["selection", action.table],
    current[current.has(i) ? "delete" : "add"](i)
  )
}
