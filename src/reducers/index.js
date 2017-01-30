import { routerReducer } from "react-router-redux"
import * as toggleRow from "./toggleRow"
import * as toggleCol from "./toggleCol"

const REDUCERS = [
  toggleRow,
  toggleCol
]

export default (state, action) => {
  return {
    routing: routerReducer(state.routing, action),
    data: REDUCERS
      .filter(reducer => reducer.ACTION_NAME === action.type)
      .reduce((data, reducer) => reducer.run(data, action), state.data)
  }
}
