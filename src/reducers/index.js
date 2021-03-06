import { routerReducer } from "react-router-redux"
import * as toggleCol from "./toggleCol"
import * as toggleEntry from "./toggleEntry"
import * as generatePracticeEntry from "./generatePracticeEntry"
import * as updateAnswer from "./updateAnswer"
import * as submitAnswer from "./submitAnswer"
import * as toggleFailureOff from "./toggleFailureOff"
import * as setSettings from "./setSettings"
import * as setTimeUp from "./setTimeUp"
import * as toggleAnswer from "./toggleAnswer"
import * as clearHistory from "./clearHistory"

const REDUCERS = [
  toggleCol,
  toggleEntry,
  generatePracticeEntry,
  updateAnswer,
  submitAnswer,
  toggleFailureOff,
  setSettings,
  setTimeUp,
  toggleAnswer,
  clearHistory
]

export default (state, action) => {
  return {
    routing: routerReducer(state.routing, action),
    data: REDUCERS
      .filter(reducer => reducer.ACTION_NAME === action.type)
      .reduce((data, reducer) => reducer.run(data, action), state.data)
  }
}
