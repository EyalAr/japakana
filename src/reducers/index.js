import { routerReducer } from "react-router-redux"
import * as toggleRow from "./toggleRow"
import * as toggleCol from "./toggleCol"
import * as toggleEntry from "./toggleEntry"
import * as generatePracticeEntry from "./generatePracticeEntry"

const REDUCERS = [
  toggleRow,
  toggleCol,
  toggleEntry,
  generatePracticeEntry
]

export default (state, action) => {
  return {
    routing: routerReducer(state.routing, action),
    data: REDUCERS
      .filter(reducer => reducer.ACTION_NAME === action.type)
      .reduce((data, reducer) => reducer.run(data, action), state.data)
  }
}
