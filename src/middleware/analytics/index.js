import ReactGA from "react-ga"
ReactGA.initialize(__GA_TRACKING_ID__)

const logPageView = pathname => {
  ReactGA.set({ page: pathname })
  ReactGA.pageview(pathname)
}

const analyticsActions = {
  "@@router/LOCATION_CHANGE": action => {
    if (action.payload.action === "POP") logPageView(action.payload.pathname)
  }
}

export default store => next => action => {
  next(action)
  var analyticsAction
  if (analyticsAction = analyticsActions[action.type]) {
    analyticsAction(action)
  }
}
