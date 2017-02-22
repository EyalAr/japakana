import ReactGA from "react-ga"
import mainKana from "../../lib/kana"
import dakuten from "../../lib/kana/dakuten"
import handakuten from "../../lib/kana/handakuten"

const tables = {
  "main": mainKana,
  "dakuten": dakuten,
  "handakuten": handakuten
}

ReactGA.initialize(__GA_TRACKING_ID__)

const logPageView = pathname => {
  ReactGA.set({ page: pathname })
  ReactGA.pageview(pathname)
}

const logSetting = (field, value) => {
  ReactGA.event({
    category: "Settings",
    action: field,
    label: String(value)
  })
}

const logSelection = (table, row, col) => {
  const isColumn = row === undefined
  ReactGA.event({
    category: "Selection",
    action: isColumn ? "column" : "entry",
    label: isColumn ? `${table}:${col}` : tables[table].get(row, col).romaji
  })
}

const logAnswer = (entry, attempt, success) => {
  ReactGA.event({
    category: "Answer Attempt",
    action: success ? "success" : "failure",
    label: entry.romaji
  })
}

const logPracticeEntry = entry => {
  ReactGA.event({
    category: "Practice Entry",
    action: "random",
    label: entry.romaji
  })
}

const analyticsActions = {
  "@@router/LOCATION_CHANGE": action => {
    if (action.payload.action === "POP") logPageView(action.payload.pathname)
  },
  "CLEAR_HISTORY": () => logSetting("clearHistory"),
  "SET_SETTINGS": action => {
    Object.keys(action.settings).forEach(field => {
      const value = action.settings[field]
      logSetting(field, value)
    })
  },
  "TOGGLE_COL": action => {
    logSelection(action.table, undefined, action.col)
  },
  "TOGGLE_ENTRY": action => {
    logSelection(action.table, action.row, action.col)
  },
  "SUBMIT_ANSWER": (action, data) => {
    const entry = data.getIn(["practice", "entry"])
    const success = data.getIn(["practice", "showSuccess"])
    const attempt = action.answer
    logAnswer(entry, attempt, success)
  },
  "GENERATE_PRACTICE_ENTRY": (action, data) => {
    const entry = data.getIn(["practice", "entry"])
    logPracticeEntry(entry)
  }
}

export default store => next => action => {
  next(action)
  var analyticsAction
  if (analyticsAction = analyticsActions[action.type]) {
    analyticsAction(action, store.getState().data)
  }
}
