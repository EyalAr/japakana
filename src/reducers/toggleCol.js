import tables from "./helpers/tables"
import determineOp from "./helpers/determineOp"

export const ACTION_NAME = "TOGGLE_COL"

export const run = (data, action) => {
  const table = tables[action.table]
  const indices = table.coords.getIndicesInCol(action.col).filter(i => !table.getByIndex(i).empty)
  const current = data.getIn(["selection", action.table])
  const op = determineOp(current.count(i => {
    return table.coords.isInCol(i, action.col)
  }), indices.length)
  return data.setIn(
    ["selection", action.table],
    current[op](indices)
  )
}
